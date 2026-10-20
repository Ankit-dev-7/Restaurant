import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { totalQuantity, setIsCartOpen } = useCart();

    useEffect(()=> {
        const handleScroll =() => {
            if(window.scrollY > 30) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks=[
        {name: 'Home', href:'#'},
        {name: 'Menu', href: '#menu'},
        {name: 'Signature Dishes', href: '#signature'},
        {name: 'Gallery', href:'#gallery'},
        {name: 'Reviews', href:'#reviews'},
        {name: 'Offers', href:'#offers'},
        {name: 'Contact', href: '#contact'},
    ];

    return (
        <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0D0C0B]/95 backdrop-blur-md py-4 border-b border-[#39332F]/60 shadow-xl' 
          : 'bg-gradient-to-b from-[#0D0C0B]/80 to-transparent py-6'
      }`}>
       <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <img
            src="/images/Logo.png"
            alt=""
            className="w-14 h-14 object-contain brightness-0 invert transition-opacity duration-300 group-hover:opacity-80"
          />
          <span className="font-serif text-xl md:text-2xl font-bold tracking-wider text-[#F8F3EC]">
            TANDOORI <span className="text-[#E87532]">RESTAURANT</span>
          </span>
        </a> 
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#B9B0A6] hover:text-[#E87532] transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 rounded-full bg-[#151311] border border-[#39332F] text-[#F8F3EC] hover:text-[#E87532] hover:border-[#E87532]/50 transition-all duration-300"
            aria-label="Open cart">
            <ShoppingBag className="w-5 h-5" />
            {totalQuantity > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#E87532] text-[#F8F3EC] text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#0D0C0B] shadow-md">
                {totalQuantity}
              </span>
            )}
          </button>
          <a
            href="#contact"
            className="px-5 py-2.5 bg-[#E87532] text-[#F8F3EC] text-sm font-semibold rounded hover:bg-[#B86F45] transition-colors border border-[#E87532] shadow-md"
          >
            Find Us
          </a>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 rounded-full bg-[#151311] border border-[#39332F] text-[#F8F3EC] hover:text-[#E87532]"
            aria-label="Open cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalQuantity > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#E87532] text-[#F8F3EC] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-[#0D0C0B]">
                {totalQuantity}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#F8F3EC] p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#E87532]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0D0C0B]/95 border-b border-[#39332F] py-6 px-8 shadow-2xl backdrop-blur-lg flex flex-col gap-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#B9B0A6] hover:text-[#E87532] transition-colors py-1 border-b border-[#39332F]/40"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center w-full py-3 bg-[#E87532] text-[#F8F3EC] font-semibold rounded hover:bg-[#B86F45] transition-colors">
            Find Us & Contact
          </a>
          </div>
      )}
      </header>
    );
};