import React from 'react';
import { LanguageProvider } from './context/Languagecontext';
import { CartProvider } from './context/CartContext';
import { CartDrawer } from './components/CartDrawer';
import { Layout } from './components/Layout';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { SignatureDishes } from './components/SignatureDishes';
import { Gallery } from './components/Gallery';
import { review as Reviews } from './components/Reviews';
import { Offers } from './components/Offers';
import { locationContact as LocationContact } from './components/Locationcontact';
import { footer as Footer } from './components/Footer';

export function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <Layout>
          <div className="min-h-screen text-[#F8F3EC] selection:bg-[#E87532] selection:text-[#F8F3EC]">
            <Navbar />
            <main>
              <Hero />
              <Menu />
              <SignatureDishes />
              <Gallery />
              <Reviews />
              <Offers />
              <LocationContact />
            </main>
            <Footer />
            <CartDrawer />
          </div>
        </Layout>
      </CartProvider>
    </LanguageProvider>
  );
}
export default App;