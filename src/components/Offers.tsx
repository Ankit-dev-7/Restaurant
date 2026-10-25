import React from 'react';
import { Tag } from 'lucide-react';

export const Offers: React.FC = () => {
  const offers = [
    {
      title: 'Weekend Family Feast',
      description:
        'Enjoy our special platter featuring mixed tandoori grill, butter chicken, 4 garlic naans, and a complimentary jug of mango lassi.',
      badge: 'Weekend Special',
      validity: 'Valid every Friday to Saturday',
    },
    {
      title: 'Festival Season Celebration',
      description:
        'Join us during local festivities for traditional culinary specials and seasonal sweet treats prepared live by our master chefs.',
      badge: 'Limited Time',
      validity: 'Announced during holidays',
    },
  ];
  return (
    <section
      id="offers"
      className="relative z-10 border-t border-[#39332F]/40 bg-[#0D0C0B]/60 px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-[#F8F3EC] md:text-5xl">
            Exclusive Dining Promotions
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-[#B9B0A6]">
            Discover our seasonal menus, festive specials, and family dining packages.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {offers.map((offer) => (
            <article
              key={offer.title}
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#39332F] bg-[#151311] p-6 shadow-xl transition-colors duration-300 hover:border-[#E87532]/50 sm:p-8">
              <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#E87532] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div>
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E87532]/30 bg-[#E87532]/10 px-3 py-1 text-xs font-semibold text-[#E87532]">
                    <Tag className="h-3 w-3" />
                    {offer.badge}
                  </span>
                  <span className="text-xs italic text-[#B9B0A6]/70">{offer.validity}</span>
                </div>
                <h3 className="mb-3 font-serif text-xl font-bold text-[#F8F3EC] transition-colors group-hover:text-[#E87532]">
                  {offer.title}
                </h3>
                <p className="mb-8 text-sm leading-relaxed text-[#B9B0A6]">
                  {offer.description}
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#39332F]/50 pt-4 text-xs text-[#B9B0A6]">
                <span>Available for dine-in &amp; takeaway</span>
                <a
                  href="#contact"
                  className="font-semibold text-[#E87532] underline-offset-4 hover:underline">
                  Inquire Now <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
