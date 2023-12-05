ALTER TABLE `todos` MODIFY COLUMN `id` bigint NOT NULL;--> statement-breakpoint
ALTER TABLE `todos` ADD PRIMARY KEY(`id`);