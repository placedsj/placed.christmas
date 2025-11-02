import { 
  type User, type InsertUser, 
  type Booking, type InsertBooking, 
  type Testimonial, type InsertTestimonial, 
  type GalleryItem, type InsertGalleryItem,
  type MediaLibrary, type InsertMediaLibrary,
  type BusinessConfig, type InsertBusinessConfig,
  users, bookings, testimonials, galleryItems, mediaLibrary, businessConfig 
} from "@shared/schema";
import { db } from "./db";
import { eq, sql } from "drizzle-orm";

export interface IStorage {
  // User methods
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Booking methods
  getBooking(id: string): Promise<Booking | undefined>;
  getAllBookings(): Promise<Booking[]>;
  getBookingsByEmail(email: string): Promise<Booking[]>;
  getCustomerByEmailAndPhone(email: string, phone: string): Promise<Booking | undefined>;
  createBooking(booking: InsertBooking): Promise<Booking>;
  updateBooking(id: string, data: Partial<Booking>): Promise<Booking | undefined>;
  updateBookingStatus(id: string, status: string): Promise<Booking | undefined>;
  updateBookingPayment(id: string, paymentData: {
    paymentIntentId?: string;
    stripeCustomerId?: string;
    paymentStatus?: string;
    paidAmount?: string;
    paymentDate?: string;
    status?: string;
  }): Promise<Booking | undefined>;
  
  // Testimonial methods
  getAllTestimonials(): Promise<Testimonial[]>;
  getFeaturedTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  
  // Gallery methods
  getAllGalleryItems(): Promise<GalleryItem[]>;
  getFeaturedGalleryItems(): Promise<GalleryItem[]>;
  createGalleryItem(item: InsertGalleryItem): Promise<GalleryItem>;
  
  // Media Library methods (shared across all businesses)
  getAllMediaLibrary(): Promise<MediaLibrary[]>;
  getMediaLibraryByBusinessType(businessType: string): Promise<MediaLibrary[]>;
  createMediaLibrary(media: InsertMediaLibrary): Promise<MediaLibrary>;
  deleteMediaLibrary(id: string): Promise<boolean>;
  
  // Business Config methods
  getAllBusinessConfigs(): Promise<BusinessConfig[]>;
  getBusinessConfig(businessType: string): Promise<BusinessConfig | undefined>;
  createBusinessConfig(config: InsertBusinessConfig): Promise<BusinessConfig>;
  updateBusinessConfig(businessType: string, config: Partial<InsertBusinessConfig>): Promise<BusinessConfig | undefined>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  // Booking methods
  async getBooking(id: string): Promise<Booking | undefined> {
    const [booking] = await db.select().from(bookings).where(eq(bookings.id, id));
    return booking || undefined;
  }

  async getAllBookings(): Promise<Booking[]> {
    return await db.select().from(bookings);
  }

  async getBookingsByEmail(email: string): Promise<Booking[]> {
    return await db.select().from(bookings).where(eq(bookings.email, email));
  }

  async getCustomerByEmailAndPhone(email: string, phone: string): Promise<Booking | undefined> {
    const [customer] = await db.select().from(bookings)
      .where(sql`${bookings.email} = ${email} AND ${bookings.phone} = ${phone}`)
      .limit(1);
    return customer || undefined;
  }

  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const [booking] = await db
      .insert(bookings)
      .values(insertBooking)
      .returning();
    return booking;
  }

  async updateBooking(id: string, data: Partial<Booking>): Promise<Booking | undefined> {
    const [updatedBooking] = await db
      .update(bookings)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(bookings.id, id))
      .returning();
    return updatedBooking || undefined;
  }

  async updateBookingStatus(id: string, status: string): Promise<Booking | undefined> {
    const [booking] = await db
      .update(bookings)
      .set({ status, updatedAt: new Date() })
      .where(eq(bookings.id, id))
      .returning();
    return booking || undefined;
  }

  async updateBookingPayment(id: string, paymentData: {
    paymentIntentId?: string;
    stripeCustomerId?: string;
    paymentStatus?: string;
    paidAmount?: string;
    paymentDate?: string;
    status?: string;
  }): Promise<Booking | undefined> {
    const updateData: any = { updatedAt: new Date() };
    
    if (paymentData.paymentIntentId) updateData.paymentIntentId = paymentData.paymentIntentId;
    if (paymentData.stripeCustomerId) updateData.stripeCustomerId = paymentData.stripeCustomerId;
    if (paymentData.paymentStatus) updateData.paymentStatus = paymentData.paymentStatus;
    if (paymentData.paidAmount) updateData.paidAmount = paymentData.paidAmount;
    if (paymentData.paymentDate) updateData.paymentDate = new Date(paymentData.paymentDate);
    if (paymentData.status) updateData.status = paymentData.status;

    const [booking] = await db
      .update(bookings)
      .set(updateData)
      .where(eq(bookings.id, id))
      .returning();
    return booking || undefined;
  }

  // Testimonial methods
  async getAllTestimonials(): Promise<Testimonial[]> {
    return await db.select().from(testimonials);
  }

  async getFeaturedTestimonials(): Promise<Testimonial[]> {
    return await db.select().from(testimonials).where(eq(testimonials.featured, true));
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const [testimonial] = await db
      .insert(testimonials)
      .values(insertTestimonial)
      .returning();
    return testimonial;
  }

  // Gallery methods
  async getAllGalleryItems(): Promise<GalleryItem[]> {
    return await db.select().from(galleryItems);
  }

  async getFeaturedGalleryItems(): Promise<GalleryItem[]> {
    return await db.select().from(galleryItems).where(eq(galleryItems.featured, true));
  }

  async createGalleryItem(insertGalleryItem: InsertGalleryItem): Promise<GalleryItem> {
    const [galleryItem] = await db
      .insert(galleryItems)
      .values(insertGalleryItem)
      .returning();
    return galleryItem;
  }

  // Media Library methods
  async getAllMediaLibrary(): Promise<MediaLibrary[]> {
    return await db.select().from(mediaLibrary);
  }

  async getMediaLibraryByBusinessType(businessType: string): Promise<MediaLibrary[]> {
    return await db.select().from(mediaLibrary).where(sql`${businessType} = ANY(business_types)`);
  }

  async createMediaLibrary(insertMedia: InsertMediaLibrary): Promise<MediaLibrary> {
    const [media] = await db
      .insert(mediaLibrary)
      .values(insertMedia)
      .returning();
    return media;
  }

  async deleteMediaLibrary(id: string): Promise<boolean> {
    const result = await db.delete(mediaLibrary).where(eq(mediaLibrary.id, id));
    return (result.rowCount ?? 0) > 0;
  }

  // Business Config methods
  async getAllBusinessConfigs(): Promise<BusinessConfig[]> {
    return await db.select().from(businessConfig);
  }

  async getBusinessConfig(businessType: string): Promise<BusinessConfig | undefined> {
    const [config] = await db.select().from(businessConfig).where(eq(businessConfig.businessType, businessType));
    return config || undefined;
  }

  async createBusinessConfig(insertConfig: InsertBusinessConfig): Promise<BusinessConfig> {
    const [config] = await db
      .insert(businessConfig)
      .values(insertConfig)
      .returning();
    return config;
  }

  async updateBusinessConfig(businessType: string, updateConfig: Partial<InsertBusinessConfig>): Promise<BusinessConfig | undefined> {
    const [config] = await db
      .update(businessConfig)
      .set({ ...updateConfig, updatedAt: new Date() })
      .where(eq(businessConfig.businessType, businessType))
      .returning();
    return config || undefined;
  }
}

export const storage = new DatabaseStorage();