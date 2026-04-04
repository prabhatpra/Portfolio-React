import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

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
  hidden: { opacity: 0, scale: 0.95, y: 80 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: { opacity: 0, scale: 0.95, y: -20 },
};

const leftCardAnim = {
  hidden: { opacity: 0, x: -120, y: -120, scale: 0.95 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
  exit: { opacity: 0, x: -80, y: -80, scale: 0.95 },
};

export default function AboutMain() {
  const [active, setActive] = useState(null);
  const [images, setImages] = useState([Prabhat1, Prabhat2, Prabhat3]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // ✅ FIX 1: useScroll (replace deprecated useViewportScroll)
  const { scrollY } = useScroll();

  // ✅ FIX 2: smoother + optimized range
  const yRange = useTransform(scrollY, [0, 500], [-30, 30]);
  const smoothY = useSpring(yRange, { damping: 40, stiffness: 80 });

  // Auto image rotate
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
    <section className="relative w-full min-h-screen px-6 py-20 flex items-start justify-center overflow-hidden">
      <div className="w-full max-w-7xl">
        <AnimatePresence mode="wait">
          {!active ? (
            <motion.div
              key="intro"
              className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center"
            >
              {/* LEFT */}
              <motion.div
                variants={leftCardAnim}
                initial="hidden"
                whileInView="show"
                exit="exit"
                viewport={{ once: false, amount: 0.2 }}
                style={{ y: smoothY }}
                className="md:col-span-7 bg-white/10 dark:bg-black/30 backdrop-blur-md 
                border border-white/20 dark:border-white/5 rounded-2xl p-8 shadow-xl"
              >
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
                  Hi, I’m{" "}
                  <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
                    Prabhat Prajapati
                  </span>
                </h2>

                <p className="mt-3 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  A passionate{" "}
                  <span className="font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                    Full Stack Developer
                  </span>{" "}
                  building scalable apps using{" "}
                  <span className="font-semibold text-orange-400">Java</span>,{" "}
                  <span className="font-semibold text-green-500">Spring Boot</span>, and{" "}
                  <span className="font-semibold text-sky-500">React.js</span>.
                </p>

                <p className="mt-2 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  I have experience in building REST APIs with authentication and database integration, and have worked 
                  on backend systems including order management and Stripe payment integration. I also have experience in building responsive frontends using React.js and Tailwind CSS.
                </p>

                <div className="mt-8 flex flex-col items-start gap-3">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
                    🚀 Explore My Journey
                  </h3>

                  <div className="flex flex-wrap gap-3 mt-2">
                    {sections.map((sec) => (
                      <motion.button
                        key={sec.id}
                        onClick={() => setActive(sec.id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-3 py-1 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-400 text-white font-semibold shadow-md"
                      >
                        {sec.label}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* RIGHT */}
              <motion.div className="md:col-span-5 flex items-center justify-center relative">
                {images.slice(1).map((img, idx) => (
                  <motion.div
                    key={idx}
                    layout="position"  // ✅ FIX
                    onClick={() => handleShadowClick(idx + 1)}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ type: "spring", stiffness: 50, damping: 25 }}
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
                    <img src={img} alt="Prabhat preview" className="w-full h-full object-cover" />
                  </motion.div>
                ))}

                {/* Main Image */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={images[0]}
                    onMouseMove={onMove}
                    onMouseLeave={onLeave}
                    initial={{ opacity: 0, scale: 0.9, x: 80 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, x: -80 }}
                    transition={{ duration: 0.7 }}
                    style={{
                      rotateY: `${mouse.x}deg`,
                      rotateX: `${-mouse.y}deg`,
                    }}
                    className="relative w-56 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <img src={images[0]} alt="Prabhat main" className="w-full h-full object-cover" />
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key={active}
              initial="hidden"
              animate="show"
              exit="exit"
              variants={cardPop}
            >
              <div className="bg-white/10 dark:bg-black/30 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                {React.createElement(componentsMap[active], {
                  onClose: () => setActive(null),
                })}

                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => setActive(null)}
                    className="px-4 py-2 rounded-md bg-gradient-to-r from-red-500 to-pink-500 text-white"
                  >
                    ← Back
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-lg text-center  bg-gradient-to-r from-orange-400 via-pink-300 to-emerald-400 bg-clip-text text-transparent"
        >
         I am a passionate Full Stack Developer skilled in React, Tailwind CSS, and backend technologies, actively seeking opportunities to build scalable applications, solve real-world problems, and grow in a professional environment.
        </motion.p>
      </div>
    </section>
  );
}