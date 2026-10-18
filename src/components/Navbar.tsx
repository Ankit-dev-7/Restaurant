import React, { useState, useEffect } from 'react';
import { Menu ,X ,UtensilsCrossed} from 'Lucide-react';

export const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(()=> {
        const handleScroll =() => {
            if(window.scrollY >30) {
                setIsScrolled(true);
            }else{
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks=[
        {name: 'Home', href:'#'},
        {name: 'Menu', href: '#Menu'},
        {name: 'Signature Dishes', href: '#signature'},
        {name: 'Gallery', href:'#gallery'},
        {name: 'Reviews',href:'#reviews'},
        {name: 'Contact', href: '#contact'},
    ];

    return (
        <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0D0C0B]/95 backdrop-blur-md py-4 border-b border-[#39332F]/60 shadow-xl' 
          : 'bg-gradient-to-b from-[#0D0C0B]/80 to-transparent py-6'
      }`}
    >
       <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo / Name */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-[#E87532]/10 border border-[#E87532]/30 flex items-center justify-center text-[#E87532] group-hover:bg-[#E87532] group-hover:text-[#F8F3EC] transition-all duration-300">
            <UtensilsCrossed className="w-5 h-5" />
          </div>
          <span className="font-serif text-xl md:text-2xl font-bold tracking-wider text-[#F8F3EC]">
            TANDOORI <span className="text-[#E87532]">RESTAURANT</span>
          </span>
        </a> 
        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
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

        {/* Action Button */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="px-5 py-2.5 bg-[#E87532] text-[#F8F3EC] text-sm font-semibold rounded hover:bg-[#B86F45] transition-colors border border-[#E87532] shadow-md"
          >
            Find Us
          </a>
        </div>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-[#F8F3EC] p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#E87532]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
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
            className="mt-2 text-center w-full py-3 bg-[#E87532] text-[#F8F3EC] font-semibold rounded hover:bg-[#B86F45] transition-colors"
          >
            Find Us & Contact
          </a>
          </div>
      )}
      </header>
    );
};

