# PLACED: Your Christmas Our Hands - Replit Configuration

## Overview

This is a full-stack web application for "PLACED Santa's Helpers" with the tagline "Your Christmas, Our Hands," a professional Christmas light installation and holiday decorating service based in Quispamsis, New Brunswick. The application provides booking functionality, service showcases, gallery displays, and customer testimonials to help customers schedule holiday decorating services. The project also includes a "Homeowner's Handbook" blog section that serves as an SEO-driven content hub for all PLACED sub-businesses under the "Your Home Our Hands" brand.

## User Preferences

- **Communication Style**: Simple, everyday language
- **Location Focus**: Quispamsis, New Brunswick, serving southern New Brunswick
- **Contact Information**: Phone: (506) 650-2122 or (506) 717-XMAS (9627), Email: contact@placed.life, yourchristmas@placed.life, or santashelpers@placed.ca
- **Business Structure**: "PLACED Santa's Helpers: Your Christmas, Our Hands" operates under the broader "PLACED: Your Home Our Hands" umbrella brand
- **SEO Strategy**: Homeowner's Handbook serves as content hub for all sub-businesses
- **Design Preferences**: 
  - Dark backgrounds (navy blue) to eliminate white-on-white visibility issues
  - Vibrant colors: red, green, blue gradients throughout
  - High contrast bright text on dark backgrounds
  - Transferable design system for use across all apps/websites
  - Consistent headers, footers, buttons, and color schemes
  - ALL CAPS text for headers, footers, buttons, headings, and subheadings
  - Location reference: "QUISPAMSIS AND SURROUNDING COMMUNITIES"
  - Required links: HOMEOWNER'S HANDBOOK → https://hhplaced.replit.app
  - Footer requirement: "BROUGHT TO YOU BY YOUR FRIENDS AT PLACED YOUR HOME OUR HANDS™"
  - 24/7 EMERGENCY SERVICES floating button on every page
  - Collapsible navigation with fewer buttons
  - White/black fonts outlined with grey for visibility
  - Stripe payments and financing mentioned in every footer

## Recent Changes

- **January 2025**: PERFECT TRUCK WRAP HERO! Created custom PLACED.ca truck wrap with Christmas village backdrop, Santa hat driver, extension ladders, and perfect branding hierarchy - "PLACED.ca" center stage with "your christmas, our hands" tagline underneath
- **January 2025**: HERO SECTION REDESIGN! Updated website hero to feature truck wrap image as main visual element with new logo integration
- **January 2025**: COMPREHENSIVE MARKETING SUITE! Generated 18 professional marketing assets for all seasons and platforms
- **January 2025**: LAUNCH COMPLETE! Real photo integration and final branding updates implemented
- **January 2025**: Updated logo collection with three festive Christmas variations (Santa, Gingerbread House, Christmas House)
- **January 2025**: Fresh Christmas light installation gallery with latest project photos integrated
- **January 2025**: Enhanced social media integration with Facebook Open Graph meta tags
- **January 2025**: Complete launch control center at /launch with comprehensive testing dashboard
- **January 2025**: Final SEO optimization and contact verification for Quispamsis, New Brunswick market
- **January 2025**: Successfully migrated from in-memory storage to persistent PostgreSQL database
- **January 2025**: Implemented comprehensive Drizzle ORM integration with full database schema
- **January 2025**: Redesigned website with professional navy/blue/gray business theme (user preferred over Christmas colors)
- **January 2025**: Implemented complete automated booking system with instant pricing calculator
- **January 2025**: Integrated Stripe payment processing for online payments (keys pending from user)
- **January 2025**: Added automated price calculation API endpoints with real-time quotes
- **January 2025**: Created comprehensive payment flow with checkout page and confirmation system
- **January 2025**: Enhanced database schema with payment tracking and automated booking fields
- **January 2025**: Updated all branding to professional business styling while maintaining Quispamsis SEO focus
- **January 2025**: Implemented all major features from Gemini chat design: Ask a Pro, How It Works, Package Builder, Testimonials, and Appointment Scheduler
- **January 2025**: Added vibrant Christmas styling with festive colors, animations, and holiday-themed branding matching user's "make this mother fucker thing pop" request
- **January 2025**: Enhanced navigation with comprehensive page structure including expert consultation, interactive package building, and testimonial showcase
- **January 2025**: Completed comprehensive website refinement with enhanced CSS architecture, professional Google Fonts (Luckiest Guy + Poppins), enhanced hero section with snowfall animations, comprehensive footer with contact details and service areas, enhanced booking form with quote calculator, and enhanced navigation with top contact bar
- **January 2025**: Implemented full Gemini design system with custom CSS variables, festive animations (twinkle, glow, snowfall), professional button styles, and enhanced form styling with uppercase text styling
- **January 2025**: Created modular component architecture with EnhancedHero, EnhancedBookingForm, EnhancedNavigation, and comprehensive Footer components for improved maintainability
- **January 2025**: Developed transferable design system (`design-system.css`) with user's preferred styling: dark backgrounds, vibrant red/green/blue colors, high contrast text, consistent components that can be copied to any project
- **January 2025**: Created comprehensive TRANSFERABLE_DESIGN_SYSTEM.md with standardized header, footer, CSS variables, button styles, navigation dropdowns, and complete implementation guide for consistent branding across all PLACED websites
- **January 2025**: Created SAMPLE_IMPLEMENTATION_PAULS_ROOFING.md demonstrating complete HTML/CSS/JavaScript implementation of the transferable design system with business-specific customizations while maintaining consistent PLACED branding, navigation structure, and footer requirements

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom holiday theme colors
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **State Management**: React Query (TanStack Query) for server state management
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API**: RESTful API with JSON responses
- **Middleware**: Custom logging and error handling middleware
- **Development**: Hot module replacement via Vite integration

### Data Storage Solutions
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: PostgreSQL (configured for Neon Database)
- **Schema**: Centralized schema definition in `/shared/schema.ts`
- **Migrations**: Drizzle Kit for database migrations
- **Development Storage**: In-memory storage implementation for development/testing

## Key Components

### Database Schema
The application uses four main entities:
- **Users**: Authentication and user management
- **Bookings**: Customer service requests and appointments
- **Testimonials**: Customer reviews with ratings and featured status
- **Gallery Items**: Showcase images of completed installations

### API Endpoints
- `GET /api/testimonials` - Retrieve all customer testimonials
- `GET /api/testimonials/featured` - Retrieve featured testimonials for homepage
- `GET /api/gallery` - Retrieve all gallery items
- `GET /api/gallery/featured` - Retrieve featured gallery items
- `GET /api/bookings` - Retrieve all bookings (admin functionality)
- `POST /api/bookings` - Create new booking requests

### Frontend Pages
- **Home Page**: Hero section, services overview, featured testimonials and gallery
- **Services Page**: Detailed service descriptions and pricing
- **Gallery Page**: Filterable showcase of completed installations
- **Homeowner's Handbook**: SEO-optimized blog section with guides and tips covering Christmas lighting, electrical work, landscape lighting, and property maintenance
- **Booking Page**: Service request form with validation
- **Contact Page**: Contact information and inquiry forms

### UI Component System
- Custom holiday-themed design system with CSS variables
- Reusable components for service cards, testimonial displays, and booking forms
- Responsive design with mobile-first approach
- Accessibility features built into Radix UI components

## Data Flow

1. **User Interaction**: Users browse services and submit booking requests through forms
2. **Form Validation**: Client-side validation using Zod schemas before submission
3. **API Communication**: React Query manages API calls with caching and error handling
4. **Data Persistence**: Booking requests stored in PostgreSQL via Drizzle ORM
5. **Real-time Updates**: Query invalidation ensures fresh data after mutations

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection for Neon Database
- **@tanstack/react-query**: Server state management and caching
- **drizzle-orm**: Type-safe database ORM
- **@hookform/resolvers**: Form validation integration
- **wouter**: Lightweight client-side routing

### UI Dependencies
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library for consistent iconography
- **class-variance-authority**: Component variant management

### Development Dependencies
- **vite**: Build tool and development server
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundling for production

## Deployment Strategy

### Development Environment
- **Local Development**: `npm run dev` starts both frontend and backend with hot reloading
- **Database Setup**: `npm run db:push` applies schema changes to database
- **Type Checking**: `npm run check` validates TypeScript across the entire project

### Production Build
- **Frontend Build**: Vite builds optimized React application to `dist/public`
- **Backend Build**: esbuild bundles server code for Node.js production environment
- **Unified Deployment**: Single `npm start` command serves both frontend and API

### Environment Configuration
- **Database Connection**: Requires `DATABASE_URL` environment variable for PostgreSQL
- **Replit Integration**: Configured for Replit hosting with development banner and error overlay
- **Static Assets**: Frontend assets served from `dist/public` in production

### Key Architectural Decisions

1. **Monorepo Structure**: Frontend (`client/`), backend (`server/`), and shared code (`shared/`) in single repository for easier development and deployment

2. **Type Safety**: Full TypeScript implementation with shared types between frontend and backend, Zod schemas for runtime validation

3. **Database Strategy**: Drizzle ORM chosen for type safety and PostgreSQL compatibility, with fallback in-memory storage for development

4. **UI Consistency**: Shadcn/ui component library provides consistent, accessible components while allowing customization for holiday branding

5. **SEO Optimization**: Dedicated SEO component and metadata management for better search engine visibility

6. **Progressive Enhancement**: Server-side API with client-side enhancements for better user experience and SEO