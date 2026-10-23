import React from 'react';
import { Sparkles } from 'lucide-react';

export const SignatureDishes: React.FC = () => {
  const highlights = [
    {
      name: 'Butter Chicken',
      description: 'Tender tandoori chicken simmered in a rich, velvety tomato and butter gravy.',
      prices: ['Qtr — NPR 400.00', 'Full — NPR 1,550.00'],
      badge: 'Chef special',
    },
    {
      name: 'Chicken Tikka Biryani',
      description: 'Aromatic basmati rice layered with spiced chicken tikka, herbs, and saffron.',
      prices: ['NPR 500.00'],
      badge: 'Bestseller',
    },
    {
      name: 'Garlic Butter Naan',
      description: 'Fresh tandoori bread baked to perfection, brushed with rich garlic and melted butter.',
      prices: ['NPR 150.00'],
      badge: 'Traditional favourite',
    },
  ];
  return (
    <section id="signature" className="py-24 px-6 md:px-12 bg-[#151311] relative z-10 border-[#39332F]/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E87532]/10 border border-[#E87532]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#E87532]" />
            <span className="text-xs uppercase tracking-widest text-[#E87532] font-semibold">
              Masterpieces of the House
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#F8F3EC] mb-4">
            Signature Dishes
          </h2>
          <p className="max-w-xl mx-auto text-[#B9B0A6] text-base">
            Hand-selected culinary specialties loved by our regular patrons.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((dish, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#0D0C0B]/80 border border-[#39332F] hover:border-[#E87532]/60 transition-all duration-300 flex flex-col justify-between group shadow-xl">
              <div>
                <span className="inline-block px-3 py-1 rounded text-xs font-semibold bg-[#E87532]/15 text-[#E87532] border border-[#E87532]/30 mb-4">
                  {dish.badge}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#F8F3EC] mb-3 group-hover:text-[#E87532] transition-colors">
                  {dish.name}
                </h3>
                <p className="text-[#B9B0A6] text-sm leading-relaxed mb-6">
                  {dish.description}
                </p>
              </div>
              <div className="pt-4 border-t border-[#39332F]/60">
                <span className="mb-2 block text-xs uppercase tracking-wider text-[#B9B0A6]">
                  Price
                </span>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  {dish.prices.map((price) => (
                    <span key={price} className="text-sm font-bold leading-relaxed text-[#E87532]">
                      {price}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



 