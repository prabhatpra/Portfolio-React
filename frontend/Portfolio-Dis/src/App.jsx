import React, {useEffect } from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Projects from './Component/Project/Projects'
import About from './Component/About/About'
import Footer from './Component/Footer/Footer'
import Experience from './Component/Experience/Experience'
import BubbleBackground from './Component/BubbleBackground/BubbleBackground'

const App = () => {

  useEffect(() => {
    window.scrollTo(0, { behavior: "smooth" });
  }, []);

  return (
    <BubbleBackground>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Footer />
    </BubbleBackground>
  );
};

export default App;