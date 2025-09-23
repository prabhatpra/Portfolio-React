// src/components/About/About.jsx
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import BubbleBackground from "../BubbleBackground/BubbleBackground.jsx";
import { Animation } from "./Animation";

// Pages Data
import AboutPage1 from "./About1";
import AboutPage2 from "./About2";
import AboutPage3 from "./About3";
import AboutPage4 from "./About4";

const pages = [AboutPage1, AboutPage2, AboutPage3, AboutPage4];

const About = () => {
  const [index, setIndex] = useState(0);
  const aboutRef = useRef(null);
  const Page = pages[index];
  const animation = Animation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  // 👇 Yeh ensure karega ki jab bhi user About section me aaye → Page1 show ho
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIndex(0); // hamesha AboutPage1 show hoga
          }
        });
      },
      { threshold: 0.4 } // 40% section visible hote hi trigger kare
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const nextPage = () => setIndex((prev) => (prev + 1) % pages.length);

  return (
    <section
      ref={aboutRef}
      id="about"
      className="relative w-screen min-h-screen overflow-hidden
        bg-gradient-to-br from-blue-50 via-cyan-200 to-purple-100/70
        dark:from-gray-900/80 dark:via-purple-900/60 dark:to-indigo-800/70
        flex flex-col items-center justify-start transition-colors duration-700"
    >
      <div className="absolute inset-0 bg-white/20 dark:bg-black/20 pointer-events-none z-0" />
      <BubbleBackground />

      <div className="relative z-10 w-full flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={animation.initial}
            animate={animation.animate}
            exit={animation.exit}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full max-w-6xl flex items-center justify-center px-4"
          >
            <Page />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-20 w-full flex justify-center md:justify-end mb-10 px-6">
        <button
          onClick={nextPage}
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
            text-white font-semibold px-6 py-3 rounded-full shadow-lg
            hover:scale-110 hover:shadow-xl transition-all duration-500 animate-pulse"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default About;
