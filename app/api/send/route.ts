import { type NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import { sendEmail } from "@/lib/email" 

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      transferType,
      fromAccountId,
      amount,
      recipientData,
      reference,
      note,
      scheduledDate,
    } = body

    if (!transferType || !fromAccountId || !amount || !recipientData) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    const sourceAccount = await prisma.bankAccount.findUnique({
      where: { id: fromAccountId },
      include: { user: true },
    })

    if (!sourceAccount) {
      return NextResponse.json({ success: false, error: "Source account not found" }, { status: 404 })
    }

    const fees = {
      local: 0,
      international: 15,
      wire: 35,
    }

    const fee = fees[transferType as keyof typeof fees] || 0
    const totalAmount = amount + fee

    if (
      sourceAccount.availableBalance < totalAmount ||
      sourceAccount.balance < totalAmount
    ) {
      return NextResponse.json({ success: false, error: "Insufficient funds" }, { status: 400 })
    }

    const transactionId = `TXN${Date.now()}${Math.random().toString(36).substr(2, 6).toUpperCase()}`

    let initialStatus = "PENDING"
    let adminApprovalStatus = "PENDING_REVIEW"

    if (sourceAccount.user.autoApprovedTransaction) {
      initialStatus = "PROCESSING"
      adminApprovalStatus = "APPROVED"
    }

    const estimatedArrival = getEstimatedArrival(transferType)

    const transaction = await prisma.transaction.create({
      data: {
        id: transactionId,
        userId: sourceAccount.userId,
        bankAccountId: fromAccountId,
        type: "TRANSFER",
        amount,
        fee,
        status: initialStatus as any,
        currencyType: sourceAccount.currencyType,
        description: `${capitalize(transferType)} transfer to ${recipientData.name}`,
        reference: reference || "",
        fromAccount: sourceAccount.accountNumber,
        toAccount: recipientData.accountNumber || recipientData.iban || "",
        merchantName: recipientData.name,
        category: "Transfer",
        adminApprovalStatus: adminApprovalStatus as any,
        recipientName: recipientData.name,
        recipientAccount: recipientData.accountNumber || recipientData.iban || "",
        recipientBank: recipientData.bankName || "",
        recipientCountry: recipientData.country || "US",
        swiftCode: recipientData.swiftCode || "",
        routingNumber: recipientData.routingNumber || "",
        iban: recipientData.iban || "",
        intermediaryBank: recipientData.intermediaryBank || "",
        transferType,
        estimatedArrival,
        scheduledDate: scheduledDate === "now" ? new Date() : new Date(scheduledDate),
      },
    })

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
    ])

    await createNotification(
      sourceAccount.userId,
      transactionId,
      "TRANSACTION_INITIATED",
      "Transfer Initiated",
      `Your ${transferType} transfer of $${amount.toFixed(2)} to ${recipientData.name} has been initiated and is pending processing.`
    )

    await createAuditLog(
      transactionId,
      null,
      "TRANSACTION_CREATED",
      null,
      initialStatus,
      `Transaction created for ${transferType} transfer`
    )

    if (initialStatus === "PROCESSING") {
      setTimeout(async () => {
        await processTransaction(transactionId, transferType)
      }, getProcessingDelay(transferType))
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
        requiresApproval: adminApprovalStatus === "PENDING_REVIEW",
      },
    })
  } catch (error) {
    console.error("Transfer error:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}

// -------------------- Helper Functions --------------------

function getEstimatedArrival(transferType: string): string {
  switch (transferType) {
    case "local":
      return "Same day"
    case "international":
      return "1–3 business days"
    case "wire":
      return "1–2 business days"
    default:
      return "Unknown"
  }
}

function getProcessingDelay(transferType: string): number {
  switch (transferType) {
    case "local":
      return 30_000
    case "international":
      return 120_000
    case "wire":
      return 60_000
    default:
      return 30_000
  }
}

function getStatusMessage(transferType: string, approvalStatus: string): string {
  if (approvalStatus === "PENDING_REVIEW") {
    return `Your ${transferType} transfer is pending review and approval. You will be notified once it's processed.`
  }
  return `Your ${transferType} transfer has been initiated and is being processed.`
}

function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

async function createNotification(
  userId: string,
  transactionId: string,
  type: string,
  title: string,
  message: string
) {
  console.log(`Notification for user ${userId}: ${title} - ${message}`)
  
}

async function createAuditLog(
  transactionId: string,
  adminId: string | null,
  action: string,
  previousStatus: string | null,
  newStatus: string,
  notes: string
) {
  console.log(`Audit log: ${action} for transaction ${transactionId}`)
  
}



async function processTransaction(transactionId: string, transferType: string) {
  try {
    await prisma.transaction.update({
      where: { id: transactionId },
      data: {
        status: "COMPLETED",
        updatedAt: new Date(),
      },
    })

    const transaction = await prisma.transaction.findUnique({
      where: { id: transactionId },
      include: { user: true },
    })

    if (transaction) {
      // Send in-app notification
      await createNotification(
        transaction.userId,
        transactionId,
        "TRANSACTION_COMPLETED",
        "Transfer Completed",
        `Your ${transferType} transfer of $${transaction.amount.toFixed(2)} has been completed successfully.`
      )

      
      const fullName = `${transaction.user.firstName} ${transaction.user.lastName}`
      const subject = "Debit Alert: Transfer Completed"
      const title = "Transfer Completed Successfully"
      const message = `
        Hello ${fullName},<br /><br />
        Your ${capitalize(transferType)} transfer of <strong>$${transaction.amount.toFixed(
        2
      )}</strong> to <strong>${transaction.recipientName}</strong> has been completed.<br /><br />
        <strong>Transaction ID:</strong> ${transaction.id}<br />
        <strong>Amount:</strong> $${transaction.amount.toFixed(2)}<br />
        <strong>Fee:</strong> $${transaction.fee.toFixed(2)}<br />
        <strong>Total Debited:</strong> $${(transaction.amount + transaction.fee).toFixed(2)}<br />
        <strong>To:</strong> ${transaction.recipientName}<br />
        <strong>Bank:</strong> ${transaction.recipientBank}<br />
        <strong>Reference:</strong> ${transaction.reference || "N/A"}<br /><br />
        If you did not authorize this transaction, please contact us immediately.
      `

      await sendEmail({
        to: transaction.user.email,
        subject,
        title,
        message,
        footerNote: "This is an automated notification from BankApp.",
      })
    }
  } catch (error) {
    console.error("Error processing transaction:", error)

    await prisma.transaction.update({
      where: { id: transactionId },
      data: {
        status: "FAILED",
        updatedAt: new Date(),
      },
    })
  }
}

