import React, { useState, useEffect } from 'react';
import { Menu, X, Milk, ShoppingCart } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();
  const { itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      if (location.pathname !== '/') return;

      const sections = ['home', 'products', 'about', 'sustainability'];
      let currentSection = 'home';
      
      const scrollPosition = window.scrollY + 200; // offset for navbar height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = section;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Init
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/#' + target);
      // Let the natural navigation happen, then scroll
      setTimeout(() => {
        const element = document.getElementById(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  const getLinkClasses = (section: string) => {
    const baseClasses = "font-bold transition-all duration-300 pb-1";
    if (location.pathname !== '/') return `${baseClasses} text-text-muted hover:text-brand cursor-pointer`;
    return activeSection === section 
      ? `${baseClasses} text-brand border-b-4 rounded-b-sm border-brand`
      : `${baseClasses} text-text-muted hover:text-brand cursor-pointer border-b-4 rounded-b-sm border-transparent`;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-bg/95 shadow-md pb-4 pt-4 border-b border-border backdrop-blur-md' : 'bg-bg/90 backdrop-blur-md py-8'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigate('/')}>
            <div className="bg-gradient-to-br from-brand to-brand-dark text-white p-3 rounded-2xl shadow-lg transform group-hover:scale-110 group-hover:rotate-[10deg] transition-all duration-300">
              <Milk size={32} />
            </div>
            <span className="text-3xl lg:text-4xl font-serif font-black text-text-primary tracking-tighter">
              Pure<span className="text-brand">Dairy</span><span className="text-accent">.</span>
            </span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-10 text-lg">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className={getLinkClasses('home')}>Home</a>
            <a href="#products" onClick={(e) => handleNavClick(e, 'products')} className={getLinkClasses('products')}>Products</a>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className={getLinkClasses('about')}>About Us</a>
            <a href="#sustainability" onClick={(e) => handleNavClick(e, 'sustainability')} className={getLinkClasses('sustainability')}>Sustainability</a>
            
            <button onClick={() => navigate('/custom')} className="relative p-2 text-text-primary hover:text-brand transition-colors group">
              <ShoppingCart size={28} className="transform group-hover:scale-110 transition-transform" />
              {itemCount > 0 && (
                <span className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 bg-accent text-white text-xs font-black w-6 h-6 flex items-center justify-center rounded-full border-2 border-bg shadow-sm">
                  {itemCount}
                </span>
              )}
            </button>

            <button onClick={() => navigate('/custom')} className="bg-brand text-white px-8 py-3 rounded-2xl font-bold text-lg hover:bg-brand-dark transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 cursor-pointer">
              Cart
            </button>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <button onClick={() => navigate('/custom')} className="relative p-2 text-text-primary hover:text-brand transition-colors group">
              <ShoppingCart size={28} className="transform group-hover:scale-110 transition-transform" />
              {itemCount > 0 && (
                <span className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 bg-accent text-white text-xs font-black w-6 h-6 flex items-center justify-center rounded-full border-2 border-bg shadow-sm">
                  {itemCount}
                </span>
              )}
            </button>
            <button 
              className="text-text-primary p-2 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-bg shadow-lg border-t border-border py-4 px-4 flex flex-col space-y-4">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-text-primary font-medium py-2 border-b border-border">Home</a>
          <a href="#products" onClick={(e) => handleNavClick(e, 'products')} className="text-text-primary font-medium py-2 border-b border-border">Products</a>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-text-primary font-medium py-2 border-b border-border">About Us</a>
          <a href="#sustainability" onClick={(e) => handleNavClick(e, 'sustainability')} className="text-text-primary font-medium py-2 border-b border-border">Sustainability</a>
          <button onClick={() => { setMobileMenuOpen(false); navigate('/custom'); }} className="bg-brand text-white px-6 py-3 rounded-full font-bold hover:bg-brand-dark transition-colors mt-2 text-center">
            Order Now
          </button>
        </div>
      )}
    </nav>
  );
}
