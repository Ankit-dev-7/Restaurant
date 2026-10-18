import { Layout } from './components/Layout';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

export function App() {
  return (
    <Layout>
      <Navbar />
      <Hero />
    </Layout>
  );
}

export default App;