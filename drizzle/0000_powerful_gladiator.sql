CREATE TABLE `todos` (
	`id` bigint,
	`title` varchar(30) NOT NULL,
	`description` text NOT NULL,
	`completed` boolean NOT NULL DEFAULT false
);
