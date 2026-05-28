import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { demoProjects } from "./ProjectData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Modal";

const Projects = () => {
  const [projects] = useState(demoProjects);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [showButtons, setShowButtons] = useState(false);
  const timerRef = useRef(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const handleUserActivity = () => {
    setShowButtons(true);

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setShowButtons(false);
    }, 2000);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
    trackMouse: true,
    delta: 40,
  });

  return (
    <section
      id="project"
      onTouchStart={handleUserActivity}
      onTouchMove={handleUserActivity}
      onMouseMove={handleUserActivity}
      className="relative w-full min-h-screen overflow-hidden flex flex-col items-center px-4 sm:px-6 md:px-20 py-16"
    >
      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center gap-10">

        {/* Heading */}
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          className="mt-10 text-3xl font-bold text-center bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 bg-clip-text text-transparent"
        >
          My Projects
        </motion.h1>

        {/* Welcome Message */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          className="text-lg sm:text-xl font-medium text-center bg-gradient-to-r from-blue-700 via-purple-600 to-sky-800 bg-clip-text text-transparent leading-relaxed max-w-2xl"
        >
          Welcome to my code-space 👨‍💻 <br />
          Here, logic meets creativity and ideas turn into real experiences. <br />
          Take a look around, and maybe you’ll find a piece of inspiration hidden here ✨
        </motion.p>

        {/* Mobile Carousel */}
        <div className="relative w-full lg:hidden overflow-hidden" {...handlers}>
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, idx) => (
              <div key={idx} className="flex-shrink-0 w-full px-4">
                <ProjectCard
                  {...project}
                  openModal={() => {
                    setSelectedProject(project);
                    setIsModalOpen(true);
                  }}
                />
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-4 gap-2 lg:hidden">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === idx
                    ? "bg-blue-500 scale-125"
                    : "bg-gray-400 dark:bg-gray-600"
                  }`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/70 dark:bg-black/50 p-2 rounded-full ${showButtons ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
          >
            <ChevronLeft />
          </button>

          <button
            onClick={handleNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/70 dark:bg-black/50 p-2 rounded-full ${showButtons ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
          >
            <ChevronRight />
          </button>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6 w-full">
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              {...project}
              openModal={() => {
                setSelectedProject(project);
                setIsModalOpen(true);
              }}
            />
          ))}
        </div>

        {/* Footer */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          className="mt-10 text-center text-base sm:text-lg bg-gradient-to-r from-blue-700 via-purple-600 to-sky-800 bg-clip-text text-transparent italic"
        >
          Thanks for visiting 💙 Your time here means a lot!
        </motion.p>

        <AnimatePresence>
          {isModalOpen && selectedProject && (
            <Modal
              project={selectedProject}
              onClose={() => setIsModalOpen(false)}
            />
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Projects;