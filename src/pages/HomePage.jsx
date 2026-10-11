import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, CATEGORIES, FALLBACK_IMAGE } from '../data/products';
import { Sparkles, ArrowRight, Star, Heart, Gift, Truck, ShieldCheck, Smile } from 'lucide-react';

export default function HomePage({
  onNavigate,
  onAddToCart,
  onToggleWishlist,
  onQuickView,
  wishlist = []
}) {
  // Top 4 trending products
  const trendingProducts = PRODUCTS.slice(0, 4);

  // Category quick cards
  const categoryHighlights = [
    { name: "Notebooks", emoji: "📔", desc: "Sakura journals & spiral pads", color: "from-pink-100 to-rose-50" },
    { name: "Kawaii Pens", emoji: "🖊️", desc: "Bunny gel pens & pastel inks", color: "from-purple-100 to-indigo-50" },
    { name: "Stickers", emoji: "🎀", desc: "Waterproof vinyl & foil sheets", color: "from-amber-100 to-yellow-50" },
    { name: "Washi Tapes", emoji: "🎨", desc: "Floral & gold star paper rolls", color: "from-emerald-100 to-teal-50" },
    { name: "Desk Accessories", emoji: "🗂️", desc: "Fluffy pouches & cat erasers", color: "from-pink-100 to-purple-50" }
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <Hero 
        onShopClick={() => onNavigate('shop')} 
        onCategoriesClick={() => onNavigate('categories')} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Quick Category Showcase */}
        <section>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cute-pink uppercase tracking-wider mb-1">
                <Sparkles size={14} />
                <span>Sweet Collections</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-cute-dark tracking-tight">
                Shop By Aesthetic 🌸
              </h2>
            </div>
            <button
              onClick={() => onNavigate('categories')}
              className="mt-3 sm:mt-0 text-xs sm:text-sm font-bold text-cute-pink hover:text-pink-600 flex items-center gap-1 group"
            >
              <span>Explore All Categories</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {categoryHighlights.map((cat) => (
              <button
                key={cat.name}
                onClick={() => onNavigate('categories')}
                className={`bg-gradient-to-b ${cat.color} p-5 rounded-3xl border border-pink-100 hover:border-pink-300 shadow-sm hover:shadow-cute hover:-translate-y-1.5 transition-all text-left flex flex-col justify-between group`}
              >
                <div>
                  <span className="text-3xl sm:text-4xl block mb-3 group-hover:scale-110 transition-transform">
                    {cat.emoji}
                  </span>
                  <h3 className="font-bold text-cute-dark text-sm sm:text-base group-hover:text-cute-pink transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] text-cute-dark/60 mt-1 leading-tight">
                    {cat.desc}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-[11px] font-bold text-cute-pink">
                  <span>Browse</span>
                  <ArrowRight size={12} />
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Trending Picks Section */}
        <section>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cute-pink uppercase tracking-wider mb-1">
                <Star size={14} className="fill-cute-pink" />
                <span>Right Now On Crafters' Desks</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-cute-dark tracking-tight">
                Trending Goodies ✨
              </h2>
            </div>
            <button
              onClick={() => onNavigate('shop')}
              className="mt-3 sm:mt-0 text-xs sm:text-sm font-bold text-cute-pink hover:text-pink-600 flex items-center gap-1 group"
            >
              <span>View Full Shop</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProducts.map((product) => (
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

        {/* Bestsellers Spotlight Banner */}
        <section className="bg-gradient-to-r from-cute-softPink via-pink-100 to-purple-100 rounded-3xl p-8 sm:p-12 border border-pink-200 relative overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="px-3.5 py-1 rounded-full bg-cute-pink text-white text-xs font-extrabold shadow-sm inline-block">
                Exclusive Holiday Deal 🎁
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-cute-dark">
                The Ultimate Kawaii Study Bundle
              </h3>
              <p className="text-xs sm:text-sm text-cute-dark/75 font-medium leading-relaxed max-w-xl">
                Everything you need to turn studying into your favorite cozy hobby! Includes our Sakura Journal, 6 bunny gel pens, 5 rolls of floral washi tapes, and a surprise holographic sticker pack.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-cute-dark">$29.99</span>
                  <span className="text-base text-gray-400 line-through">$42.00</span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">Save 28%</span>
                </div>
                <button
                  onClick={() => {
                    onAddToCart({
                      id: 999,
                      name: "The Ultimate Kawaii Study Bundle 🎁",
                      price: 29.99,
                      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
                      description: "Complete pastel study kit with journals, pens, washi tape, and stickers."
                    });
                  }}
                  className="px-7 py-3 bg-cute-pink hover:bg-pink-500 text-white rounded-full font-bold text-xs sm:text-sm shadow-cute transition transform hover:scale-105"
                >
                  Claim This Bundle ✨
                </button>
                <button
                  onClick={() => onNavigate('bestsellers')}
                  className="px-6 py-3 bg-white hover:bg-pink-50 text-cute-dark rounded-full font-bold text-xs sm:text-sm border border-pink-200 transition"
                >
                  View All Bestsellers 🏆
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="relative p-3 bg-white rounded-3xl shadow-lg border border-pink-200 rotate-2 hover:rotate-0 transition-transform duration-300 max-w-xs">
                <img 
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80" 
                  alt="Bundle Box"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = FALLBACK_IMAGE;
                  }}
                  className="rounded-2xl object-cover w-full h-56"
                />
                <div className="absolute -top-3 -right-3 bg-cute-pink text-white text-xs font-black px-3 py-1.5 rounded-full shadow-md animate-bounce">
                  Best Value! 💖
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Kawaii Crafters Love Us */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-pink-100 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-extrabold text-cute-pink tracking-wider uppercase">Our Cozy Promise</span>
            <h2 className="text-2xl sm:text-3xl font-black text-cute-dark mt-1">
              Why You'll Love Cute Stationery Shop 🧸
            </h2>
            <p className="text-xs sm:text-sm text-cute-dark/60 mt-2">
              Every package is sent from our hearts straight to your desk with care and warmth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-cute-softPink/50 border border-pink-100 text-center space-y-2.5">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-white text-cute-pink flex items-center justify-center shadow-sm text-2xl">
                🌸
              </div>
              <h3 className="font-bold text-cute-dark text-sm sm:text-base">100% Kawaii Handpicked</h3>
              <p className="text-xs text-cute-dark/70">
                Only the sweetest, softest pastel notebooks and smoothest writing pens make the cut.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-purple-50/60 border border-purple-100 text-center space-y-2.5">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-white text-purple-400 flex items-center justify-center shadow-sm text-2xl">
                🎁
              </div>
              <h3 className="font-bold text-cute-dark text-sm sm:text-base">Free Sticker Gifts</h3>
              <p className="text-xs text-cute-dark/70">
                Every single order arrives with surprise stickers and a sweet handwritten thank you card.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-pink-50/60 border border-pink-100 text-center space-y-2.5">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-white text-pink-500 flex items-center justify-center shadow-sm text-2xl">
                📦
              </div>
              <h3 className="font-bold text-cute-dark text-sm sm:text-base">Safe Bubble Packaging</h3>
              <p className="text-xs text-cute-dark/70">
                Packed in charming pink bubble mailers so your journals and pens arrive crisp and safe.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-100 text-center space-y-2.5">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-white text-amber-500 flex items-center justify-center shadow-sm text-2xl">
                💖
              </div>
              <h3 className="font-bold text-cute-dark text-sm sm:text-base">10k+ Happy Crafters</h3>
              <p className="text-xs text-cute-dark/70">
                Loved by students, artists, and planners all around the globe who adore cute desks!
              </p>
            </div>
          </div>
        </section>

        {/* Customer Love Wall */}
        <section>
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-extrabold text-cute-pink tracking-wider uppercase">Wall of Happiness 💌</span>
            <h2 className="text-2xl sm:text-3xl font-black text-cute-dark mt-1">
              Sweet Words From Stationery Lovers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-pink-100 shadow-sm space-y-4">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-cute-dark/80 italic font-medium leading-relaxed">
                "The Sakura Journal is literally the smoothest notebook I've ever owned! No ink bleeds through, and the free stickers made my entire week! 🌸"
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-pink-50">
                <span className="w-9 h-9 rounded-full bg-pink-100 flex items-center justify-center text-sm font-bold text-cute-pink">
                  🐰
                </span>
                <div>
                  <h4 className="text-xs font-bold text-cute-dark">Ayla K.</h4>
                  <p className="text-[10px] text-gray-400">Verified Crafter</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-pink-100 shadow-sm space-y-4">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-cute-dark/80 italic font-medium leading-relaxed">
                "The bunny gel pens write like pure butter. I study for dental exams and these make note-taking so much less stressful and so colorful! 🎀"
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-pink-50">
                <span className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center text-sm font-bold text-purple-400">
                  🐱
                </span>
                <div>
                  <h4 className="text-xs font-bold text-cute-dark">Noor M.</h4>
                  <p className="text-[10px] text-gray-400">Stationery Collector</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-pink-100 shadow-sm space-y-4">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-cute-dark/80 italic font-medium leading-relaxed">
                "Opening the parcel felt like Christmas morning! The pink tissue wrap and personal handwritten card were the sweetest touches ever! 💖"
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-pink-50">
                <span className="w-9 h-9 rounded-full bg-rose-100 flex items-center justify-center text-sm font-bold text-rose-400">
                  🐻
                </span>
                <div>
                  <h4 className="text-xs font-bold text-cute-dark">Zara S.</h4>
                  <p className="text-[10px] text-gray-400">Bullet Journaler</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
