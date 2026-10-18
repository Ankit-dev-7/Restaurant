import { Layout } from './components/Layout';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { SignatureDishes } from './components/SignatureDishes';
import { Gallery } from './components/Gallery';
import { review as Reviews } from './components/Reviews';
import { locationContact as LocationContact } from './components/LocationContact';
import { footer as Footer } from './components/Footer';

export function App() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <Menu />
      <SignatureDishes />
      <Gallery />
      <Reviews />
      <LocationContact />
      <Footer />
    </Layout>
  );
}

export default App;