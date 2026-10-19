import React from 'react';
import { Star, MessageSquare } from 'lucide-react';

export const review: React.FC =() => {
  const reviews =[
    {
      name: "Aarnav Sharma",
      date:"2 weeks ago",
      rating:5,
      comment:"Best Butter Chicken and Garlic Naan In town ! The flavours are incredibly rich and authentic. The warm hospitality makes it an even better experience.",
      favoriteDish:"Butter Chicken & Garlic Naan"
    },
    {
      name:"Priya Adhikari",
      date:"1 months ago",
      rating:5,
      comment:"The Chicken Tikka Biryani here is unmatched-perfectly spiced basamati rice with tender chicken chunks. Highly recommended for family dinners",
      favoriteDish:"Chicken tikka Biryani"
    },
    {
      name:"Rohan",
      date:"3 weeks ago",
      rating:5,
      comment:"A hidden gem. Their Mango Lassi and tandoori roti were served hot anf fresh. Great atmosphere for a relaxing evening meal.",
      favoriteDish:"Mango Lassi & Tandoori Roti"
    },
    {
      name:"Suman Thapa",
      date:"1 week ago",
      rating:5,
      comment:"Extremely quick service and delicious Mutton curry. The spicing is spot on and the naan was perfectly charred from the tandoor.",
      favoriteDish:"Mutton Curry & Masala Naan"
    }
  ];
    return(
        <section id="reviews" className="py-24 px-6 md:px-12 bg-[#151311] relative z-10 border-t border-[#39332F]/40">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E87532]/10 border border-[#E87532]/30 mb-4">
          <MessageSquare className="w-3.5 h-3.5 text-[#E87532]" />
          <span className="text-xs uppercase tracking-widest text-[#E87532] font-semibold">
            Guest Testimonials
            </span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#F8F3EC] mb-6">
          What Our Guest Say
        </h2>
        <p className="text-[#B9B0A6] text-base mb-10 max-w-lg mx-auto">
          Hear from patrons who have experienced our authentic tandoori preparations and fine dining hospitality.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-left">
          {reviews.map((rev, index) => (
            <div key={index} className="p-5 rounded-xl border border-[#39332F]/60 bg-[#1B1815]">
              <div className="flex text-[#E87532] mb-4 gap-1">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="font-sans text-xs md:text-sm text-[#F8F3EC] leading-relaxed italic mb-6">
                "{rev.comment}"
              </p>
              <div className="pt-4 border-t border-[#39332F]/60 flex items-center justify-between">
                <div>
                  <h3 className="font-serif font-bold text-[#F8F3EC] text-sm group-hover:text-[#E87532] transition-colors">
                    {rev.name}
                  </h3>
                  <p className="text-[11px] text-[#B9B0A6]">{rev.favoriteDish}</p>
                </div>
                <span className="text-[10px] text-[#B9B0A6]">{rev.date}</span>
              </div>
            </div>
          ))}
          </div>
          </div>
          </section>
    );
};
