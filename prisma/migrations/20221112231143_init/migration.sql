/*
  Warnings:

  - You are about to drop the column `ticker` on the `NotificationTrigger` table. All the data in the column will be lost.
  - Added the required column `triggerDate` to the `NotificationTrigger` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "UserStock_ticker_key";

-- AlterTable
ALTER TABLE "UserStock" ADD COLUMN "stopLoss" REAL;
ALTER TABLE "UserStock" ADD COLUMN "target" REAL;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_NotificationTrigger" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "triggerType" TEXT NOT NULL DEFAULT 'date',
    "triggerDate" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "stockId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "NotificationTrigger_stockId_fkey" FOREIGN KEY ("stockId") REFERENCES "UserStock" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "NotificationTrigger_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_NotificationTrigger" ("createdAt", "id", "stockId", "updatedAt", "userId") SELECT "createdAt", "id", "stockId", "updatedAt", "userId" FROM "NotificationTrigger";
DROP TABLE "NotificationTrigger";
ALTER TABLE "new_NotificationTrigger" RENAME TO "NotificationTrigger";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
