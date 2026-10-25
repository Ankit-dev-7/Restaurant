import React from 'react';
import { MapPin , Phone , Clock, ExternalLink} from 'lucide-react';

export const locationContact: React.FC =() => {
  const googleMapsUrl="https://maps.app.goo.gl/KuYkFX7frrQ3idun6";
return(
    <section id="contact" className="py-24 px-6 md:px-12 bg-[#0D0C0B]/80 relative z-10 border-t border-[#39332F]/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#F8F3EC] mb-4">
                Location & Contact 
                </h2>
                <p className="max-w-xl mx-auto text-[#B9B0A6] text-base">
            Join us for an unforgettable dining experience. Reach out or visit our location.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-8 rounded-xl bg-[#151311] border border-[#39332F] hover:border-[#E87532] hover:shadow-xl hover:shadow-[#E87532]/10 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-[#E87532]/10 border border-[#E87532]/30 flex items-center justify-center text-[#E87532] group-hover:bg-[#F8F3EC] transition-all duration-300 mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-1.5 mb-2">
              <h3 className="font-serif text-lg font-bold text-[#F8F3EC] group-hover:text-[#E87532] transition-colors">
                Our Location
              </h3>
              <ExternalLink className="w-4 h-4 text-[#B9B0A6] transition-colors" />
            </div>
            <p className="text-[#B9B0A6] text-sm leading-relaxed mb-4">
              Main Street, Near City Center<br />
              Click to open in Google Maps
            </p>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#E87532] underline underline-offset-4">
              Get Direction &rarr;
            </span>
          </a>
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
            <div className="w-full h-80 rounded-2xl overfall-hidden border border-[#39332F] shadow-2xl relative">
              <iframe
              title="Tandoori Restaurant Location Map"
              src="https://maps.google.com/maps?q=27.692163,84.4251003&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: "0", filter: 'grayscale(0.8) invert(0.9) contrast(1.2)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"/>
                </div>
            </div>
            </section>
);
};