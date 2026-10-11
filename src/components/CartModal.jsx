import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag } from 'lucide-react';
import { FALLBACK_IMAGE } from '../data/products';

export default function CartModal({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout
}) {
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponMessage, setCouponMessage] = useState('');

  if (!isOpen) return null;

  // Calculate pricing
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const shippingFee = subtotal > 25 || subtotal === 0 ? 0 : 3.99;
  const total = Math.max(0, subtotal - discountAmount + shippingFee);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'CUTE10') {
      setDiscountPercent(10);
      setCouponMessage('Yay! 10% discount applied! 🎀');
    } else {
      setCouponMessage('Oops! Invalid code. Try "CUTE10" ✨');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-cute-dark/40 backdrop-blur-xs animate-fadeIn">
      {/* Backdrop click to close */}
      <div className="flex-1" onClick={onClose}></div>

      {/* Slide-in Drawer */}
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col border-l border-pink-100 animate-slideLeft">
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-pink-100 flex items-center justify-between bg-cute-softPink/30">
          <div className="flex items-center gap-2">
            <ShoppingBag className="text-cute-pink" size={22} />
            <h2 className="text-lg font-bold text-cute-dark">
              Your Cute Bag ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-pink-100 text-cute-dark transition"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Progress */}
        <div className="bg-cute-lightPink/40 px-5 py-2.5 border-b border-pink-100 text-xs text-cute-dark">
          {subtotal >= 25 ? (
            <p className="font-semibold text-emerald-600 flex items-center gap-1.5">
              <span>🎉</span> You unlocked <strong>Free Cute Shipping!</strong>
            </p>
          ) : (
            <div>
              <p className="font-medium">
                Add <strong className="text-cute-pink">${(25 - subtotal).toFixed(2)}</strong> more for Free Shipping! 🚀
              </p>
              <div className="w-full bg-pink-100 h-1.5 rounded-full mt-1.5 overflow-hidden">
                <div 
                  className="bg-cute-pink h-full rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(100, (subtotal / 25) * 100)}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <span className="text-6xl animate-bounce">🛍️</span>
              <h3 className="text-lg font-bold text-cute-dark">Your bag is empty!</h3>
              <p className="text-xs text-cute-dark/60 max-w-xs">
                Looks like you haven't picked any cute goodies yet. Explore our pens, notebooks, and stickers!
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-cute-pink hover:bg-pink-500 text-white rounded-full font-bold text-xs shadow-sm transition"
              >
                Start Shopping 🌸
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
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

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center border border-pink-200 rounded-full bg-white px-1.5 py-0.5 text-xs">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="p-0.5 hover:text-cute-pink text-cute-dark"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="w-5 text-center font-bold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="p-0.5 hover:text-cute-pink text-cute-dark"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-gray-400 hover:text-red-400 p-1 text-xs transition"
                      title="Remove item"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-bold text-cute-dark">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with Coupon & Checkout */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-pink-100 bg-white space-y-4">
            
            {/* Promo code form */}
            <form onSubmit={handleApplyCoupon} className="flex gap-2">
              <div className="relative flex-1">
                <Tag className="absolute left-3 top-2.5 text-pink-300" size={14} />
                <input
                  type="text"
                  placeholder="Promo code (CUTE10)"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="w-full pl-8 pr-3 py-2 text-xs rounded-full border border-pink-200 focus:outline-none focus:ring-1 focus:ring-cute-pink uppercase tracking-wider"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-cute-lightPink hover:bg-cute-pink text-cute-pink hover:text-white rounded-full text-xs font-bold transition"
              >
                Apply
              </button>
            </form>
            {couponMessage && (
              <p className={`text-[11px] font-semibold ${discountPercent > 0 ? 'text-emerald-600' : 'text-rose-500'}`}>
                {couponMessage}
              </p>
            )}

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-cute-dark/80 pt-2 border-t border-pink-100">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              {discountPercent > 0 && (
                <div className="flex justify-between text-emerald-600 font-semibold">
                  <span>Discount ({discountPercent}%)</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shippingFee === 0 ? <strong className="text-emerald-600">FREE</strong> : `$${shippingFee.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-sm font-extrabold text-cute-dark pt-2 border-t border-pink-100">
                <span>Total</span>
                <span className="text-cute-pink text-base">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={onProceedToCheckout}
              className="w-full py-3.5 bg-cute-pink hover:bg-pink-500 text-white rounded-full font-bold text-sm shadow-cute hover:shadow-cute-hover flex items-center justify-center gap-2 transition transform hover:-translate-y-0.5"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
