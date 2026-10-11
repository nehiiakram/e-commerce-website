import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, getCategoryFallback } from '../data/products';
import { Sparkles, ArrowRight, Lightbulb, CheckCircle2 } from 'lucide-react';

const CATEGORY_INFO = [
  {
    id: "Notebooks",
    name: "Pastel Notebooks & Journals",
    emoji: "📔",
    bannerBg: "from-pink-100 to-rose-100",
    badge: "Most Loved 🌸",
    tagline: "Bleed-proof paper for journaling, sketching, and dreaming",
    description: "Our journals feature thick 120-160gsm ultra-smooth cream paper that loves fountain pens and highlighters with zero bleed. Hardcover, soft sakura finish, and flat-lay spiral bindings.",
    tip: "🌸 Pro Tip: Use grid pages for neat bullet journal spreads and mood trackers!",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "Kawaii Pens",
    name: "Kawaii Pens & Highlighters",
    emoji: "🖊️",
    bannerBg: "from-purple-100 to-indigo-100",
    badge: "Smooth Ink ✨",
    tagline: "Quick-drying 0.5mm gel pens and eye-friendly pastel tones",
    description: "Say goodbye to smudged ink! Our bunny and candy gel pens glide effortlessly with quick-drying Japanese ink. Paired with soft pastel highlighters that don't overpower your notes.",
    tip: "✨ Pro Tip: Color code your study notes with pastel mint & lavender for high exam recall!",
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "Stickers",
    name: "Aesthetic Vinyl & Holo Stickers",
    emoji: "🎀",
    bannerBg: "from-amber-100 to-yellow-100",
    badge: "Waterproof 🥐",
    tagline: "Die-cut cozy bakery treats, sleepy kitties & wildflower sheets",
    description: "Durable, waterproof vinyl stickers that add instant charm to laptops, phone cases, and planner pages. Features glistening holographic coats and gold foil details.",
    tip: "🎀 Pro Tip: Clean your water bottle or laptop surface with rubbing alcohol before applying for maximum stick!",
    image: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "Washi Tapes",
    name: "Japanese Floral & Foil Washi Tapes",
    emoji: "🎨",
    bannerBg: "from-emerald-100 to-teal-100",
    badge: "No Residue 🌿",
    tagline: "Decorative masking tapes that peel and reposition like a breeze",
    description: "Authentic washi paper rolls printed with delicate botanicals, soft rainbow grids, and celestial night skies stamped with reflective rose-gold foil.",
    tip: "🎨 Pro Tip: Use washi tape strips to frame polaroid photos or seal sweet love letters!",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "Desk Accessories",
    name: "Pastel Desk Organizers & Pouches",
    emoji: "🗂️",
    bannerBg: "from-rose-100 to-pink-100",
    badge: "Cozy Workspace 🧸",
    tagline: "Fluffy corduroy pouches, rabbit-handle drawers & cat paw erasers",
    description: "Transform cluttered desks into cozy pastel sanctuaries. Keep your highlighters, paperclips, and sticky notes organized with our sweet silicone drawers and cloud cases.",
    tip: "🧸 Pro Tip: Stack the multi-layer drawers vertically next to your laptop stand to keep your desk clutter-free!",
    image: "https://images.unsplash.com/photo-1568290747976-ee9c529f7b46?w=600&auto=format&fit=crop&q=80"
  }
];

export default function CategoriesPage({
  onNavigate,
  onAddToCart,
  onToggleWishlist,
  onQuickView,
  wishlist = []
}) {
  const [activeCategory, setActiveCategory] = useState("Notebooks");

  const currentCategoryData = CATEGORY_INFO.find((c) => c.id === activeCategory) || CATEGORY_INFO[0];
  const categoryProducts = PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cute-lightPink text-cute-pink text-xs font-bold shadow-sm">
          <Sparkles size={14} />
          <span>Curated Wonderlands</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-cute-dark tracking-tight">
          Explore By Category 🌸🎀
        </h1>
        <p className="text-xs sm:text-sm text-cute-dark/70 font-medium">
          Choose a stationery collection below to see all the lovely items, sweet styling tips, and cozy desk ideas!
        </p>
      </div>

      {/* Category Navigation Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {CATEGORY_INFO.map((cat) => {
          const isSelected = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`p-4 sm:p-5 rounded-3xl border transition-all text-left flex flex-col justify-between ${
                isSelected
                  ? "bg-white border-cute-pink shadow-cute ring-2 ring-cute-pink/30 -translate-y-1"
                  : "bg-white/80 border-pink-100 hover:border-pink-200 hover:bg-white shadow-sm hover:-translate-y-0.5"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">{cat.emoji}</span>
                {isSelected && (
                  <span className="w-2.5 h-2.5 rounded-full bg-cute-pink animate-pulse"></span>
                )}
              </div>
              <div>
                <h3 className={`font-bold text-xs sm:text-sm ${isSelected ? 'text-cute-pink' : 'text-cute-dark'}`}>
                  {cat.id}
                </h3>
                <p className="text-[11px] text-cute-dark/50 mt-0.5">
                  {PRODUCTS.filter(p => p.category === cat.id).length} cute goodies
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Category Hero Feature Box */}
      <div className={`bg-gradient-to-r ${currentCategoryData.bannerBg} rounded-3xl p-6 sm:p-10 border border-pink-200 shadow-sm relative overflow-hidden transition-all duration-300`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-white text-cute-dark text-xs font-bold shadow-sm">
                {currentCategoryData.badge}
              </span>
              <span className="text-2xl">{currentCategoryData.emoji}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-cute-dark">
              {currentCategoryData.name}
            </h2>

            <p className="text-xs sm:text-sm font-semibold text-cute-pink">
              {currentCategoryData.tagline}
            </p>

            <p className="text-xs sm:text-sm text-cute-dark/75 leading-relaxed font-medium max-w-2xl">
              {currentCategoryData.description}
            </p>

            {/* Styling Tip Card */}
            <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-sm border border-pink-200/80 shadow-sm flex items-start gap-3 text-xs text-cute-dark font-medium">
              <Lightbulb size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
              <span>{currentCategoryData.tip}</span>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="relative p-2.5 bg-white rounded-3xl shadow-md border border-pink-100 max-w-xs w-full">
              <img
                src={currentCategoryData.image}
                alt={currentCategoryData.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = getCategoryFallback(currentCategoryData.id);
                }}
                className="w-full h-52 object-cover rounded-2xl"
              />
              <div className="p-3 text-center">
                <span className="text-xs font-bold text-cute-dark">
                  100% Pastel Happiness 🌸
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Products under this category */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-pink-100 pb-3">
          <div>
            <h3 className="text-xl font-bold text-cute-dark flex items-center gap-2">
              <span>{currentCategoryData.emoji} Available in {currentCategoryData.id}</span>
              <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-cute-lightPink text-cute-pink">
                {categoryProducts.length} items
              </span>
            </h3>
          </div>
          <button
            onClick={() => onNavigate('shop', activeCategory)}
            className="text-xs font-bold text-cute-pink hover:underline flex items-center gap-1"
          >
            <span>Open in Full Shop</span>
            <ArrowRight size={13} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isFavorite={wishlist.some((item) => item.id === product.id)}
              onToggleWishlist={onToggleWishlist}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      </div>

      {/* Category Bottom Help Card */}
      <div className="bg-white rounded-3xl p-8 border border-pink-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div className="space-y-1">
          <h4 className="text-base sm:text-lg font-bold text-cute-dark">
            Can't decide which sweet stationery to pick? 🐰💭
          </h4>
          <p className="text-xs text-cute-dark/60 font-medium">
            Check out our community's top rated bestsellers or get a curated starter bundle!
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('bestsellers')}
            className="px-5 py-2.5 bg-cute-pink hover:bg-pink-500 text-white font-bold rounded-full text-xs shadow-sm transition"
          >
            See Bestsellers ✨
          </button>
          <button
            onClick={() => onNavigate('shop')}
            className="px-5 py-2.5 bg-cute-lightPink hover:bg-pink-100 text-cute-pink font-bold rounded-full text-xs transition"
          >
            Browse All 🛍️
          </button>
        </div>
      </div>

    </div>
  );
}
