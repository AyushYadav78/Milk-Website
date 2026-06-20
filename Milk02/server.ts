import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import Stripe from "stripe";

let stripeClient: Stripe | null = null;

function getStripe(): Stripe {
  if (!stripeClient) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      throw new Error('STRIPE_SECRET_KEY environment variable is required to process payments.');
    }
    // Type casting apiVersion as Stripe types might differ
    stripeClient = new Stripe(key, { apiVersion: '2023-10-16' as any });
  }
  return stripeClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Backend Mock DB
  const products = [
    {
      name: 'PureDairy Full Cream Milk',
      category: 'Milk',
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '₹68 / litre',
    },
    {
      name: 'Premium Butter',
      category: 'Butter & Cheese',
      image: 'https://images.unsplash.com/photo-1559598467-f8b76c8155d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '₹120 / 200g',
    },
    {
      name: 'Greek Yogurt',
      category: 'Curd & Yogurt',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '₹45 / cup',
    },
    {
      name: 'Mango Lassi',
      category: 'Beverages',
      image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '₹35 / bottle',
    },
    {
      name: 'Cheese Slices',
      category: 'Butter & Cheese',
      image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '₹140 / pack',
    },
    {
      name: 'Kesar Kulfi',
      category: 'Ice Cream',
      image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '₹40 / stick',
    },
    { name: 'Toned Milk', category: 'Milk', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: '₹50 / litre' },
    { name: 'Unsalted Butter', category: 'Butter & Cheese', image: 'https://images.unsplash.com/photo-1559598467-f8b76c8155d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: '₹115 / 200g' },
    { name: 'Strawberry Yogurt', category: 'Curd & Yogurt', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: '₹55 / cup' },
    { name: 'Sweet Lassi', category: 'Beverages', image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: '₹30 / bottle' },
    { name: 'Mozzarella Cheese', category: 'Butter & Cheese', image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: '₹200 / pack' },
    { name: 'Chocolate Ice Cream', category: 'Ice Cream', image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: '₹60 / cup' },
    { name: 'Double Toned Milk', category: 'Milk', image: 'https://images.unsplash.com/photo-1555507036-ab1f403881f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: '₹45 / litre' },
    { name: 'Garlic Butter', category: 'Butter & Cheese', image: 'https://images.unsplash.com/photo-1559598467-f8b76c8155d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: '₹130 / 200g' },
    { name: 'Blueberry Yogurt', category: 'Curd & Yogurt', image: 'https://images.unsplash.com/photo-1564149504298-00c351fd7f16?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: '₹55 / cup' },
    { name: 'Salted Lassi', category: 'Beverages', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: '₹30 / bottle' },
    { name: 'Cheddar Cheese', category: 'Butter & Cheese', image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: '₹180 / pack' },
    { name: 'Vanilla Ice Cream', category: 'Ice Cream', image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: '₹50 / cup' },
    { name: 'A2 Cow Milk', category: 'Milk', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: '₹90 / litre' },
    { name: 'Dairy Whitener', category: 'Milk', image: 'https://images.unsplash.com/photo-1555507036-ab1f403881f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: '₹100 / 200g' },
    { name: 'Masala Chaas', category: 'Beverages', image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: '₹20 / bottle' },
    { name: 'Paneer', category: 'Butter & Cheese', image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: '₹90 / 200g' },
    { name: 'Ghee', category: 'Butter & Cheese', image: 'https://images.unsplash.com/photo-1559598467-f8b76c8155d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: '₹550 / litre' },
    { name: 'Butterscotch Ice Cream', category: 'Ice Cream', image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: '₹60 / cup' },
    { name: 'Probiotic Yogurt', category: 'Curd & Yogurt', image: 'https://images.unsplash.com/photo-1564149504298-00c351fd7f16?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: '₹60 / cup' },
    { name: 'Rose Milk', category: 'Beverages', image: 'https://images.unsplash.com/photo-1558500255-f761505c210d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: '₹40 / bottle' }
  ];

  const adminMetrics = [
    { label: 'Revenue', value: '₹42.5L', trend: 'up', percentage: '+12%' },
    { label: 'Orders', value: '18,240', trend: 'up', percentage: '+8%' },
    { label: 'Active Deliveries', value: '1,850', trend: 'neutral', percentage: '0%' },
    { label: 'New Customers', value: '325', trend: 'up', percentage: '+15%' },
    { label: 'CSAT', value: '96%', trend: 'up', percentage: '+1%' }
  ];

  // API Routes
  app.get("/api/products", (req, res) => {
    res.json(products);
  });

  app.get("/api/admin/metrics", (req, res) => {
    res.json(adminMetrics);
  });
  
  app.post("/api/orders", (req, res) => {
    const { product } = req.body;
    // Mock processing order
    res.json({ success: true, message: `Order placed successfully for ${product}` });
  });

  app.post("/api/create-checkout-session", async (req, res) => {
    try {
      const { product, price } = req.body;
      const stripe = getStripe();
      
      // Parse price to integer, fallback to 10000 (100 INR) if parsing fails
      let unitAmount = 10000;
      if (price) {
        const parsed = parseInt(price.replace(/[^\d]/g, ''), 10);
        if (!isNaN(parsed) && parsed > 0) {
          unitAmount = parsed * 100;
        }
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'inr',
              product_data: {
                name: product || 'Custom Order',
              },
              unit_amount: unitAmount,
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${process.env.APP_URL || 'http://localhost:3000'}/?success=true`,
        cancel_url: `${process.env.APP_URL || 'http://localhost:3000'}/custom`,
      });

      res.json({ url: session.url });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
