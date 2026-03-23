import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroImg from "./HeroImg";
import HeroDetails from "./HeroDetails";
import HeroSocial from "./HeroSocial";

const Hero = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 🔥 Welcome Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen z-[999] 
            flex flex-col items-center justify-center 
            bg-gradient-to-br from-gray-900 via-slate-900 to-black 
            text-white text-center px-4 overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {/* ✨ Glow Effects */}
            <div className="absolute w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl top-10 left-10 z-0"></div>
            <div className="absolute w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl bottom-10 right-10 z-0"></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-0"></div>

            {/* Content */}
            <motion.div
              className="z-10 flex flex-col items-center"
              initial={{ opacity: 0, y: 40, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Hi, I'm Prabhat 👋
              </h1>

              <p className="text-sm sm:text-lg md:text-xl text-gray-400 mt-2">
                Welcome to my portfolio
              </p>
            </motion.div>

            {/* Sub Heading */}
            <motion.p
              className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-xl mt-4 z-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              I build modern web applications 💻 with clean UI 🎨 and scalable backend using Spring Boot ⚙️
            </motion.p>

            {/* Loading Dots */}
            <motion.div className="flex gap-2 mt-6 z-10">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🔥 Main Hero Section */}
      {!loading && (
        <section
          id="home"
          className="
          relative w-screen h-screen overflow-hidden
          bg-gradient-to-br from-blue-50 via-cyan-200 to-purple-100/70
          dark:bg-none dark:bg-black
          flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-20
          transition-colors duration-700
        "
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-white/20 dark:bg-black/20 pointer-events-none z-0"></div>

          {/* Main Content */}
          <motion.div
            className="z-10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 w-full max-w-7xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <HeroImg />

            <div className="flex-1 flex flex-col justify-center md:justify-start md:ml-10 mt-6 md:mt-0 text-center md:text-left">
              <HeroDetails />
            </div>
          </motion.div>

          {/* Social */}
          <div className="absolute bottom-8 w-full flex justify-center z-20">
            <HeroSocial />
          </div>
        </section>
      )}
    </>
  );
};

export default Hero;