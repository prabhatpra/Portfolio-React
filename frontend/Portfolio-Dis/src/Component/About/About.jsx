import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
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
    className="relative w-full min-h-screen overflow-hidden
flex flex-col items-center justify-start transition-colors duration-700"
>

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
