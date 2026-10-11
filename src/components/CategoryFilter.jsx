import React from 'react';

const categoryEmojis = {
  "All": "✨",
  "Notebooks": "📔",
  "Kawaii Pens": "🖊️",
  "Stickers": "🎀",
  "Washi Tapes": "🎨",
  "Desk Accessories": "🗂️"
};

export default function CategoryFilter({ categories, activeCategory, onSelectCategory }) {
  return (
    <div id="categories" className="py-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-cute-dark">
            Shop By Category 🌸
          </h2>
          <p className="text-xs sm:text-sm text-cute-dark/60">
            Pick your favorite sweet stationery treat
          </p>
        </div>
      </div>

      {/* Category Pills List */}
      <div className="flex items-center gap-2.5 overflow-x-auto pb-3 pt-1 no-scrollbar">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          const emoji = categoryEmojis[category] || "💖";

          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 border ${
                isActive
                  ? "bg-cute-pink text-white border-cute-pink shadow-md shadow-pink-200 scale-105"
                  : "bg-white text-cute-dark/80 border-pink-200/80 hover:bg-cute-lightPink/40 hover:border-pink-300"
              }`}
            >
              <span className="text-base">{emoji}</span>
              <span>{category}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
