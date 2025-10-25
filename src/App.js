import HeroSection from './components/HeroSection';
import HeaderSection from './components/HeaderSection';
import AboutSection from './components/AboutSection';
import TimelineSection from './components/TimelineSection';
import challengeSection from './components/challengeSection';
function App() {
  return (
    <section className="h-screen flex flex-col  bg-gradient-to-b from-indigo-900 to-black text-center text-white relative overflow-x-auto">
      <HeaderSection />
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      
    </section>
  );
}

export default App;
