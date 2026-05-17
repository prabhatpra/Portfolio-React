import React from 'react'
import{ Routes, Route } from "react-router-dom";

import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Projects from './Component/Project/Projects'
import About from './Component/About/About'
import Footer from './Component/Footer/Footer'
import Experience from './Component/Experience/Experience'
import BubbleBackground from './Component/BubbleBackground/BubbleBackground'
import Resume from './Component/Resume/Resume'
import Contact from './Component/Contact/Contact'
import ExperienceDetails from './Component/ExperienceDetails/JavaDetails';

const Home = () => {
  return (
    <BubbleBackground>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </BubbleBackground>
  );
};

const App = () => {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/ExperienceDetails" element={
            <ExperienceDetails />
        } />
      </Routes>
  );
};

export default App;