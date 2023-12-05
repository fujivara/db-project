/*
  Warnings:

  - You are about to drop the column `Permission_id` on the `grant` table. All the data in the column will be lost.
  - You are about to drop the column `Role_id` on the `grant` table. All the data in the column will be lost.
  - Added the required column `permission_id` to the `Grant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role_id` to the `Grant` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `grant` DROP FOREIGN KEY `Grant_Permission_id_fkey`;

-- DropForeignKey
ALTER TABLE `grant` DROP FOREIGN KEY `Grant_Role_id_fkey`;

-- AlterTable
ALTER TABLE `grant` DROP COLUMN `Permission_id`,
    DROP COLUMN `Role_id`,
    ADD COLUMN `permission_id` INTEGER NOT NULL,
    ADD COLUMN `role_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Grant` ADD CONSTRAINT `Grant_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `Role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Grant` ADD CONSTRAINT `Grant_permission_id_fkey` FOREIGN KEY (`permission_id`) REFERENCES `Permission`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
