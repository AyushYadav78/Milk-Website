import React, { useEffect, useState } from 'react';
import { IndianRupee, ShoppingBag, Truck, UserPlus, TrendingUp, Cpu, Mic, Store, Map, BarChart3 } from 'lucide-react';

const routeIcons: Record<string, React.ReactNode> = {
  'Revenue': <IndianRupee className="w-6 h-6 text-brand" />,
  'Orders': <ShoppingBag className="w-6 h-6 text-brand" />,
  'Active Deliveries': <Truck className="w-6 h-6 text-accent-dark" />,
  'New Customers': <UserPlus className="w-6 h-6 text-brand" />,
  'CSAT': <TrendingUp className="w-6 h-6 text-brand" />
};

type Metric = {
  label: string;
  value: string;
  trend: string;
  percentage: string;
};

const futureFeatures = [
  { icon: <Cpu className="w-5 h-5 text-surface" />, title: 'AI Nutrition Assistant' },
  { icon: <Store className="w-5 h-5 text-surface" />, title: 'Smart Milk Subscription' },
  { icon: <Mic className="w-5 h-5 text-surface" />, title: 'Voice Ordering' },
  { icon: <UserPlus className="w-5 h-5 text-surface" />, title: 'Farmer & Distributor Portals' },
  { icon: <BarChart3 className="w-5 h-5 text-surface" />, title: 'Inventory & Franchise Mgmt' },
  { icon: <Map className="w-5 h-5 text-surface" />, title: 'Route Optimization' }
];

export default function AdminPreview() {
  const [metrics, setMetrics] = useState<Metric[]>([
    { label: 'Revenue', value: '₹42.5L', trend: 'up', percentage: '+12%' },
    { label: 'Orders', value: '18,240', trend: 'up', percentage: '+8%' },
    { label: 'Active Deliveries', value: '1,850', trend: 'neutral', percentage: '0%' },
    { label: 'New Customers', value: '325', trend: 'up', percentage: '+15%' },
    { label: 'CSAT', value: '96%', trend: 'up', percentage: '+1%' }
  ]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate loading to match previous behavior
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 bg-surface border-t border-border border-b">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-bg text-brand font-bold px-4 py-1.5 rounded-full text-xs tracking-widest uppercase mb-4 inline-block border border-border">Prototype Preview</span>
          <h2 className="text-4xl font-serif font-bold text-text-primary mb-4">System & Dashboard Capabilities</h2>
          <p className="text-lg text-text-muted">
            A glimpse into the internal analytics and future roadmap for the PureDairy platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-bg p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-serif font-bold text-text-primary mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-brand" /> Today's Live Metrics
              </h3>
              {loading ? (
                <div className="text-center py-4 text-brand font-bold">Loading metrics...</div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {metrics.map((m, i) => (
                    <div key={i} className="bg-surface p-4 rounded-xl border border-border text-center">
                      <div className="flex justify-center mb-2">{routeIcons[m.label] || <TrendingUp className="w-6 h-6 text-brand" />}</div>
                      <div className="text-2xl font-bold text-text-primary mb-1">{m.value}</div>
                      <div className="text-xs font-bold text-text-muted tracking-wider uppercase">{m.label}</div>
                      <div className="text-xs mt-1 font-bold" style={{ color: m.trend === 'up' ? 'green' : 'gray' }}>{m.percentage}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-bg p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="text-lg font-serif font-bold text-text-primary mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-brand" /> Analytics Modules (In Development)
              </h3>
              <div className="flex flex-wrap gap-2 text-sm font-bold text-text-muted">
                <span className="bg-surface text-brand border border-border px-4 py-2 rounded-lg hover:bg-border transition-colors cursor-pointer">Sales by Product</span>
                <span className="bg-surface text-brand border border-border px-4 py-2 rounded-lg hover:bg-border transition-colors cursor-pointer">City-wise Revenue</span>
                <span className="bg-surface text-brand border border-border px-4 py-2 rounded-lg hover:bg-border transition-colors cursor-pointer">Subscription Growth</span>
                <span className="bg-surface text-brand border border-border px-4 py-2 rounded-lg hover:bg-border transition-colors cursor-pointer">Farmer Network Dashboard</span>
                <span className="bg-surface text-brand border border-border px-4 py-2 rounded-lg hover:bg-border transition-colors cursor-pointer">Delivery Performance</span>
              </div>
            </div>
          </div>

          <div className="bg-brand-dark p-6 rounded-2xl shadow-lg border border-brand text-white">
            <h3 className="text-lg font-serif font-bold mb-6 flex items-center gap-2 text-white">
              <Cpu className="w-5 h-5 text-accent" /> Future Roadmap
            </h3>
            <ul className="space-y-4 text-white/80">
              {futureFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="bg-white/10 p-2 rounded-lg border border-white/20">{f.icon}</div>
                  <span className="font-medium text-sm">{f.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-brand">
              <button className="w-full bg-accent hover:bg-accent-dark text-white py-3 rounded-xl font-bold transition-colors">
                View Detailed Roadmap
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
