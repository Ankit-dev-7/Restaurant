import React from 'react';
import { MessageSquare, Star } from 'lucide-react';

export const review: React.FC = () => {
  const reviews = [
    {
      name: 'Aarnav Sharma',
      date: '2 weeks ago',
      rating: 5,
      comment:
        'Best Butter Chicken and Garlic Naan in town! The flavours are incredibly rich and authentic. The warm hospitality makes it an even better experience.',
      favoriteDish: 'Butter Chicken & Garlic Naan',
    },
    {
      name: 'Priya Adhikari',
      date: '1 month ago',
      rating: 5,
      comment:
        'The Chicken Tikka Biryani here is unmatched—perfectly spiced basmati rice with tender chicken chunks. Highly recommended for family dinners.',
      favoriteDish: 'Chicken Tikka Biryani',
    },
    {
      name: 'Rohan',
      date: '3 weeks ago',
      rating: 5,
      comment:
        'A hidden gem. Their Mango Lassi and tandoori roti were served hot and fresh. Great atmosphere for a relaxing evening meal.',
      favoriteDish: 'Mango Lassi & Tandoori Roti',
    },
    {
      name: 'Suman Thapa',
      date: '1 week ago',
      rating: 5,
      comment:
        'Extremely quick service and delicious Mutton curry. The spicing is spot on and the naan was perfectly charred from the tandoor.',
      favoriteDish: 'Mutton Curry & Masala Naan',
    },
  ];
  return (
    <section
      id="reviews"
      className="relative z-10 border-t border-[#39332F]/40 bg-[#151311] px-6 py-24 md:px-12"
    >
      <div className="mx-auto max-w-6xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E87532]/30 bg-[#E87532]/10 px-4 py-1.5">
          <MessageSquare className="h-3.5 w-3.5 text-[#E87532]" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[#E87532]">
            Guest Testimonials
          </span>
        </div>
        <h2 className="mb-4 font-serif text-3xl font-bold text-[#F8F3EC] md:text-5xl">
          What Our Guests Say
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-base leading-relaxed text-[#B9B0A6]">
          Hear from patrons who have experienced our authentic tandoori preparations and fine dining
          hospitality.
        </p>
        <div className="grid grid-cols-1 gap-5 text-left sm:grid-cols-2 xl:grid-cols-4">
          {reviews.map((rev) => (
            <article
              key={rev.name}
              className="flex min-h-64 flex-col rounded-xl border border-[#39332F]/70 bg-[#1B1815] p-6 transition-colors hover:border-[#E87532]/40">
              <div
                className="mb-4 flex gap-1 text-[#E87532]"
                aria-label={`${rev.rating} out of 5 stars`}>
                {Array.from({ length: rev.rating }, (_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <p className="flex-1 text-sm italic leading-relaxed text-[#F8F3EC]">
                “{rev.comment}”
              </p>
              <div className="mt-6 border-t border-[#39332F]/60 pt-4">
                <h3 className="font-serif text-sm font-bold text-[#F8F3EC]">{rev.name}</h3>
                <p className="mt-1 text-xs leading-relaxed text-[#B9B0A6]">{rev.favoriteDish}</p>
                <p className="mt-2 text-[11px] text-[#8D8378]">{rev.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

