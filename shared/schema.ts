import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, decimal, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const bookings = pgTable("bookings", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  address: text("address"),
  serviceType: text("service_type").notNull(),
  projectDetails: text("project_details"),
  status: text("status").notNull().default("pending"),
  estimatedPrice: decimal("estimated_price", { precision: 10, scale: 2 }),
  paymentStatus: text("payment_status").notNull().default("pending"), // pending, paid, failed, refunded
  paymentIntentId: text("payment_intent_id"),
  stripeCustomerId: text("stripe_customer_id"),
  paidAmount: decimal("paid_amount", { precision: 10, scale: 2 }),
  paymentDate: timestamp("payment_date"),
  automatedBooking: boolean("automated_booking").notNull().default(false),
  createdAt: timestamp("created_at").notNull().default(sql`now()`),
  updatedAt: timestamp("updated_at").notNull().default(sql`now()`),
});

export const testimonials = pgTable("testimonials", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  location: text("location").notNull(),
  rating: decimal("rating", { precision: 2, scale: 1 }).notNull(),
  comment: text("comment").notNull(),
  serviceType: text("service_type").notNull(),
  featured: boolean("featured").notNull().default(false),
  createdAt: timestamp("created_at").notNull().default(sql`now()`),
});

export const galleryItems = pgTable("gallery_items", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description"),
  imageUrl: text("image_url").notNull(),
  serviceType: text("service_type").notNull(),
  featured: boolean("featured").notNull().default(false),
  createdAt: timestamp("created_at").notNull().default(sql`now()`),
});

// Shared media library for all PLACED businesses
export const mediaLibrary = pgTable("media_library", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  filename: text("filename").notNull(),
  originalName: text("original_name").notNull(),
  mimeType: text("mime_type").notNull(),
  size: varchar("size").notNull(),
  url: text("url").notNull(),
  tags: text("tags").array().default([]),
  businessTypes: text("business_types").array().default([]), // ['christmas', 'roofing', 'mechanic', 'handbook']
  uploadedBy: varchar("uploaded_by").references(() => users.id),
  createdAt: timestamp("created_at").notNull().default(sql`now()`),
});

// Business configuration for all PLACED services
export const businessConfig = pgTable("business_config", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  businessType: text("business_type").notNull().unique(), // 'christmas', 'roofing', 'mechanic', 'handbook'
  businessName: text("business_name").notNull(),
  description: text("description"),
  isActive: boolean("is_active").notNull().default(true),
  primaryColor: text("primary_color").default("#dc2626"),
  secondaryColor: text("secondary_color").default("#16a34a"),
  contactPhone: text("contact_phone"),
  contactEmail: text("contact_email"),
  serviceAreas: text("service_areas").array().default([]),
  createdAt: timestamp("created_at").notNull().default(sql`now()`),
  updatedAt: timestamp("updated_at").notNull().default(sql`now()`),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertBookingSchema = createInsertSchema(bookings).omit({
  id: true,
  status: true,
  estimatedPrice: true,
  createdAt: true,
  updatedAt: true,
});

export const insertTestimonialSchema = createInsertSchema(testimonials).omit({
  id: true,
  featured: true,
  createdAt: true,
});

export const insertGalleryItemSchema = createInsertSchema(galleryItems).omit({
  id: true,
  featured: true,
  createdAt: true,
});

export const insertMediaLibrarySchema = createInsertSchema(mediaLibrary).omit({
  id: true,
  createdAt: true,
});

export const insertBusinessConfigSchema = createInsertSchema(businessConfig).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertBooking = z.infer<typeof insertBookingSchema>;
export type Booking = typeof bookings.$inferSelect;
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type Testimonial = typeof testimonials.$inferSelect;
export type InsertGalleryItem = z.infer<typeof insertGalleryItemSchema>;
export type GalleryItem = typeof galleryItems.$inferSelect;
export type InsertMediaLibrary = z.infer<typeof insertMediaLibrarySchema>;
export type MediaLibrary = typeof mediaLibrary.$inferSelect;
export type InsertBusinessConfig = z.infer<typeof insertBusinessConfigSchema>;
export type BusinessConfig = typeof businessConfig.$inferSelect;
