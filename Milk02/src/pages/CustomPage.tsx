import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus } from 'lucide-react';

export default function CustomPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { items, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();
  
  const [formData, setFormData] = useState({ name: '', phone: '', address: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if coming back from success URL
    if (location.search.includes('success=true')) {
      setSubmitted(true);
      clearCart();
    }
  }, [location]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;
    
    setLoading(true);

    try {
      // Simulate an API call delay for checkout
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitted(true);
      clearCart();
    } catch (error) {
      console.error('Checkout error:', error);
      alert('An error occurred during checkout. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen font-sans bg-bg text-text-primary flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-24 md:py-32 flex flex-col items-center">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-text-primary mb-6">
            Your Cart & Checkout
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto mb-4">
            Review your items and complete your order.
          </p>
        </div>

        <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-8 items-start justify-center">
          {submitted ? (
            <div className="bg-surface border border-border rounded-3xl p-8 md:p-12 w-full text-center shadow-sm">
              <div className="w-20 h-20 bg-brand text-white rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">✓</div>
              <h2 className="text-3xl font-serif font-bold text-brand mb-4">Order Confirmed!</h2>
              <p className="text-lg text-text-muted mb-8">
                Thank you for your order! We'll start processing it right away.
              </p>
              <button 
                onClick={() => navigate('/')}
                className="bg-accent text-white px-8 py-3 rounded-full font-bold hover:bg-accent-dark transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              {/* Cart Items Section */}
              <div className="bg-surface border border-border rounded-3xl p-6 md:p-8 w-full lg:w-3/5 shadow-sm">
                <h2 className="text-2xl font-bold font-serif mb-6 border-b border-border pb-4">Order Summary</h2>
                
                {items.length === 0 ? (
                  <div className="text-center py-12 text-text-muted">
                    <p className="mb-6">Your cart is currently empty.</p>
                    <button onClick={() => navigate('/')} className="bg-brand text-white px-6 py-2 rounded-full font-bold">Start Shopping</button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {items.map((item) => (
                      <div key={item.name} className="flex items-center gap-4 border-b border-border pb-6 last:border-0 last:pb-0">
                        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl" />
                        <div className="flex-grow">
                          <h3 className="font-bold text-lg">{item.name}</h3>
                          <p className="text-brand font-bold text-sm">{item.price}</p>
                        </div>
                        <div className="flex items-center gap-3 bg-bg rounded-lg border border-border p-1">
                          <button onClick={() => updateQuantity(item.name, item.quantity - 1)} className="p-1 hover:text-brand"><Minus size={16}/></button>
                          <span className="font-bold w-4 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.name, item.quantity + 1)} className="p-1 hover:text-brand"><Plus size={16}/></button>
                        </div>
                        <button onClick={() => removeFromCart(item.name)} className="text-text-muted hover:text-accent p-2">
                          <Trash2 size={20} />
                        </button>
                      </div>
                    ))}
                    
                    <div className="pt-4 flex justify-between items-center text-xl font-bold font-serif">
                      <span>Total:</span>
                      <span className="text-accent-dark">₹{cartTotal}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Checkout Form Section */}
              <div className="bg-surface border border-border rounded-3xl p-6 md:p-8 w-full lg:w-2/5 shadow-sm">
                <h2 className="text-2xl font-bold font-serif mb-6 border-b border-border pb-4">Delivery Details</h2>
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div>
                    <label className="block text-sm font-bold text-text-muted mb-2">Full Name</label>
                    <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-text-muted mb-2">Phone Number</label>
                    <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Enter your phone number" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-text-muted mb-2">Delivery Address</label>
                    <textarea required rows={3} value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent resize-none" placeholder="Enter your full address"></textarea>
                  </div>
                  
                  <div className="pt-6 mt-4">
                    <button 
                      type="submit"
                      disabled={loading || items.length === 0}
                      className="w-full flex items-center justify-center gap-2 bg-brand text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-dark transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Processing...' : `Pay ₹${cartTotal} with Stripe`}
                    </button>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
