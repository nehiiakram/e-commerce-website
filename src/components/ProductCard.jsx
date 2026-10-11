import React, { useState, useEffect } from 'react';
import { Heart, ShoppingBag, Eye, Star, Check } from 'lucide-react';
import { getCategoryFallback, FALLBACK_IMAGE } from '../data/products';

export default function ProductCard({
  product,
  isFavorite,
  onToggleWishlist,
  onAddToCart,
  onQuickView,
}) {
  const [justAdded, setJustAdded] = useState(false);
  const [imgSrc, setImgSrc] = useState(product.image || getCategoryFallback(product.category));

  useEffect(() => {
    setImgSrc(product.image || getCategoryFallback(product.category));
  }, [product.image, product.category]);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    onAddToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <div 
      onClick={() => onQuickView(product)}
      className="group bg-white rounded-3xl p-3.5 border border-pink-100/90 shadow-sm hover:shadow-cute hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer"
    >
      {/* Product Image Area */}
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-pink-50/50 mb-3.5 flex items-center justify-center">
        <img
          src={imgSrc}
          alt={product.name}
          onError={(e) => {
            e.target.onerror = null;
            setImgSrc(getCategoryFallback(product.category));
          }}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Badge */}
        {product.badge && (
          <span className={`absolute top-2.5 left-2.5 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm ${product.badgeColor || 'bg-cute-pink text-white'}`}>
            {product.badge}
          </span>
        )}

        {/* Favorite / Wishlist Heart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className="absolute top-2.5 right-2.5 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white text-cute-dark shadow-sm transition hover:scale-110"
          aria-label="Wishlist"
        >
          <Heart
            size={18}
            className={isFavorite ? "fill-cute-pink text-cute-pink animate-pulse" : "text-gray-400 hover:text-cute-pink"}
          />
        </button>

        {/* Quick View Hover Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(product);
          }}
          className="absolute bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-cute-dark text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-200 shadow flex items-center gap-1.5 hover:text-cute-pink"
        >
          <Eye size={14} />
          <span>Quick View</span>
        </button>
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col justify-between space-y-2">
        <div>
          {/* Category Tag & Rating */}
          <div className="flex items-center justify-between text-xs text-cute-dark/60 mb-1">
            <span className="font-semibold text-pink-400">{product.category}</span>
            <div className="flex items-center gap-1 text-amber-500 font-bold">
              <Star size={13} fill="currentColor" />
              <span>{product.rating}</span>
              <span className="text-[10px] text-gray-400">({product.reviews})</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-bold text-cute-dark text-sm sm:text-base line-clamp-1 group-hover:text-cute-pink transition-colors">
            {product.name}
          </h3>

          <p className="text-xs text-cute-dark/60 line-clamp-2 mt-1 font-medium">
            {product.description}
          </p>
        </div>

        {/* Price and Add Button */}
        <div className="pt-2 flex items-center justify-between border-t border-pink-50">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-base sm:text-lg font-extrabold text-cute-dark">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-gray-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>

          {/* Add to Cart button */}
          <button
            onClick={handleAddToCart}
            className={`px-3.5 py-2 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 shadow-sm ${
              justAdded
                ? "bg-emerald-500 text-white scale-105"
                : "bg-cute-lightPink hover:bg-cute-pink text-cute-pink hover:text-white"
            }`}
          >
            {justAdded ? (
              <>
                <Check size={14} />
                <span>Added! 💖</span>
              </>
            ) : (
              <>
                <ShoppingBag size={14} />
                <span>Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
