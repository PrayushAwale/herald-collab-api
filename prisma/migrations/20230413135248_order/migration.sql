/*
  Warnings:

  - Added the required column `adminid` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "adminid" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_adminid_fkey" FOREIGN KEY ("adminid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
