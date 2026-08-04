CREATE TABLE `mp_help_articles` (
	`id` int AUTO_INCREMENT NOT NULL,
	`category_id` int NOT NULL,
	`title` varchar(255) NOT NULL,
	`slug` varchar(255) NOT NULL,
	`excerpt` text,
	`content` text NOT NULL,
	`type` varchar(30) NOT NULL DEFAULT 'faq',
	`is_featured` boolean NOT NULL DEFAULT false,
	`is_published` boolean NOT NULL DEFAULT true,
	`sort_order` int NOT NULL DEFAULT 0,
	`view_count` int NOT NULL DEFAULT 0,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `mp_help_articles_id` PRIMARY KEY(`id`),
	CONSTRAINT `uk_mp_help_articles_slug` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `mp_help_categories` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(100) NOT NULL,
	`slug` varchar(100) NOT NULL,
	`description` text,
	`image_url` varchar(500),
	`icon` varchar(50),
	`sort_order` int NOT NULL DEFAULT 0,
	`is_active` boolean NOT NULL DEFAULT true,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `mp_help_categories_id` PRIMARY KEY(`id`),
	CONSTRAINT `uk_mp_help_categories_slug` UNIQUE(`slug`)
);
--> statement-breakpoint
ALTER TABLE `mp_listings` MODIFY COLUMN `price_unit` varchar(10) DEFAULT 'USD';--> statement-breakpoint
ALTER TABLE `mp_profiles` ADD `document_type` varchar(10);--> statement-breakpoint
ALTER TABLE `mp_profiles` ADD `document_number` varchar(20);--> statement-breakpoint
ALTER TABLE `mp_listings` ADD `latitude` decimal(10,7);--> statement-breakpoint
ALTER TABLE `mp_listings` ADD `longitude` decimal(10,7);--> statement-breakpoint
ALTER TABLE `mp_profiles` ADD CONSTRAINT `uk_mp_profiles_document_number` UNIQUE(`document_number`);--> statement-breakpoint
ALTER TABLE `mp_help_articles` ADD CONSTRAINT `fk_mp_help_articles_category` FOREIGN KEY (`category_id`) REFERENCES `mp_help_categories`(`id`) ON DELETE cascade ON UPDATE no action;