import React, { useState, useEffect } from 'react';
import { X, Star, Heart, ShoppingBag, Truck, ShieldCheck, Plus, Minus } from 'lucide-react';
import { getCategoryFallback, FALLBACK_IMAGE } from '../data/products';

export default function ProductDetailModal({
  product,
  isOpen,
  onClose,
  isFavorite,
  onToggleWishlist,
  onAddToCart,
}) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    if (product) {
      setImgSrc(product.image || getCategoryFallback(product.category));
      setQuantity(1);
    }
  }, [product]);

  if (!isOpen || !product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cute-dark/50 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-pink-100 relative animate-scaleUp max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-cute-dark hover:text-cute-pink transition shadow"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Product Image */}
        <div className="md:w-1/2 bg-cute-softPink/40 p-6 flex items-center justify-center">
          <img
            src={imgSrc}
            alt={product.name}
            onError={(e) => {
              e.target.onerror = null;
              setImgSrc(getCategoryFallback(product.category));
            }}
            className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-sm"
          />
        </div>

        {/* Product Info */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-cute-pink uppercase tracking-wider">
                {product.category}
              </span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                <Star size={14} fill="currentColor" />
                <span>{product.rating}</span>
                <span className="text-gray-400">({product.reviews} reviews)</span>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-cute-dark">
              {product.name}
            </h3>

            {/* Price */}
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-cute-dark">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                In Stock & Ready to Ship 🌸
              </span>
            </div>

            <p className="text-xs sm:text-sm text-cute-dark/70 leading-relaxed">
              {product.description}
            </p>

            {/* Perks list */}
            <div className="pt-2 border-t border-pink-100 space-y-1.5 text-xs text-cute-dark/80">
              <div className="flex items-center gap-2">
                <Truck size={14} className="text-pink-400" />
                <span>Fast & Safe Bubble-wrapped packaging</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-purple-400" />
                <span>100% Quality checked stationery</span>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-6 space-y-3">
            <div className="flex items-center gap-3">
              {/* Quantity Selector */}
              <div className="flex items-center border border-pink-200 rounded-full bg-cute-softPink/50 px-2 py-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1 hover:text-cute-pink rounded-full transition"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-8 text-center text-sm font-bold text-cute-dark">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1 hover:text-cute-pink rounded-full transition"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>

              {/* Add to Wishlist Toggle */}
              <button
                onClick={() => onToggleWishlist(product)}
                className={`p-2.5 rounded-full border border-pink-200 transition ${
                  isFavorite
                    ? "bg-cute-lightPink text-cute-pink"
                    : "bg-white text-gray-400 hover:text-cute-pink"
                }`}
                title="Save to Wishlist"
              >
                <Heart size={20} className={isFavorite ? "fill-cute-pink" : ""} />
              </button>
            </div>

            {/* Add to Cart CTA */}
            <button
              onClick={handleAdd}
              className={`w-full py-3.5 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition shadow-md ${
                added 
                  ? "bg-emerald-500 text-white" 
                  : "bg-cute-pink hover:bg-pink-500 text-white shadow-pink-200"
              }`}
            >
              <ShoppingBag size={18} />
              <span>{added ? "Added to your Bag! 💖" : `Add to Bag • $${(product.price * quantity).toFixed(2)}`}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
