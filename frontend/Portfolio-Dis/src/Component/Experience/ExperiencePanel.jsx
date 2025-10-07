// ExperiencePanel.jsx
import React from "react";
import { motion } from "framer-motion";
import { TechChart, SnapshotRow } from "./ExperienceUtils";

function ExperiencePanel({ selected }) {
  if (!selected) return null;

  return (
    <motion.div
      key={selected.id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45 }}
      className="bg-transparent backdrop-blur-md rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 shadow-lg"
    >
      {/* Left Column */}
      <div className="md:w-2/3 flex flex-col gap-6">
        <div className="flex items-start gap-6">
          <div className="w-24 h-24 rounded-lg bg-transparent flex items-center justify-center shadow-none border border-gray-200 dark:border-gray-700">
            <img
              src={selected.logo}
              alt={selected.company}
              className="w-16 h-16 object-contain"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 dark:text-white">
              {selected.role}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              {selected.company} • {selected.duration} • {selected.location}
            </p>

            {/* Bullets */}
            <div className="mt-3 flex flex-wrap gap-2">
              {selected.bullets.map((b, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 via-cyan-100 to-blue-100 dark:bg-gradient-to-r dark:from-purple-800 dark:via-cyan-800 dark:to-blue-800 text-gray-800 dark:text-gray-100 shadow-sm"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="flex flex-wrap gap-4 mt-4">
          {selected.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-md p-4 bg-gradient-to-r from-cyan-50 via-blue-50 to-purple-50 dark:bg-gradient-to-r dark:from-cyan-900 dark:via-blue-900 dark:to-purple-900 shadow-md min-w-[130px]"
            >
              <p className="text-xs text-gray-500 dark:text-gray-400">{m.label}</p>
              <p className="text-lg font-bold text-blue-700 dark:text-cyan-300">
                {m.value}%
              </p>
            </div>
          ))}
        </div>

        {/* Snapshots */}
        <div className="mt-6">
          <h4 className="text-sm font-medium text-gray-800 dark:text-white mb-2">
            Snapshots
          </h4>
          <div className="flex gap-4 overflow-x-auto py-2">
            {selected.snapshots && selected.snapshots.length > 0 ? (
              selected.snapshots.map((s, i) => (
                <div
                  key={i}
                  className="min-w-[180px] rounded-md overflow-hidden shadow-md transform transition-transform hover:scale-105"
                >
                  <img
                    src={s}
                    alt={`snapshot-${i}`}
                    className="w-full h-32 object-cover"
                  />
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                No snapshots available.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="md:w-1/3 flex flex-col gap-6">
        <div>
          <h4 className="text-sm font-medium text-gray-800 dark:text-white mb-2">
            Tech / Skills Progression
          </h4>
          <TechChart tech={selected.tech} />
        </div>

        <div className="rounded-md p-4 bg-gradient-to-r from-purple-50 via-cyan-50 to-blue-50 dark:bg-gradient-to-r dark:from-purple-900 dark:via-cyan-900 dark:to-blue-900 shadow-sm">
          <h5 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
            Testimonial
          </h5>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 italic">
            "{selected.testimonial}"
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default ExperiencePanel;
