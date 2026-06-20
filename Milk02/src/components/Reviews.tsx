import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Priya Sharma',
    location: 'Lucknow',
    text: 'Fresh milk delivered every morning. Excellent quality. My kids love the chocolate milk too!',
  },
  {
    name: 'Rahul Verma',
    location: 'Kanpur',
    text: 'The butter and cheese are amazing. Taste exactly like what we used to get from the village years ago.',
  },
  {
    name: 'Anjali Desai',
    location: 'Varanasi',
    text: 'Very convenient subscription service via the app. I can pause deliveries when traveling. Highly recommend!',
  }
];

export default function Reviews() {
  return (
    <section className="py-24 bg-surface/50 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-serif font-bold text-text-primary mb-4">Loved by Families</h2>
          <p className="text-lg text-text-muted">
            Don't just take our word for it. Here's what our daily customers have to say about PureDairy quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-bg p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="flex text-accent-dark mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-text-muted italic mb-6">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold font-serif text-text-primary leading-tight">{review.name}</h4>
                  <p className="text-xs text-text-muted">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
