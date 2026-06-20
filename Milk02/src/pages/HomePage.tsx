import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Statistics from '../components/Statistics';
import Products from '../components/Products';
import Features from '../components/Features';
import MobileApp from '../components/MobileApp';
import Reviews from '../components/Reviews';
import Sustainability from '../components/Sustainability';
import AdminPreview from '../components/AdminPreview';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen font-sans bg-bg text-text-primary">
      <Navbar />
      <main>
        <Hero />
        <Statistics />
        <Products />
        <Features />
        <MobileApp />
        <Reviews />
        <Sustainability />
        <AdminPreview />
      </main>
      <Footer />
    </div>
  );
}
