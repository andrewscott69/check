-- CreateEnum
CREATE TYPE "AdminApprovalStatus" AS ENUM ('PENDING_REVIEW', 'APPROVED', 'REJECTED', 'REQUIRES_ADDITIONAL_INFO');

-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('TRANSACTION_INITIATED', 'TRANSACTION_APPROVED', 'TRANSACTION_REJECTED', 'TRANSACTION_COMPLETED', 'TRANSACTION_FAILED', 'TRANSACTION_PROCESSING', 'REQUIRES_APPROVAL');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "CurrencyType" ADD VALUE 'CAD';
ALTER TYPE "CurrencyType" ADD VALUE 'JPY';

-- AlterEnum
ALTER TYPE "TransactionStatus" ADD VALUE 'UNDER_REVIEW';

-- AlterTable
ALTER TABLE "transactions" ADD COLUMN     "adminApprovalStatus" "AdminApprovalStatus" NOT NULL DEFAULT 'PENDING_REVIEW',
ADD COLUMN     "adminId" TEXT,
ADD COLUMN     "adminNotes" TEXT,
ADD COLUMN     "approvalDate" TIMESTAMP(3),
ADD COLUMN     "completionDate" TIMESTAMP(3),
ADD COLUMN     "estimatedArrival" TEXT,
ADD COLUMN     "iban" TEXT,
ADD COLUMN     "intermediaryBank" TEXT,
ADD COLUMN     "processingDate" TIMESTAMP(3),
ADD COLUMN     "recipientAccount" TEXT,
ADD COLUMN     "recipientBank" TEXT,
ADD COLUMN     "recipientCountry" TEXT,
ADD COLUMN     "recipientName" TEXT,
ADD COLUMN     "routingNumber" TEXT,
ADD COLUMN     "scheduledDate" TIMESTAMP(3),
ADD COLUMN     "swiftCode" TEXT,
ADD COLUMN     "transferType" TEXT;

-- CreateTable
CREATE TABLE "transaction_notifications" (
    "id" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "NotificationType" NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "transaction_notifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transaction_audit_logs" (
    "id" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,
    "adminId" TEXT,
    "action" TEXT NOT NULL,
    "previousStatus" TEXT,
    "newStatus" TEXT,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "transaction_audit_logs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "admins"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction_notifications" ADD CONSTRAINT "transaction_notifications_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "transactions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction_notifications" ADD CONSTRAINT "transaction_notifications_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction_audit_logs" ADD CONSTRAINT "transaction_audit_logs_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "transactions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction_audit_logs" ADD CONSTRAINT "transaction_audit_logs_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "admins"("id") ON DELETE SET NULL ON UPDATE CASCADE;
