import React from 'react';
import { CartProvider } from './context/CartContext';
import { CartDrawer } from './components/CartDrawer';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { SignatureDishes } from './components/SignatureDishes';
import { Gallery } from './components/Gallery';
import { review as Reviews } from './components/Reviews';
import { locationContact as LocationContact } from './components/Locationcontact';
import { footer as Footer } from './components/Footer';

export function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#151311] text-[#F8F3EC] selection:bg-[#E87532] selection:text-[#F8F3EC]">
        <Navbar />
        <main>
          <Hero />
          <Menu />
          <SignatureDishes />
          <Gallery />
          <Reviews />
          <LocationContact />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}

export default App;