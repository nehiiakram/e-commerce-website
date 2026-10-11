# 🌸 Cute Stationery Shop

A delightfully cute, aesthetic kawaii stationery e-commerce website built with **React** and **Tailwind CSS**.

---

## ✨ Features

- 🌸 **Aesthetic Pastel Design:** Custom pastel color palette (soft pink, lavender, mint, warm cream) with playful hover effects and animations.
- 🛍️ **Complete Product Showcase:** Filter by category (Notebooks, Kawaii Pens, Stickers, Washi Tapes, Desk Accessories) and live search bar.
- 💖 **Wishlist & Favorites:** Heart any item to save it in your favorites drawer.
- 🛒 **Interactive Shopping Bag / Cart:** Add items, change quantities (+ / -), remove items, and calculate free shipping progress.
- 🏷️ **Promo Code Support:** Try entering code `CUTE10` in the cart for a 10% discount!
- 💳 **Cute Checkout Flow:** Collects shipping details with Cash on Delivery / Card options and celebratory confetti popup.
- 💌 **Newsletter Subscription:** Cute Kawaii Club email signup with instant toast feedback.
- 💾 **Local Storage Persistence:** Cart and wishlist items stay saved even after refreshing the page!

---

## 🚀 How to Run the Website

Open your terminal or command prompt in this folder and run:

```bash
# 1. Navigate to the project folder
cd cute-stationery-shop

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Then open the link shown in your terminal (usually `http://localhost:5173`) in your browser!

---

## 📁 Clean Code Structure

The project has clean, beginner-friendly code designed to look completely hand-crafted and easy to explain:

- `src/App.jsx` - Main app logic (cart, wishlist, search, modals).
- `src/data/products.js` - Easy list of stationery items (change prices, names, and images here).
- `src/components/Navbar.jsx` - Cute top navigation with announcement bar and live search.
- `src/components/Hero.jsx` - Eye-catching hero section with cute floating emojis and badges.
- `src/components/CategoryFilter.jsx` - Pastel category pill buttons.
- `src/components/ProductCard.jsx` - Product cards with hover effects and quick actions.
- `src/components/ProductDetailModal.jsx` - Popup to preview products in detail.
- `src/components/CartModal.jsx` - Slide-over shopping bag with coupon support.
- `src/components/WishlistModal.jsx` - Slide-over saved favorites drawer.
- `src/components/CheckoutModal.jsx` - Order placement and confirmation.
- `src/components/Footer.jsx` - Sweet footer with Kawaii club newsletter.

---

Crafted with 💖 by Cute Stationery Shop
