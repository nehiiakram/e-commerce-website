// Reliable Cute SVG Fallback Generator so an image NEVER looks broken
export const getCategoryFallback = (category = '') => {
  const cat = (category || '').toLowerCase();
  let emoji = '🌸';
  let title = 'Cute Stationery';
  let bg1 = '%23FFE5EC';
  let bg2 = '%23FFF0F3';

  if (cat.includes('notebook')) {
    emoji = '📔';
    title = 'Pastel Notebook';
    bg1 = '%23FFE5EC';
    bg2 = '%23FFF0F5';
  } else if (cat.includes('pen')) {
    emoji = '🖊️';
    title = 'Kawaii Gel Pen';
    bg1 = '%23E2D4F0';
    bg2 = '%23F3E8FF';
  } else if (cat.includes('sticker')) {
    emoji = '🎀';
    title = 'Aesthetic Sticker';
    bg1 = '%23FEF3C7';
    bg2 = '%23FFFBEB';
  } else if (cat.includes('washi') || cat.includes('tape')) {
    emoji = '🎨';
    title = 'Floral Washi Tape';
    bg1 = '%23D1FAE5';
    bg2 = '%23ECFDF5';
  } else if (cat.includes('desk') || cat.includes('accessories')) {
    emoji = '🗂️';
    title = 'Desk Organizer';
    bg1 = '%23FFE4E6';
    bg2 = '%23FFF1F2';
  }

  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${bg1}"/><stop offset="100%" stop-color="${bg2}"/></linearGradient></defs><rect width="600" height="600" rx="36" fill="url(%23g)"/><circle cx="300" cy="270" r="110" fill="white" opacity="0.9"/><text x="300" y="305" font-size="100" text-anchor="middle">${emoji}</text><text x="300" y="440" font-family="sans-serif" font-weight="bold" font-size="28" fill="%233D3443" text-anchor="middle">${title}</text><text x="300" y="475" font-family="sans-serif" font-weight="600" font-size="18" fill="%23FF8FAB" text-anchor="middle">🌸 Kawaii Stationery</text></svg>`;
};

// Universal fallback
export const FALLBACK_IMAGE = getCategoryFallback('Notebooks');

export const PRODUCTS = [
  // --- NOTEBOOKS ---
  {
    id: 1,
    name: "Pastel Sakura Soft-Cover Journal",
    category: "Notebooks",
    price: 12.99,
    originalPrice: 16.99,
    rating: 4.9,
    reviews: 128,
    badge: "Bestseller ✨",
    badgeColor: "bg-cute-pink text-white",
    description: "160 pages of 120gsm ultra-smooth cream paper. Perfect for journaling, bullet notes, and doodling with no ink bleed.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    inStock: true
  },
  {
    id: 2,
    name: "Dreamy Lavender Hardcover Planner",
    category: "Notebooks",
    price: 18.99,
    originalPrice: 24.00,
    rating: 5.0,
    reviews: 95,
    badge: "Limited Edition 💜",
    badgeColor: "bg-purple-500 text-white",
    description: "Undated yearly, monthly, and weekly spreads with habit trackers, mood mandala pages, and cute ribbon bookmarks.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80",
    inStock: true
  },
  {
    id: 3,
    name: "Aesthetic Grid Spiral Sketchbook",
    category: "Notebooks",
    price: 9.50,
    originalPrice: 12.00,
    rating: 4.8,
    reviews: 67,
    badge: "Essential 📔",
    badgeColor: "bg-teal-500 text-white",
    description: "Double spiral binding allows 360-degree flat lay. Ideal for graphing, math notes, or cute calligraphy practice.",
    image: "https://images.unsplash.com/photo-1532012164546-f432f2e3777a?auto=format&fit=crop&w=600&q=80",
    inStock: true
  },
  {
    id: 4,
    name: "Mini Pocket Memo Pad (Set of 3)",
    category: "Notebooks",
    price: 6.99,
    originalPrice: 8.99,
    rating: 4.7,
    reviews: 43,
    badge: "Pocket Size 🧸",
    badgeColor: "bg-amber-400 text-white",
    description: "Tear-off cute pastel pages you can slip inside your bag or pocket for quick to-do lists and grocery notes.",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=600&q=80",
    inStock: true
  },

  // --- KAWAII PENS ---
  {
    id: 5,
    name: "Kawaii Bunny Gel Pen Set (6 Pcs)",
    category: "Kawaii Pens",
    price: 8.50,
    originalPrice: 11.00,
    rating: 5.0,
    reviews: 240,
    badge: "Popular 🐰",
    badgeColor: "bg-purple-400 text-white",
    description: "Super smooth 0.5mm black quick-drying ink pens featuring adorable pastel bunny toppers and soft silicone grip.",
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=600&q=80",
    inStock: true
  },
  {
    id: 6,
    name: "Mild Pastel Dual-Tip Highlighters (5 Pcs)",
    category: "Kawaii Pens",
    price: 9.99,
    originalPrice: 13.00,
    rating: 4.8,
    reviews: 175,
    badge: "Hot 🔥",
    badgeColor: "bg-rose-400 text-white",
    description: "Soft eye-friendly pastel tones (lavender, mint, buttercup, baby pink, peach) with chisel and fine tips.",
    image: "https://images.unsplash.com/photo-1585336261026-c2cf94892797?auto=format&fit=crop&w=600&q=80",
    inStock: true
  },
  {
    id: 7,
    name: "Glitter Pastel Fineliner Pens (8 Pcs)",
    category: "Kawaii Pens",
    price: 11.20,
    originalPrice: 15.00,
    rating: 4.9,
    reviews: 84,
    badge: "Shimmer ✨",
    badgeColor: "bg-indigo-400 text-white",
    description: "Subtle metallic shimmer ink that sparkles on dark and light paper. Non-toxic, water-based, and archival.",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80",
    inStock: true
  },
  {
    id: 8,
    name: "Candy Gradient Retractable Ballpoint Pens",
    category: "Kawaii Pens",
    price: 7.50,
    originalPrice: 9.50,
    rating: 4.7,
    reviews: 58,
    badge: "Cute 🍬",
    badgeColor: "bg-cute-pink text-white",
    description: "Gradient ombre pastel barrels with click retraction mechanism. Smooth blue ink that glides effortlessly.",
    image: "https://images.unsplash.com/photo-1569683795645-b62e50fbf103?auto=format&fit=crop&w=600&q=80",
    inStock: true
  },

  // --- STICKERS ---
  {
    id: 9,
    name: "Cozy Bakery Die-Cut Sticker Pack",
    category: "Stickers",
    price: 5.99,
    originalPrice: 7.99,
    rating: 4.8,
    reviews: 89,
    badge: "New 🥐",
    badgeColor: "bg-amber-500 text-white",
    description: "50 waterproof vinyl stickers of croissants, strawberry matcha lattes, and bear cookies with cute gold foil details.",
    image: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&w=600&q=80",
    inStock: true
  },
  {
    id: 10,
    name: "Magic Kitten Holographic Stickers",
    category: "Stickers",
    price: 6.50,
    originalPrice: 8.50,
    rating: 5.0,
    reviews: 110,
    badge: "Holo 🐱",
    badgeColor: "bg-pink-500 text-white",
    description: "Rainbow holographic sparkle stickers of sleepy cats, starry skies, and cloud puddles. Great for laptops & water bottles.",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80",
    inStock: true
  },
  {
    id: 11,
    name: "Floral Blossom Transparent Sticker Sheets",
    category: "Stickers",
    price: 4.99,
    originalPrice: 6.99,
    rating: 4.9,
    reviews: 77,
    badge: "Floral 🌸",
    badgeColor: "bg-cute-pink text-white",
    description: "Clear PET sheets with pressed wildflower and cherry blossom illustrations. Blends seamlessly onto journal pages.",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80",
    inStock: true
  },
  {
    id: 12,
    name: "Aesthetic Daily Habit Tracker Stickers",
    category: "Stickers",
    price: 5.25,
    originalPrice: 7.00,
    rating: 4.6,
    reviews: 42,
    badge: "Productive 📅",
    badgeColor: "bg-emerald-500 text-white",
    description: "Pre-cut functional sticker stamps for hydration tracking, reading logs, sleep records, and weekly goals.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80",
    inStock: true
  },

  // --- WASHI TAPES ---
  {
    id: 13,
    name: "Pastel Rainbow Grid Washi Tapes (5 Rolls)",
    category: "Washi Tapes",
    price: 7.99,
    originalPrice: 9.99,
    rating: 4.7,
    reviews: 64,
    badge: "Staff Pick 💖",
    badgeColor: "bg-pink-400 text-white",
    description: "High quality Japanese washi paper tape that peels and sticks cleanly without leaving any sticky residue.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80",
    inStock: true
  },
  {
    id: 14,
    name: "Botanical Floral Washi Tape Box Set",
    category: "Washi Tapes",
    price: 11.50,
    originalPrice: 14.99,
    rating: 4.7,
    reviews: 73,
    badge: "Floral 🌿",
    badgeColor: "bg-emerald-400 text-white",
    description: "8 decorative tapes featuring wild daisies, vintage roses, eucalyptus leaves, and shimmering gold accents.",
    image: "https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?auto=format&fit=crop&w=600&q=80",
    inStock: true
  },
  {
    id: 15,
    name: "Sparkling Star & Moon Foil Washi Tape",
    category: "Washi Tapes",
    price: 8.99,
    originalPrice: 11.50,
    rating: 4.9,
    reviews: 53,
    badge: "Sparkle 🌙",
    badgeColor: "bg-purple-600 text-white",
    description: "Midnight lavender tape stamped with reflective rose-gold foil moons, stars, and celestial constellation patterns.",
    image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&w=600&q=80",
    inStock: true
  },

  // --- DESK ACCESSORIES ---
  {
    id: 16,
    name: "Sweet Peach Cloud Pencil Case",
    category: "Desk Accessories",
    price: 14.50,
    originalPrice: 18.00,
    rating: 4.9,
    reviews: 112,
    badge: "Trending 🍑",
    badgeColor: "bg-rose-400 text-white",
    description: "Fluffy quilted corduroy pouch that opens wide and holds up to 40 pens, scissors, correction tape, and erasers.",
    image: "https://images.unsplash.com/photo-1568290747976-ee9c529f7b46?auto=format&fit=crop&w=600&q=80",
    inStock: true
  },
  {
    id: 17,
    name: "Mini Cat Paw Retractable Erasers (3 Pcs)",
    category: "Desk Accessories",
    price: 4.25,
    originalPrice: 6.00,
    rating: 4.9,
    reviews: 310,
    badge: "Cute Favorite 🐾",
    badgeColor: "bg-cute-pink text-white",
    description: "Fun sliding push-pull eraser with soft silicone cat paws. Leaves clean, dust-free erasures every single time.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    inStock: true
  },
  {
    id: 18,
    name: "Pastel Heart Wire Paper Clips (Box of 30)",
    category: "Desk Accessories",
    price: 5.50,
    originalPrice: 7.50,
    rating: 4.8,
    reviews: 86,
    badge: "Sweet 📎",
    badgeColor: "bg-red-400 text-white",
    description: "Durable stainless steel wire paper clips bent into romantic heart shapes. Coated in soft pastel candy pink and mint.",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80",
    inStock: true
  },
  {
    id: 19,
    name: "Kawaii Multi-Layer Desk Organizer Drawers",
    category: "Desk Accessories",
    price: 19.99,
    originalPrice: 26.00,
    rating: 5.0,
    reviews: 140,
    badge: "Best Seller 🎀",
    badgeColor: "bg-purple-500 text-white",
    description: "Compact pastel stackable drawers with cute silicone rabbit handles. Keeps sticky notes, clips, and tapes tidy.",
    image: "https://images.unsplash.com/photo-1507842229451-79b1be886a27?auto=format&fit=crop&w=600&q=80",
    inStock: true
  }
];

export const CATEGORIES = [
  "All",
  "Notebooks",
  "Kawaii Pens",
  "Stickers",
  "Washi Tapes",
  "Desk Accessories"
];
