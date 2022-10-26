/*
  Warnings:

  - Added the required column `books_id` to the `course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "course" ADD COLUMN     "books_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "book" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "book_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "book_name_key" ON "book"("name");

-- AddForeignKey
ALTER TABLE "course" ADD CONSTRAINT "course_books_id_fkey" FOREIGN KEY ("books_id") REFERENCES "book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
