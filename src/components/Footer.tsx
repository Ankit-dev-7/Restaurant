import react from 'react';
import { UtensilsCrossed } from 'lucide-react';

export const footer: react.FC =() => {
    return(
        <footer className="bg-[#0D0C0B] border-t border-[#39332F] py-12 px-6 md:px-12 relative z-10 text-center md:text-left">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#E87532]/10 border border-[#E87532]/30 flex items-center justify-center text-[#E87532]">
            <UtensilsCrossed className="w-5 h-5" />
          </div>
          <span className="font-serif text-xl font-bold tracking-wider text-[#F8F3EC]">
            TANDOORI <span className="text-[#E87532]">RESTAURANT</span>
          </span>
        </div>

        <p className="text-[#B9B0A6] text-sm">
            &copy; {new Data ().getFullYear()} Tandoori restaurant.All rights reserved.
            </p>

            <div className="flex gap-6 text-sm text-[#B9B0A6]">
                <a href="#" className="hover:text-[#E87532] transition-colors">Privacy Policy</a>
                < a href="#" className="hover:text-[#E87532] transition-colors">Terms of services</a>
                </div>
                </div>
                </footer>
    );
};
