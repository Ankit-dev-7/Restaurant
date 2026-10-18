import {Layout} from './components/Layout';

export function App() {
    return (
        <Layout>
       <main className="flex-1 flex flex-col items-center justify-center p-8 text-center min-h-screen">
        <span className="text-[#E87532] text-sm font-semibold tracking-widest uppercase mb-3">
          Stage 2 Verification
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#F8F3EC] mb-4 tracking-wide">
          TANDOORI RESTAURANT
        </h1>
        <p className="max-w-xl text-[#B9B0A6] text-lg mb-8 leading-relaxed">
          Fine Authentic Indian Cuisine. Dark & Premium visual foundation successfully loaded.
        </p>
        
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-[#E87532] text-[#F8F3EC] font-semibold rounded hover:bg-[#B86F45] transition-colors border border-[#E87532]">
            Primary Action
          </button>
          <button className="px-6 py-3 bg-[#0D0C0B]/80 text-[#B9B0A6] font-semibold rounded hover:text-[#F8F3EC] border border-[#39332F] transition-colors">
            Secondary Action
            </button>
            </div>
            </main>
            </Layout>
    );     
}

export default App;