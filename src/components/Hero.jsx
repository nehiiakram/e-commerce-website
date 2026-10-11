import React from 'react';
import { Heart, Sparkles, ArrowRight, Star } from 'lucide-react';
import { FALLBACK_IMAGE } from '../data/products';

export default function Hero({ onShopClick, onCategoriesClick }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cute-softPink via-white to-cute-cream pt-10 pb-16 lg:py-20">
      
      {/* Decorative Floating Elements */}
      <div className="absolute top-10 left-8 text-2xl animate-float select-none opacity-80">🌸</div>
      <div className="absolute top-28 right-12 text-3xl animate-float-slow select-none opacity-80">✨</div>
      <div className="absolute bottom-12 left-1/4 text-2xl animate-float select-none opacity-70">🎀</div>
      <div className="absolute top-1/2 right-1/4 text-xl animate-float-slow select-none opacity-70">💖</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Call to Action */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Cute Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cute-lightPink text-cute-dark text-xs sm:text-sm font-semibold shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-cute-pink animate-ping"></span>
              <span>100% Kawaii Handpicked Collection 🧸</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-cute-dark tracking-tight leading-tight">
              Make Your Desk <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cute-pink via-purple-500 to-pink-500">
                Sparkle & Smile!
              </span> 🌸✨
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-cute-dark/70 max-w-xl mx-auto lg:mx-0 font-medium">
              Discover sweet pastel journals, smooth bunny gel pens, and dreamy stickers crafted to bring cozy happiness to your daily study and creative sessions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button 
                onClick={onShopClick}
                className="px-8 py-3.5 bg-cute-pink hover:bg-pink-500 text-white font-bold rounded-full shadow-cute hover:shadow-cute-hover transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 group"
              >
                <span>Explore Cute Goodies</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button 
                onClick={onCategoriesClick || onShopClick}
                className="px-7 py-3.5 bg-white hover:bg-pink-50 text-cute-dark font-semibold rounded-full border border-pink-200 transition-colors shadow-sm"
              >
                Browse Categories 🎀
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 max-w-md mx-auto lg:mx-0 border-t border-pink-100">
              <div className="text-center lg:text-left">
                <p className="text-xl sm:text-2xl font-bold text-cute-pink">10k+</p>
                <p className="text-xs text-cute-dark/60 font-medium">Happy Crafters</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-0.5 text-amber-400">
                  <Star size={16} fill="currentColor" />
                  <span className="text-xl sm:text-2xl font-bold text-cute-dark ml-1">4.9</span>
                </div>
                <p className="text-xs text-cute-dark/60 font-medium">Love Reviews</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-xl sm:text-2xl font-bold text-purple-400">100%</p>
                <p className="text-xs text-cute-dark/60 font-medium">Cute Guaranteed</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Pastel Background Glow Blob */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-pink-300 to-purple-300 rounded-[2.5rem] blur-2xl opacity-40 transform -rotate-3"></div>

              {/* Main Visual Image Card */}
              <div className="relative bg-white p-4 rounded-3xl shadow-xl border border-pink-100 transform hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80" 
                  alt="Cute stationery notebook and pens" 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = FALLBACK_IMAGE;
                  }}
                  className="w-full h-80 sm:h-96 object-cover rounded-2xl"
                />

                {/* Floating Badge 1 */}
                <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-pink-100 flex items-center gap-2.5 animate-float">
                  <span className="text-2xl">🐰</span>
                  <div>
                    <p className="text-xs font-bold text-cute-dark">Bunny Gel Pens</p>
                    <p className="text-[10px] text-pink-500 font-semibold">Back In Stock!</p>
                  </div>
                </div>

                {/* Floating Badge 2 */}
                <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-pink-100 flex items-center gap-2 animate-float-slow">
                  <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-cute-pink">
                    <Heart size={16} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-cute-dark">Free Cute Stickers</p>
                    <p className="text-[10px] text-gray-500">With every order 🎁</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
