import About from './components/About/About';
import Contact from './components/Contact/Contact';
import HeroSection from './components/HeroSection/HeroSection';
import Projects from './components/Projects/Projects';
import Navbar from './components/Navbar/Navbar';
import "./App.scss"
// import Image from "./images/ball.png"

import {motion, Variants} from "framer-motion"
import { useState } from 'react';

function App() {

  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = (event) => {
    
    if(event.currentTarget.scrollTop > 20){
      setScrollTop(200);
      console.log(event.currentTarget.scrollTop);
    }

  };
  return (
    <div className="containerForScroll" onScroll={handleScroll}>
      {/* <motion.div
      className='motionDiv'
        initial={{x: 0, y: 0}}
        animate={{ y: scrollTop}}
        transition={{
          type: "spring",
          duration: 0.5}}
      > 
        <img className='image1' src={Image}/>
      </motion.div> */}
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
