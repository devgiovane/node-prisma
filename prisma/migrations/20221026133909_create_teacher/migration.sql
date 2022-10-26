/*
  Warnings:

  - A unique constraint covering the columns `[teacher_id]` on the table `course` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `teacher_id` to the `course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "course" ADD COLUMN     "teacher_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "teacher" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "teacher_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "teacher_name_key" ON "teacher"("name");

-- CreateIndex
CREATE UNIQUE INDEX "course_teacher_id_key" ON "course"("teacher_id");

-- AddForeignKey
ALTER TABLE "course" ADD CONSTRAINT "course_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
