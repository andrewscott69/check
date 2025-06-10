import { type NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { transferType, fromAccountId, amount, recipientData, reference, note, scheduledDate } = body

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

    if (sourceAccount.availableBalance < totalAmount) {
      return NextResponse.json({ success: false, error: "Insufficient funds" }, { status: 400 })
    }

    const transactionId = `TXN${Date.now()}${Math.random().toString(36).substr(2, 6).toUpperCase()}`

    
    let initialStatus = "PENDING"
    let adminApprovalStatus = "PENDING_REVIEW"

    if (sourceAccount.user.autoApprovedTransaction) {
      initialStatus = "PROCESSING"
      adminApprovalStatus = "APPROVED"
    } else {
      initialStatus = "PENDING"
      adminApprovalStatus = "PENDING_REVIEW"
    }


    const estimatedArrival = getEstimatedArrival(transferType)

    // Create transaction record
    const transaction = await prisma.transaction.create({
      data: {
        id: transactionId,
        userId: sourceAccount.userId,
        bankAccountId: fromAccountId,
        type: "TRANSFER",
        amount: amount,
        fee: fee,
        status: initialStatus as any,
        currencyType: sourceAccount.currencyType,
        description: `${transferType.charAt(0).toUpperCase() + transferType.slice(1)} transfer to ${recipientData.name}`,
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
        transferType: transferType,
        estimatedArrival: estimatedArrival,
        scheduledDate: scheduledDate === "now" ? new Date() : new Date(scheduledDate),
      },
    })



    // Update account balance (hold the funds)
    await prisma.bankAccount.update({
      where: { id: fromAccountId },
      data: {
        availableBalance: sourceAccount.availableBalance - totalAmount,
        lastActivityAt: new Date(),
      },
    })

    // Create notification
    await createNotification(
      sourceAccount.userId,
      transactionId,
      "TRANSACTION_INITIATED",
      "Transfer Initiated",
      `Your ${transferType} transfer of $${amount.toFixed(2)} to ${recipientData.name} has been initiated and is pending processing.`,
    )

    // Create audit log entry
    await createAuditLog(
      transactionId,
      null,
      "TRANSACTION_CREATED",
      null,
      initialStatus,
      `Transaction created for ${transferType} transfer`,
    )

    // If auto-approved, start processing
    if (initialStatus === "PROCESSING") {
      setTimeout(async () => {
        await processTransaction(transactionId, transferType)
      }, getProcessingDelay(transferType))
    }

    return NextResponse.json({
      success: true,
      transactionId: transactionId,
      message: getStatusMessage(transferType, adminApprovalStatus),
      details: {
        amount: amount,
        fee: fee,
        total: totalAmount,
        transferType: transferType.charAt(0).toUpperCase() + transferType.slice(1),
        recipient: recipientData.name,
        estimatedArrival: estimatedArrival,
        status: initialStatus,
        requiresApproval: adminApprovalStatus === "PENDING_REVIEW",
      },
    })
  } catch (error) {
    console.error("Transfer error:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}

function getEstimatedArrival(transferType: string): string {
  switch (transferType) {
    case "local":
      return "Same day"
    case "international":
      return "1-3 business days"
    case "wire":
      return "1-2 business days"
    default:
      return "Unknown"
  }
}

function getProcessingDelay(transferType: string): number {
  switch (transferType) {
    case "local":
      return 30000 // 30 seconds
    case "international":
      return 120000 // 2 minutes
    case "wire":
      return 60000 // 1 minute
    default:
      return 30000
  }
}

function getStatusMessage(transferType: string, approvalStatus: string): string {
  if (approvalStatus === "PENDING_REVIEW") {
    return `Your ${transferType} transfer is pending review and approval. You will be notified once it's processed.`
  }
  return `Your ${transferType} transfer has been initiated and is being processed.`
}

async function createNotification(userId: string, transactionId: string, type: string, title: string, message: string) {
  console.log(`Notification for user ${userId}: ${title} - ${message}`)
}

async function createAuditLog(
  transactionId: string,
  adminId: string | null,
  action: string,
  previousStatus: string | null,
  newStatus: string,
  notes: string,
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
      await createNotification(
        transaction.userId,
        transactionId,
        "TRANSACTION_COMPLETED",
        "Transfer Completed",
        `Your ${transferType} transfer of $${transaction.amount.toFixed(2)} has been completed successfully.`,
      )
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

