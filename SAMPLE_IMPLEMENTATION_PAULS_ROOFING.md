# Sample Implementation: Paul's Roofing

This demonstrates how to use the PLACED transferable design system for Paul's Roofing website.

## 1. Main CSS File (styles.css)

```css
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Poppins:wght@400;600;700;900&display=swap');

/* PLACED Design System - Core Variables */
:root {
  /* Brand Colors - Customized for Roofing */
  --primary-red: #dc2626;
  --primary-green: #16a34a;
  --primary-blue: #0891b2; /* Roofing blue */
  --accent-yellow: #facc15;
  
  /* Background Colors */
  --bg-primary: #0f172a;
  --bg-secondary: #1e293b;
  --bg-card: #334155;
  
  /* Text Colors */
  --text-light: #f1f5f9;
  --text-outlined: #ffffff;
  
  /* Gradient Combinations */
  --gradient-festive: linear-gradient(135deg, var(--primary-red) 0%, var(--primary-green) 50%, var(--primary-blue) 100%);
  --gradient-professional: linear-gradient(135deg, #0891b2 0%, #0ea5e9 50%, #16a34a 100%);
}

/* Base Body Styling */
body {
  background: var(--bg-primary);
  color: var(--text-light);
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 0;
}

/* Text Outline Effect for Maximum Visibility */
.text-outlined {
  text-shadow: 
    -1px -1px 0 #666,
    1px -1px 0 #666,
    -1px 1px 0 #666,
    1px 1px 0 #666,
    0 0 3px rgba(0,0,0,0.8);
  font-weight: 700;
}

/* ALL CAPS Styling */
.caps-text {
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;
}

/* Navigation Container */
.nav-container {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  border-bottom: 2px solid #0891b2;
  position: relative;
  z-index: 100;
}

/* Card Styling */
.card-primary {
  background: var(--bg-card);
  border: 1px solid #475569;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
}

.card-professional {
  background: var(--gradient-professional);
  border: 2px solid #0891b2;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 15px 35px rgba(0,0,0,0.4);
}

/* Button Styling */
.btn-primary {
  background: var(--gradient-professional);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.3s ease;
  text-shadow: 0 0 3px rgba(0,0,0,0.8);
  text-decoration: none;
  display: inline-block;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(8, 145, 178, 0.4);
}

.btn-outline {
  background: transparent;
  color: var(--text-light);
  padding: 1rem 2rem;
  border: 2px solid var(--accent-yellow);
  border-radius: 50px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.3s ease;
  text-shadow: 0 0 3px rgba(0,0,0,0.8);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-outline:hover {
  background: var(--accent-yellow);
  color: var(--bg-primary);
  text-shadow: none;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(250, 204, 21, 0.3);
}

/* Navigation Styling */
.nav-link {
  color: var(--text-light);
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
  text-shadow: 
    -1px -1px 0 #666,
    1px -1px 0 #666,
    -1px 1px 0 #666,
    1px 1px 0 #666;
}

.nav-link:hover {
  color: var(--accent-yellow);
  text-shadow: 0 0 8px rgba(250, 204, 21, 0.6);
}

/* Mobile Menu */
.mobile-menu-toggle {
  background: transparent;
  border: none;
  color: var(--text-light);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
}

.nav-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--bg-secondary);
  border-top: 1px solid #475569;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease;
}

.nav-menu.open {
  max-height: 500px;
}

/* Footer Styling */
.footer-container {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  border-top: 2px solid #0891b2;
  margin-top: 4rem;
}

/* Floating Emergency Button */
.emergency-float {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: var(--gradient-professional);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  box-shadow: 0 8px 25px rgba(0,0,0,0.3);
  z-index: 1000;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

/* Form Styling */
.form-input {
  background: var(--bg-secondary);
  border: 2px solid #475569;
  border-radius: 8px;
  padding: 1rem;
  color: var(--text-light);
  font-weight: 600;
  text-transform: uppercase;
  width: 100%;
  box-sizing: border-box;
}

.form-input:focus {
  border-color: var(--accent-yellow);
  outline: none;
  box-shadow: 0 0 0 3px rgba(250, 204, 21, 0.1);
}

.form-label {
  display: block;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
  color: var(--text-light);
}

/* Hero Section */
.hero-section {
  background: var(--gradient-professional);
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero-title {
  font-family: 'Luckiest Guy', cursive;
  font-size: 3.5rem;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--accent-yellow);
  margin-bottom: 2rem;
  font-weight: 700;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .emergency-float {
    bottom: 1rem;
    right: 1rem;
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
}
```

## 2. HTML Structure (index.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Paul's Roofing - Professional Roofing Services | Quispamsis and Surrounding Communities</title>
    <meta name="description" content="Professional roofing services in Quispamsis and surrounding communities. Expert roof installation, repair, and maintenance. Your Home Our Hands.">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Navigation Header -->
    <nav class="nav-container">
        <div style="max-width: 1200px; margin: 0 auto;">
            <div style="display: flex; align-items: center; justify-content: space-between; height: 4rem; padding: 0 1rem;">
                <!-- Logo -->
                <a href="/" style="display: flex; align-items: center; gap: 1rem; text-decoration: none;">
                    <img src="logo-roofing.png" alt="Paul's Roofing Logo" style="height: 3rem; width: auto;">
                    <div style="text-align: center;">
                        <h1 class="text-outlined caps-text" style="font-size: 1.5rem; margin: 0;">
                            PAUL'S ROOFING
                        </h1>
                        <p class="caps-text" style="font-size: 0.8rem; color: #facc15; margin: 0;">
                            YOUR HOME OUR HANDS™
                        </p>
                    </div>
                </a>

                <!-- Desktop Navigation -->
                <div style="display: none; gap: 2rem; align-items: center;" class="desktop-nav">
                    <!-- Home Dropdown -->
                    <div style="position: relative;" class="dropdown">
                        <a href="/" class="nav-link text-outlined" style="display: flex; align-items: center; gap: 0.5rem;">
                            <span>HOME</span>
                            <svg style="width: 1rem; height: 1rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </a>
                        <div class="dropdown-menu" style="position: absolute; top: 100%; left: 0; margin-top: 0.5rem; width: 16rem; background: #1e293b; border: 1px solid #475569; border-radius: 0.5rem; box-shadow: 0 10px 25px rgba(0,0,0,0.3); opacity: 0; visibility: hidden; transition: all 0.3s ease; z-index: 50;">
                            <div style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem;">
                                <a href="/" class="nav-link text-outlined" style="padding: 0.5rem; border-radius: 0.25rem;">LANDING PAGE</a>
                                <a href="/quote" class="nav-link text-outlined" style="padding: 0.5rem; border-radius: 0.25rem;">GET QUOTE</a>
                                <a href="/contact" class="nav-link text-outlined" style="padding: 0.5rem; border-radius: 0.25rem;">CONTACT US</a>
                            </div>
                        </div>
                    </div>

                    <!-- Services Dropdown -->
                    <div style="position: relative;" class="dropdown">
                        <a href="/services" class="nav-link text-outlined" style="display: flex; align-items: center; gap: 0.5rem;">
                            <span>SERVICES</span>
                            <svg style="width: 1rem; height: 1rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </a>
                        <div class="dropdown-menu" style="position: absolute; top: 100%; left: 0; margin-top: 0.5rem; width: 16rem; background: #1e293b; border: 1px solid #475569; border-radius: 0.5rem; box-shadow: 0 10px 25px rgba(0,0,0,0.3); opacity: 0; visibility: hidden; transition: all 0.3s ease; z-index: 50;">
                            <div style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem;">
                                <a href="/services" class="nav-link text-outlined" style="padding: 0.5rem;">ROOF INSTALLATION</a>
                                <a href="/services" class="nav-link text-outlined" style="padding: 0.5rem;">ROOF REPAIR</a>
                                <a href="/services" class="nav-link text-outlined" style="padding: 0.5rem;">MAINTENANCE</a>
                                <a href="/testimonials" class="nav-link text-outlined" style="padding: 0.5rem;">TESTIMONIALS</a>
                                <hr style="border: none; border-top: 1px solid #475569; margin: 0.75rem 0;">
                                <a href="https://hhplaced.replit.app" target="_blank" rel="noopener noreferrer" class="nav-link text-outlined" style="padding: 0.5rem;">HOMEOWNER'S HANDBOOK</a>
                            </div>
                        </div>
                    </div>

                    <!-- Ask Your Neighbours Dropdown -->
                    <div style="position: relative;" class="dropdown">
                        <a href="/ask-your-neighbours" class="nav-link text-outlined" style="display: flex; align-items: center; gap: 0.5rem;">
                            <span>ASK YOUR NEIGHBOURS</span>
                            <svg style="width: 1rem; height: 1rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </a>
                        <div class="dropdown-menu" style="position: absolute; top: 100%; left: 0; margin-top: 0.5rem; width: 16rem; background: #1e293b; border: 1px solid #475569; border-radius: 0.5rem; box-shadow: 0 10px 25px rgba(0,0,0,0.3); opacity: 0; visibility: hidden; transition: all 0.3s ease; z-index: 50;">
                            <div style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem;">
                                <a href="/gallery" class="nav-link text-outlined" style="padding: 0.5rem;">GALLERY</a>
                                <a href="/testimonials" class="nav-link text-outlined" style="padding: 0.5rem;">CUSTOMER REVIEWS</a>
                                <a href="/about" class="nav-link text-outlined" style="padding: 0.5rem;">ABOUT US</a>
                                <hr style="border: none; border-top: 1px solid #475569; margin: 0.75rem 0;">
                                <div style="color: #facc15; font-weight: 700; font-size: 0.875rem; margin-bottom: 0.5rem;">OUR FRIENDS:</div>
                                <a href="https://sherwoodselectrical.replit.app" target="_blank" rel="noopener noreferrer" class="nav-link text-outlined" style="padding: 0.5rem; font-size: 0.875rem;">SHERWOOD'S ELECTRICAL</a>
                                <a href="https://placedchristmas.replit.app" target="_blank" rel="noopener noreferrer" class="nav-link text-outlined" style="padding: 0.5rem; font-size: 0.875rem;">PLACED SANTA'S HELPERS</a>
                            </div>
                        </div>
                    </div>

                    <!-- Contractor Hub Dropdown -->
                    <div style="position: relative;" class="dropdown">
                        <a href="/contractor-hub" class="nav-link text-outlined" style="display: flex; align-items: center; gap: 0.5rem;">
                            <span>CONTRACTOR HUB</span>
                            <svg style="width: 1rem; height: 1rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </a>
                        <div class="dropdown-menu" style="position: absolute; top: 100%; left: 0; margin-top: 0.5rem; width: 20rem; background: #1e293b; border: 1px solid #475569; border-radius: 0.5rem; box-shadow: 0 10px 25px rgba(0,0,0,0.3); opacity: 0; visibility: hidden; transition: all 0.3s ease; z-index: 50;">
                            <div style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem;">
                                <div style="color: #facc15; font-weight: 700; font-size: 0.875rem; margin-bottom: 0.5rem;">ALL OUR WEBSITES:</div>
                                <a href="https://placedyourhomeourhands.replit.app" target="_blank" rel="noopener noreferrer" class="nav-link text-outlined" style="padding: 0.5rem; font-size: 0.875rem;">PLACED YOUR HOME OUR HANDS</a>
                                <a href="https://placedchristmas.replit.app" target="_blank" rel="noopener noreferrer" class="nav-link text-outlined" style="padding: 0.5rem; font-size: 0.875rem;">PLACED SANTA'S HELPERS</a>
                                <a href="https://hhplaced.replit.app" target="_blank" rel="noopener noreferrer" class="nav-link text-outlined" style="padding: 0.5rem; font-size: 0.875rem;">HOMEOWNER'S HANDBOOK</a>
                                <a href="https://sherwoodselectrical.replit.app" target="_blank" rel="noopener noreferrer" class="nav-link text-outlined" style="padding: 0.5rem; font-size: 0.875rem;">SHERWOOD'S ELECTRICAL</a>
                                <a href="https://paulsroofing.replit.app" target="_blank" rel="noopener noreferrer" class="nav-link text-outlined" style="padding: 0.5rem; font-size: 0.875rem;">PAUL'S ROOFING</a>
                                <hr style="border: none; border-top: 1px solid #475569; margin: 0.75rem 0;">
                                <a href="/admin" class="nav-link text-outlined" style="padding: 0.5rem;">ADMIN PORTAL</a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Mobile menu button -->
                <div class="mobile-menu-button" style="display: block;">
                    <button class="mobile-menu-toggle" onclick="toggleMobileMenu()">
                        <span>☰</span>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu -->
            <div id="mobileMenu" class="nav-menu">
                <div style="padding: 1rem; display: flex; flex-direction: column; gap: 1rem;">
                    <a href="/quote" class="btn-outline" style="width: 100%; text-align: center;">
                        GET QUOTE
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero-section">
        <div style="max-width: 1200px; margin: 0 auto;">
            <h1 class="hero-title caps-text text-outlined">
                PAUL'S ROOFING
            </h1>
            <p class="hero-subtitle caps-text">
                PROFESSIONAL ROOFING SERVICES FOR QUISPAMSIS AND SURROUNDING COMMUNITIES
            </p>
            <a href="/quote" class="btn-primary" style="font-size: 1.2rem; padding: 1.5rem 3rem;">
                GET FREE QUOTE
            </a>
        </div>
    </section>

    <!-- Main Content -->
    <main style="max-width: 1200px; margin: 0 auto; padding: 4rem 1rem;">
        <!-- Services Section -->
        <section style="margin-bottom: 4rem;">
            <h2 class="caps-text text-outlined" style="text-align: center; font-size: 2.5rem; margin-bottom: 3rem;">
                OUR ROOFING SERVICES
            </h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                <div class="card-professional">
                    <h3 class="caps-text text-outlined" style="color: white; margin-bottom: 1rem;">ROOF INSTALLATION</h3>
                    <p style="color: #f1f5f9; line-height: 1.6;">Complete roof installation services using premium materials and expert craftsmanship for lasting protection.</p>
                </div>
                <div class="card-professional">
                    <h3 class="caps-text text-outlined" style="color: white; margin-bottom: 1rem;">ROOF REPAIR</h3>
                    <p style="color: #f1f5f9; line-height: 1.6;">Fast and reliable roof repair services to fix leaks, damage, and wear before they become major problems.</p>
                </div>
                <div class="card-professional">
                    <h3 class="caps-text text-outlined" style="color: white; margin-bottom: 1rem;">MAINTENANCE</h3>
                    <p style="color: #f1f5f9; line-height: 1.6;">Regular maintenance programs to extend your roof's lifespan and prevent costly repairs down the road.</p>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer-container">
        <div style="max-width: 1200px; margin: 0 auto; padding: 3rem 1rem;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
                <!-- Company Info -->
                <div>
                    <h3 class="caps-text" style="color: #facc15; margin-bottom: 1rem; font-size: 1.2rem;">
                        PAUL'S ROOFING
                    </h3>
                    <p class="caps-text" style="color: #f1f5f9; margin-bottom: 1rem;">
                        SERVING QUISPAMSIS AND SURROUNDING COMMUNITIES
                    </p>
                    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                        <p class="caps-text" style="color: #f1f5f9;">📞 (506) 650-2122</p>
                        <p class="caps-text" style="color: #f1f5f9;">📞 (506) 717-XMAS (9627)</p>
                        <p class="caps-text" style="color: #f1f5f9;">✉️ CONTACT@PLACED.LIFE</p>
                    </div>
                </div>

                <!-- Quick Links -->
                <div>
                    <h4 class="caps-text" style="color: #facc15; margin-bottom: 1rem;">
                        QUICK LINKS
                    </h4>
                    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                        <a href="/services" class="caps-text" style="color: #f1f5f9; text-decoration: none;">SERVICES</a>
                        <a href="/quote" class="caps-text" style="color: #f1f5f9; text-decoration: none;">GET QUOTE</a>
                        <a href="/testimonials" class="caps-text" style="color: #f1f5f9; text-decoration: none;">TESTIMONIALS</a>
                        <a href="/contact" class="caps-text" style="color: #f1f5f9; text-decoration: none;">CONTACT</a>
                    </div>
                </div>

                <!-- Our Friends -->
                <div>
                    <h4 class="caps-text" style="color: #facc15; margin-bottom: 1rem;">
                        OUR FRIENDS
                    </h4>
                    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                        <a href="https://sherwoodselectrical.replit.app" target="_blank" rel="noopener noreferrer" class="caps-text" style="color: #f1f5f9; text-decoration: none;">
                            SHERWOOD'S ELECTRICAL
                        </a>
                        <a href="https://placedchristmas.replit.app" target="_blank" rel="noopener noreferrer" class="caps-text" style="color: #f1f5f9; text-decoration: none;">
                            PLACED SANTA'S HELPERS
                        </a>
                        <a href="https://hhplaced.replit.app" target="_blank" rel="noopener noreferrer" class="caps-text" style="color: #f1f5f9; text-decoration: none;">
                            HOMEOWNER'S HANDBOOK
                        </a>
                    </div>
                </div>

                <!-- Payment Info -->
                <div>
                    <h4 class="caps-text" style="color: #facc15; margin-bottom: 1rem;">
                        PAYMENT OPTIONS
                    </h4>
                    <p class="caps-text" style="color: #f1f5f9; margin-bottom: 1rem;">
                        WE ACCEPT ALL MAJOR CREDIT CARDS
                    </p>
                    <p class="caps-text" style="color: #f1f5f9; margin-bottom: 1rem;">
                        STRIPE SECURE PAYMENTS
                    </p>
                    <p class="caps-text" style="color: #f1f5f9;">
                        FINANCING AVAILABLE
                    </p>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div style="border-top: 1px solid #475569; margin-top: 2rem; padding-top: 2rem; text-align: center;">
                <p class="caps-text" style="color: #f1f5f9;">
                    BROUGHT TO YOU BY YOUR FRIENDS AT PLACED YOUR HOME OUR HANDS™
                </p>
                <p style="color: #94a3b8; margin-top: 0.5rem; font-size: 0.875rem;">
                    © 2024 PLACED. ALL RIGHTS RESERVED.
                </p>
            </div>
        </div>
    </footer>

    <!-- 24/7 Emergency Button -->
    <a href="https://hhplaced.replit.app" target="_blank" rel="noopener noreferrer" class="emergency-float">
        24/7 EMERGENCY
    </a>

    <!-- JavaScript for Mobile Menu and Dropdowns -->
    <script>
        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('open');
        }

        // Desktop dropdown functionality
        document.addEventListener('DOMContentLoaded', function() {
            const dropdowns = document.querySelectorAll('.dropdown');
            
            dropdowns.forEach(dropdown => {
                const menu = dropdown.querySelector('.dropdown-menu');
                
                dropdown.addEventListener('mouseenter', () => {
                    menu.style.opacity = '1';
                    menu.style.visibility = 'visible';
                });
                
                dropdown.addEventListener('mouseleave', () => {
                    menu.style.opacity = '0';
                    menu.style.visibility = 'hidden';
                });
            });

            // Show desktop navigation on larger screens
            function updateNavVisibility() {
                const desktopNav = document.querySelector('.desktop-nav');
                const mobileButton = document.querySelector('.mobile-menu-button');
                
                if (window.innerWidth >= 1024) {
                    desktopNav.style.display = 'flex';
                    mobileButton.style.display = 'none';
                } else {
                    desktopNav.style.display = 'none';
                    mobileButton.style.display = 'block';
                }
            }

            updateNavVisibility();
            window.addEventListener('resize', updateNavVisibility);
        });
    </script>
</body>
</html>
```

## 3. JavaScript for Enhanced Functionality (script.js)

```javascript
// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const button = document.querySelector('.mobile-menu-toggle');
    
    menu.classList.toggle('open');
    
    // Toggle button icon
    if (menu.classList.contains('open')) {
        button.innerHTML = '✕';
    } else {
        button.innerHTML = '☰';
    }
}

// Desktop Dropdown Functionality
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const menu = dropdown.querySelector('.dropdown-menu');
        let timeoutId;
        
        dropdown.addEventListener('mouseenter', () => {
            clearTimeout(timeoutId);
            menu.style.opacity = '1';
            menu.style.visibility = 'visible';
            menu.style.transform = 'translateY(0)';
        });
        
        dropdown.addEventListener('mouseleave', () => {
            timeoutId = setTimeout(() => {
                menu.style.opacity = '0';
                menu.style.visibility = 'hidden';
                menu.style.transform = 'translateY(-10px)';
            }, 150);
        });
    });

    // Responsive Navigation
    function updateNavVisibility() {
        const desktopNav = document.querySelector('.desktop-nav');
        const mobileButton = document.querySelector('.mobile-menu-button');
        
        if (window.innerWidth >= 1024) {
            desktopNav.style.display = 'flex';
            mobileButton.style.display = 'none';
        } else {
            desktopNav.style.display = 'none';
            mobileButton.style.display = 'block';
        }
    }

    updateNavVisibility();
    window.addEventListener('resize', updateNavVisibility);

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Form Enhancement (if you have forms)
function enhanceForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return;
    
    const inputs = form.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
        // Add focus effects
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
            if (this.value.trim() !== '') {
                this.parentElement.classList.add('filled');
            } else {
                this.parentElement.classList.remove('filled');
            }
        });
    });
}

// Initialize form enhancements
document.addEventListener('DOMContentLoaded', function() {
    enhanceForm('contactForm');
    enhanceForm('quoteForm');
});
```

## Key Customizations for Paul's Roofing:

1. **Business Name**: Changed to "PAUL'S ROOFING"
2. **Primary Color**: Used roofing blue (#0891b2) as the dominant brand color
3. **Services**: Updated dropdown to show roofing-specific services
4. **Contact**: Maintained consistent PLACED contact information
5. **Footer**: All standard PLACED footer elements included
6. **Emergency Button**: 24/7 emergency services maintained

## Implementation Steps:

1. Copy the CSS to your `styles.css` file
2. Copy the HTML structure to your `index.html` file
3. Add the JavaScript for mobile menu and dropdown functionality
4. Replace logo image with Paul's Roofing logo
5. Update any service-specific content in the main sections

This demonstrates how the transferable design system maintains complete consistency across all PLACED websites while allowing for business-specific customization!