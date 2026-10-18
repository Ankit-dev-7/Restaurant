import react from 'react';
import { Camera} from 'lucide-react';

export const Gallery: React.FC =() => {
    return (
        <section id="gallery" className="py-24px px-6 md:px-12 bg-[#0D0C0b]/60 relative z-10 border-[#39332F]/40">
            <div className="max-w-6xl mx-auto">
                <div className="text-centre mb-16">
                    <div className="inline-flex items=centre gap-2 px-4 py-1.5 rounded=full bg-[#E87532]/10 border-[#39332F]/40">
                    <Camera className="w-3.5 h-3.5 text-[#E87532]" />
                            <span className="text-xs uppercase tracking-widest text-[#E87532] font-semibold">
                    Visual Atmosphere
                    </span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#F8F#EC] mb-4">
                        Restaurant & Food Gallery
                        </h2>
                        <p className="max-w-xl mx-auto text-[#B9B0A6] text-base">
                            A glimpse into our dining environment and freshly crafted tandoori dishes.
                            </p>
                            </div>

                            <div className="grid grid-cols=1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {[1, 2, 3].map((item) => (
                                    <div 
                                    key={item}
                                    className="relative h-72 rounded-xl overflow-hidden border border-[#39332F] group bg-[#151311]">
                                        <div 
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 opacity-60"
                                        style={{ backgroundImage: "url('/image/tandoori-background.png')"}}
                                        />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0B] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs uppercase tracking-wider text-[#E87532] font-semibold">Tandoori Restaurant</span>
                <p className="font-serif text-lg font-bold text-[#F8F3EC]">Authentic Preparation {item}</p>
              </div>
              </div>
                                ))}
                                </div>
                                </div>
                                </section>
                                );
                            };
                            

