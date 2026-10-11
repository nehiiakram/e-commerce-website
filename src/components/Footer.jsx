import React, { useState } from 'react';
import { Heart, Send, Sparkles, Mail, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const handleNav = (page, category = null) => {
    if (onNavigate) {
      onNavigate(page, category);
    }
  };

  return (
    <footer className="bg-white border-t border-pink-100 pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Cute Box */}
        <div className="bg-gradient-to-r from-cute-softPink via-pink-100/60 to-purple-100/60 rounded-3xl p-8 sm:p-10 mb-16 text-center border border-pink-200/60 shadow-sm relative overflow-hidden">
          <div className="relative z-10 max-w-xl mx-auto space-y-4">
            <span className="inline-block p-3 rounded-2xl bg-white text-cute-pink shadow-sm">
              <Mail size={24} />
            </span>
            
            <h3 className="text-2xl sm:text-3xl font-extrabold text-cute-dark">
              Join the Kawaii Club 💌
            </h3>
            
            <p className="text-xs sm:text-sm text-cute-dark/70 font-medium">
              Subscribe to get secret discounts, cute free phone wallpapers, and early access to new sticker drops!
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2">
              <input
                type="email"
                required
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-3 rounded-full border border-pink-200 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-cute-pink"
              />
              <button
                type="submit"
                className="px-7 py-3 bg-cute-pink hover:bg-pink-500 text-white rounded-full font-bold text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-1.5"
              >
                <span>Join</span>
                <Send size={14} />
              </button>
            </form>

            {subscribed && (
              <p className="text-xs font-bold text-emerald-600 animate-fadeIn">
                🌸 Welcome to the club! We sent a 15% discount code to your inbox!
              </p>
            )}
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-pink-100">
          
          {/* Brand Info */}
          <div className="space-y-3">
            <button 
              onClick={() => handleNav('home')}
              className="flex items-center gap-2 text-left focus:outline-none"
            >
              <span className="text-2xl">🌸</span>
              <h4 className="text-lg font-bold text-cute-dark hover:text-cute-pink transition">
                Cute Stationery Shop
              </h4>
            </button>
            <p className="text-xs text-cute-dark/70 leading-relaxed font-medium">
              Bringing happiness and cuteness to your desk every single day. Made with love for planners, students, artists, and stationery lovers everywhere.
            </p>
            <div className="flex items-center gap-3 pt-2 text-cute-pink">
              <span className="p-2 bg-cute-softPink rounded-full hover:bg-cute-pink hover:text-white transition cursor-pointer">
                <Instagram size={16} />
              </span>
              <span className="p-2 bg-cute-softPink rounded-full hover:bg-cute-pink hover:text-white transition cursor-pointer">
                <Twitter size={16} />
              </span>
              <span className="p-2 bg-cute-softPink rounded-full hover:bg-cute-pink hover:text-white transition cursor-pointer">
                <Facebook size={16} />
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h5 className="text-sm font-bold text-cute-dark tracking-wide uppercase">
              Shop Categories
            </h5>
            <ul className="space-y-2 text-xs text-cute-dark/70 font-medium">
              <li>
                <button onClick={() => handleNav('shop', 'Notebooks')} className="hover:text-cute-pink transition">
                  Pastel Journals 📔
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('shop', 'Kawaii Pens')} className="hover:text-cute-pink transition">
                  Bunny Gel Pens 🖊️
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('shop', 'Stickers')} className="hover:text-cute-pink transition">
                  Vinyl Sticker Packs 🎀
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('shop', 'Washi Tapes')} className="hover:text-cute-pink transition">
                  Washi Tape Bundles 🎨
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('shop', 'Desk Accessories')} className="hover:text-cute-pink transition">
                  Cute Desk Organizers 🗂️
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-3">
            <h5 className="text-sm font-bold text-cute-dark tracking-wide uppercase">
              Explore Pages
            </h5>
            <ul className="space-y-2 text-xs text-cute-dark/70 font-medium">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-cute-pink transition">
                  Home Page 🌸
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('shop')} className="hover:text-cute-pink transition">
                  All Products Catalog 🛍️
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('categories')} className="hover:text-cute-pink transition">
                  Categories Showcase 🎀
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('bestsellers')} className="hover:text-cute-pink transition">
                  Top Bestsellers 🏆
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-cute-pink transition">
                  About Us & Contact 💌
                </button>
              </li>
            </ul>
          </div>

          {/* About / Promise */}
          <div className="space-y-3">
            <h5 className="text-sm font-bold text-cute-dark tracking-wide uppercase">
              Our Promise 🧸
            </h5>
            <p className="text-xs text-cute-dark/70 leading-relaxed font-medium">
              Every single order is carefully inspected, packed with bubble wrap, sprinkled with free cute stickers, and sealed with love.
            </p>
            <div className="p-3 bg-pink-50 rounded-2xl border border-pink-100 text-[11px] text-pink-600 font-semibold">
              ✨ Free handwritten thank you card in every parcel!
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 text-center text-xs text-cute-dark/60">
          <p>
            © {new Date().getFullYear()} Cute Stationery Shop. All rights reserved. 🌸
          </p>
        </div>

      </div>
    </footer>
  );
}
