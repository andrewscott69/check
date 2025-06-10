-- AlterTable
ALTER TABLE "addresses" ALTER COLUMN "country" SET DEFAULT 'US';

-- AlterTable
ALTER TABLE "identity_verifications" ADD COLUMN     "rejectionReason" TEXT,
ADD COLUMN     "reviewedAt" TIMESTAMP(3),
ADD COLUMN     "reviewedBy" TEXT;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "accountType" TEXT,
ADD COLUMN     "ssn" TEXT;
