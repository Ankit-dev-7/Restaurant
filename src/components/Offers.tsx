import React from 'react';
import { Tag, Sparkles } from 'lucide-react';

export const Offers: React.FC =() => {
    const offers= [
        {
        title:"Weekend Family Feast",
        description:"Enjoy our special platter featuring mixed tandoori grill, butter chicken, 4 garlic naans, and a complimentry jug of mango Lassi.",
        badge:"Weekend Special",
        validity:"Valid every Friday to Saturday"
        },
        {
            title:"Festival Season celebration",
            description:"Join us during local festivities for traditional culinary specials and seasonal sweet treats prepared live by our master chefs.",
            badge:"Limited Time",
            validity:"Announced during Holidays"
        }
    ];
    return(
        <section id="offers" className="py-24 md:px-12 bg=[#0D0C0B] relative z-10 border-t border-[#39332F]/40">
            <div className="max-w-6xl mx=auto">
                <div className="text=center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg=[#E87532]/10 border border=[#E87532]/30 mb-4">
                    <Sparkles className="w-3.5 h-3.5 text=-[#E87532]"/>
                    <span className="text-xs uppercase tracking-widest text-[#E87532] font-semibold">
                        Special Offers & Events
                    </span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#F8F3EC] mb=-4">
                        Exclusive Dining Promotions 
                        </h2>
                        <p className="max-w-xl mx-auto text-[#B9B0A6] text-base">
                            Discover our seasonal menus, Festive specials, and family dining packages.</p>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {offers.map((offer, index) => (
            <div 
            key={index}
            className="p-8 rounded-2xl bg-[#151311] border border-[#39332F] hover:border-[#E87532]/50 transition-all duration-300 relative overflow-hidden group shadow-xl flex flex=col justify-between">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E87532] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>

                <div>
                    <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E87532]/10 border border-[#E87532]/30 text-[#E87532] text-xs font-semibold">
                    <Tag className="w-3 h-3" />
                    {offer.badge}
                    </span>
                    <span className="text-xs text-[#B9B0A6]/70 italic">{offer.validity}</span>
                   </div>
                   
                   <h3 className="font-serif text-xl font-bold text-[#F8F3EC] mb-3 group-hover:text-[#E87532] transition-colors">
                    {offer.title}
                   </h3>

                   <p className="text-[#B9B0A6] text-sm leading-relaxed mb-6">
                    {offer.description}
                   </p>
                   </div>

                   <div className="pt-4 border-t border-[#39332F]/50 flex items-center justify-between text-xs text-[#B9B0A6]">
                   <span>available for Dine-in & Takeaway</span>
                   <a
                   href="#contact"
                   className="font-semibold text-[#E87532] hover:underline underline-offset-4">
                    Inquire Now &rarr;
                   </a>
                   </div>
                   </div>
        ))}
        </div>
        </div>
        </section>
    );
};