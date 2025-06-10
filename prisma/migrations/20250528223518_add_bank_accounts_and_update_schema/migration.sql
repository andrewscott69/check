/*
  Warnings:

  - The `type` column on the `cards` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `status` column on the `identity_verifications` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `accountType` on the `users` table. All the data in the column will be lost.
  - Changed the type of `documentType` on the `identity_verifications` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `type` on the `verification_tokens` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "BankAccountType" AS ENUM ('CHECKING', 'SAVINGS', 'BUSINESS_CHECKING', 'BUSINESS_SAVINGS', 'MONEY_MARKET', 'CERTIFICATE_OF_DEPOSIT');

-- CreateEnum
CREATE TYPE "BankAccountStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'SUSPENDED', 'CLOSED', 'PENDING_APPROVAL');

-- CreateEnum
CREATE TYPE "DocumentType" AS ENUM ('DRIVERS_LICENSE', 'STATE_ID', 'PASSPORT', 'PASSPORT_CARD');

-- CreateEnum
CREATE TYPE "VerificationStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'EXPIRED');

-- CreateEnum
CREATE TYPE "TokenType" AS ENUM ('EMAIL_VERIFICATION', 'PASSWORD_RESET', 'TWO_FACTOR');

-- CreateEnum
CREATE TYPE "CardType" AS ENUM ('DEBIT', 'CREDIT', 'PREPAID', 'BUSINESS');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "CurrencyType" ADD VALUE 'EUR';
ALTER TYPE "CurrencyType" ADD VALUE 'GBP';

-- AlterEnum
ALTER TYPE "TransactionStatus" ADD VALUE 'PROCESSING';

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "TransactionType" ADD VALUE 'PAYMENT';
ALTER TYPE "TransactionType" ADD VALUE 'REFUND';
ALTER TYPE "TransactionType" ADD VALUE 'INTEREST';
ALTER TYPE "TransactionType" ADD VALUE 'FEE';

-- AlterTable
ALTER TABLE "cards" ADD COLUMN     "bankAccountId" TEXT,
ADD COLUMN     "creditLimit" DOUBLE PRECISION NOT NULL DEFAULT 0,
ALTER COLUMN "currencyType" SET DEFAULT 'USD',
DROP COLUMN "type",
ADD COLUMN     "type" "CardType";

-- AlterTable
ALTER TABLE "identity_verifications" DROP COLUMN "documentType",
ADD COLUMN     "documentType" "DocumentType" NOT NULL,
ALTER COLUMN "backImage" DROP NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "VerificationStatus" NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "transactions" ADD COLUMN     "bankAccountId" TEXT,
ADD COLUMN     "category" TEXT,
ADD COLUMN     "fromAccount" TEXT,
ADD COLUMN     "merchantName" TEXT,
ADD COLUMN     "reference" TEXT,
ADD COLUMN     "toAccount" TEXT,
ALTER COLUMN "currencyType" SET DEFAULT 'USD';

-- AlterTable
ALTER TABLE "user_preferences" ADD COLUMN     "language" TEXT NOT NULL DEFAULT 'en',
ADD COLUMN     "notifications" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "accountType",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "verification_tokens" DROP COLUMN "type",
ADD COLUMN     "type" "TokenType" NOT NULL;

-- CreateTable
CREATE TABLE "bank_accounts" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "accountNumber" TEXT NOT NULL,
    "routingNumber" TEXT NOT NULL DEFAULT '021000021',
    "accountType" "BankAccountType" NOT NULL,
    "accountName" TEXT NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
    "availableBalance" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
    "status" "BankAccountStatus" NOT NULL DEFAULT 'ACTIVE',
    "currencyType" "CurrencyType" NOT NULL DEFAULT 'USD',
    "interestRate" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
    "overdraftLimit" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
    "hasOverdraftProtection" BOOLEAN NOT NULL DEFAULT false,
    "minimumBalance" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
    "openedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "closedAt" TIMESTAMP(3),
    "lastActivityAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bank_accounts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "bank_accounts_accountNumber_key" ON "bank_accounts"("accountNumber");

-- AddForeignKey
ALTER TABLE "bank_accounts" ADD CONSTRAINT "bank_accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cards" ADD CONSTRAINT "cards_bankAccountId_fkey" FOREIGN KEY ("bankAccountId") REFERENCES "bank_accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_bankAccountId_fkey" FOREIGN KEY ("bankAccountId") REFERENCES "bank_accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_preferences" ADD CONSTRAINT "user_preferences_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
