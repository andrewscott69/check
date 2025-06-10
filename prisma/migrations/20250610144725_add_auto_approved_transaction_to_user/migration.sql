-- AlterTable
ALTER TABLE "transactions" ADD COLUMN     "recipientBankAddress" TEXT;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "autoApprovedTransaction" BOOLEAN NOT NULL DEFAULT false;
