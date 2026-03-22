import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";


import Prabhat1 from "../../assets/myimg/prabhat1.jpg";
import Prabhat2 from "../../assets/myimg/prabhat2.jpg";
import Prabhat3 from "../../assets/myimg/prabhat3.jpg";

import Education from "./Education";
import Skill from "./Skill";
import Internship from "./Internship";
import Certificate from "./Certificate";

const sections = [
  { id: "Education", label: "Education" },
  { id: "Skill", label: "Skills" },
  { id: "Internship", label: "Internships" },
  { id: "Certificate", label: "Certificates" },
];

const componentsMap = { Education, Skill, Internship, Certificate };

const cardPop = {
  hidden: { opacity: 0, scale: 0.96, y: 10 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, scale: 0.96, y: -10 },
};

export default function AboutMain() {
  const [active, setActive] = useState(null);
  const [images, setImages] = useState([Prabhat1, Prabhat2, Prabhat3]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

 
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

 
  useEffect(() => {
    AOS.refresh();
  }, [active]);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setImages((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 12;
    const y = (e.clientY - rect.top - rect.height / 2) / 12;
    setMouse({ x, y });
  };

  const onLeave = () => setMouse({ x: 0, y: 0 });

  
  const handleShadowClick = (idx) => {
    if (idx === 0) return;
    setImages((prev) => {
      const newImages = [...prev];
      const clicked = newImages[idx];
      const main = newImages[0];
      const otherIdx = 3 - idx;
      const other = newImages[otherIdx];
      if (idx === 1) return [clicked, other, main];
      else if (idx === 2) return [clicked, main, other];
      return prev;
    });
  };

  return (
    <section
      className="relative w-full min-h-screen px-6 py-20 flex items-start justify-center overflow-hidden"
      data-aos="fade-up"
    >
      <div className="w-full max-w-7xl">
        <AnimatePresence mode="wait">
          {!active ? (
            <motion.div
              key={active || "intro"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center"
            >
              
              <motion.div
                variants={cardPop}
                initial="hidden"
                animate="show"
                exit="exit"
                data-aos="fade-right"
                className="md:col-span-7 bg-white/10 dark:bg-black/30 backdrop-blur-md 
                           border border-white/20 dark:border-white/5 rounded-2xl p-8 shadow-xl"
              >
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
                  Hi, I’m{" "}
                  <span className="text-indigo-600 dark:text-indigo-400">
                    Prabhat Prajapati
                  </span>
                </h2>

                <p className="mt-3 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  A passionate{" "}
                  <span className="font-semibold text-blue-600">
                    Full Stack Developer
                  </span>{" "}
                  building clean, scalable web apps using{" "}
                  <span className="font-semibold text-teal-500">Java</span>,{" "}
                  <span className="font-semibold text-green-500">
                    Spring Boot
                  </span>
                  , and{" "}
                  <span className="font-semibold text-pink-500">React.js</span>.
                </p>

                <p className="mt-3 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  I love solving complex problems and exploring modern
                  technologies. I focus on clean architecture, teamwork, and
                  user experience.
                </p>

                <div className="mt-8 flex flex-col items-start gap-3">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    🚀 Explore More
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    👇 Click a section below to explore my journey
                  </p>

                  <div className="flex flex-wrap gap-3 mt-2">
                    {sections.map((sec) => (
                      <motion.button
                        key={sec.id}
                        onClick={() => setActive(sec.id)}
                        whileHover={{
                          scale: 1.05,
                          boxShadow:
                            "0 4px 20px rgba(99,102,241,0.4), 0 0 8px rgba(99,102,241,0.2)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="px-3 py-1 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-400
                                   text-white font-semibold shadow-md border border-white/20
                                   hover:brightness-110 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      >
                        {sec.label}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>

              
              <motion.div
                className="md:col-span-5 flex items-center justify-center relative"
                data-aos="fade-left"
              >
                {images.slice(1).map((img, idx) => (
                  <motion.div
                    key={idx + 1}
                    layout
                    onClick={() => handleShadowClick(idx + 1)}
                    className="absolute w-48 h-64 md:w-64 md:h-80 overflow-hidden cursor-pointer rounded-2xl"
                    style={{
                      top: idx === 0 ? "-1.5rem" : "auto",
                      right: idx === 0 ? "-1.5rem" : "auto",
                      bottom: idx === 1 ? "-1.5rem" : "auto",
                      left: idx === 1 ? "-1.5rem" : "auto",
                      filter: "blur(6px)",
                      opacity: 0.5,
                    }}
                  >
                    <img
                      src={img}
                      className="w-full h-full object-cover rounded-2xl"
                      alt="Prabhat shadow"
                    />
                  </motion.div>
                ))}

               <AnimatePresence mode="wait">
  <motion.div
    key={images[0]} 
    onMouseMove={onMove}
    onMouseLeave={onLeave}
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
    style={{
      rotateY: `${mouse.x}deg`,
      rotateX: `${-mouse.y}deg`,
      boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
    }}
    className="relative w-56 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
  >
    <img
      src={images[0]}
      className="w-full h-full object-cover rounded-2xl"
      alt="Prabhat Main"
    />
    <div className="absolute left-4 bottom-4 bg-white/30 dark:bg-black/50 backdrop-blur-md rounded-full px-3 py-1 flex items-center gap-2 border border-white/20">
      <div className="w-2 h-2 rounded-full bg-green-400" />
      <span className="text-xs font-medium text-slate-900 dark:text-white">
        Open to work
      </span>
    </div>
  </motion.div>
</AnimatePresence>

              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              data-aos="fade-up"
            >
              <motion.div
                variants={cardPop}
                initial="hidden"
                animate="show"
                exit="exit"
                className="bg-white/10 dark:bg-black/30 backdrop-blur-md 
                           border border-white/20 dark:border-white/5 rounded-2xl p-6 shadow-xl"
              >
                {componentsMap[active] ? (
                  React.createElement(componentsMap[active], {
                    onClose: () => setActive(null),
                  })
                ) : (
                  <div className="text-cyan-200 dark:text-orange-300">
                    Content not available.
                  </div>
                )}

                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => setActive(null)}
                    className="px-4 py-2 rounded-md bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold shadow-md hover:brightness-110 transition duration-300"
                  >
                    ← Back
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.p
          data-aos="fade-up"
          className="mt-20 text-orange-400 dark:text-emerald-200 font-semibold text-lg leading-relaxed text-center px-2"
        >
          Currently, I’m looking for opportunities where I can contribute to
          real-world projects, grow as a developer, and collaborate with
          passionate teams.
        </motion.p>
      </div>
    </section>
  );
}
