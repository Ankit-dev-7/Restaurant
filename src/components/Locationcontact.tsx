import React from 'react';
import { MapPin , Phone , Clock, Mail} from 'lucide-react';

export const locationContact: React.FC =() => {
return(
    <section id="contact" className="py-24 px-6 md:px-12 bg-[#0D0C0B]/80 relative z-10 border-t border-[#39332F]/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E87532]/10 border border-[#E87532]/30 mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#E87532]" />
            <span className="text-xs uppercase tracking-widest text-[#E87532] font-semibold">
                Visit & Conect
            </span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#F8F3EC] mb-4">
                Location & Contact 
                </h2>
                <p className="max-w-xl mx-auto text-[#B9B0A6] text-base">
            Join us for an unforgettable dining experience. Reach out or visit our location.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="p-8 rounded-xl bg-[#151311] border border-[#39332F] shadow-lg flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-[#E87532]/10 border border-[#E87532]/30 flex items-center justify-center text-[#E87532] mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#F8F3EC] mb-2">Our Location</h3>
            <p className="text-[#B9B0A6] text-sm leading-relaxed">
              Main Street, Near City Center<br />
              Verified Restaurant Location
            </p>
          </div>
          <div className="p-8 rounded-xl bg-[#151311] border border-[#39332F] shadow-lg flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-[#E87532]/10 border border-[#E87532]/30 flex items-center justify-center text-[#E87532] mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#F8F3EC] mb-2">Opening Hours</h3>
            <p className="text-[#B9B0A6] text-sm leading-relaxed">
              Monday – Sunday<br />
              11:00 AM – 10:00 PM
            </p>
          </div>
        <div className="p-8 rounded-xl bg-[#151311] border border-[#39332F] shadow-lg flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-[#E87532]/10 border border-[#E87532]/30 flex items-center justify-center text-[#E87532] mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#F8F3EC] mb-2">Reservations & Inquiries</h3>
            <p className="text-[#B9B0A6] text-sm leading-relaxed">
              Contact us directly for table inquiries and takeaway orders.<br />
              <span className="text-[#E87532] font-semibold">+977 XXXXXXXXXX</span>
            </p>  
            </div>
            </div>
            </div>
            </section>
);
};

