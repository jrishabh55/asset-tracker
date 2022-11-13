-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_NotificationTrigger" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "triggerType" TEXT NOT NULL DEFAULT 'DATE',
    "triggerValue" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "stockId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "NotificationTrigger_stockId_fkey" FOREIGN KEY ("stockId") REFERENCES "UserStock" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "NotificationTrigger_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_NotificationTrigger" ("createdAt", "id", "stockId", "triggerType", "triggerValue", "updatedAt", "userId") SELECT "createdAt", "id", "stockId", "triggerType", "triggerValue", "updatedAt", "userId" FROM "NotificationTrigger";
DROP TABLE "NotificationTrigger";
ALTER TABLE "new_NotificationTrigger" RENAME TO "NotificationTrigger";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
