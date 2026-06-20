import React from 'react';
import { Smartphone, CalendarClock, CreditCard, MapPin, Gift, Users } from 'lucide-react';
import { motion } from 'motion/react';

const appFeatures = [
  { icon: <CalendarClock className="w-6 h-6" />, title: 'Daily Subscription', desc: 'Set it and forget it' },
  { icon: <Smartphone className="w-6 h-6" />, title: 'Pause/Resume', desc: 'Manage deliveries on the go' },
  { icon: <CreditCard className="w-6 h-6" />, title: 'Online Payments', desc: 'Secure & seamless wallet' },
  { icon: <MapPin className="w-6 h-6" />, title: 'Order Tracking', desc: 'Live location updates' },
  { icon: <Gift className="w-6 h-6" />, title: 'Rewards Program', desc: 'Earn points on every buy' },
  { icon: <Users className="w-6 h-6" />, title: 'Family Accounts', desc: 'Manage multiple addresses' },
];

export default function MobileApp() {
  return (
    <section className="py-24 bg-brand text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-dark rounded-l-full opacity-50 transform translate-x-1/3 -skew-x-12"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              Manage Your Dairy Needs <br/> From Your Palm
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl leading-relaxed">
              Download the PureDairy app to manage subscriptions, track live deliveries, pay online, and earn exclusive rewards. Your daily milk, sorted.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-10">
              {appFeatures.map((feat, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="bg-white/10 p-2 rounded-lg text-accent">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{feat.title}</h4>
                    <p className="text-white/60 text-sm">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-text-primary text-white px-6 py-3 rounded-xl font-medium flex items-center gap-3 hover:bg-black transition-colors border border-transparent">
                <span className="text-2xl">🍎</span>
                <div className="text-left">
                  <div className="text-[10px] leading-tight text-gray-300">Download on the</div>
                  <div className="text-sm font-semibold leading-tight">App Store</div>
                </div>
              </button>
              <button className="bg-text-primary text-white px-6 py-3 rounded-xl font-medium flex items-center gap-3 hover:bg-black transition-colors border border-transparent">
                <span className="text-2xl">▶</span>
                <div className="text-left">
                  <div className="text-[10px] leading-tight text-gray-300">GET IT ON</div>
                  <div className="text-sm font-semibold leading-tight">Google Play</div>
                </div>
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center mt-12 lg:mt-0 relative">
             <div className="absolute w-80 h-80 bg-accent/20 rounded-full blur-3xl -z-10"></div>
             <motion.img 
               src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
               alt="App Interface Mockup" 
               className="rounded-3xl shadow-2xl border-4 border-surface max-w-[300px] w-full"
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             />
          </div>
        </div>
      </div>
    </section>
  );
}
