-- AlterTable
ALTER TABLE "User" ADD COLUMN     "projectDescription" TEXT,
ADD COLUMN     "projectUrl" TEXT,
ADD COLUMN     "topic" TEXT,
ADD COLUMN     "topicLanguages" TEXT[] DEFAULT ARRAY[]::TEXT[];
