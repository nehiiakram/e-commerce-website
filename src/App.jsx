import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import CategoriesPage from './pages/CategoriesPage';
import BestsellersPage from './pages/BestsellersPage';
import AboutPage from './pages/AboutPage';
import ProductDetailModal from './components/ProductDetailModal';
import CartModal from './components/CartModal';
import WishlistModal from './components/WishlistModal';
import CheckoutModal from './components/CheckoutModal';
import { Sparkles } from 'lucide-react';

export default function App() {
  // Page Routing State (pure React state)
  const [currentPage, setCurrentPage] = useState('home');

  // State for Cart with localStorage persistence
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('cute_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // State for Wishlist with localStorage persistence
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('cute_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Filtering state
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Modals state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Toast notification for user feedback
  const [toastMessage, setToastMessage] = useState('');

  // Save cart & wishlist changes to localStorage
  useEffect(() => {
    localStorage.setItem('cute_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('cute_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Show a quick cute toast
  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 2500);
  };

  // Handle page navigation
  const handleNavigate = (page, category = null) => {
    setCurrentPage(page);
    if (category) {
      setSelectedCategory(category);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Add product to Cart
  const handleAddToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
    triggerToast(`Added "${product.name}" to your bag! 💖`);
  };

  // Update product quantity in cart
  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove from cart
  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    triggerToast('Item removed from bag 🌸');
  };

  // Toggle favorite / wishlist
  const handleToggleWishlist = (product) => {
    const isSaved = wishlist.some((item) => item.id === product.id);
    if (isSaved) {
      setWishlist((prev) => prev.filter((item) => item.id !== product.id));
      triggerToast('Removed from your favorites 💔');
    } else {
      setWishlist((prev) => [...prev, product]);
      triggerToast('Saved to your favorites! 💖');
    }
  };

  // Proceed to Checkout
  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  // Order success cleanup
  const handleOrderSuccess = () => {
    setCart([]);
    setIsCheckoutOpen(false);
    triggerToast('Hooray! Order placed successfully! 🎀');
  };

  const cartTotalCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-cute-cream flex flex-col font-sans selection:bg-cute-pink selection:text-white">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-white/95 backdrop-blur-md border border-pink-200 shadow-cute px-5 py-3 rounded-2xl flex items-center gap-2.5 text-xs sm:text-sm font-bold text-cute-dark animate-slideUp">
          <Sparkles size={16} className="text-cute-pink" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation Bar */}
      <Navbar
        activePage={currentPage}
        onNavigate={handleNavigate}
        cartCount={cartTotalCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
      />

      {/* Dynamic Page Views (Pure React) */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            onQuickView={setSelectedProduct}
            wishlist={wishlist}
          />
        )}

        {currentPage === 'shop' && (
          <ShopPage
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            onQuickView={setSelectedProduct}
            wishlist={wishlist}
          />
        )}

        {currentPage === 'categories' && (
          <CategoriesPage
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            onQuickView={setSelectedProduct}
            wishlist={wishlist}
          />
        )}

        {currentPage === 'bestsellers' && (
          <BestsellersPage
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            onQuickView={setSelectedProduct}
            wishlist={wishlist}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            triggerToast={triggerToast}
          />
        )}
      </main>

      {/* Modals - Available globally on every page */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        isFavorite={selectedProduct ? wishlist.some((item) => item.id === selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
      />

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onProceedToCheckout={handleProceedToCheckout}
      />

      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistItems={wishlist}
        onRemoveFromWishlist={(id) => setWishlist((prev) => prev.filter((item) => item.id !== id))}
        onAddToCart={handleAddToCart}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cart}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
