import { Layout } from './components/Layout';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';

export function App() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <Menu />
    </Layout>
  );
}

export default App;