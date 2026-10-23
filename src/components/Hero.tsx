import React from 'react';
import { ChevronRight, MapPin } from 'lucide-react';

export const Hero: React.FC =() => {
return(
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D0C0B]/90 via-[#151311]/80 to-[#0D0C0B]/90 z-0" />
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E87532]/10 border border-[#E87532]/30 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#E87532] animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-[#E87532] font-semibold">
            Authentic Tandoori & Fine Nepali Cuisine
          </span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#F8F3EC] tracking-wide mb-6 leading-tight">
          Savor the Rich Flavors of <span className="text-[#E87532]">Tradition</span>
        </h1>
        <p className="max-w-2xl text-[#B9B0A6] text-base sm:text-lg md:text-xl font-light mb-10 leading-relaxed">
          Experience masterfully grilled tandoori specialties, aromatic curries, and freshly baked breads prepared with authentic spices and timeless passion.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <a
            href="#menu"
            className="px-8 py-4 bg-[#E87532] text-[#F8F3EC] font-semibold rounded hover:bg-[#B86F45] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#E87532]/20 border border-[#E87532]">
            Explore Our Menu
            <ChevronRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-[#0D0C0B]/80 text-[#F8F3EC] font-semibold rounded hover:bg-[#39332F]/50 transition-all duration-300 flex items-center justify-center gap-2 border border-[#39332F] backdrop-blur-sm">
            <MapPin className="w-4 h-4 text-[#E87532]" />
            Location & Hours
            </a>
            </div>
            </div>
            </section>
);
};

