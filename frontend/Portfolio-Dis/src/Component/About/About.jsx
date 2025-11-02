// src/components/About/About.jsx
import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import BubbleBackground from "../BubbleBackground/BubbleBackground.jsx";
import { Animation } from "./Animation";
import AboutMain from "./AboutMain";

const About = () => {
  const aboutRef = useRef(null);
  const animation = Animation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

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
            key="about-main"
            initial={animation.initial}
            animate={animation.animate}
            exit={animation.exit}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full max-w-6xl flex items-center justify-center px-4"
          >
            <AboutMain />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default About;
