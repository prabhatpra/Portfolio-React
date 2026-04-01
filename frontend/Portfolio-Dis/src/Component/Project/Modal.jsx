// src/components/Project/Modal.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-2 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-gradient-to-br dark:from-gray-900/80 dark:via-purple-900/60 dark:to-indigo-800/70 p-6 rounded-2xl w-full max-w-lg relative flex flex-col gap-4 overflow-y-auto max-h-[90vh] scrollbar-hide"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-2xl font-bold text-white"
            >
              &times;
            </button>

            {/* Image */}
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-xl" />

            {/* Title & Description */}
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
            <p className="text-white/80 text-sm">{project.description}</p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tech.map((t, i) => (
                <span key={i} className="px-2 py-1 rounded-full bg-purple-500 text-white text-xs">{t}</span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mt-4">
              {project.liveLink && <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex-1 min-w-[90px] px-3 py-2 rounded-full bg-blue-500 text-white text-center text-sm hover:bg-blue-600">Live Project</a>}
              {project.githubLink && <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex-1 min-w-[90px] px-3 py-2 rounded-full bg-gray-700 text-white text-center text-sm hover:bg-gray-800">View Code</a>}
              {project.detailLink && <a href={project.detailLink} target="_blank" rel="noreferrer" className="flex-1 min-w-[90px] px-3 py-2 rounded-full bg-green-500 text-white text-center text-sm hover:bg-green-600">Details</a>}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;