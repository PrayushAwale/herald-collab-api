/*
  Warnings:

  - Added the required column `adminid` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adminid` to the `Food_items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "adminid" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Food_items" ADD COLUMN     "adminid" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Food_items" ADD CONSTRAINT "Food_items_adminid_fkey" FOREIGN KEY ("adminid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_adminid_fkey" FOREIGN KEY ("adminid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
