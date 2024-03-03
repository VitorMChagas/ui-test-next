/*
  Warnings:

  - Added the required column `last_updated_at` to the `celebrities` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_celebrities" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "picture" TEXT NOT NULL,
    "last_updated_at" TEXT NOT NULL
);
INSERT INTO "new_celebrities" ("category", "description", "id", "name", "picture") SELECT "category", "description", "id", "name", "picture" FROM "celebrities";
DROP TABLE "celebrities";
ALTER TABLE "new_celebrities" RENAME TO "celebrities";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
