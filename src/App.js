import HeroSection from './components/HeroSection';
import HeaderSection from './components/HeaderSection';
function App() {
  return (
    <section className="h-screen flex flex-col  bg-gradient-to-b from-indigo-900 to-black text-center text-white relative overflow-hidden">
      <HeaderSection />
      <HeroSection />
    </section>
  );
}

export default App;
