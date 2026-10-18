import React, { useState } from 'react';
import { menuCategories } from '../data/menu';
import { Utensils } from 'lucide-react';

export const Menu: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
    
    const currentCategoryData = menuCategories.find((cat) => cat.id === activeCategory) || menuCategories[0];

  return (
    <section id="menu" className="py-24 px-6 md:px-12 bg-[#0D0C0B]/60 relative z-10 border-t border-[#39332F]/40">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E87532]/10 border border-[#E87532]/30 mb-4">
            <Utensils className="w-3.5 h-3.5 text-[#E87532]" />
            <span className="text-xs uppercase tracking-widest text-[#E87532] font-semibold">
              Curated Culinary Selection
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#F8F3EC] mb-4">
            Our Authentic Menu
          </h2>
          <p className="max-w-xl mx-auto text-[#B9B0A6] text-base">
            Explore our freshly prepared tandoori delicacies, aromatic curries, traditional breads, and refreshing beverages.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 border ${
                activeCategory === category.id
                  ? 'bg-[#E87532] text-[#F8F3EC] border-[#E87532] shadow-lg shadow-[#E87532]/20'
                  : 'bg-[#151311]/80 text-[#B9B0A6] border-[#39332F] hover:text-[#F8F3EC] hover:border-[#E87532]/50'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
          {currentCategoryData.items.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-[#151311]/90 border border-[#39332F]/80 hover:border-[#E87532]/50 transition-all duration-300 flex items-center justify-between group shadow-md"
            >
              <div className="pr-4">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-serif text-lg font-semibold text-[#F8F3EC] group-hover:text-[#E87532] transition-colors">
                    {item.name}
                  </h3>
                  {item.isVeg !== undefined && (
                    <span 
                      className={`text-[10px] px-2 py-0.5 rounded font-bold border ${
                        item.isVeg 
                          ? 'border-green-500/40 text-green-400 bg-green-500/10' 
                          : 'border-red-500/40 text-red-400 bg-red-500/10'
                      }`}
                      title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                    >
                      {item.isVeg ? 'VEG' : 'NON-VEG'}
                    </span>
                  )}
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <span className="text-[#E87532] font-bold text-base md:text-lg tracking-wider">
                  {item.price}
                  </span>
                  </div>
                  </div>
          ))}
          </div>
          </div>
          </section>
  );
};

