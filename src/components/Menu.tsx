import React, { useState } from 'react';
import { MenuItem, menuCategories } from '../data/menu';
import { Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { MenuActions } from './MenuActions';
import { DishCustomizationModal } from './DishCustomizationModal';

export const Menu: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
    const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
    const { addItem } = useCart();
    const currentCategoryData = menuCategories.find((cat) => cat.id === activeCategory) || menuCategories[0];
    const hasCustomizations = (item: MenuItem) =>
      Boolean(item.customization?.sizes?.length || item.customization?.spiceLevels?.length || item.customization?.extras?.length);
  return (
    <section id="menu" className="py-24 px-6 md:px-12 bg-[#0D0C0B]/60 relative z-10 border-t border-[#39332F]/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#F8F3EC] mb-4">
            Our Authentic Menu
          </h2>
          <p className="max-w-xl mx-auto text-[#B9B0A6] text-base">
            Explore our freshly prepared tandoori delicacies, aromatic curries, traditional breads, and refreshing beverages.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 border ${
                activeCategory === category.id
                  ? 'bg-[#E87532] text-[#F8F3EC] border-[#E87532] shadow-lg shadow-[#E87532]/20'
                  : 'bg-[#151311]/80 text-[#B9B0A6] border-[#39332F] hover:text-[#F8F3EC] hover:border-[#E87532]/50'}`}>
              {category.title}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
          {currentCategoryData.items.map((item) => (
            <div
              key={`${currentCategoryData.id}-${item.name}`}
              className="p-6 rounded-xl bg-[#151311]/90 border border-[#39332F]/80 hover:border-[#E87532]/50 transition-all duration-300 flex items-center justify-between group shadow-md">
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
                          : 'border-red-500/40 text-red-400 bg-red-500/10'}`}
                      title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}>
                      {item.isVeg ? 'VEG' : 'NON-VEG'}
                    </span>
                  )}
                </div>
              </div>
              <div className="text-right flex-shrink-0 flex flex-col items-end gap-3">
                <span className="text-[#E87532] font-bold text-base md:text-lg tracking-wider">
                  {item.price}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    if (hasCustomizations(item)) {
                      setSelectedDish(item);
                      return;
                    }
                    addItem({ id: item.id, name: item.name, price: item.numericPrice });
                  }}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#E87532]/50 px-3 py-2 text-xs font-semibold text-[#F8F3EC] transition-colors hover:bg-[#E87532] hover:border-[#E87532]"
                  aria-label={`${hasCustomizations(item) ? 'Customize' : 'Add'} ${item.name}`}>
                  <Plus className="w-4 h-4" />
                  {hasCustomizations(item) ? 'Customize' : 'Add'}
                </button>
              </div>
            </div>
          ))}
        </div>
        <MenuActions />
      </div>
      {selectedDish && (
        <DishCustomizationModal
          dish={selectedDish}
          isOpen
          onClose={() => setSelectedDish(null)}
          onAddToCart={(customizations, finalUnitPrice) => {
            addItem(
              { id: selectedDish.id, name: selectedDish.name, price: selectedDish.numericPrice },
              customizations,
              finalUnitPrice
            );
            setSelectedDish(null);
          }}
          />
      )}
    </section>
  );
};
