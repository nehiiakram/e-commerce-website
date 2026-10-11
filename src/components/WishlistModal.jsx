import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { FALLBACK_IMAGE } from '../data/products';

export default function WishlistModal({
  isOpen,
  onClose,
  wishlistItems,
  onRemoveFromWishlist,
  onAddToCart
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-cute-dark/40 backdrop-blur-xs animate-fadeIn">
      {/* Backdrop */}
      <div className="flex-1" onClick={onClose}></div>

      {/* Slide-in drawer */}
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col border-l border-pink-100 animate-slideLeft">
        
        {/* Header */}
        <div className="p-5 border-b border-pink-100 flex items-center justify-between bg-cute-softPink/30">
          <div className="flex items-center gap-2">
            <Heart className="text-cute-pink fill-cute-pink" size={22} />
            <h2 className="text-lg font-bold text-cute-dark">
              Your Loved Items ({wishlistItems.length})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-pink-100 text-cute-dark transition"
            aria-label="Close wishlist"
          >
            <X size={20} />
          </button>
        </div>

        {/* Wishlist Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {wishlistItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <span className="text-6xl animate-bounce">💖</span>
              <h3 className="text-lg font-bold text-cute-dark">No favorites yet!</h3>
              <p className="text-xs text-cute-dark/60 max-w-xs">
                Click on the little heart on any product to save it here for later!
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-cute-pink hover:bg-pink-500 text-white rounded-full font-bold text-xs shadow-sm transition"
              >
                Find Cute Things 🌸
              </button>
            </div>
          ) : (
            wishlistItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 p-3 rounded-2xl border border-pink-100 bg-cute-cream/40"
              >
                <img
                  src={item.image || FALLBACK_IMAGE}
                  alt={item.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = FALLBACK_IMAGE;
                  }}
                  className="w-16 h-16 rounded-xl object-cover border border-pink-50"
                />

                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-cute-dark truncate">
                    {item.name}
                  </h4>
                  <p className="text-xs text-cute-pink font-extrabold mt-0.5">
                    ${item.price.toFixed(2)}
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => {
                        onAddToCart(item);
                        onRemoveFromWishlist(item.id);
                      }}
                      className="px-3 py-1 bg-cute-pink hover:bg-pink-500 text-white rounded-full text-xs font-bold flex items-center gap-1 shadow-xs transition"
                    >
                      <ShoppingBag size={12} />
                      <span>Move to Bag</span>
                    </button>

                    <button
                      onClick={() => onRemoveFromWishlist(item.id)}
                      className="text-gray-400 hover:text-red-400 p-1 text-xs transition"
                      title="Remove"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
