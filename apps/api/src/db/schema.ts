import {
  boolean,
  integer,
  jsonb,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid
} from "drizzle-orm/pg-core";

export const userRoleEnum = pgEnum("user_role", ["admin", "user"]);
export const projectStatusEnum = pgEnum("project_status", ["draft", "published", "archived"]);

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  role: userRoleEnum("role").notNull().default("user"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow()
});

export const projects = pgTable("projects", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  category: text("category").notNull(),
  technologies: text("technologies").array().notNull().default([]),
  githubUrl: text("github_url"),
  liveUrl: text("live_url"),
  featured: boolean("featured").notNull().default(false),
  status: projectStatusEnum("status").notNull().default("draft"),
  completionDate: timestamp("completion_date", { withTimezone: true }),
  deletedAt: timestamp("deleted_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow()
});

export const projectImages = pgTable("project_images", {
  id: uuid("id").defaultRandom().primaryKey(),
  projectId: uuid("project_id").notNull(),
  imageUrl: text("image_url").notNull(),
  displayOrder: integer("display_order").notNull().default(0),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow()
});

export const testimonials = pgTable("testimonials", {
  id: uuid("id").defaultRandom().primaryKey(),
  clientName: text("client_name").notNull(),
  company: text("company").notNull(),
  photo: text("photo"),
  review: text("review").notNull(),
  rating: integer("rating").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow()
});

export const contactMessages = pgTable("contact_messages", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  isRead: boolean("is_read").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow()
});

export const settings = pgTable("settings", {
  id: uuid("id").defaultRandom().primaryKey(),
  companyName: text("company_name").notNull(),
  logo: text("logo"),
  email: text("email").notNull(),
  phone: text("phone"),
  address: text("address"),
  facebook: text("facebook"),
  instagram: text("instagram"),
  linkedin: text("linkedin"),
  twitter: text("twitter"),
  seoTitle: text("seo_title").notNull(),
  seoDescription: text("seo_description").notNull()
});

export const activityLogs = pgTable("activity_logs", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id"),
  action: text("action").notNull(),
  entityType: text("entity_type").notNull(),
  entityId: text("entity_id").notNull(),
  details: jsonb("details").notNull().default({}),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow()
});
