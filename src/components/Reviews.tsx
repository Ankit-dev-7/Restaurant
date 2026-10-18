import react from 'react';
import { Star, MessageSquare } from 'lucide-react';

export const review: react.FC =() => {
    return(
        <section id="reviews" className="py-24 px-6 md:px-12 bg-[#151311] relative z-10 border-t border-[#39332F]/40">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E87532]/10 border border-[#E87532]/30 mb-4">
          <MessageSquare className="w-3.5 h-3.5 text-[#E87532]" />
          <span className="text-xs uppercase tracking-widest text-[#E87532] font-semibold">
            Customer Feedback 
            </span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#F8F3EC] mb-6">
          Genuine Reviews
        </h2>
        <p className="text-[#B9B0A6] text-base mb-10 max-w-lg mx-auto">
          We value authentic feedback from every guest. Verified reviews and testimonials from our patrons will be displayed here.
        </p>
        
        <div className="p-8 rounded-2xl bg-[#0D0C0B] border border-[#39332F] max-w-xl mx-auto shadow-xl">
          <div className="flex justify-center gap-1 text-[#E87532] mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <p className="font-serif text-lg text-[#F8F3EC] italic mb-4">
            "Visit our Google business listing or leave us your feedback in person. We strive to serve the finest tandoori experience!"
          </p>
          <span className="text-xs uppercase tracking-widest text-[#B9B0A6] font-semibold">
            - Tandoori Restaurant Management
          </span>
          </div>
          </div>
          </section>
    );
};
