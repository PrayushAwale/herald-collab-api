-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "isBilled" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isServed" BOOLEAN NOT NULL DEFAULT false;
