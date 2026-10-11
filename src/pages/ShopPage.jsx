import React, { useState, useMemo } from 'react';
import CategoryFilter from '../components/CategoryFilter';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { Sparkles, X, ArrowUpDown } from 'lucide-react';

export default function ShopPage({
  selectedCategory = 'All',
  setSelectedCategory,
  onAddToCart,
  onToggleWishlist,
  onQuickView,
  wishlist = []
}) {
  const [sortBy, setSortBy] = useState('featured');
  const [onlyUnder10, setOnlyUnder10] = useState(false);

  // Filtered and sorted products
  const displayedProducts = useMemo(() => {
    let list = PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;
      const matchesUnder10 = onlyUnder10 ? product.price < 10 : true;

      return matchesCategory && matchesUnder10;
    });

    // Sorting
    switch (sortBy) {
      case 'price-asc':
        return [...list].sort((a, b) => a.price - b.price);
      case 'price-desc':
        return [...list].sort((a, b) => b.price - a.price);
      case 'rating':
        return [...list].sort((a, b) => b.rating - a.rating);
      case 'name-asc':
        return [...list].sort((a, b) => a.name.localeCompare(b.name));
      default:
        return list; // featured order
    }
  }, [selectedCategory, sortBy, onlyUnder10]);

  const resetAllFilters = () => {
    setSelectedCategory('All');
    setOnlyUnder10(false);
    setSortBy('featured');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 flex-1 w-full">
      
      {/* Cute Page Banner */}
      <div className="bg-gradient-to-r from-cute-softPink via-pink-100/70 to-purple-100/70 rounded-3xl p-6 sm:p-10 border border-pink-200 shadow-sm relative overflow-hidden">
        <div className="max-w-2xl relative z-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-cute-pink text-xs font-bold shadow-sm">
            <Sparkles size={14} />
            <span>Full Catalog Collection</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-cute-dark tracking-tight">
            The Pastel Stationery Haven 🛍️✨
          </h1>
          <p className="text-xs sm:text-sm text-cute-dark/70 font-medium leading-relaxed">
            Find the dreamiest notebooks, gel pens with smooth ink, aesthetic stickers, and cute desk accessories to brighten up your workspace.
          </p>
        </div>
        <div className="absolute right-4 bottom-2 text-7xl select-none opacity-20 pointer-events-none hidden sm:block">
          🌸
        </div>
      </div>

      {/* Category Pills Filter */}
      <CategoryFilter
        categories={CATEGORIES}
        activeCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Controls Bar: Filter & Sort */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-pink-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left: Quick Filter Tags */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            onClick={() => setOnlyUnder10(!onlyUnder10)}
            className={`px-4 py-2 rounded-full text-xs font-bold border transition flex items-center gap-1.5 ${
              onlyUnder10
                ? "bg-cute-pink text-white border-cute-pink shadow-sm"
                : "bg-white text-cute-dark/70 border-pink-200 hover:border-pink-300"
            }`}
          >
            <span>Under $10 💸</span>
          </button>

          {(selectedCategory !== 'All' || onlyUnder10) && (
            <button
              onClick={resetAllFilters}
              className="text-xs font-bold text-cute-pink hover:underline flex items-center gap-1"
            >
              <span>Reset Filters</span>
              <X size={13} />
            </button>
          )}
        </div>

        {/* Right: Sort Dropdown */}
        <div className="flex items-center justify-end gap-2 w-full sm:w-auto">
          <span className="text-xs font-bold text-cute-dark/60 flex items-center gap-1">
            <ArrowUpDown size={12} />
            Sort:
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3.5 py-2 rounded-full border border-pink-200 text-xs font-bold bg-white text-cute-dark focus:outline-none focus:ring-2 focus:ring-cute-pink cursor-pointer"
          >
            <option value="featured">Featured ✨</option>
            <option value="price-asc">Price: Low to High 🏷️</option>
            <option value="price-desc">Price: High to Low 💎</option>
            <option value="rating">Highest Rated ⭐</option>
            <option value="name-asc">Alphabetical (A-Z) 🔤</option>
          </select>
        </div>

      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between border-b border-pink-100 pb-3">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-cute-dark flex items-center gap-2">
            <span>
              {selectedCategory === 'All'
                ? 'All Stationery Goodies'
                : `${selectedCategory} Collection`}
            </span>
            <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-cute-lightPink text-cute-pink">
              {displayedProducts.length} items
            </span>
          </h2>
        </div>
      </div>

      {/* Products Grid */}
      {displayedProducts.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-pink-100 p-8 space-y-4">
          <span className="text-5xl">🐰💭</span>
          <h3 className="text-lg font-bold text-cute-dark">
            No stationery in this selection!
          </h3>
          <p className="text-xs text-cute-dark/60 max-w-sm mx-auto">
            Try resetting your filters to explore all our lovely items.
          </p>
          <button
            onClick={resetAllFilters}
            className="px-6 py-2.5 bg-cute-pink hover:bg-pink-500 text-white rounded-full text-xs font-bold transition shadow-sm"
          >
            Reset Filters 🌸
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
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
      )}

    </div>
  );
}
