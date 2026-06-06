CREATE TABLE `mp_password_resets` (
	`id` int AUTO_INCREMENT NOT NULL,
	`email` varchar(255) NOT NULL,
	`token` varchar(500) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `mp_password_resets_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_permissions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`description` varchar(255) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `mp_permissions_id` PRIMARY KEY(`id`),
	CONSTRAINT `uk_mp_permissions_name` UNIQUE(`name`)
);
--> statement-breakpoint
CREATE TABLE `mp_roles` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(100) NOT NULL,
	`description` varchar(255) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `mp_roles_id` PRIMARY KEY(`id`),
	CONSTRAINT `uk_mp_roles_name` UNIQUE(`name`)
);
--> statement-breakpoint
CREATE TABLE `mp_roles_to_permissions` (
	`role_id` int NOT NULL,
	`permission_id` int NOT NULL,
	CONSTRAINT `uk_mp_roles_to_permissions` UNIQUE(`role_id`,`permission_id`)
);
--> statement-breakpoint
CREATE TABLE `mp_users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`email` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	`name` varchar(100) NOT NULL,
	`status` varchar(50) NOT NULL,
	`email_verified_at` timestamp,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `mp_users_id` PRIMARY KEY(`id`),
	CONSTRAINT `uk_mp_users_email` UNIQUE(`email`)
);
--> statement-breakpoint
CREATE TABLE `mp_users_to_roles` (
	`user_id` int NOT NULL,
	`role_id` int NOT NULL,
	CONSTRAINT `uk_mp_users_to_roles` UNIQUE(`user_id`,`role_id`)
);
--> statement-breakpoint
CREATE TABLE `mp_audit_logs` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_id` int,
	`action` varchar(100) NOT NULL,
	`entity_type` varchar(100),
	`entity_id` int,
	`metadata` json,
	`ip_address` varchar(50),
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `mp_audit_logs_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_profiles` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_id` int NOT NULL,
	`phone` varchar(50),
	`bio` text,
	`avatar_url` varchar(500),
	`department` varchar(100),
	`municipality` varchar(100),
	`address` varchar(255),
	`website` varchar(500),
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `mp_profiles_id` PRIMARY KEY(`id`),
	CONSTRAINT `uk_mp_profiles_user_id` UNIQUE(`user_id`)
);
--> statement-breakpoint
CREATE TABLE `mp_user_preferences` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_id` int NOT NULL,
	`preferences` json NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `mp_user_preferences_id` PRIMARY KEY(`id`),
	CONSTRAINT `uk_mp_user_prefs_user_id` UNIQUE(`user_id`)
);
--> statement-breakpoint
CREATE TABLE `mp_backoffice_menus` (
	`id` int AUTO_INCREMENT NOT NULL,
	`role_name` varchar(100) NOT NULL,
	`label` varchar(100) NOT NULL,
	`icon` varchar(100),
	`path` varchar(255) NOT NULL,
	`sort_order` int NOT NULL DEFAULT 0,
	`is_active` boolean NOT NULL DEFAULT true,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `mp_backoffice_menus_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_backoffice_widgets` (
	`id` int AUTO_INCREMENT NOT NULL,
	`role_name` varchar(100) NOT NULL,
	`widget_type` varchar(50) NOT NULL,
	`title` varchar(100) NOT NULL,
	`config` json NOT NULL,
	`sort_order` int NOT NULL DEFAULT 0,
	`is_active` boolean NOT NULL DEFAULT true,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `mp_backoffice_widgets_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_attribute_options` (
	`id` int AUTO_INCREMENT NOT NULL,
	`attribute_id` int NOT NULL,
	`value` varchar(100) NOT NULL,
	`label` varchar(100) NOT NULL,
	`sort_order` int NOT NULL DEFAULT 0,
	CONSTRAINT `mp_attribute_options_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_categories` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(100) NOT NULL,
	`slug` varchar(120) NOT NULL,
	`description` text,
	`icon` varchar(100),
	`image_url` varchar(500),
	`is_active` boolean NOT NULL DEFAULT true,
	`sort_order` int NOT NULL DEFAULT 0,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `mp_categories_id` PRIMARY KEY(`id`),
	CONSTRAINT `uk_mp_categories_slug` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `mp_category_attributes` (
	`id` int AUTO_INCREMENT NOT NULL,
	`category_id` int,
	`subcategory_id` int,
	`name` varchar(100) NOT NULL,
	`label` varchar(100) NOT NULL,
	`attribute_type` varchar(30) NOT NULL,
	`unit` varchar(30),
	`is_required` boolean NOT NULL DEFAULT false,
	`is_filter` boolean NOT NULL DEFAULT false,
	`sort_order` int NOT NULL DEFAULT 0,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `mp_category_attributes_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_dynamic_filters` (
	`id` int AUTO_INCREMENT NOT NULL,
	`category_id` int,
	`subcategory_id` int,
	`attribute_id` int,
	`filter_type` varchar(30) NOT NULL,
	`label` varchar(100) NOT NULL,
	`is_active` boolean NOT NULL DEFAULT true,
	`sort_order` int NOT NULL DEFAULT 0,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `mp_dynamic_filters_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_subcategories` (
	`id` int AUTO_INCREMENT NOT NULL,
	`category_id` int NOT NULL,
	`name` varchar(100) NOT NULL,
	`slug` varchar(120) NOT NULL,
	`description` text,
	`icon` varchar(100),
	`is_active` boolean NOT NULL DEFAULT true,
	`sort_order` int NOT NULL DEFAULT 0,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `mp_subcategories_id` PRIMARY KEY(`id`),
	CONSTRAINT `uk_mp_subcategories_slug` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `mp_crop_batches` (
	`id` int AUTO_INCREMENT NOT NULL,
	`product_id` int NOT NULL,
	`batch_code` varchar(50),
	`volume` decimal(12,2) NOT NULL,
	`unit_id` int NOT NULL,
	`price_per_unit` decimal(14,2) NOT NULL,
	`quality` varchar(20),
	`department` varchar(100),
	`municipality` varchar(100),
	`harvest_date` date,
	`available_from` date,
	`available_to` date,
	`status` varchar(20) NOT NULL DEFAULT 'available',
	`notes` text,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `mp_crop_batches_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_product_certifications` (
	`id` int AUTO_INCREMENT NOT NULL,
	`product_id` int NOT NULL,
	`certification_name` varchar(100) NOT NULL,
	`certification_code` varchar(100),
	`issued_by` varchar(100),
	`issued_at` date,
	`expires_at` date,
	`document_url` varchar(500),
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `mp_product_certifications_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_products` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_id` int NOT NULL,
	`category_id` int NOT NULL,
	`subcategory_id` int,
	`name` varchar(255) NOT NULL,
	`description` text,
	`sku` varchar(100),
	`status` varchar(20) NOT NULL DEFAULT 'draft',
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `mp_products_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_quality_specs` (
	`id` int AUTO_INCREMENT NOT NULL,
	`product_id` int NOT NULL,
	`batch_id` int,
	`parameter` varchar(100) NOT NULL,
	`value` varchar(100) NOT NULL,
	`unit` varchar(30),
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `mp_quality_specs_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_units` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(50) NOT NULL,
	`symbol` varchar(20) NOT NULL,
	`description` varchar(100),
	`is_active` boolean NOT NULL DEFAULT true,
	`sort_order` int NOT NULL DEFAULT 0,
	CONSTRAINT `mp_units_id` PRIMARY KEY(`id`),
	CONSTRAINT `uk_mp_units_symbol` UNIQUE(`symbol`)
);
--> statement-breakpoint
CREATE TABLE `mp_gbp_profiles` (
	`id` int AUTO_INCREMENT NOT NULL,
	`store_id` int NOT NULL,
	`business_name` varchar(150) NOT NULL,
	`address` varchar(300),
	`address_reference` varchar(300),
	`latitude` decimal(10,7),
	`longitude` decimal(10,7),
	`postal_code` varchar(20),
	`phone` varchar(30),
	`website` varchar(500),
	`google_place_id` varchar(200),
	`is_location_approximate` boolean NOT NULL DEFAULT true,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `mp_gbp_profiles_id` PRIMARY KEY(`id`),
	CONSTRAINT `uk_mp_gbp_store_id` UNIQUE(`store_id`)
);
--> statement-breakpoint
CREATE TABLE `mp_reviews` (
	`id` int AUTO_INCREMENT NOT NULL,
	`store_id` int NOT NULL,
	`user_id` int NOT NULL,
	`rating` tinyint NOT NULL,
	`comment` text,
	`owner_reply` text,
	`is_verified` boolean NOT NULL DEFAULT false,
	`status` varchar(20) NOT NULL DEFAULT 'pending',
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `mp_reviews_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_store_contacts` (
	`id` int AUTO_INCREMENT NOT NULL,
	`store_id` int NOT NULL,
	`contact_type` varchar(20) NOT NULL,
	`value` varchar(255) NOT NULL,
	`label` varchar(50),
	`is_primary` boolean NOT NULL DEFAULT false,
	`sort_order` int NOT NULL DEFAULT 0,
	CONSTRAINT `mp_store_contacts_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_store_hours` (
	`id` int AUTO_INCREMENT NOT NULL,
	`store_id` int NOT NULL,
	`day_of_week` tinyint NOT NULL,
	`open_time` varchar(5),
	`close_time` varchar(5),
	`is_closed` boolean NOT NULL DEFAULT false,
	CONSTRAINT `mp_store_hours_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_store_media` (
	`id` int AUTO_INCREMENT NOT NULL,
	`store_id` int NOT NULL,
	`media_type` varchar(10) NOT NULL DEFAULT 'image',
	`url` varchar(500) NOT NULL,
	`caption` varchar(200),
	`is_primary` boolean NOT NULL DEFAULT false,
	`sort_order` int NOT NULL DEFAULT 0,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `mp_store_media_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_store_profiles` (
	`id` int AUTO_INCREMENT NOT NULL,
	`store_id` int NOT NULL,
	`tagline` varchar(200),
	`about` text,
	`year_founded` int,
	`specialties` text,
	`certifications` json,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `mp_store_profiles_id` PRIMARY KEY(`id`),
	CONSTRAINT `uk_mp_store_profiles_store_id` UNIQUE(`store_id`)
);
--> statement-breakpoint
CREATE TABLE `mp_stores` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_id` int NOT NULL,
	`role_type` varchar(50) NOT NULL,
	`name` varchar(150) NOT NULL,
	`slug` varchar(170) NOT NULL,
	`description` text,
	`logo_url` varchar(500),
	`banner_url` varchar(500),
	`department` varchar(100),
	`municipality` varchar(100),
	`status` varchar(20) NOT NULL DEFAULT 'pending',
	`is_verified` boolean NOT NULL DEFAULT false,
	`verified_at` timestamp,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `mp_stores_id` PRIMARY KEY(`id`),
	CONSTRAINT `uk_mp_stores_user_id` UNIQUE(`user_id`),
	CONSTRAINT `uk_mp_stores_slug` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `mp_listing_attributes` (
	`id` int AUTO_INCREMENT NOT NULL,
	`listing_id` int NOT NULL,
	`attribute_id` int NOT NULL,
	`value` varchar(500) NOT NULL,
	CONSTRAINT `mp_listing_attributes_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_listing_media` (
	`id` int AUTO_INCREMENT NOT NULL,
	`listing_id` int NOT NULL,
	`media_type` varchar(10) NOT NULL DEFAULT 'image',
	`url` varchar(500) NOT NULL,
	`caption` varchar(200),
	`is_primary` boolean NOT NULL DEFAULT false,
	`sort_order` int NOT NULL DEFAULT 0,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `mp_listing_media_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_listing_statuses` (
	`id` int AUTO_INCREMENT NOT NULL,
	`listing_id` int NOT NULL,
	`from_status` varchar(20),
	`to_status` varchar(20) NOT NULL,
	`reason` text,
	`changed_by_user_id` int,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `mp_listing_statuses_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_listings` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_id` int NOT NULL,
	`store_id` int,
	`category_id` int NOT NULL,
	`subcategory_id` int,
	`product_id` int,
	`title` varchar(255) NOT NULL,
	`description` text,
	`price` decimal(14,2),
	`price_unit` varchar(10) DEFAULT 'COP',
	`listing_type` varchar(20) NOT NULL DEFAULT 'sale',
	`status` varchar(20) NOT NULL DEFAULT 'draft',
	`is_featured` boolean NOT NULL DEFAULT false,
	`featured_until` timestamp,
	`expires_at` timestamp,
	`department` varchar(100),
	`municipality` varchar(100),
	`slug` varchar(300) NOT NULL,
	`view_count` int NOT NULL DEFAULT 0,
	`whatsapp_clicks` int NOT NULL DEFAULT 0,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `mp_listings_id` PRIMARY KEY(`id`),
	CONSTRAINT `uk_mp_listings_slug` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `mp_moderation_queue` (
	`id` int AUTO_INCREMENT NOT NULL,
	`listing_id` int NOT NULL,
	`assigned_to_user_id` int,
	`priority` varchar(10) NOT NULL DEFAULT 'normal',
	`reason` text,
	`status` varchar(20) NOT NULL DEFAULT 'pending',
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `mp_moderation_queue_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_locations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(100) NOT NULL,
	`type` varchar(20) NOT NULL,
	`parent_id` int,
	`code` varchar(10),
	`is_active` boolean NOT NULL DEFAULT true,
	CONSTRAINT `mp_locations_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_search_logs` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_id` int,
	`query` varchar(255),
	`category_id` int,
	`filters` text,
	`result_count` int NOT NULL DEFAULT 0,
	`ip_address` varchar(50),
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `mp_search_logs_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_seo_pages` (
	`id` int AUTO_INCREMENT NOT NULL,
	`entity_type` varchar(20) NOT NULL,
	`entity_id` int NOT NULL,
	`title` varchar(160),
	`description` varchar(320),
	`keywords` varchar(500),
	`canonical_url` varchar(500),
	`og_title` varchar(160),
	`og_description` varchar(320),
	`og_image_url` varchar(500),
	`is_indexable` boolean NOT NULL DEFAULT true,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `mp_seo_pages_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_sitemap_entries` (
	`id` int AUTO_INCREMENT NOT NULL,
	`url` varchar(500) NOT NULL,
	`entity_type` varchar(20),
	`entity_id` int,
	`change_freq` varchar(10) NOT NULL DEFAULT 'weekly',
	`priority` decimal(2,1) NOT NULL DEFAULT '0.5',
	`last_mod` timestamp NOT NULL DEFAULT (now()),
	`is_active` boolean NOT NULL DEFAULT true,
	CONSTRAINT `mp_sitemap_entries_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_favorites` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_id` int NOT NULL,
	`entity_type` varchar(20) NOT NULL,
	`entity_id` int NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `mp_favorites_id` PRIMARY KEY(`id`),
	CONSTRAINT `uk_mp_favorites` UNIQUE(`user_id`,`entity_type`,`entity_id`)
);
--> statement-breakpoint
CREATE TABLE `mp_leads` (
	`id` int AUTO_INCREMENT NOT NULL,
	`owner_id` int NOT NULL,
	`contact_user_id` int,
	`listing_id` int,
	`store_id` int,
	`lead_type` varchar(20) NOT NULL,
	`status` varchar(20) NOT NULL DEFAULT 'new',
	`notes` text,
	`contact_name` varchar(100),
	`contact_phone` varchar(50),
	`contact_email` varchar(255),
	`ip_address` varchar(50),
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `mp_leads_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_recommendations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`base_listing_id` int NOT NULL,
	`recommended_listing_id` int NOT NULL,
	`score` decimal(5,4) NOT NULL DEFAULT '0.5000',
	`reason` varchar(50),
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `mp_recommendations_id` PRIMARY KEY(`id`),
	CONSTRAINT `uk_mp_recommendations` UNIQUE(`base_listing_id`,`recommended_listing_id`)
);
--> statement-breakpoint
CREATE TABLE `mp_reports` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_id` int,
	`entity_type` varchar(20) NOT NULL,
	`entity_id` int NOT NULL,
	`reason` varchar(100) NOT NULL,
	`description` text,
	`status` varchar(20) NOT NULL DEFAULT 'pending',
	`reviewed_by_user_id` int,
	`reviewed_at` timestamp,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `mp_reports_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_whatsapp_clicks` (
	`id` int AUTO_INCREMENT NOT NULL,
	`listing_id` int,
	`store_id` int,
	`user_id` int,
	`ip_address` varchar(50),
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `mp_whatsapp_clicks_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_quote_attachments` (
	`id` int AUTO_INCREMENT NOT NULL,
	`quote_id` int NOT NULL,
	`message_id` int,
	`url` varchar(500) NOT NULL,
	`filename` varchar(255) NOT NULL,
	`file_size` int,
	`uploaded_by_user_id` int NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `mp_quote_attachments_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_quote_items` (
	`id` int AUTO_INCREMENT NOT NULL,
	`quote_id` int NOT NULL,
	`description` varchar(255) NOT NULL,
	`quantity` decimal(12,2) NOT NULL,
	`unit_id` int,
	`unit_price` decimal(14,2),
	`total_price` decimal(14,2),
	`notes` text,
	CONSTRAINT `mp_quote_items_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_quote_messages` (
	`id` int AUTO_INCREMENT NOT NULL,
	`quote_id` int NOT NULL,
	`user_id` int NOT NULL,
	`message` text NOT NULL,
	`is_internal` boolean NOT NULL DEFAULT false,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `mp_quote_messages_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_quote_statuses` (
	`id` int AUTO_INCREMENT NOT NULL,
	`quote_id` int NOT NULL,
	`from_status` varchar(20),
	`to_status` varchar(20) NOT NULL,
	`reason` text,
	`changed_by_user_id` int,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `mp_quote_statuses_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_quotes` (
	`id` int AUTO_INCREMENT NOT NULL,
	`buyer_id` int NOT NULL,
	`seller_id` int NOT NULL,
	`listing_id` int,
	`store_id` int,
	`subject` varchar(255) NOT NULL,
	`status` varchar(20) NOT NULL DEFAULT 'sent',
	`total_amount` decimal(14,2),
	`valid_until` date,
	`buyer_notes` text,
	`seller_notes` text,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `mp_quotes_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_campaigns` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(150) NOT NULL,
	`type` varchar(20) NOT NULL,
	`status` varchar(20) NOT NULL DEFAULT 'draft',
	`description` text,
	`budget` decimal(12,2),
	`start_date` date,
	`end_date` date,
	`created_by_user_id` int NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `mp_campaigns_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_lead_activities` (
	`id` int AUTO_INCREMENT NOT NULL,
	`lead_id` int NOT NULL,
	`user_id` int NOT NULL,
	`activity_type` varchar(20) NOT NULL,
	`description` text,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `mp_lead_activities_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_lead_campaigns` (
	`id` int AUTO_INCREMENT NOT NULL,
	`lead_id` int NOT NULL,
	`campaign_id` int NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `mp_lead_campaigns_id` PRIMARY KEY(`id`),
	CONSTRAINT `uk_mp_lead_campaigns` UNIQUE(`lead_id`,`campaign_id`)
);
--> statement-breakpoint
CREATE TABLE `mp_lead_notes` (
	`id` int AUTO_INCREMENT NOT NULL,
	`lead_id` int NOT NULL,
	`user_id` int NOT NULL,
	`note` text NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `mp_lead_notes_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_ratings` (
	`id` int AUTO_INCREMENT NOT NULL,
	`reviewer_id` int NOT NULL,
	`target_type` varchar(20) NOT NULL,
	`target_id` int NOT NULL,
	`rating` tinyint NOT NULL,
	`comment` text,
	`is_verified_purchase` boolean NOT NULL DEFAULT false,
	`quote_id` int,
	`status` varchar(20) NOT NULL DEFAULT 'pending',
	`owner_reply` text,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `mp_ratings_id` PRIMARY KEY(`id`),
	CONSTRAINT `uk_mp_ratings` UNIQUE(`reviewer_id`,`target_type`,`target_id`)
);
--> statement-breakpoint
CREATE TABLE `mp_reputation_scores` (
	`id` int AUTO_INCREMENT NOT NULL,
	`entity_type` varchar(20) NOT NULL,
	`entity_id` int NOT NULL,
	`total_ratings` int NOT NULL DEFAULT 0,
	`average_rating` decimal(3,2) NOT NULL DEFAULT '0.00',
	`total_reviews` int NOT NULL DEFAULT 0,
	`verification_score` tinyint NOT NULL DEFAULT 0,
	`response_rate` decimal(5,2) NOT NULL DEFAULT '0.00',
	`conversion_rate` decimal(5,2) NOT NULL DEFAULT '0.00',
	`reputation_index` tinyint NOT NULL DEFAULT 0,
	`last_calculated_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `mp_reputation_scores_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_trust_badges` (
	`id` int AUTO_INCREMENT NOT NULL,
	`entity_type` varchar(20) NOT NULL,
	`entity_id` int NOT NULL,
	`badge_type` varchar(40) NOT NULL,
	`issued_by_user_id` int,
	`issued_at` timestamp NOT NULL DEFAULT (now()),
	`expires_at` timestamp,
	`is_active` boolean NOT NULL DEFAULT true,
	CONSTRAINT `mp_trust_badges_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_verification_documents` (
	`id` int AUTO_INCREMENT NOT NULL,
	`verification_request_id` int NOT NULL,
	`document_type` varchar(30) NOT NULL,
	`document_url` varchar(500) NOT NULL,
	`filename` varchar(255) NOT NULL,
	`uploaded_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `mp_verification_documents_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_verification_requests` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_id` int NOT NULL,
	`request_type` varchar(30) NOT NULL,
	`status` varchar(20) NOT NULL DEFAULT 'pending',
	`notes` text,
	`reviewer_notes` text,
	`reviewed_by_user_id` int,
	`reviewed_at` timestamp,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `mp_verification_requests_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_notifications` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_id` int NOT NULL,
	`type` varchar(30) NOT NULL,
	`title` varchar(150) NOT NULL,
	`body` text,
	`entity_type` varchar(20),
	`entity_id` int,
	`is_read` boolean NOT NULL DEFAULT false,
	`read_at` timestamp,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `mp_notifications_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_radar_alerts` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_id` int NOT NULL,
	`name` varchar(150) NOT NULL,
	`status` varchar(20) NOT NULL DEFAULT 'active',
	`notify_email` boolean NOT NULL DEFAULT true,
	`notify_in_app` boolean NOT NULL DEFAULT true,
	`last_triggered_at` timestamp,
	`match_count` int NOT NULL DEFAULT 0,
	`expires_at` timestamp,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `mp_radar_alerts_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_radar_criteria` (
	`id` int AUTO_INCREMENT NOT NULL,
	`alert_id` int NOT NULL,
	`criteria_type` varchar(30) NOT NULL,
	`value` varchar(255) NOT NULL,
	CONSTRAINT `mp_radar_criteria_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_radar_matches` (
	`id` int AUTO_INCREMENT NOT NULL,
	`alert_id` int NOT NULL,
	`listing_id` int NOT NULL,
	`notified` boolean NOT NULL DEFAULT false,
	`matched_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `mp_radar_matches_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_admin_actions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`admin_user_id` int NOT NULL,
	`action_type` varchar(60) NOT NULL,
	`entity_type` varchar(30),
	`entity_id` int,
	`description` text,
	`metadata` json,
	`ip_address` varchar(50),
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `mp_admin_actions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_settings` (
	`id` int AUTO_INCREMENT NOT NULL,
	`key` varchar(100) NOT NULL,
	`value` text NOT NULL,
	`description` varchar(300),
	`is_public` boolean NOT NULL DEFAULT false,
	`updated_by_user_id` int,
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `mp_settings_id` PRIMARY KEY(`id`),
	CONSTRAINT `uk_mp_settings_key` UNIQUE(`key`)
);
--> statement-breakpoint
CREATE TABLE `mp_support_ticket_messages` (
	`id` int AUTO_INCREMENT NOT NULL,
	`ticket_id` int NOT NULL,
	`user_id` int NOT NULL,
	`message` text NOT NULL,
	`is_internal` boolean NOT NULL DEFAULT false,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `mp_support_ticket_messages_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_support_tickets` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_id` int NOT NULL,
	`subject` varchar(255) NOT NULL,
	`category` varchar(20) NOT NULL,
	`status` varchar(20) NOT NULL DEFAULT 'open',
	`priority` varchar(10) NOT NULL DEFAULT 'normal',
	`assigned_to_user_id` int,
	`resolved_at` timestamp,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `mp_support_tickets_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mp_blog_posts` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`slug` varchar(255) NOT NULL,
	`excerpt` text,
	`content` text NOT NULL,
	`image_url` varchar(500),
	`category` varchar(80) NOT NULL DEFAULT 'General',
	`tags` varchar(500),
	`read_time_minutes` int NOT NULL DEFAULT 5,
	`is_published` boolean NOT NULL DEFAULT false,
	`published_at` timestamp,
	`author_id` int NOT NULL,
	`view_count` int NOT NULL DEFAULT 0,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `mp_blog_posts_id` PRIMARY KEY(`id`),
	CONSTRAINT `uk_mp_blog_posts_slug` UNIQUE(`slug`)
);
--> statement-breakpoint
ALTER TABLE `mp_roles_to_permissions` ADD CONSTRAINT `fk_mp_roles_to_permissions_role` FOREIGN KEY (`role_id`) REFERENCES `mp_roles`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_roles_to_permissions` ADD CONSTRAINT `fk_mp_roles_to_permissions_permission` FOREIGN KEY (`permission_id`) REFERENCES `mp_permissions`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_users_to_roles` ADD CONSTRAINT `fk_mp_users_to_roles_user` FOREIGN KEY (`user_id`) REFERENCES `mp_users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_users_to_roles` ADD CONSTRAINT `fk_mp_users_to_roles_role` FOREIGN KEY (`role_id`) REFERENCES `mp_roles`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_profiles` ADD CONSTRAINT `fk_mp_profiles_user` FOREIGN KEY (`user_id`) REFERENCES `mp_users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_user_preferences` ADD CONSTRAINT `fk_mp_user_prefs_user` FOREIGN KEY (`user_id`) REFERENCES `mp_users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_attribute_options` ADD CONSTRAINT `fk_mp_attr_options_attribute` FOREIGN KEY (`attribute_id`) REFERENCES `mp_category_attributes`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_category_attributes` ADD CONSTRAINT `fk_mp_cat_attrs_category` FOREIGN KEY (`category_id`) REFERENCES `mp_categories`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_category_attributes` ADD CONSTRAINT `fk_mp_cat_attrs_subcategory` FOREIGN KEY (`subcategory_id`) REFERENCES `mp_subcategories`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_dynamic_filters` ADD CONSTRAINT `fk_mp_dyn_filters_category` FOREIGN KEY (`category_id`) REFERENCES `mp_categories`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_dynamic_filters` ADD CONSTRAINT `fk_mp_dyn_filters_subcategory` FOREIGN KEY (`subcategory_id`) REFERENCES `mp_subcategories`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_dynamic_filters` ADD CONSTRAINT `fk_mp_dyn_filters_attribute` FOREIGN KEY (`attribute_id`) REFERENCES `mp_category_attributes`(`id`) ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_subcategories` ADD CONSTRAINT `fk_mp_subcategories_category` FOREIGN KEY (`category_id`) REFERENCES `mp_categories`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_crop_batches` ADD CONSTRAINT `fk_mp_crop_batches_product` FOREIGN KEY (`product_id`) REFERENCES `mp_products`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_crop_batches` ADD CONSTRAINT `fk_mp_crop_batches_unit` FOREIGN KEY (`unit_id`) REFERENCES `mp_units`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_product_certifications` ADD CONSTRAINT `fk_mp_product_certs_product` FOREIGN KEY (`product_id`) REFERENCES `mp_products`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_products` ADD CONSTRAINT `fk_mp_products_user` FOREIGN KEY (`user_id`) REFERENCES `mp_users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_products` ADD CONSTRAINT `fk_mp_products_category` FOREIGN KEY (`category_id`) REFERENCES `mp_categories`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_products` ADD CONSTRAINT `fk_mp_products_subcategory` FOREIGN KEY (`subcategory_id`) REFERENCES `mp_subcategories`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_quality_specs` ADD CONSTRAINT `fk_mp_quality_specs_product` FOREIGN KEY (`product_id`) REFERENCES `mp_products`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_quality_specs` ADD CONSTRAINT `fk_mp_quality_specs_batch` FOREIGN KEY (`batch_id`) REFERENCES `mp_crop_batches`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_gbp_profiles` ADD CONSTRAINT `fk_mp_gbp_profiles_store` FOREIGN KEY (`store_id`) REFERENCES `mp_stores`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_reviews` ADD CONSTRAINT `fk_mp_reviews_store` FOREIGN KEY (`store_id`) REFERENCES `mp_stores`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_reviews` ADD CONSTRAINT `fk_mp_reviews_user` FOREIGN KEY (`user_id`) REFERENCES `mp_users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_store_contacts` ADD CONSTRAINT `fk_mp_store_contacts_store` FOREIGN KEY (`store_id`) REFERENCES `mp_stores`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_store_hours` ADD CONSTRAINT `fk_mp_store_hours_store` FOREIGN KEY (`store_id`) REFERENCES `mp_stores`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_store_media` ADD CONSTRAINT `fk_mp_store_media_store` FOREIGN KEY (`store_id`) REFERENCES `mp_stores`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_store_profiles` ADD CONSTRAINT `fk_mp_store_profiles_store` FOREIGN KEY (`store_id`) REFERENCES `mp_stores`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_stores` ADD CONSTRAINT `fk_mp_stores_user` FOREIGN KEY (`user_id`) REFERENCES `mp_users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_listing_attributes` ADD CONSTRAINT `fk_mp_listing_attrs_listing` FOREIGN KEY (`listing_id`) REFERENCES `mp_listings`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_listing_attributes` ADD CONSTRAINT `fk_mp_listing_attrs_attribute` FOREIGN KEY (`attribute_id`) REFERENCES `mp_category_attributes`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_listing_media` ADD CONSTRAINT `fk_mp_listing_media_listing` FOREIGN KEY (`listing_id`) REFERENCES `mp_listings`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_listing_statuses` ADD CONSTRAINT `fk_mp_listing_statuses_listing` FOREIGN KEY (`listing_id`) REFERENCES `mp_listings`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_listings` ADD CONSTRAINT `fk_mp_listings_user` FOREIGN KEY (`user_id`) REFERENCES `mp_users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_listings` ADD CONSTRAINT `fk_mp_listings_store` FOREIGN KEY (`store_id`) REFERENCES `mp_stores`(`id`) ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_listings` ADD CONSTRAINT `fk_mp_listings_category` FOREIGN KEY (`category_id`) REFERENCES `mp_categories`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_listings` ADD CONSTRAINT `fk_mp_listings_subcategory` FOREIGN KEY (`subcategory_id`) REFERENCES `mp_subcategories`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_listings` ADD CONSTRAINT `fk_mp_listings_product` FOREIGN KEY (`product_id`) REFERENCES `mp_products`(`id`) ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_moderation_queue` ADD CONSTRAINT `fk_mp_moderation_listing` FOREIGN KEY (`listing_id`) REFERENCES `mp_listings`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_locations` ADD CONSTRAINT `fk_mp_locations_parent` FOREIGN KEY (`parent_id`) REFERENCES `mp_locations`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_favorites` ADD CONSTRAINT `fk_mp_favorites_user` FOREIGN KEY (`user_id`) REFERENCES `mp_users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_recommendations` ADD CONSTRAINT `fk_mp_recs_base` FOREIGN KEY (`base_listing_id`) REFERENCES `mp_listings`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_recommendations` ADD CONSTRAINT `fk_mp_recs_recommended` FOREIGN KEY (`recommended_listing_id`) REFERENCES `mp_listings`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_quote_attachments` ADD CONSTRAINT `fk_mp_quote_attachments_quote` FOREIGN KEY (`quote_id`) REFERENCES `mp_quotes`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_quote_attachments` ADD CONSTRAINT `fk_mp_quote_attachments_msg` FOREIGN KEY (`message_id`) REFERENCES `mp_quote_messages`(`id`) ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_quote_items` ADD CONSTRAINT `fk_mp_quote_items_quote` FOREIGN KEY (`quote_id`) REFERENCES `mp_quotes`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_quote_items` ADD CONSTRAINT `fk_mp_quote_items_unit` FOREIGN KEY (`unit_id`) REFERENCES `mp_units`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_quote_messages` ADD CONSTRAINT `fk_mp_quote_msgs_quote` FOREIGN KEY (`quote_id`) REFERENCES `mp_quotes`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_quote_messages` ADD CONSTRAINT `fk_mp_quote_msgs_user` FOREIGN KEY (`user_id`) REFERENCES `mp_users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_quote_statuses` ADD CONSTRAINT `fk_mp_quote_statuses_quote` FOREIGN KEY (`quote_id`) REFERENCES `mp_quotes`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_quotes` ADD CONSTRAINT `fk_mp_quotes_buyer` FOREIGN KEY (`buyer_id`) REFERENCES `mp_users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_quotes` ADD CONSTRAINT `fk_mp_quotes_seller` FOREIGN KEY (`seller_id`) REFERENCES `mp_users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_quotes` ADD CONSTRAINT `fk_mp_quotes_listing` FOREIGN KEY (`listing_id`) REFERENCES `mp_listings`(`id`) ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_quotes` ADD CONSTRAINT `fk_mp_quotes_store` FOREIGN KEY (`store_id`) REFERENCES `mp_stores`(`id`) ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_lead_activities` ADD CONSTRAINT `fk_mp_lead_activities_lead` FOREIGN KEY (`lead_id`) REFERENCES `mp_leads`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_lead_activities` ADD CONSTRAINT `fk_mp_lead_activities_user` FOREIGN KEY (`user_id`) REFERENCES `mp_users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_lead_campaigns` ADD CONSTRAINT `fk_mp_lead_campaigns_lead` FOREIGN KEY (`lead_id`) REFERENCES `mp_leads`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_lead_campaigns` ADD CONSTRAINT `fk_mp_lead_campaigns_campaign` FOREIGN KEY (`campaign_id`) REFERENCES `mp_campaigns`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_lead_notes` ADD CONSTRAINT `fk_mp_lead_notes_lead` FOREIGN KEY (`lead_id`) REFERENCES `mp_leads`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_lead_notes` ADD CONSTRAINT `fk_mp_lead_notes_user` FOREIGN KEY (`user_id`) REFERENCES `mp_users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_ratings` ADD CONSTRAINT `fk_mp_ratings_reviewer` FOREIGN KEY (`reviewer_id`) REFERENCES `mp_users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_ratings` ADD CONSTRAINT `fk_mp_ratings_quote` FOREIGN KEY (`quote_id`) REFERENCES `mp_quotes`(`id`) ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_verification_documents` ADD CONSTRAINT `fk_mp_ver_docs_request` FOREIGN KEY (`verification_request_id`) REFERENCES `mp_verification_requests`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_notifications` ADD CONSTRAINT `fk_mp_notifications_user` FOREIGN KEY (`user_id`) REFERENCES `mp_users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_radar_alerts` ADD CONSTRAINT `fk_mp_radar_alerts_user` FOREIGN KEY (`user_id`) REFERENCES `mp_users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_radar_criteria` ADD CONSTRAINT `fk_mp_radar_criteria_alert` FOREIGN KEY (`alert_id`) REFERENCES `mp_radar_alerts`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_radar_matches` ADD CONSTRAINT `fk_mp_radar_matches_alert` FOREIGN KEY (`alert_id`) REFERENCES `mp_radar_alerts`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_radar_matches` ADD CONSTRAINT `fk_mp_radar_matches_listing` FOREIGN KEY (`listing_id`) REFERENCES `mp_listings`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_support_ticket_messages` ADD CONSTRAINT `fk_mp_support_msgs_ticket` FOREIGN KEY (`ticket_id`) REFERENCES `mp_support_tickets`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_support_ticket_messages` ADD CONSTRAINT `fk_mp_support_msgs_user` FOREIGN KEY (`user_id`) REFERENCES `mp_users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_support_tickets` ADD CONSTRAINT `fk_mp_support_tickets_user` FOREIGN KEY (`user_id`) REFERENCES `mp_users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mp_blog_posts` ADD CONSTRAINT `fk_mp_blog_posts_author` FOREIGN KEY (`author_id`) REFERENCES `mp_users`(`id`) ON DELETE no action ON UPDATE no action;