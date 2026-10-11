import React, { useState, useEffect } from 'react';
import { ShoppingBag, Heart, Menu, X, Sparkles, ChevronRight } from 'lucide-react';

export default function Navbar({ 
  activePage = 'home',
  onNavigate,
  cartCount = 0, 
  wishlistCount = 0, 
  onOpenCart, 
  onOpenWishlist
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home', emoji: '🌸' },
    { id: 'shop', label: 'Shop All', emoji: '🛍️' },
    { id: 'categories', label: 'Categories', emoji: '🎀' },
    { id: 'bestsellers', label: 'Bestsellers', emoji: '✨' },
    { id: 'about', label: 'About Us', emoji: '💌' },
  ];

  // Auto-close menu if resized to desktop breakpoint (1024px+)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (pageId) => {
    if (onNavigate) {
      onNavigate(pageId);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-pink-100 shadow-sm transition-all duration-300">
      {/* Top Cute Announcement Bar */}
      <div className="bg-gradient-to-r from-cute-pink via-purple-300 to-cute-pink text-white text-[11px] sm:text-xs md:text-sm py-2 px-3 sm:px-4 text-center font-medium tracking-wide flex items-center justify-center gap-1.5 sm:gap-2">
        <Sparkles size={13} className="animate-spin text-yellow-200 flex-shrink-0" />
        <span className="truncate">Free Shipping on orders over $25! Code <strong className="underline underline-offset-2">CUTE10</strong> for 10% off</span>
        <Sparkles size={13} className="animate-spin text-yellow-200 flex-shrink-0 hidden xs:inline" />
      </div>

      {/* Main Navbar Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20 gap-2 sm:gap-4">
          
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 group flex-shrink-0 text-left focus:outline-none"
            aria-label="Cute Stationery Shop Home"
          >
            <span className="text-2xl sm:text-3xl transform group-hover:rotate-12 transition-transform duration-300">🌸</span>
            <div>
              <h1 className="text-base sm:text-xl lg:text-2xl font-black tracking-tight text-cute-dark group-hover:text-cute-pink transition-colors leading-tight">
                Cute Stationery Shop
              </h1>
              <p className="text-[9px] sm:text-[11px] text-pink-400 font-semibold tracking-wider uppercase hidden xs:block">
                Kawaii • Aesthetic • Love
              </p>
            </div>
          </button>

          {/* Navigation Links - Desktop View (Hidden on Tablets & Mobile) */}
          <nav className="hidden lg:flex items-center gap-2 text-sm font-semibold text-cute-dark/80">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-2 rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? "bg-cute-lightPink text-cute-pink font-extrabold shadow-sm scale-105 ring-1 ring-pink-200"
                      : "hover:text-cute-pink hover:bg-pink-50 text-cute-dark/80"
                  }`}
                >
                  <span>{link.emoji}</span>
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action Icons (Wishlist, Cart, and Toggle Menu Button) */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            
            {/* Wishlist Button */}
            <button 
              onClick={onOpenWishlist}
              className="relative p-2 sm:p-2.5 text-cute-dark hover:text-cute-pink hover:bg-cute-lightPink/50 rounded-full transition"
              title="View Wishlist"
              aria-label="Wishlist"
            >
              <Heart size={21} className={wishlistCount > 0 ? "fill-cute-pink text-cute-pink" : ""} />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-cute-pink text-white text-[10px] sm:text-[11px] font-bold w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button 
              onClick={onOpenCart}
              className="relative p-2 sm:p-2.5 bg-cute-lightPink hover:bg-cute-pink text-cute-pink hover:text-white rounded-full transition-all duration-200 shadow-sm flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5"
              aria-label="Shopping Cart"
            >
              <ShoppingBag size={19} />
              <span className="text-xs font-bold hidden sm:inline">Bag</span>
              {cartCount > 0 && (
                <span className="bg-cute-pink text-white text-[10px] sm:text-[11px] font-bold w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full flex items-center justify-center border-2 border-white group-hover:bg-white group-hover:text-cute-pink">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile / Tablet Toggle Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 sm:p-2.5 rounded-2xl transition-all duration-200 flex items-center justify-center border ${
                mobileMenuOpen
                  ? "bg-cute-pink text-white border-cute-pink shadow-cute"
                  : "bg-cute-lightPink/70 hover:bg-cute-lightPink text-cute-dark border-pink-200"
              }`}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              title="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>

        {/* Mobile & Tablet Dropdown Drawer (Shown when toggle is clicked) */}
        {mobileMenuOpen && (
          <>
            {/* Soft Backdrop to close when clicking outside */}
            <div 
              className="fixed inset-0 bg-cute-dark/25 backdrop-blur-xs z-30 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Dropdown Menu Container */}
            <div className="lg:hidden relative z-40 pb-5 pt-3 border-t border-pink-100 space-y-4 animate-slideDown">
              
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-bold text-cute-dark/60 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles size={13} className="text-cute-pink" />
                  <span>Explore Shop</span>
                </span>
                <span className="text-[11px] font-bold text-cute-pink bg-cute-lightPink px-2.5 py-0.5 rounded-full">
                  5 Pages 🌸
                </span>
              </div>

              {/* Navigation Items List */}
              <div className="flex flex-col gap-2 font-medium text-sm">
                {navLinks.map((link) => {
                  const isActive = activePage === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleNavClick(link.id)}
                      className={`px-4 py-3 rounded-2xl text-left flex items-center justify-between transition-all ${
                        isActive
                          ? "bg-cute-pink text-white font-extrabold shadow-md shadow-pink-200 scale-[1.01]"
                          : "bg-cute-softPink/50 hover:bg-cute-lightPink text-cute-dark font-bold hover:translate-x-1"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{link.emoji}</span>
                        <span className="text-sm">{link.label}</span>
                      </div>
                      {isActive ? (
                        <span className="text-[11px] font-bold bg-white/25 px-2.5 py-0.5 rounded-full">
                          Active ✨
                        </span>
                      ) : (
                        <ChevronRight size={16} className="text-pink-300" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Quick Actions at Bottom of Mobile Menu */}
              <div className="pt-2 border-t border-pink-100 grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenWishlist();
                  }}
                  className="p-3 rounded-2xl bg-white border border-pink-200 hover:bg-pink-50 text-cute-dark text-xs font-bold flex items-center justify-center gap-2 transition shadow-xs"
                >
                  <Heart size={16} className={wishlistCount > 0 ? "fill-cute-pink text-cute-pink" : ""} />
                  <span>Favorites ({wishlistCount})</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCart();
                  }}
                  className="p-3 rounded-2xl bg-cute-lightPink border border-pink-200 hover:bg-cute-pink hover:text-white text-cute-pink text-xs font-bold flex items-center justify-center gap-2 transition shadow-xs"
                >
                  <ShoppingBag size={16} />
                  <span>My Bag ({cartCount})</span>
                </button>
              </div>

            </div>
          </>
        )}
      </div>
    </header>
  );
}
