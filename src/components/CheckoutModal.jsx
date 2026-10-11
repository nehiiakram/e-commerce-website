import React, { useState } from 'react';
import { X, CheckCircle, Heart, Sparkles, Package } from 'lucide-react';

export default function CheckoutModal({
  isOpen,
  onClose,
  cartItems,
  onOrderSuccess
}) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    paymentMethod: 'cod',
    cuteNote: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      onOrderSuccess();
    }, 4000);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cute-dark/50 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-pink-100 relative animate-scaleUp max-h-[95vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-pink-100 flex items-center justify-between bg-cute-softPink/40">
          <div className="flex items-center gap-2">
            <span className="text-xl">🌸</span>
            <h3 className="text-lg font-bold text-cute-dark">
              {isSuccess ? 'Order Confirmed!' : 'Cute Checkout'}
            </h3>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1 rounded-full hover:bg-pink-100 text-cute-dark transition"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Success Screen */}
        {isSuccess ? (
          <div className="p-8 text-center space-y-5 my-auto">
            <div className="w-20 h-20 mx-auto rounded-full bg-pink-100 text-cute-pink flex items-center justify-center animate-bounce">
              <Sparkles size={40} />
            </div>

            <div className="space-y-2">
              <h4 className="text-2xl font-extrabold text-cute-dark">
                Thank You, {formData.fullName || 'Sweet Friend'}! 💖
              </h4>
              <p className="text-sm text-cute-dark/70 max-w-sm mx-auto leading-relaxed">
                Your order has been received! Our little elves are already packing your kawaii stationery with pastel bubble wrap, ribbons, and free surprise stickers! 🎀
              </p>
            </div>

            <div className="bg-cute-softPink/60 p-4 rounded-2xl text-xs text-cute-dark text-left space-y-1 max-w-sm mx-auto">
              <p><strong>Order ID:</strong> #CUTE-{(Math.random() * 10000).toFixed(0)}</p>
              <p><strong>Shipping to:</strong> {formData.address || 'Your Sweet Home'}</p>
              <p><strong>Payment:</strong> {formData.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online Payment'}</p>
            </div>

            <button
              onClick={handleResetAndClose}
              className="px-8 py-3 bg-cute-pink hover:bg-pink-500 text-white rounded-full font-bold text-sm shadow-md transition"
            >
              Continue Shopping 🌸
            </button>
          </div>
        ) : (
          /* Checkout Form */
          <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4">
            
            {/* Quick summary banner */}
            <div className="p-3 rounded-2xl bg-cute-cream border border-pink-100 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Package size={16} className="text-cute-pink" />
                <span className="font-semibold text-cute-dark">{cartItems.length} items ready to ship</span>
              </div>
              <span className="font-bold text-cute-pink">${total.toFixed(2)}</span>
            </div>

            <div>
              <label className="block text-xs font-bold text-cute-dark mb-1">
                Your Full Name 👤
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Ayesha Khan"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-pink-200 text-xs focus:ring-2 focus:ring-cute-pink/40 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-cute-dark mb-1">
                Email Address 💌
              </label>
              <input
                type="email"
                required
                placeholder="ayesha@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-pink-200 text-xs focus:ring-2 focus:ring-cute-pink/40 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-cute-dark mb-1">
                Delivery Address 🏡
              </label>
              <textarea
                required
                rows={2}
                placeholder="House #, Street, Area, City"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-pink-200 text-xs focus:ring-2 focus:ring-cute-pink/40 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-cute-dark mb-1">
                Payment Method 💳
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <label className={`flex items-center gap-2 p-2.5 rounded-xl border cursor-pointer transition ${formData.paymentMethod === 'cod' ? 'border-cute-pink bg-pink-50 font-bold' : 'border-pink-100'}`}>
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                  />
                  <span>Cash on Delivery 📦</span>
                </label>
                <label className={`flex items-center gap-2 p-2.5 rounded-xl border cursor-pointer transition ${formData.paymentMethod === 'card' ? 'border-cute-pink bg-pink-50 font-bold' : 'border-pink-100'}`}>
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                  />
                  <span>Card / Online 💳</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-cute-dark mb-1">
                Special Note for Us (Optional) 🎀
              </label>
              <input
                type="text"
                placeholder="e.g. Please add extra cute stickers!"
                value={formData.cuteNote}
                onChange={(e) => setFormData({ ...formData, cuteNote: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-pink-200 text-xs focus:ring-2 focus:ring-cute-pink/40 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 py-3.5 bg-cute-pink hover:bg-pink-500 text-white rounded-full font-bold text-sm shadow-cute hover:shadow-cute-hover transition"
            >
              Confirm Order • ${(total).toFixed(2)} 💖
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
