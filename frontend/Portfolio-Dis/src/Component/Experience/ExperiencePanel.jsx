import React from "react";
import { motion } from "framer-motion";
import { SnapshotRow } from "./ExperienceUtils";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ExperiencePanel({ selected }) {
  if (!selected) return null;

  return (
    <motion.div
      key={selected.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="bg-white/10 dark:bg-white/5 backdrop-blur-xl 
      rounded-3xl p-6 md:p-10 flex flex-col md:flex-row gap-10 
      shadow-xl border border-white/10"
    >
      {/* LEFT */}
      <motion.div 
        className="md:w-2/3 flex flex-col gap-6"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {/* Top */}
        <motion.div className="flex gap-5"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 rounded-xl bg-white/20 flex items-center justify-center">
            <img
              src={selected.logo}
              alt={selected.company}
              className="w-12 h-12 object-contain"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold 
              bg-gradient-to-r from-teal-400 via-red-400 to-cyan-500
              bg-clip-text text-transparent">
              {selected.role}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              {selected.company} • {selected.duration} • {selected.location}
            </p>
          </div>
        </motion.div>

        {/* Bullets */}
        <motion.div className="flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {selected.bullets.map((b, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full 
              bg-white/20 dark:bg-white/10 
              border border-white/10"
            >
              {b}
            </span>
          ))}
        </motion.div>

        {/* Metrics */}
        <motion.div className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {selected.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-xl px-4 py-3 
              bg-gradient-to-br from-cyan-100/40 to-blue-200/40
              dark:from-cyan-900/40 dark:to-blue-900/40"
            >
              <p className="text-xs text-gray-500">{m.label}</p>
              <p className="text-lg font-bold">{m.value}%</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* RIGHT */}
      <motion.div 
        className="md:w-1/3 flex flex-col justify-start gap-6"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {/* Testimonial */}
        <motion.div className="rounded-xl p-10 
        bg-white/20 dark:bg-white/10 backdrop-blur-md shadow-md"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h5 className="text-sm font-semibold">Testimonial</h5>
          <p className="mt-2 text-sm italic text-gray-700 dark:text-gray-300">
            "{selected.testimonial}"
          </p>
        </motion.div>

        {/* Snapshots */}
        <motion.div className="pt-10 overflow-auto scrollbar-hide"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="text-sm font-medium mb-2">Snapshots</h4>
          <SnapshotRow snapshots={selected.snapshots} />
        </motion.div>

        {/* Buttons */}
        <motion.div className="flex flex-col gap-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {selected.github && (
            <a
              href={selected.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 
              px-4 py-2 rounded-lg text-sm font-medium
              bg-gradient-to-r from-green-200 via-teal-300 to-fuchsia-300
              hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              <FaGithub /> View Code
            </a>
          )}

          {selected.live && (
            <a
              href={selected.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 
              px-4 py-2 rounded-lg text-sm font-medium
              bg-gradient-to-r from-green-200 via-teal-300 to-fuchsia-300 text-black
              hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}

          <button
            onClick={() => alert("Full details clicked!")}
            className="flex items-center justify-center gap-2 
              px-4 py-2 rounded-lg text-sm font-semibold
              bg-gradient-to-r from-green-200 via-teal-300 to-fuchsia-300 text-black
              hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            View Full Details
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default ExperiencePanel;