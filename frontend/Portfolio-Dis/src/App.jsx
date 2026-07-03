import React from 'react'
import{ Routes, Route } from "react-router-dom";

import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Projects from './Component/Project/Projects'
import About from './Component/About/About'
import Footer from './Component/Footer/Footer'
import Experience from './Component/Experience/Experience'
import WelcomeBG from './Component/WelcomeBG/WelcomeBG'
import Resume from './Component/Resume/Resume'
import Contact from './Component/Contact/Contact'
import ExperienceDetails from './Component/ExperienceDetails/JavaDetails';
import Login from './Admin/LoginSignup/Login';
import Dashboard from './Admin/pages/Dashboard/Dashboard';
import AdminLayout from './Admin/layout/AdminLayout';

const Home = () => {
  return (
    <WelcomeBG>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </WelcomeBG>
  );
};

const App = () => {
  return (

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/resume" element={<Resume />} />

        <Route path="/ExperienceDetails" element={<ExperienceDetails />} />

        <Route path="/Admin/login" element={<Login />} />

        <Route path="/Admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>

      
  );
};

export default App;