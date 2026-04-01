import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import AddProjectForm from "./AddProjectForm";
import { demoProjects } from "./ProjectData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion"; // ✅ added

const Projects = () => {
  const [projects, setProjects] = useState(demoProjects);
  const [showForm, setShowForm] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

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

  // Swipe config
  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
    trackMouse: true,
    delta: 40
  });

  return (
    <section
      id="project"
      className="relative w-screen min-h-screen overflow-hidden
      flex flex-col items-center px-4 sm:px-6 md:px-20 py-10
      transition-colors duration-700"
    >
      <div className="absolute inset-0 bg-white/20 dark:bg-black/20 pointer-events-none z-0"></div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center gap-8">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-3xl font-bold text-center 
          bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600
          bg-clip-text text-transparent"
        >
          My Projects
        </motion.h1>

        {/* Button */}
        <div className="text-center">
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-gradient-to-br from-blue-300 via-cyan-500 to-purple-400
            dark:from-gray-600 dark:via-purple-700 dark:to-indigo-800 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition-colors group"
            onClick={() => setShowForm(true)}
          >
            <span className="block group-hover:hidden">
              Add New Project
            </span>
            <span className="hidden group-hover:block">
              Only for Admin
            </span>
          </motion.button>
        </div>

        {/* Welcome Message */}
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-lg sm:text-xl font-medium text-center bg-gradient-to-r from-blue-500 via-purple-400
          to-pink-400 bg-clip-text text-transparent leading-relaxed max-w-2xl"
        >
          Welcome to my code-space 👨‍💻 <br />
          Here, logic meets creativity and ideas turn into real experiences. <br />
          Take a look around, and maybe you’ll find a piece of inspiration hidden here ✨
        </motion.p>

        {/* Mobile carousel */}
        <div
          className="relative w-full lg:hidden overflow-hidden"
          {...handlers}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project) => (
              <div key={project.title} className="flex-shrink-0 w-full px-4">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

         <div className="flex justify-center mt-4 gap-2 lg:hidden">
  {projects.map((project, idx) => (
    <button
      key={project.title}
      onClick={() => setCurrentIndex(idx)}
      className={`w-3 h-3 rounded-full transition-all duration-300 
        ${
          currentIndex === idx
            ? "bg-blue-500 scale-125 shadow-md shadow-blue-400"
            : "bg-gray-400 dark:bg-gray-600"
        }`}
    />
  ))}
</div>

          {/* Left button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 
            bg-white/70 dark:bg-black/50 p-2 rounded-full shadow-lg
            hover:scale-110 transition flex lg:hidden"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          </button>

          {/* Right button */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 
            bg-white/70 dark:bg-black/50 p-2 rounded-full shadow-lg
            hover:scale-110 transition flex lg:hidden"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          </button>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6 w-full">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
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
      </div>
    </section>
  );
};

export default Projects;