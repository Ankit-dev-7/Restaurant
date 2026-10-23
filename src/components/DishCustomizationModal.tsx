import React, { useEffect, useState } from 'react';
import { X, Check, Sliders } from 'lucide-react';
import { MenuItem } from '../data/menu';
import { SelectCustomizations } from '../types';

interface DishCustomizationModalProps {
    dish: MenuItem;
    isOpen: boolean;
    onClose: () => void;
    onAddToCart: (customizations: SelectCustomizations, finalUnitPrice: number) => void;
}
export const DishCustomizationModal: React.FC<DishCustomizationModalProps> =({
    dish,
    isOpen,
    onClose,
    onAddToCart,
}) => {
    const [selectedSize, setSelectedSize] = useState(
        dish.customization?.sizes ? dish.customization.sizes[0] : undefined
    );
    const [selectedSpice, setSelectedSpice] = useState(
        dish.customization?.spiceLevels?.[1] ?? dish.customization?.spiceLevels?.[0]
    );
    const [selectedExtras, setSelectedExtras] = useState<{ id: string; name: string; priceDelta: number }[]>([]);

    useEffect(() => {
        setSelectedSize(dish.customization?.sizes?.[0]);
        setSelectedSpice(dish.customization?.spiceLevels?.[1] ?? dish.customization?.spiceLevels?.[0]);
        setSelectedExtras([]);
    }, [dish]);
    if (!isOpen) return null;
    const sizeDelta = selectedSize?.priceDelta || 0;
    const extrasDelta = selectedExtras.reduce((sum, extra) => sum + extra.priceDelta, 0);
    const finalUnitPrice = dish.numericPrice + sizeDelta + extrasDelta;
    const toggleExtra = (extra: { id: string; name: string; priceDelta: number }) => {
        if (selectedExtras.some((e)=> e.id === extra.id)) {
            setSelectedExtras(selectedExtras.filter((e) => e.id !== extra.id ));
        } else {
            setSelectedExtras([...selectedExtras, extra]);
        }
    };
    const handleAdd = () => {
        onAddToCart(
            {
                size: selectedSize,
                spiceLevel: selectedSpice,
                extras: selectedExtras,
            },
            finalUnitPrice
        );
        onClose();
    };
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-lg bg-[#0D0C0B] border border-[#39332F] rounded-2xl shadow-2xl overflow-hidden text-[#F8F3EC]">
                <div className="flex items-center justify-between px-6 py-4 border-b border-[#39332F] bg-[#151311]">
                    <div className="flex items-center gap-2">
                        <Sliders className="w-5 h-5 text-[#E87532]" />
                        <h3 className="font-serif text-lg font-bold">Customize {dish.name}</h3>
                        </div>
                        <button
                        onClick={onClose}
                        className="p-1.5 rounded-full text-[#B9B0A6] hover:text-[#F8F3EC] hover:bg-[#39332F]/50 transition-colors"
                        aria-label="Close modal">
                            <X className="w-5 h-5" />
                        </button>
                        </div>
                        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6">
                            {dish.description && <p className="text-sm text-[#B9B0A6]">{dish.description}</p>}
                            <div className="text-sm font-semibold text-[#E87532]">
                                Base Price: NPR {dish.numericPrice.toFixed(2)}
                            </div>
                            {dish.customization?.sizes && dish.customization.sizes.length > 0 && (
                              <div className="space-y-3">
                                <label className="block text-xs uppercase tracking-widest text-[#B9B0A6] font-semibold">
                                    Portion Size 
                                    </label>
                                     <div className="grid grid-cols-2 gap-3">
                {dish.customization.sizes.map((size) => {
                  const isSelected = selectedSize?.id === size.id;
                  return (
                    <button
                      key={size.id}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                        isSelected
                          ? 'border-[#E87532] bg-[#E87532]/10 text-[#F8F3EC]'
                          : 'border-[#39332F] bg-[#151311] text-[#B9B0A6] hover:border-[#39332F]/80'}`}>
                      <span className="text-sm font-medium">{size.name}</span>
                      <span className="text-xs font-semibold text-[#E87532]">
                        {size.priceDelta > 0 ? `+NPR ${size.priceDelta}` : 'Included'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
          {dish.customization?.spiceLevels && dish.customization.spiceLevels.length > 0 && (
            <div className="space-y-3">
              <label className="block text-xs uppercase tracking-widest text-[#B9B0A6] font-semibold">
                Spice Level 🌶️
              </label>
              <div className="flex flex-wrap gap-2">
                {dish.customization.spiceLevels.map((level) => {
                  const isSelected = selectedSpice === level;
                  return (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setSelectedSpice(level)}
                      className={`px-4 py-2 rounded-lg border text-xs font-medium transition-all ${
                        isSelected
                          ? 'border-[#E87532] bg-[#E87532] text-[#F8F3EC]'
                          : 'border-[#39332F] bg-[#151311] text-[#B9B0A6] hover:border-[#39332F]/80'
                      }`}>
                      {level}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
          {dish.customization?.extras && dish.customization.extras.length > 0 && (
            <div className="space-y-3">
              <label className="block text-xs uppercase tracking-widest text-[#B9B0A6] font-semibold">
                Optional Extras & Add-ons
              </label>
              <div className="space-y-2">
                {dish.customization.extras.map((extra) => {
                  const isSelected = selectedExtras.some((e) => e.id === extra.id);
                  return (
                    <div
                      key={extra.id}
                      onClick={() => toggleExtra(extra)}
                      className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        isSelected
                          ? 'border-[#E87532] bg-[#E87532]/10 text-[#F8F3EC]'
                          : 'border-[#39332F] bg-[#151311] text-[#B9B0A6] hover:border-[#39332F]/80'}`}>
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center ${
                            isSelected ? 'bg-[#E87532] border-[#E87532]' : 'border-[#39332F]'}`}>
                          {isSelected && <Check className="w-3 h-3 text-[#F8F3EC]" />}
                        </div>
                        <span className="text-sm">{extra.name}</span>
                      </div>
                      <span className="text-xs font-semibold text-[#E87532]">+NPR {extra.priceDelta}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <div className="p-6 border-t border-[#39332F] bg-[#151311] flex items-center justify-between">
          <div>
            <span className="text-xs text-[#B9B0A6] block">Total Unit Price</span>
            <span className="text-lg font-bold text-[#E87532]">NPR {finalUnitPrice.toFixed(2)}</span>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-lg border border-[#39332F] text-[#B9B0A6] text-sm font-semibold hover:text-[#F8F3EC] transition-colors">
              Cancel
            </button>
            <button
              type="button"
              onClick={handleAdd}
              className="px-6 py-2.5 rounded-lg bg-[#E87532] text-[#F8F3EC] text-sm font-semibold hover:bg-[#B86F45] transition-colors shadow-lg">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

    