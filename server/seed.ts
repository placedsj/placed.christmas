import { db } from "./db";
import { testimonials, galleryItems, businessConfig } from "@shared/schema";

async function seed() {
  console.log("Seeding database...");

  // Insert testimonials with updated location references
  await db.insert(testimonials).values([
    {
      name: "Sarah Mitchell",
      location: "Quispamsis",
      rating: "5.0",
      comment: "Absolutely incredible service! They transformed our home into a winter wonderland. The attention to detail and professionalism was outstanding. Highly recommend!",
      serviceType: "Residential Installation",
      featured: true,
    },
    {
      name: "Mike Rodriguez",
      location: "Saint John",
      rating: "5.0",
      comment: "Professional, punctual, and perfect results! They handled our commercial property with expertise and created a display that draws customers. Worth every penny.",
      serviceType: "Commercial Display",
      featured: true,
    },
    {
      name: "Jennifer Chen",
      location: "Rothesay",
      rating: "5.0",
      comment: "From quote to cleanup, everything was seamless. They even programmed our lights to turn on automatically. Our neighbors stop by just to admire our house!",
      serviceType: "Premium Package",
      featured: true,
    },
    {
      name: "David Thompson",
      location: "Quispamsis",
      rating: "4.8",
      comment: "Great work on our holiday display. Very professional team and fair pricing. Will definitely use them again next year.",
      serviceType: "Residential Installation",
      featured: false,
    },
    {
      name: "Lisa Park",
      location: "Saint John",
      rating: "5.0",
      comment: "They made our business look amazing for the holidays. Customers loved the display and it really helped with foot traffic during the season.",
      serviceType: "Commercial Display",
      featured: false,
    }
  ]);

  // Insert gallery items
  await db.insert(galleryItems).values([
    {
      title: "Elegant Roofline Display",
      description: "Warm white LED installation in Quispamsis",
      imageUrl: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      serviceType: "Residential Installation",
      featured: true,
    },
    {
      title: "Commercial Installation",
      description: "Shopping center display in Saint John",
      imageUrl: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      serviceType: "Commercial Display",
      featured: true,
    },
    {
      title: "Festive Tree Wrapping",
      description: "Multi-color LED tree installation in Rothesay",
      imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      serviceType: "Premium Package",
      featured: true,
    },
    {
      title: "Classic Home Display",
      description: "Traditional warm white lights around windows and doors",
      imageUrl: "https://images.unsplash.com/photo-1576531796464-baa1ee2a1e69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      serviceType: "Residential Installation",
      featured: false,
    },
    {
      title: "Pathway Lighting",
      description: "Ground stakes and pathway illumination",
      imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      serviceType: "Landscape Lighting",
      featured: false,
    }
  ]);

  // Insert business configurations
  await db.insert(businessConfig).values([
    {
      businessType: "christmas",
      businessName: "PLACED: Your Christmas Our Hands",
      description: "Professional Christmas light installation and holiday decorating services",
      primaryColor: "#dc2626",
      secondaryColor: "#16a34a",
      contactPhone: "(506) 555-0123",
      contactEmail: "christmas@placed-nb.com",
      serviceAreas: ["Quispamsis", "Saint John", "Rothesay"],
      isActive: true
    },
    {
      businessType: "handbook",
      businessName: "Homeowner's Handbook",
      description: "Essential guides and tips for New Brunswick homeowners",
      primaryColor: "#16a34a",
      secondaryColor: "#dc2626",
      contactPhone: "(506) 555-0123",
      contactEmail: "info@placed-nb.com",
      serviceAreas: ["Quispamsis", "Saint John", "Rothesay", "New Brunswick"],
      isActive: true
    },
    {
      businessType: "roofing",
      businessName: "PLACED: Your Roofing Our Hands",
      description: "Professional roofing services and repairs",
      primaryColor: "#ea580c",
      secondaryColor: "#1f2937",
      contactPhone: "(506) 555-0124",
      contactEmail: "roofing@placed-nb.com",
      serviceAreas: ["Quispamsis", "Saint John", "Rothesay"],
      isActive: false
    },
    {
      businessType: "mechanic",
      businessName: "PLACED: Your Auto Our Hands",
      description: "Reliable automotive repair and maintenance services",
      primaryColor: "#2563eb",
      secondaryColor: "#1f2937",
      contactPhone: "(506) 555-0125",
      contactEmail: "auto@placed-nb.com",
      serviceAreas: ["Quispamsis", "Saint John", "Rothesay"],
      isActive: false
    }
  ]);

  console.log("Database seeded successfully!");
}

seed().catch((error) => {
  console.error("Error seeding database:", error);
  process.exit(1);
});