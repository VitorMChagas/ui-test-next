-- CreateTable
CREATE TABLE "votes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "positive" INTEGER NOT NULL,
    "negative" INTEGER NOT NULL,
    "celebrityId" TEXT,
    CONSTRAINT "votes_celebrityId_fkey" FOREIGN KEY ("celebrityId") REFERENCES "celebrities" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "celebrities" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "picture" TEXT NOT NULL
);
