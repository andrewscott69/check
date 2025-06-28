import { type NextRequest, NextResponse } from "next/server";
import {
  PrismaClient,
  TokenType,
  TransactionStatus,
  AdminApprovalStatus,
} from "@prisma/client";
import { sendEmail } from "@/lib/email";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      transferType,
      fromAccountId,
      amount,
      recipientData,
      reference,
      note,
      scheduledDate,
      status,
    } = body;

    if (!transferType || !fromAccountId || !amount || !recipientData) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const sourceAccount = await prisma.bankAccount.findUnique({
      where: { id: fromAccountId },
      include: { user: true },
    });

    if (!sourceAccount) {
      return NextResponse.json(
        { success: false, error: "Source account not found" },
        { status: 404 }
      );
    }

    const fees = {
      local: 0,
      international: 15,
      wire: 35,
    };

    const fee = fees[transferType as keyof typeof fees] || 0;
    const totalAmount = amount + fee;

    if (
      sourceAccount.availableBalance < totalAmount ||
      sourceAccount.balance < totalAmount
    ) {
      return NextResponse.json(
        { success: false, error: "Insufficient funds" },
        { status: 400 }
      );
    }

    // STEP 1: Handle OTP Verification
    // If transaction not yet verified
if (status !== "verified") {
  const fee = fees[transferType as keyof typeof fees] || 0;
  const totalAmount = amount + fee;

  const estimatedArrival = getEstimatedArrival(transferType);
  const transactionId = `TXN${Date.now()}${Math.random()
    .toString(36)
    .substring(2, 6)
    .toUpperCase()}`;

  const details = {
    amount,
    fee,
    total: totalAmount,
    transferType: capitalize(transferType),
    recipient: recipientData.name,
    estimatedArrival,
    status: "UNVERIFIED",
    requiresApproval: true,
    isApproved: false,
  };

  // If user is NOT auto-approved: return details without creating transaction
  if (!sourceAccount.user.autoApprovedTransaction) {
    return NextResponse.json({
      success: true,
      status: "unverified",
      transactionId,
      message: "Transfer submitted for approval.",
      details,
    });
  }

  // If user IS auto-approved, fall through to transaction creation below
}


    // STEP 2: Proceed with Transaction
    const transactionId = `TXN${Date.now()}${Math.random()
      .toString(36)
      .substring(2, 6)
      .toUpperCase()}`;

    let initialStatus: TransactionStatus = TransactionStatus.PENDING;
    let adminApprovalStatus: AdminApprovalStatus =
      AdminApprovalStatus.PENDING_REVIEW;

    if (sourceAccount.user.autoApprovedTransaction) {
      initialStatus = TransactionStatus.PROCESSING;
      adminApprovalStatus = AdminApprovalStatus.APPROVED;
    }

    const estimatedArrival = getEstimatedArrival(transferType);

    const transaction = await prisma.transaction.create({
      data: {
        id: transactionId,
        userId: sourceAccount.userId,
        bankAccountId: fromAccountId,
        type: "TRANSFER",
        amount,
        fee,
        status: initialStatus,
        currencyType: sourceAccount.currencyType,
        description: `${capitalize(transferType)} transfer to ${recipientData.name}`,
        reference: reference || "",
        fromAccount: sourceAccount.accountNumber,
        toAccount: recipientData.accountNumber || recipientData.iban || "",
        merchantName: recipientData.name,
        category: "Transfer",
        adminApprovalStatus,
        recipientName: recipientData.name,
        recipientAccount:
          recipientData.accountNumber || recipientData.iban || "",
        recipientBank: recipientData.bankName || "",
        recipientCountry: recipientData.country || "US",
        swiftCode: recipientData.swiftCode || "",
        routingNumber: recipientData.routingNumber || "",
        iban: recipientData.iban || "",
        intermediaryBank: recipientData.intermediaryBank || "",
        transferType,
        estimatedArrival,
        scheduledDate:
          scheduledDate === "now"
            ? new Date()
            : new Date(scheduledDate || Date.now()),
      },
    });

    await prisma.$transaction([
      prisma.bankAccount.update({
        where: { id: fromAccountId },
        data: {
          availableBalance: { decrement: totalAmount },
          balance: { decrement: totalAmount },
          lastActivityAt: new Date(),
        },
      }),
      prisma.user.update({
        where: { id: sourceAccount.userId },
        data: {
          totalBalance: { decrement: totalAmount },
        },
      }),
    ]);

    await createNotification(
      sourceAccount.userId,
      transactionId,
      "TRANSACTION_INITIATED",
      "Transfer Initiated",
      `Your ${transferType} transfer of $${amount.toFixed(
        2
      )} to ${recipientData.name} has been initiated.`
    );

    await createAuditLog(
      transactionId,
      null,
      "TRANSACTION_CREATED",
      null,
      initialStatus,
      `Transaction created for ${transferType} transfer`
    );

    if (initialStatus === TransactionStatus.PROCESSING) {
      setTimeout(
        async () => await processTransaction(transactionId, transferType),
        getProcessingDelay(transferType)
      );
    }

    return NextResponse.json({
      success: true,
      transactionId,
      message: getStatusMessage(transferType, adminApprovalStatus),
      details: {
        amount,
        fee,
        total: totalAmount,
        transferType: capitalize(transferType),
        recipient: recipientData.name,
        estimatedArrival,
        status: initialStatus,
        adminApprovalStatus,
        requiresApproval: adminApprovalStatus === AdminApprovalStatus.PENDING_REVIEW,
        isApproved: adminApprovalStatus === AdminApprovalStatus.APPROVED,
      },
    });
  } catch (error) {
    console.error("Transfer error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

// ----------------------
// Helper Functions
// ----------------------

function getEstimatedArrival(transferType: string): string {
  switch (transferType) {
    case "local":
      return "Same day";
    case "international":
      return "1–3 business days";
    case "wire":
      return "1–2 business days";
    default:
      return "Unknown";
  }
}

function getProcessingDelay(transferType: string): number {
  switch (transferType) {
    case "local":
      return 30_000;
    case "international":
      return 120_000;
    case "wire":
      return 60_000;
    default:
      return 30_000;
  }
}

function getStatusMessage(
  transferType: string,
  approvalStatus: AdminApprovalStatus
): string {
  if (approvalStatus === AdminApprovalStatus.PENDING_REVIEW) {
    return `Your ${transferType} transfer is pending review.`;
  }
  return `Your ${transferType} transfer has been initiated.`;
}

function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

async function createNotification(
  userId: string,
  transactionId: string,
  type: string,
  title: string,
  message: string
) {
  console.log(`Notification for user ${userId}: ${title} - ${message}`);
}

async function createAuditLog(
  transactionId: string,
  adminId: string | null,
  action: string,
  previousStatus: string | null,
  newStatus: string,
  notes: string
) {
  console.log(`Audit log: ${action} for transaction ${transactionId}`);
}

async function processTransaction(transactionId: string, transferType: string) {
  try {
    await prisma.transaction.update({
      where: { id: transactionId },
      data: {
        status: TransactionStatus.COMPLETED,
        updatedAt: new Date(),
      },
    });

    const transaction = await prisma.transaction.findUnique({
      where: { id: transactionId },
      include: { user: true },
    });

    if (transaction) {
      const fullName = `${transaction.user.firstName} ${transaction.user.lastName}`;

      await createNotification(
        transaction.userId,
        transactionId,
        "TRANSACTION_COMPLETED",
        "Transfer Completed",
        `Your ${transferType} transfer of $${transaction.amount.toFixed(
          2
        )} has been completed.`
      );

      await sendEmail({
        to: transaction.user.email,
        subject: "Transfer Completed",
        title: "Transfer Successful",
        message: `
          Hello ${fullName},<br /><br />
          Your ${capitalize(
            transferType
          )} transfer of <strong>$${transaction.amount.toFixed(
          2
        )}</strong> to <strong>${
          transaction.recipientName
        }</strong> has been completed.<br /><br />
          <strong>Transaction ID:</strong> ${transaction.id}<br />
          <strong>Total Debited:</strong> $${(
            transaction.amount + transaction.fee
          ).toFixed(2)}<br /><br />
          If you did not authorize this transaction, please contact support immediately.
        `,
        footerNote: "This is an automated message from Silver Crest Bank.",
      });
    }
  } catch (err) {
    console.error("Error finalizing transaction:", err);
    await prisma.transaction.update({
      where: { id: transactionId },
      data: { status: TransactionStatus.FAILED },
    });
  }
}
