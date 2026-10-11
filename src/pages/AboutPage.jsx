import React, { useState } from 'react';
import { Heart, Sparkles, Send, Mail, MapPin, Smile, ChevronDown, CheckCircle2 } from 'lucide-react';
import { FALLBACK_IMAGE } from '../data/products';

export default function AboutPage({ onNavigate, triggerToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    favoriteType: 'Notebooks',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.message) {
      setSubmitted(true);
      if (triggerToast) {
        triggerToast("Thank you for your love note! Mimi the bunny is doing a happy dance! 🐰💖");
      }
      setTimeout(() => {
        setFormData({ name: '', email: '', favoriteType: 'Notebooks', message: '' });
        setSubmitted(false);
      }, 5000);
    }
  };

  const faqs = [
    {
      q: "Do you include free stickers in every single order? 🎁",
      a: "YES! Absolutely! Every single package, no matter how small, includes surprise cute die-cut vinyl stickers and a handwritten pastel thank you note from our mascot team."
    },
    {
      q: "Are the notebooks highlighter and ink-bleed proof? 📔",
      a: "Yes! We hand-test our paper with fountain pens, gel pens, and heavy dual-tip highlighters. Our journals feature 120-160gsm premium cream paper that prevents ghosting and bleeding."
    },
    {
      q: "Can I ship an order directly to a friend as a gift? 🎀",
      a: "Of course! Just enter your friend's shipping address at checkout, and in the love note you can leave a special note. We will package it in extra ribbon and write your custom message on the card!"
    },
    {
      q: "How fast is shipping? 🚚",
      a: "We pack and dispatch all orders within 24-48 hours from our cozy studio. Standard shipping takes 3-5 business days, and we offer free shipping on orders over $25!"
    }
  ];

  const mascots = [
    {
      name: "Mimi the Bunny 🐰",
      role: "Chief Pen Tester",
      desc: "Tests every single pen on 5 types of paper to ensure silky-smooth, zero-skip ink flow."
    },
    {
      name: "Koko the Bear 🐻",
      role: "Master of Cozy Packaging",
      desc: "Hand-wraps each order in baby pink tissue paper and sprinkles surprise sticker gifts inside."
    },
    {
      name: "Neko the Kitten 🐱",
      role: "Softness & Paper Inspector",
      desc: "Naps on notebook covers to verify that the textures are 100% velvety, dreamy, and cozy."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-cute-softPink via-pink-100 to-purple-100 rounded-3xl p-6 sm:p-12 border border-pink-200 shadow-sm text-center relative overflow-hidden">
        <div className="max-w-2xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white text-cute-pink text-xs font-bold shadow-sm">
            <Heart size={14} className="fill-cute-pink" />
            <span>Our Cozy Story</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-cute-dark tracking-tight">
            Welcome to Our Cute Haven 💌🧸
          </h1>
          <p className="text-xs sm:text-sm text-cute-dark/75 font-medium leading-relaxed">
            We believe that every study session, bullet journal page, and doodle deserves a little sprinkle of magic and warmth.
          </p>
        </div>
        <div className="absolute left-6 top-8 text-4xl animate-float select-none opacity-50">🌸</div>
        <div className="absolute right-8 bottom-8 text-4xl animate-float-slow select-none opacity-50">🎀</div>
      </div>

      {/* Story & Origin Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 space-y-5">
          <span className="text-xs font-extrabold text-cute-pink tracking-wider uppercase">How It All Began</span>
          <h2 className="text-2xl sm:text-3xl font-black text-cute-dark">
            Created for Those Who Love Pretty Desks & Cozy Vibes 🌸
          </h2>
          <p className="text-xs sm:text-sm text-cute-dark/80 leading-relaxed font-medium">
            Cute Stationery Shop started in 2024 from a very simple dream: bringing warmth to desks. We noticed that school, university, and work can often feel demanding and gray. But picking up a smooth bunny pen, stamping a tiny bakery sticker, or writing in a lavender planner turns everyday chores into cozy self-care.
          </p>
          <p className="text-xs sm:text-sm text-cute-dark/80 leading-relaxed font-medium">
            Every notebook, washi roll, and pencil case in our shop is handpicked with intention. We look for high aesthetic value, gentle pastel shades, and genuine durability so your tools bring you joy every day.
          </p>
          <div className="pt-2 flex items-center gap-4">
            <button
              onClick={() => onNavigate('shop')}
              className="px-6 py-3 bg-cute-pink hover:bg-pink-500 text-white font-bold rounded-full text-xs sm:text-sm shadow-cute transition"
            >
              Explore Our Collection 🛍️
            </button>
            <button
              onClick={() => onNavigate('categories')}
              className="px-6 py-3 bg-white hover:bg-pink-50 text-cute-dark font-bold rounded-full text-xs sm:text-sm border border-pink-200 transition"
            >
              See Categories 🎀
            </button>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-3 bg-gradient-to-r from-pink-200 to-purple-200 rounded-3xl blur-xl opacity-60"></div>
            <div className="relative bg-white p-4 rounded-3xl border border-pink-200 shadow-xl space-y-3">
              <img
                src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80"
                alt="Stationery desk setup"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = FALLBACK_IMAGE;
                }}
                className="w-full h-72 object-cover rounded-2xl"
              />
              <div className="p-3 bg-cute-softPink/60 rounded-xl text-center">
                <p className="text-xs font-bold text-cute-dark">
                  "Stationery is happiness you can hold in your hands." 🎀
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Mascots */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 border border-pink-100 shadow-sm space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-extrabold text-cute-pink tracking-wider uppercase">The Sweet Team</span>
          <h2 className="text-2xl sm:text-3xl font-black text-cute-dark">
            Meet Our Cute Mascots 🐾
          </h2>
          <p className="text-xs sm:text-sm text-cute-dark/60">
            The furry friends behind every single parcel you receive
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mascots.map((m, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-gradient-to-b from-cute-softPink/60 to-white border border-pink-100 text-center space-y-3 hover:shadow-cute hover:-translate-y-1 transition-all"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-white shadow-sm flex items-center justify-center text-3xl border border-pink-100">
                {m.name.slice(-2)}
              </div>
              <h3 className="font-extrabold text-base text-cute-dark">{m.name}</h3>
              <span className="inline-block px-3 py-1 rounded-full bg-cute-lightPink text-cute-pink text-[11px] font-bold">
                {m.role}
              </span>
              <p className="text-xs text-cute-dark/70 leading-relaxed font-medium">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Our 4 Cozy Promises */}
      <section className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-extrabold text-cute-pink tracking-wider uppercase">Our Standards</span>
          <h2 className="text-2xl sm:text-3xl font-black text-cute-dark">
            The 4 Cozy Guarantees 🧸✨
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white rounded-3xl border border-pink-100 shadow-sm space-y-2">
            <span className="text-3xl block">💌</span>
            <h3 className="font-bold text-cute-dark text-sm sm:text-base">Handwritten Notes</h3>
            <p className="text-xs text-cute-dark/70">
              Each package is personally addressed with love, cute calligraphy, and warmth.
            </p>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-pink-100 shadow-sm space-y-2">
            <span className="text-3xl block">🎁</span>
            <h3 className="font-bold text-cute-dark text-sm sm:text-base">Free Sticker Gifts</h3>
            <p className="text-xs text-cute-dark/70">
              Never an empty envelope. You always receive bonus stickers to deck out your notebooks.
            </p>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-pink-100 shadow-sm space-y-2">
            <span className="text-3xl block">🌿</span>
            <h3 className="font-bold text-cute-dark text-sm sm:text-base">Eco Pastel Mailers</h3>
            <p className="text-xs text-cute-dark/70">
              Recyclable pink bubble mailers and unbleached paper tissue to protect our planet.
            </p>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-pink-100 shadow-sm space-y-2">
            <span className="text-3xl block">💖</span>
            <h3 className="font-bold text-cute-dark text-sm sm:text-base">Happiness Guarantee</h3>
            <p className="text-xs text-cute-dark/70">
              If an item isn't 100% as sweet as you dreamed, we gladly replace or refund it immediately!
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Send a Love Note / Contact Form */}
      <section className="bg-gradient-to-r from-cute-softPink via-pink-100/70 to-purple-100/70 rounded-3xl p-6 sm:p-12 border border-pink-200 shadow-sm">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <span className="inline-block p-3 rounded-2xl bg-white text-cute-pink shadow-sm">
              <Mail size={24} />
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-cute-dark">
              Send Us a Cute Love Note 💌
            </h2>
            <p className="text-xs sm:text-sm text-cute-dark/70 font-medium">
              Have a stationery request, a question, or just want to tell Mimi the Bunny hello? Drop us a note!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-8 border border-pink-100 shadow-sm space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-cute-dark mb-1">Your Name 🌸</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ayla or Sarah"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl border border-pink-200 text-xs sm:text-sm bg-cute-softPink/30 focus:outline-none focus:ring-2 focus:ring-cute-pink"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-cute-dark mb-1">Your Email 📧</label>
                <input
                  type="email"
                  required
                  placeholder="hello@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl border border-pink-200 text-xs sm:text-sm bg-cute-softPink/30 focus:outline-none focus:ring-2 focus:ring-cute-pink"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-cute-dark mb-1">Favorite Stationery Category 🎀</label>
              <select
                value={formData.favoriteType}
                onChange={(e) => setFormData({ ...formData, favoriteType: e.target.value })}
                className="w-full px-4 py-2.5 rounded-2xl border border-pink-200 text-xs sm:text-sm bg-cute-softPink/30 focus:outline-none focus:ring-2 focus:ring-cute-pink cursor-pointer font-medium"
              >
                <option value="Notebooks">Pastel Notebooks & Planners 📔</option>
                <option value="Kawaii Pens">Bunny & Gel Pens 🖊️</option>
                <option value="Stickers">Aesthetic Vinyl Stickers 🎀</option>
                <option value="Washi Tapes">Floral & Foil Washi Tapes 🎨</option>
                <option value="Desk Accessories">Desk Organizers & Cases 🗂️</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-cute-dark mb-1">Your Sweet Message 💭</label>
              <textarea
                required
                rows={4}
                placeholder="Write your note here... We read and cherish every single message!"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-2xl border border-pink-200 text-xs sm:text-sm bg-cute-softPink/30 focus:outline-none focus:ring-2 focus:ring-cute-pink resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-cute-pink hover:bg-pink-500 text-white rounded-full font-bold text-xs sm:text-sm shadow-cute transition flex items-center justify-center gap-2"
            >
              <Send size={15} />
              <span>Send Note to the Team 💖</span>
            </button>

            {submitted && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs font-bold text-emerald-700 text-center animate-fadeIn">
                🌸 Note received! Mimi the bunny is writing back right now! Thank you!
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-extrabold text-cute-pink tracking-wider uppercase">Got Questions?</span>
          <h2 className="text-2xl sm:text-3xl font-black text-cute-dark">
            Frequently Asked Questions 🐰❓
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-pink-100 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left font-bold text-xs sm:text-sm text-cute-dark flex items-center justify-between gap-4 hover:text-cute-pink transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform text-pink-400 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 pt-1 text-xs text-cute-dark/75 leading-relaxed font-medium border-t border-pink-50 bg-cute-softPink/30">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
