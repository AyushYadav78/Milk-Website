import React from 'react';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden bg-black/5">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover object-center absolute inset-0 z-0"
        >
          <source src="/background-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-transparent z-10"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface text-brand font-bold uppercase tracking-tighter text-xs mb-6">
            <span className="w-2 h-2 bg-brand rounded-full animate-pulse"></span>
            Fresh Batch Collected 4:00 AM Today
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-text-primary leading-[1.1] mb-6">
            Pure Fresh Milk <br className="hidden md:block"/> <span className="text-brand italic">Delivered</span> Every Morning.
          </h1>
          <p className="text-xl md:text-2xl text-text-muted mb-10 max-w-2xl font-light">
            Trusted by 4.5 million Indian families. Experience the goodness of straight-from-farm dairy products, locally sourced and strictly quality tested.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => navigate('/custom')}
              className="flex items-center justify-center gap-2 bg-brand text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-dark transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
            >
              <ShoppingCart size={20} />
              Order Now
            </button>
            <button 
              onClick={() => navigate('/custom')}
              className="flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-dark transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
            >
              Find Products
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
