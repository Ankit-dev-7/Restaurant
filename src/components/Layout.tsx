import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-[#151311] text-[#F8F3EC]">
      {/* Official Fixed Background Photograph with Dark Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat opacity-25 filter brightness-75 contrast-125"
        style={{
          backgroundImage: "url('/images/tandoori-background.png')",
        }}
      />
      {/* Radial vignette overlay for cinematic tone */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-radial from-transparent via-[#151311]/70 to-[#0D0C0B]" />

     {/* Main Content Layer */}
     <div className="relative z-10 flex flex-col min-h-screen">
      {children}
     </div>
     </div>
  );
};
