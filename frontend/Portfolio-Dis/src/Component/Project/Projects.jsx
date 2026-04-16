import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import AddProjectForm from "./AddProjectForm";
import { demoProjects } from "./ProjectData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Modal";

const Projects = () => {
  const [projects, setProjects] = useState(demoProjects);
  const [showForm, setShowForm] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [showButtons, setShowButtons] = useState(false);
  const timerRef = useRef(null);

  // 🔥 animation
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // ✅ FIX: cleanup timer (memory leak fix)
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

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

  // ✅ Activity logic
  const handleUserActivity = () => {
    setShowButtons(true);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setShowButtons(false);
    }, 2000);
  };

  // swipe
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
      className="relative w-full min-h-screen overflow-hidden
      flex flex-col items-center px-4 sm:px-6 md:px-20 py-16
      transition-colors duration-700"
    >

      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center gap-10">

        {/* Heading */}
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="mt-10 text-3xl font-bold text-center 
          bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600
          bg-clip-text text-transparent"
        >
          My Projects
        </motion.h1>

        {/* Add Project Button */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <button
            className="bg-gradient-to-br from-blue-300 via-cyan-500 to-purple-400
            dark:from-gray-600 dark:via-purple-700 dark:to-indigo-800
            text-white px-5 py-2 rounded-lg hover:bg-green-600 transition-colors group"
            onClick={() => setShowForm(true)}
          >
            <span className="block group-hover:hidden">Add New Project</span>
            <span className="hidden group-hover:block">Only for Admin</span>
          </button>
        </motion.div>

        {/* Welcome Message */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-lg sm:text-xl font-medium text-center
          bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400
          bg-clip-text text-transparent leading-relaxed max-w-2xl"
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
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <ProjectCard
                    {...project}
                    openModal={() => {
                      setSelectedProject(project);
                      setIsModalOpen(true);
                    }}
                  />
                </motion.div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-4 gap-2 lg:hidden">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "bg-blue-500 scale-125 shadow-md shadow-blue-400"
                    : "bg-gray-400 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20
            bg-white/70 dark:bg-black/50 p-2 rounded-full shadow-lg
            hover:scale-110 transition flex lg:hidden
            transition-opacity duration-300
            ${showButtons ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          </button>

          <button
            onClick={handleNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20
            bg-white/70 dark:bg-black/50 p-2 rounded-full shadow-lg
            hover:scale-110 transition flex lg:hidden
            transition-opacity duration-300
            ${showButtons ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          </button>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6 w-full">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
            >
              <ProjectCard
                {...project}
                openModal={() => {
                  setSelectedProject(project);
                  setIsModalOpen(true);
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="mt-10 text-center text-base sm:text-lg text-gray-600 dark:text-gray-300 italic"
        >
          Thanks for visiting 💙 Your time here means a lot!
        </motion.p>

        {showForm && (
          <AddProjectForm
            onAddProject={handleAddProject}
            onClose={() => setShowForm(false)}
          />
        )}

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