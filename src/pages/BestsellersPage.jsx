import React from 'react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, getCategoryFallback } from '../data/products';
import { Trophy, Sparkles, Star, Heart, Check, Gift, ShoppingBag, Flame } from 'lucide-react';

export default function BestsellersPage({
  onNavigate,
  onAddToCart,
  onToggleWishlist,
  onQuickView,
  wishlist = []
}) {
  // Sort products by rating & review count for true bestsellers
  const bestsellers = [...PRODUCTS].sort((a, b) => (b.rating * b.reviews) - (a.rating * a.reviews));
  
  // Top 3 Podium
  const top1 = bestsellers[0]; // e.g. Bunny Pens or Sakura Journal
  const top2 = bestsellers[1];
  const top3 = bestsellers[2];

  // Rest of bestsellers
  const otherBestsellers = bestsellers.slice(3, 11);

  // Exclusive Bundles
  const bundles = [
    {
      id: 991,
      name: "The Ultimate Kawaii Study Bundle 🎁",
      price: 29.99,
      originalPrice: 42.00,
      badge: "Best Value • Save 28%",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80",
      description: "Includes Sakura Soft-Cover Journal, 6 bunny gel pens, 5 washi tapes, and a surprise sticker pack.",
      items: [
        "1x Pastel Sakura Soft-Cover Journal",
        "1x Bunny Gel Pen Set (6 Pcs)",
        "1x Floral Washi Tape Box (5 rolls)",
        "1x Holographic Kitten Sticker Pack",
        "Free handwritten gift card 🌸"
      ]
    },
    {
      id: 992,
      name: "Dreamy Journaler's Starter Box 📔",
      price: 24.99,
      originalPrice: 35.00,
      badge: "Staff Pick 💜",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&auto=format&fit=crop&q=80",
      description: "Everything you need to kickstart your cozy bullet journaling journey.",
      items: [
        "1x Lavender Hardcover Planner",
        "1x Mild Pastel Highlighters (5 Pcs)",
        "2x Botanical Washi Tape Rolls",
        "1x Daily Habit Tracker Stickers",
        "Free pastel bookmark 🔖"
      ]
    },
    {
      id: 993,
      name: "Mega Sticker & Washi Paradise Set 🎀",
      price: 18.50,
      originalPrice: 26.00,
      badge: "Crafter's Dream ✨",
      image: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=600&auto=format&fit=crop&q=80",
      description: "Over 80+ waterproof vinyl stickers and 8 rolls of decorative washi tape.",
      items: [
        "1x Cozy Bakery Die-Cut Pack (50 Pcs)",
        "1x Magic Kitten Holographic Sheet",
        "1x Star & Moon Gold Foil Washi Tape",
        "1x Pressed Wildflower PET Sheet",
        "Pastel mini tweezer included 🌸"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-cute-softPink via-yellow-50 to-pink-100 rounded-3xl p-6 sm:p-10 border border-pink-200 shadow-sm relative overflow-hidden text-center sm:text-left">
        <div className="max-w-2xl relative z-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white text-amber-500 text-xs font-bold shadow-sm">
            <Trophy size={14} className="fill-amber-400" />
            <span>Community Hall of Fame</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-cute-dark tracking-tight">
            Our Top Bestsellers 🏆✨
          </h1>
          <p className="text-xs sm:text-sm text-cute-dark/75 font-medium leading-relaxed">
            These are the absolute most adored items in our shop! Rated 4.8 stars or higher by over 10,000 happy desk crafters worldwide.
          </p>
        </div>
        <div className="absolute right-6 top-1/2 -translate-y-1/2 text-8xl opacity-20 pointer-events-none select-none hidden md:block">
          👑
        </div>
      </div>

      {/* Top 3 Podium Section */}
      <section className="space-y-6">
        <div className="text-center max-w-lg mx-auto">
          <div className="inline-flex items-center gap-1 text-cute-pink text-xs font-bold uppercase tracking-wider">
            <Flame size={14} />
            <span>The Top 3 Crowd Favorites</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-cute-dark mt-1">
            Stationery Podium 🥇🥈🥉
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          
          {/* 2nd Place */}
          {top2 && (
            <div className="order-2 md:order-1 bg-white rounded-3xl p-6 border border-purple-100 shadow-sm flex flex-col justify-between hover:shadow-cute transition-all relative md:mt-6">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-purple-500 text-white text-xs font-extrabold shadow-sm flex items-center gap-1">
                <span>🥈 #2 Most Loved</span>
              </div>
              <div className="space-y-4 pt-2">
                <div className="aspect-square rounded-2xl overflow-hidden bg-purple-50">
                  <img 
                    src={top2.image} 
                    alt={top2.name} 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = getCategoryFallback(top2.category);
                    }}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between text-xs text-cute-dark/60 mb-1">
                    <span className="font-bold text-purple-400">{top2.category}</span>
                    <div className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star size={13} fill="currentColor" />
                      <span>{top2.rating}</span>
                      <span className="text-gray-400">({top2.reviews})</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-cute-dark text-base line-clamp-1">{top2.name}</h3>
                  <p className="text-xs text-cute-dark/60 line-clamp-2 mt-1">{top2.description}</p>
                </div>
              </div>
              <div className="pt-4 flex items-center justify-between border-t border-purple-50 mt-4">
                <span className="text-xl font-black text-cute-dark">${top2.price.toFixed(2)}</span>
                <button
                  onClick={() => onAddToCart(top2)}
                  className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-full text-xs font-bold shadow-sm transition flex items-center gap-1.5"
                >
                  <ShoppingBag size={14} />
                  <span>Add to Bag</span>
                </button>
              </div>
            </div>
          )}

          {/* 1st Place - Center Champion */}
          {top1 && (
            <div className="order-1 md:order-2 bg-gradient-to-b from-white to-pink-50/40 rounded-3xl p-6 border-2 border-cute-pink shadow-cute flex flex-col justify-between relative transform md:-translate-y-2">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-gradient-to-r from-cute-pink to-rose-400 text-white text-xs font-black shadow-md flex items-center gap-1.5 animate-pulse">
                <span>👑 #1 Best Seller of 2024</span>
              </div>
              <div className="space-y-4 pt-3">
                <div className="aspect-square rounded-2xl overflow-hidden bg-pink-50 relative">
                  <img 
                    src={top1.image} 
                    alt={top1.name} 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = getCategoryFallback(top1.category);
                    }}
                    className="w-full h-full object-cover" 
                  />
                  <span className="absolute top-2.5 right-2.5 bg-cute-pink text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                    {top1.badge}
                  </span>
                </div>
                <div>
                  <div className="flex items-center justify-between text-xs text-cute-dark/60 mb-1">
                    <span className="font-bold text-cute-pink">{top1.category}</span>
                    <div className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star size={14} fill="currentColor" />
                      <span>{top1.rating}</span>
                      <span className="text-gray-400">({top1.reviews} reviews)</span>
                    </div>
                  </div>
                  <h3 className="font-black text-cute-dark text-lg line-clamp-1">{top1.name}</h3>
                  <p className="text-xs text-cute-dark/70 line-clamp-2 mt-1">{top1.description}</p>
                </div>
              </div>
              <div className="pt-4 flex items-center justify-between border-t border-pink-100 mt-4">
                <span className="text-2xl font-black text-cute-dark">${top1.price.toFixed(2)}</span>
                <button
                  onClick={() => onAddToCart(top1)}
                  className="px-5 py-2.5 bg-cute-pink hover:bg-pink-500 text-white rounded-full text-xs font-bold shadow-cute transition flex items-center gap-1.5"
                >
                  <ShoppingBag size={14} />
                  <span>Claim #1 Pick 💖</span>
                </button>
              </div>
            </div>
          )}

          {/* 3rd Place */}
          {top3 && (
            <div className="order-3 md:order-3 bg-white rounded-3xl p-6 border border-pink-100 shadow-sm flex flex-col justify-between hover:shadow-cute transition-all relative md:mt-8">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-amber-500 text-white text-xs font-extrabold shadow-sm flex items-center gap-1">
                <span>🥉 #3 Most Loved</span>
              </div>
              <div className="space-y-4 pt-2">
                <div className="aspect-square rounded-2xl overflow-hidden bg-amber-50">
                  <img 
                    src={top3.image} 
                    alt={top3.name} 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = getCategoryFallback(top3.category);
                    }}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between text-xs text-cute-dark/60 mb-1">
                    <span className="font-bold text-amber-500">{top3.category}</span>
                    <div className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star size={13} fill="currentColor" />
                      <span>{top3.rating}</span>
                      <span className="text-gray-400">({top3.reviews})</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-cute-dark text-base line-clamp-1">{top3.name}</h3>
                  <p className="text-xs text-cute-dark/60 line-clamp-2 mt-1">{top3.description}</p>
                </div>
              </div>
              <div className="pt-4 flex items-center justify-between border-t border-amber-50 mt-4">
                <span className="text-xl font-black text-cute-dark">${top3.price.toFixed(2)}</span>
                <button
                  onClick={() => onAddToCart(top3)}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-full text-xs font-bold shadow-sm transition flex items-center gap-1.5"
                >
                  <ShoppingBag size={14} />
                  <span>Add to Bag</span>
                </button>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Exclusive Bundles Section */}
      <section className="space-y-6">
        <div className="text-center max-w-lg mx-auto">
          <div className="inline-flex items-center gap-1 text-cute-pink text-xs font-bold uppercase tracking-wider">
            <Gift size={14} />
            <span>Curated Gift Sets</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-cute-dark mt-1">
            Bestselling Value Bundles 🎁
          </h2>
          <p className="text-xs text-cute-dark/60 mt-1">
            Pre-packed with love & discounts so you get more cute items for less!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {bundles.map((bundle) => (
            <div
              key={bundle.id}
              className="bg-white rounded-3xl p-6 border border-pink-100 shadow-sm hover:shadow-cute transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-pink-50">
                  <img 
                    src={bundle.image} 
                    alt={bundle.name} 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = getCategoryFallback('Notebooks');
                    }}
                    className="w-full h-full object-cover" 
                  />
                  <span className="absolute top-2.5 left-2.5 bg-cute-pink text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                    {bundle.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-cute-dark text-base sm:text-lg">
                    {bundle.name}
                  </h3>
                  <p className="text-xs text-cute-dark/70 mt-1">
                    {bundle.description}
                  </p>
                </div>

                {/* Bundle Items Checklist */}
                <div className="p-3.5 bg-cute-softPink/50 rounded-2xl border border-pink-100/60 space-y-1.5">
                  <span className="text-[11px] font-extrabold text-cute-pink uppercase tracking-wide block">
                    What's Inside Box:
                  </span>
                  {bundle.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-cute-dark/80 font-medium">
                      <Check size={13} className="text-cute-pink flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between border-t border-pink-50 mt-6">
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-black text-cute-dark">${bundle.price.toFixed(2)}</span>
                    <span className="text-xs text-gray-400 line-through">${bundle.originalPrice.toFixed(2)}</span>
                  </div>
                </div>
                <button
                  onClick={() => onAddToCart(bundle)}
                  className="px-5 py-2.5 bg-cute-pink hover:bg-pink-500 text-white rounded-full text-xs font-bold shadow-cute transition flex items-center gap-1.5"
                >
                  <ShoppingBag size={14} />
                  <span>Get Box 🎀</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* More Customer Favorites Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-pink-100 pb-3">
          <div>
            <h3 className="text-xl font-bold text-cute-dark">
              More Top-Rated Favorites ⭐
            </h3>
            <p className="text-xs text-cute-dark/60 mt-0.5">
              Ranked by crafters who bought and loved them
            </p>
          </div>
          <button
            onClick={() => onNavigate('shop')}
            className="text-xs font-bold text-cute-pink hover:underline"
          >
            View All Goodies 🌸
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherBestsellers.map((product) => (
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
      </section>

    </div>
  );
}
