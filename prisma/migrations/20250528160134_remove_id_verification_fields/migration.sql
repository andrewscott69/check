/*
  Warnings:

  - You are about to drop the column `backImage` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `documentType` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `frontImage` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `nationality` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `selfieImage` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `ssn` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "backImage",
DROP COLUMN "createdAt",
DROP COLUMN "documentType",
DROP COLUMN "frontImage",
DROP COLUMN "nationality",
DROP COLUMN "selfieImage",
DROP COLUMN "ssn",
DROP COLUMN "updatedAt";
