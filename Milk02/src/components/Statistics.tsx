import React from 'react';

const stats = [
  { value: '4.5M+', label: 'Happy Customers' },
  { value: '25k+', label: 'Retail Stores' },
  { value: '180+', label: 'Cities Served' },
  { value: '150k+', label: 'Daily Orders' },
  { value: '120+', label: 'Quality Products' },
  { value: '8.5k+', label: 'Farm Partners' },
];

export default function Statistics() {
  return (
    <section className="py-16 bg-surface border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center space-y-2">
              <span className="text-3xl md:text-4xl font-serif font-bold text-brand">{stat.value}</span>
              <span className="text-xs md:text-sm font-bold text-text-muted uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
