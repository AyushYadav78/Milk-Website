import React, { createContext, useContext, useState, useEffect } from 'react';

export type CartItem = {
  name: string;
  price: string;
  image: string;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (name: string) => void;
  updateQuantity: (name: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  itemCount: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem('cart');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (product: Omit<CartItem, 'quantity'>) => {
    setItems(prev => {
      const existing = prev.find(item => item.name === product.name);
      if (existing) {
        return prev.map(item => 
          item.name === product.name 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (name: string) => {
    setItems(prev => prev.filter(item => item.name !== name));
  };

  const updateQuantity = (name: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(name);
      return;
    }
    setItems(prev => prev.map(item => 
      item.name === name ? { ...item, quantity } : item
    ));
  };

  const clearCart = () => setItems([]);

  // Parse price from string like "₹120 / 200g" to number
  const parsePrice = (priceStr: string) => {
    const match = priceStr.match(/\u20B9?(\d+)/);
    return match ? parseInt(match[1], 10) : 0;
  };

  const cartTotal = items.reduce((total, item) => total + (parsePrice(item.price) * item.quantity), 0);
  const itemCount = items.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, itemCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
