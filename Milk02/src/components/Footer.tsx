import React from 'react';
import { Milk, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white/80 pt-20 pb-10 border-t border-brand">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-bg text-brand p-2 rounded-full">
                <Milk size={24} />
              </div>
              <span className="text-2xl font-serif font-bold text-white tracking-tight">PureDairy<span className="text-accent">.</span></span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              Freshness from Farm to Family. Leading dairy provider in North India, committed to quality, purity, and sustainable practices since 2016.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Our Products</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Career Opportunities</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Farmer Partner Program</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Sustainability Report</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>PureDairy India Pvt. Ltd.<br/>Lucknow, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>1800-123-4567 (Toll Free)</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:support@puredairy.in" className="hover:text-white transition-colors">support@puredairy.in</a>
              </li>
              <li className="flex items-center gap-3 mt-4 text-accent">
                <a href="https://www.puredairy.in" className="hover:text-accent-dark transition-colors">www.puredairy.in</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-sm text-white/70 mb-4">Subscribe for offers, new product launches, and healthy recipes.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-bg text-text-primary rounded-l-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-accent border border-bg"
              />
              <button className="bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded-r-lg font-bold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60">
          <p>&copy; {new Date().getFullYear()} PureDairy India Pvt. Ltd. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
