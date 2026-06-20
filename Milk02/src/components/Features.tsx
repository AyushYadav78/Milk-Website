import React from 'react';
import { ShieldCheck, Truck, Droplets, Users, Leaf, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: <Droplets className="w-8 h-8 text-brand" />,
    title: 'Farm Fresh Milk',
    description: 'Sourced directly from local farms. No middlemen, ensuring absolute freshness.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-brand" />,
    title: 'Quality Tested',
    description: 'Undergoes 72 strict quality checks before it reaches your family table.'
  },
  {
    icon: <Truck className="w-8 h-8 text-brand" />,
    title: 'Cold Chain Delivery',
    description: 'Maintained at 4°C throughout the supply chain to preserve nutrients.'
  },
  {
    icon: <Users className="w-8 h-8 text-brand" />,
    title: 'Trusted Farmers',
    description: 'Partnering with 8,500+ local farmers, providing them fair value.'
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-brand" />,
    title: '100% Pure Products',
    description: 'No preservatives, no added milk powder. Just pure dairy goodness.'
  },
  {
    icon: <Leaf className="w-8 h-8 text-brand" />,
    title: 'Sustainable Packaging',
    description: 'Committed to reducing plastic waste with our eco-friendly packaging options.'
  }
];

export default function Features() {
  return (
    <section id="about" className="py-24 bg-bg border-t border-border overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Story Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-24">
          <div className="lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-surface transform lg:-rotate-2 rounded-[2rem] -z-10 border border-border transition-transform duration-500 group-hover:rotate-0"></div>
            
            {/* Image Grid / Collage */}
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1628088062854-d1870b4553da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Dairy quality" 
                className="rounded-3xl shadow-xl object-cover w-full h-[250px] sm:h-[350px] border border-border transform transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="flex flex-col gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1596803244618-8dbee441d70b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Happy cows on farm" 
                  className="rounded-3xl shadow-lg object-cover w-full h-[120px] sm:h-[165px] border border-border"
                />
                <img 
                  src="https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Pouring fresh milk" 
                  className="rounded-3xl shadow-lg object-cover w-full h-[115px] sm:h-[165px] border border-border"
                />
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-5 sm:p-6 rounded-2xl shadow-xl border border-border hidden md:flex items-center gap-4 animate-fade-in-up">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-surface text-brand rounded-full flex items-center justify-center font-bold text-lg sm:text-xl shrink-0">
                4.2L
              </div>
              <div>
                <p className="font-bold text-text-primary text-base sm:text-lg">Litres / Day</p>
                <p className="text-xs sm:text-sm text-text-muted">Fresh Milk Collection</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-xl font-bold text-brand uppercase tracking-widest mb-2 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif font-black text-text-primary mb-6 leading-tight">
              Rooted in Tradition, Crafted for Tomorrow.
            </h2>
            <p className="text-lg text-text-muted mb-6 leading-relaxed">
              Since 2016, we've been on a mission to bring real, unadulterated dairy products back to the Indian household. 
              What started as a small farm with 50 cows has blossomed into a community-driven cooperative that values health, integrity, and sustainability above all.
            </p>
            <p className="text-lg text-text-muted mb-8 leading-relaxed">
              Our commitment to quality ensures that every drop of milk, every scoop of ghee, and every slice of cheese is produced exactly as nature intended—pure, natural, and rich in essential nutrients.
            </p>
            <div className="flex gap-4 items-center">
              <img src="https://ui-avatars.com/api/?name=Rohan+Sharma&background=FDF5E6&color=D97706" alt="Founder" className="w-14 h-14 rounded-full border-2 border-brand" />
              <div>
                <p className="font-bold text-text-primary">Rohan Sharma</p>
                <p className="text-sm text-text-muted">Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-serif font-bold text-text-primary mb-4">Why Choose PureDairy?</h2>
          <p className="text-lg text-text-muted">
            We don't comprise on quality, ensuring that our products support your healthy lifestyle while empowering our farming community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 flex-wrap lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-[2rem] border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold font-serif text-text-primary mb-3">{feature.title}</h3>
              <p className="text-text-muted text-base leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
