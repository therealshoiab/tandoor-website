# 📋 Client Handover Document: Tandoor Website Delivery

Welcome to your brand new, premium restaurant website! Below you will find all the details regarding the delivered files, live links, repository setup, and instructions on how to update and maintain the site.

---

## 🌐 Live URL & Repository Links

*   **Live Website URL:** [https://therealshoiab.github.io/tandoor-website/](https://therealshoiab.github.io/tandoor-website/)
*   **GitHub Repository URL:** [https://github.com/therealshoiab/tandoor-website](https://github.com/therealshoiab/tandoor-website)
*   **Hosting Provider:** GitHub Pages (Automatic deployment via GitHub Actions)

---

## 📦 Pages and Features Delivered

1.  **Homepage (`/`)**
    *   **Navbar & Theme Toggle:** Sticky design with glassmorphism, transparent on top shifting to solid on scroll. Includes a **responsive Light/Dark Mode toggle** that dynamically updates the global styling theme and persists user selection via browser `localStorage`.
    *   **Hero Section:** Full-viewport-height cover with dark overlay, atmospheric saffron and deep maroon gradients, animated tagline ("Where Tradition Meets Modern Gastronomy"), and rating badges (**Google: 4.6★**, **Zomato: 4.2★**, and **Swiggy: 4.6★**).
    *   **Highlights Section:** Quick cards showcasing slow-cooked curries, authentic clay ovens, central location, and top-rated delivery.
    *   **Chef's Specialties:** Interactive carousel displaying signature dishes like Mutton Rogan Josh and Special Tandoori Karachi Tikka.
    *   **Testimonials & Reviews:** An **infinite-scrolling marquee animation** showing guest quotes with visual rating stars that seamlessly moves across the screen and pauses on mouse hover.
    *   **Instagram Video Reels Grid:** Replaced static placeholder boxes with **6 interactive, live, official Instagram embeds** showing real videos and posts directly on the homepage.
2.  **Menu Page (`/menu`)**
    *   Category tabs for Platters, Meals for One, Soups, Starters, Main Course, Breads, Rice and Biryani, Momos, and Desserts & Beverages.
    *   Filters for Veg / Non-Veg / All options.
    *   Real-time search bar to search for dishes instantly.
    *   Custom food cards with price, dietary indicators, description, and highlights.
    *   **Dynamic Food Images:** Every single dish (70+ items) features a high-quality, appetite-inducing food photograph mapped dynamically based on the dish name and category keywords.
3.  **About Us Page (`/about`)**
    *   Detailed history and story of Tandoor Srinagar.
    *   "Our Philosophy" and "Ambiance Description" showcasing the rustic wood aesthetics, warm amber lighting, and charcoal tandoor setup.
4.  **Gallery Page (`/gallery`)**
    *   Masonry grid showcasing **37 live Instagram posts and resolved Google Maps photo URLs** as preview thumbnails.
    *   Includes a **custom interactive lightbox modal** that renders the official Instagram iframe embed directly inside the card when clicked, allowing users to play reels and view descriptions dynamically.
    *   Hover overlays with dish details and category filters.
5.  **Reservations Page (`/reservations`)**
    *   Accessible table booking form with Date, Time, Number of Guests, Full Name, Email, and Phone.
    *   Fully integrated with local storage or form handling triggers.
6.  **Offers Page (`/offers`)**
    *   Visually appealing cards detailing active coupons, discounts (e.g., "TANDOOR10"), and happy hours. (Note: The "Join the Tandoor Club" email subscription form has been removed to keep focus on direct bookings/offers).
7.  **Contact Page (`/contact`)**
    *   Embedded Google Map area showing the exact coordinates in Lal Chowk.
    *   Information cards detailing Opening Hours, Address, and Direct Booking.
    *   **Real Brand Social Icons:** Redesigned Facebook, Instagram, Zomato, and Swiggy buttons that look exactly like the real app buttons (e.g. radial gradient for Instagram, brand blue for Facebook).
8.  **Global Additions**
    *   **WhatsApp FAB:** A floating button visible on all pages that allows customers to chat directly with the restaurant.
    *   **Back to Top Button:** Smooth scroll-to-top button appearing after scrolling down.
    *   **Mobile Bottom Nav Bar:** Floating mobile nav bar for easy single-hand page navigation.

---

## ✏️ How to Update Menu Items

All restaurant information, including the menu, is stored in a structured JSON file. You do **not** need to touch any React code to update the menu.

1.  Locate the data file:
    `[project-root]/src/data/restaurant-data.json`
2.  Open it in any text editor.
3.  To add or edit a dish, find the corresponding `category` block and modify the items:
    ```json
    {
      "name": "Mutton Rogan Josh",
      "price": 390,
      "description": "Classic Kashmiri mutton curry cooked with aromatic spices, fennel, and naturally colored with ratanjot.",
      "dietary_tag": "Non-Veg",
      "highlight_tag": "Bestseller"
    }
    ```
4.  **Field Explanations:**
    *   `name`: The name of the dish.
    *   `price`: The price in INR (number only).
    *   `description`: Description of ingredients and flavor profile.
    *   `dietary_tag`: Must be either `"Veg"`, `"Non-Veg"`, or `"Vegan"`.
    *   `highlight_tag`: Can be `"Bestseller"`, `"Must-try"`, `"Regular"`, or custom tags.
5.  Save the file. The site will automatically build and update the live page.

---

## 📷 How to Replace Photos

The website uses high-quality images stored locally. To replace placeholder photos, overwrite the following files:

*   **Logo:** `src/assets/logo.png`
*   **Chicken Tikka (Dish):** `src/assets/chicken_tikka.png`
*   **Rogan Josh (Dish):** `src/assets/rogan_josh.png`
*   **Restaurant Ambiance:** `src/assets/restaurant_ambiance.png`

**Instructions:**
1.  Prepare your new image in PNG format.
2.  Compress it using an online tool like TinyPNG (to maintain fast loading speeds).
3.  Name it exactly like the file you want to replace (e.g. `chicken_tikka.png`).
4.  Save/overwrite it inside the `src/assets/` directory.

---

## 📞 Configured Contact Details

The website is pre-configured with the following official accounts and numbers:

*   **Primary Phone Number:** `+919622894984` (Configured for Click-to-Call)
*   **WhatsApp Chat Link:** `+917780938743` (Configured on the floating FAB and contact cards)
*   **Instagram Handle:** [https://www.instagram.com/tandoor.lalchowk](https://www.instagram.com/tandoor.lalchowk)
*   **Facebook Page:** [https://www.facebook.com/tandoor.lalchowk](https://www.facebook.com/tandoor.lalchowk)

---

## 🛠️ Monthly Maintenance Recommendations

To keep the website running at peak performance, we recommend:

1.  **Check for Broken Links:** Verify that the Zomato and Swiggy links remain correct and that the WhatsApp numbers are active.
2.  **Monitor Page Speed:** Run a Lighthouse check once a month to ensure that newly added menu items or text modifications haven't affected the page loading performance.
3.  **Update Dependencies:** Run `npm update` locally every few months to get the latest security patches for React, TailwindCSS, and Vite.
4.  **Inspect GitHub Actions:** Periodically log in to your GitHub account and check the "Actions" tab to ensure automatic deployments are completing successfully.
