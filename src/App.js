import About from './components/About/About';
import Contact from './components/Contact/Contact';
import HeroSection from './components/HeroSection/HeroSection';
import Projects from './components/Projects/Projects';
import Navbar from './components/Navbar/Navbar';
import "./App.scss"

function App() {
  return (
    <div className="containerForScroll">
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
