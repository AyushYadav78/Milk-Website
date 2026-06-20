// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useCart } from '../context/CartContext';
// import { mockProducts } from '../data/products';

// type Product = {
//   name: string;
//   category: string;
//   image: string;
//   price: string;
// };

// export default function Products() {
//   const [products] = useState<Product[]>(mockProducts);
//   const [loading] = useState(false);
//   const [showAll, setShowAll] = useState(false);
//   const [activeCategory, setActiveCategory] = useState<string>('All');
//   const [toastMessage, setToastMessage] = useState<string | null>(null);
//   const navigate = useNavigate();
//   const { addToCart } = useCart();

//   const handleAddToCart = (product: Product) => {
//     addToCart({
//       name: product.name,
//       price: product.price,
//       image: product.image
//     });
//     setToastMessage(`Added ${product.name} to cart`);
//     setTimeout(() => setToastMessage(null), 3000);
//   };

//   const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];
  
//   const filteredProducts = activeCategory === 'All' 
//     ? products 
//     : products.filter(p => p.category === activeCategory);

//   const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0, 6);

//   return (
//     <section id="products" className="py-24 bg-bg border-t border-border">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="text-center max-w-3xl mx-auto mb-12">
//           <h2 className="text-4xl font-serif font-bold text-text-primary mb-4">Featured Products</h2>
//           <p className="text-lg text-text-muted">
//             Discover our wide range of farm-fresh dairy products, crafted with care and delivered with love to your doorstep.
//           </p>
//         </div>

//         {!loading && categories.length > 1 && (
//           <div className="flex flex-wrap justify-center gap-3 mb-10">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => {
//                   setActiveCategory(category);
//                   setShowAll(false);
//                 }}
//                 className={`px-5 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
//                   activeCategory === category 
//                     ? 'bg-brand text-white shadow-md' 
//                     : 'bg-white text-text-muted border border-border hover:border-brand hover:text-brand'
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         )}

//         {loading ? (
//           <div className="text-center py-12 text-brand font-bold text-lg">Loading products...</div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {displayedProducts.map((product, index) => (
//               <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group border border-border">
//                 <div className="relative h-64 overflow-hidden bg-surface">
//                   <img 
//                     src={product.image} 
//                     alt={product.name} 
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                   />
//                   <div className="absolute top-4 left-4 bg-bg/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand uppercase tracking-wider shadow-sm">
//                     {product.category}
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <div className="flex justify-between items-start mb-4">
//                     <h3 className="text-xl font-bold font-serif text-text-primary group-hover:text-brand transition-colors">{product.name}</h3>
//                     <span className="font-bold text-accent-dark whitespace-nowrap ml-4">{product.price}</span>
//                   </div>
//                   <button 
//                     onClick={() => handleAddToCart(product)}
//                     className="w-full py-3 rounded-xl border border-border font-bold text-text-muted hover:border-brand hover:bg-brand hover:text-white transition-all duration-300"
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
        
//         {filteredProducts.length > 6 && (
//           <div className="mt-12 text-center">
//             <button 
//               onClick={() => setShowAll(!showAll)}
//               className="inline-flex items-center justify-center font-bold text-accent-dark hover:text-accent border-b-2 border-accent-dark hover:border-accent pb-1 transition-colors"
//             >
//               {showAll ? 'View Less' : 'View All Products \u2192'}
//             </button>
//           </div>
//         )}

//         {toastMessage && (
//           <div className="fixed bottom-4 right-4 bg-brand text-white px-6 py-3 rounded-xl shadow-lg font-bold animate-fade-in-up z-50">
//             {toastMessage}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

















import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { mockProducts } from "../data/products";

type Product = {
  id: string;
  name: string;
  category: string;
  image: string;
  price: string;
};

export default function Products() {
  const { addToCart } = useCart();

  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const products = mockProducts;

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        );

  const displayedProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 6);

  const handleAddToCart = (product: Product) => {
    addToCart({
      name: product.name,
      price: product.price,
      image: product.image,
    });

    setToastMessage(`${product.name} added to cart`);
  };

  useEffect(() => {
    if (!toastMessage) return;

    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 3000);

    return () => clearTimeout(timer);
  }, [toastMessage]);

  return (
    <section
      id="products"
      className="py-24 bg-bg border-t border-border"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-text-primary mb-4">
            Featured Products
          </h2>

          <p className="text-lg text-text-muted">
            Discover our farm-fresh dairy products crafted with
            care and delivered straight to your doorstep.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false);
              }}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-brand text-white shadow-lg"
                  : "bg-white border border-border hover:border-brand hover:text-brand"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {displayedProducts.length > 0 ? (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {displayedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden bg-surface">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-white/90 backdrop-blur text-brand shadow">
                    {product.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-text-primary">
                      {product.name}
                    </h3>

                    <span className="font-bold text-accent-dark">
                      {product.price}
                    </span>
                  </div>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full py-3 rounded-xl bg-brand text-white font-semibold hover:opacity-90 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-xl font-semibold text-text-primary">
              No products found
            </h3>

            <p className="text-text-muted mt-2">
              Try selecting another category.
            </p>
          </div>
        )}

        {/* View More */}
        {filteredProducts.length > 6 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="font-semibold text-brand hover:underline"
            >
              {showAll
                ? "View Less"
                : `View All (${filteredProducts.length}) →`}
            </button>
          </div>
        )}

        {/* Toast */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 bg-brand text-white px-5 py-3 rounded-xl shadow-xl">
            {toastMessage}
          </div>
        )}
      </div>
    </section>
  );
}
