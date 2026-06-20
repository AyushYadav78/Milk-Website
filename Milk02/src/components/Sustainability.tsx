import React from 'react';
import { Sun, Recycle, Droplet, Sprout } from 'lucide-react';

const initiatives = [
  {
    icon: <Sun className="w-10 h-10 text-brand mb-4" />,
    title: 'Solar-Powered Plants',
    desc: 'Our major processing units run on 80% renewable solar energy.'
  },
  {
    icon: <Recycle className="w-10 h-10 text-brand mb-4" />,
    title: 'Recyclable Packaging',
    desc: 'Transitioning to 100% recyclable bottles and eco-pouches by 2027.'
  },
  {
    icon: <Droplet className="w-10 h-10 text-brand mb-4" />,
    title: 'Water Conservation',
    desc: 'Advanced water recycling systems deployed across all facilities.'
  },
  {
    icon: <Sprout className="w-10 h-10 text-brand mb-4" />,
    title: 'Farmer Education',
    desc: 'Regular workshops for farmers on sustainable cattle rearing.'
  }
];

export default function Sustainability() {
  return (
    <section id="sustainability" className="py-24 bg-bg border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand font-semibold tracking-wider uppercase text-sm mb-2 block">Our Commitment</span>
          <h2 className="text-4xl font-serif font-bold text-text-primary mb-4">Caring for Tomorrow</h2>
          <p className="text-lg text-text-muted">
            We believe in producing high-quality dairy while treading lightly on the earth. Sustainability is at the core of our operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((item, i) => (
            <div key={i} className="text-center p-6 rounded-2xl bg-white border border-border hover:bg-surface transition-colors">
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-bold font-serif text-text-primary mb-3">{item.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
