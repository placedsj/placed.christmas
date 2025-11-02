# Transferable Design System

This design system provides consistent, vibrant styling that can be copied to any project based on user preferences for dark backgrounds, vibrant colors, and high contrast.

## User Preferences Built-In

- **ALL CAPS TEXT**: Headers, footers, buttons, headings, and subheadings are automatically capitalized
- **Location**: "QUISPAMSIS AND SURROUNDING COMMUNITIES" standard text
- **Required Links**: HOME OWNER'S HANDBOOK → https://hhplaced.replit.app in every header/footer
- **Footer Requirements**: "BROUGHT TO YOU BY YOUR FRIENDS AT PLACED YOUR HOME OUR HANDS™" with trademark
- **Admin Portal**: "PLACED OUR HOME OUR HANDS (ADMIN PORTAL)" in navigation/footer
- **Emergency Services**: 24/7 EMERGENCY SERVICES floating button linking to hhplaced.replit.app
- **Payment Info**: Stripe payments and financing available in every footer
- **Text Outline**: White/black fonts get grey outline for better visibility
- **Collapsible Navigation**: Mobile-friendly with fewer buttons in header
- **Contact Info**: (506) 650-2122, (506) 717-XMAS, contact@placed.life, yourchristmas@placed.life, santashelpers@placed.ca

## PLACED Brand Logos

- **Main PLACED Logo**: https://i.ibb.co/KjBZbX5K/placedmainblackwhite.png
- **Christmas/Santa's Helpers**: https://i.ibb.co/dwbSrTvX/placedchristmas1logo.png  
- **Homeowner's Handbook**: https://i.ibb.co/8nKbHVmR/hohb-LOGOBEAUTIFUL.png
- **Sherwood's**: https://i.ibb.co/Nd6J5D5M/Untitled-Project.png
- **Paul's Roofing**: https://i.ibb.co/JF0Pmx2r/pauilsroofing.png

## Files to Copy

1. **`client/src/styles/design-system.css`** - Complete CSS design system
2. **`client/src/components/navigation.tsx`** - Standardized navigation component
3. **`client/src/components/footer.tsx`** - Standardized footer component
4. **This README** - Usage instructions

## Quick Setup

1. Copy `design-system.css` to your new project
2. Import it in your main CSS file:
   ```css
   @import './styles/design-system.css';
   ```
3. Add Google Fonts to your HTML head:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
   ```

## Key Features

- **Dark backgrounds** - No more white-on-white visibility issues
- **Vibrant colors** - Red, green, blue, yellow, purple gradients
- **High contrast text** - Bright colors on dark backgrounds
- **Consistent components** - Headers, buttons, cards, forms
- **Responsive design** - Mobile-first breakpoints
- **Smooth animations** - Glow, twinkle, hover effects

## Core Classes

### Backgrounds
- `bg-gradient-primary` - Dark navy gradient
- `bg-gradient-red-green` - Red to green gradient  
- `bg-gradient-blue-purple` - Blue to purple gradient
- `bg-gradient-rainbow` - Multi-color gradient

### Buttons
- `btn-primary` - Red gradient with yellow border
- `btn-secondary` - Green gradient with purple border
- `btn-outline` - Transparent with yellow border

### Cards
- `card-primary` - Dark background with red border
- `card-secondary` - Dark background with blue border

### Typography
- `heading-hero` - Large display heading with glow
- `heading-section` - Section heading with shadow
- `text-vibrant-red`, `text-vibrant-green`, etc. - Bright text colors

### Navigation
- `nav-primary` - Gradient navigation bar
- `nav-link` - Navigation link with hover effects

### Forms
- `form-input` - Dark input with colored border
- `form-label` - Bright yellow labels

## Usage Examples

### Header
```html
<header class="nav-primary">
  <div class="container-professional">
    <nav class="flex items-center justify-between">
      <h1 class="heading-section text-vibrant-yellow">Your App</h1>
      <div class="flex gap-4">
        <a href="#" class="nav-link">Home</a>
        <a href="#" class="nav-link">About</a>
        <button class="btn-primary">Contact</button>
      </div>
    </nav>
  </div>
</header>
```

### Hero Section
```html
<section class="section-padding bg-gradient-primary">
  <div class="container-professional text-center">
    <h1 class="heading-hero animate-glow mb-6">Welcome to Your App</h1>
    <p class="text-vibrant-green text-xl mb-8">Amazing description here</p>
    <button class="btn-primary">Get Started</button>
  </div>
</section>
```

### Content Section
```html
<section class="section-padding bg-gradient-red-green">
  <div class="container-professional">
    <h2 class="heading-section text-center text-vibrant-yellow mb-12">Our Services</h2>
    <div class="grid md:grid-cols-3 gap-8">
      <div class="card-primary">
        <h3 class="text-vibrant-yellow mb-4">Service 1</h3>
        <p class="text-light">Service description</p>
        <button class="btn-secondary mt-6">Learn More</button>
      </div>
      <!-- More cards... -->
    </div>
  </div>
</section>
```

### Footer
```html
<footer class="footer-primary">
  <div class="container-professional">
    <div class="grid md:grid-cols-3 gap-8 mb-8">
      <div>
        <h3 class="text-vibrant-yellow mb-4">Company</h3>
        <a href="#" class="footer-link">About</a>
        <a href="#" class="footer-link">Contact</a>
      </div>
      <!-- More columns... -->
    </div>
    <div class="text-center text-muted">
      <p>&copy; 2025 Your Company. All rights reserved.</p>
    </div>
  </div>
</footer>
```

### Form
```html
<form class="card-primary max-w-md mx-auto">
  <h3 class="heading-section text-vibrant-red mb-6">Contact Us</h3>
  
  <label class="form-label">Name</label>
  <input type="text" class="form-input mb-4" placeholder="Your Name">
  
  <label class="form-label">Email</label>
  <input type="email" class="form-input mb-6" placeholder="your@email.com">
  
  <button type="submit" class="btn-primary w-full">Send Message</button>
</form>
```

## Color Palette

- **Red**: `#ef4444` (text-vibrant-red)
- **Green**: `#22c55e` (text-vibrant-green)  
- **Blue**: `#3b82f6` (text-vibrant-blue)
- **Yellow**: `#fbbf24` (text-vibrant-yellow)
- **Purple**: `#a855f7` (text-vibrant-purple)
- **Dark Navy**: `#0f172a` (bg-primary)
- **Light Text**: `#f8fafc` (text-light)

## Customization

To customize colors, edit the CSS variables in `:root` section of `design-system.css`:

```css
:root {
  --color-red: #your-red-color;
  --color-green: #your-green-color;
  /* etc... */
}
```

This design system ensures all your apps have consistent, vibrant styling with excellent contrast and no white-on-white visibility issues.