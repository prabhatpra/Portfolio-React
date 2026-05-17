import React from "react";
import { motion } from "framer-motion";
import {
  FaJava,
  FaDatabase,
  FaBug,
  FaCode,
  FaUsers,
  FaServer,
} from "react-icons/fa";
import { MdApi } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const fadeUp = (i = 1) => ({
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" },
  },
});

const scaleFade = (i = 1) => ({
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.5 },
  },
});

const technologies = ["Java", "Spring Boot", "MySQL", "JDBC", "Git", "GitHub"];

const responsibilities = [
  { icon: <FaJava />, text: "Java backend development" },
  { icon: <FaDatabase />, text: "MySQL database handling" },
  { icon: <FaBug />, text: "Bug fixing & debugging" },
  { icon: <MdApi />, text: "REST API support" },
  { icon: <FaUsers />, text: "Team collaboration" },
  { icon: <FaCode />, text: "Code testing" },
];

export default function JavaDetails() {
  const navigate = useNavigate();
const handleBack = () => {
  navigate('/');
  setTimeout(() => {
    const el = document.getElementById('experience');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, 800);
};

  return (
    <div className="min-h-screen 
      bg-gradient-to-br from-blue-50 via-cyan-200 to-purple-100/70
      dark:from-black dark:via-zinc-900 dark:to-black 
      text-gray-900 dark:text-white 
      overflow-hidden relative transition-colors duration-700">

      {/* BACKGROUND GLOW */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 left-0 w-72 h-72 bg-teal-500/20 blur-3xl rounded-full"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"
      />

      {/* MAIN */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block px-4 py-2 rounded-full border border-teal-400/30 bg-teal-400/10 text-teal-600 dark:text-teal-300 text-sm mb-5"
          >
            Internship Experience
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold tracking-wide"
          >
            HulkHire Tech
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-purple-900 dark:text-gray-400 mt-4 font-semibold text-lg"
          >
            Java Backend Developer Intern
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-cyan-600 dark:text-gray-500 font-semibold text-sm mt-2"
          >
            Feb 2025 - Mar 2025 • Remote
          </motion.p>
        </motion.div>

        {/* STATS */}
        <motion.div
          variants={fadeUp(1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16"
        >
          {[
            { number: "10+", label: "APIs Worked" },
            { number: "15+", label: "Bugs Fixed" },
            { number: "20+", label: "Database Queries" },
            { number: "2", label: "Months Experience" },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={scaleFade(i)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ y: -8, scale: 1.04 }}
              className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-6 text-center backdrop-blur-md"
            >
              <motion.h2
                whileHover={{ scale: 1.1 }}
                className="text-3xl font-bold text-teal-600 dark:text-teal-400"
              >
                {item.number}
              </motion.h2>
              <p className="text-green-800 dark:text-gray-300 mt-2 text-sm">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* OVERVIEW */}
        <motion.section
          variants={fadeUp(2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          whileHover={{ y: -5 }}
          className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl p-8 backdrop-blur-md mb-10"
        >
          <div className="flex items-center gap-3 mb-5">
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
              <FaServer className="text-teal-600 dark:text-teal-400 text-2xl" />
            </motion.div>
            <h2 className="text-3xl font-semibold">Overview</h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.2 }}
            className="text-green-800 dark:text-gray-300 leading-relaxed text-lg"
          >
            Worked as a Java Backend Developer Intern contributing to
            backend APIs, MySQL database handling, debugging,
            request-response flow, and real-world project workflow.
            Improved problem-solving skills and learned professional
            development practices in a collaborative environment.
          </motion.p>
        </motion.section>

        {/* RESPONSIBILITIES */}
        <motion.section
          variants={fadeUp(3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl p-8 backdrop-blur-md mb-10"
        >
          <h2 className="text-3xl font-semibold mb-8">Responsibilities</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {responsibilities.map((item, i) => (
              <motion.div
                key={i}
                variants={scaleFade(i)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="flex items-center gap-4 bg-black/5 dark:bg-black/30 border border-black/5 dark:border-white/5 rounded-2xl p-4 hover:border-teal-400/40 transition duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  className="text-2xl text-teal-600 dark:text-teal-400"
                >
                  {item.icon}
                </motion.div>
                <p className="text-green-800 dark:text-gray-300">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ACHIEVEMENTS */}
        <motion.section
          variants={fadeUp(4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl p-8 backdrop-blur-md mb-10"
        >
          <h2 className="text-3xl font-semibold mb-6">Key Achievements</h2>
          <div className="space-y-4">
            {[
              "Completed internship successfully",
              "Improved backend debugging skills",
              "Learned Java + MySQL integration",
              "Understood real project workflow",
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={scaleFade(i)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 bg-black/5 dark:bg-black/30 rounded-2xl p-4 border border-black/5 dark:border-white/5"
              >
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 rounded-full bg-teal-500 dark:bg-teal-400"
                />
                <p className="text-green-800 dark:text-gray-300">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* TECHNOLOGIES */}
        <motion.section
          variants={fadeUp(5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl p-8 backdrop-blur-md mb-10"
        >
          <h2 className="text-3xl font-semibold mb-6">Technologies</h2>
          <div className="flex flex-wrap gap-4">
            {technologies.map((tech, i) => (
              <motion.div
                key={i}
                variants={scaleFade(i)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ scale: 1.1, rotate: -2 }}
                className="px-5 py-3 rounded-full bg-black/5 dark:bg-black/30 border border-black/10 dark:border-white/10 text-teal-600 dark:text-teal-300 hover:bg-teal-400 hover:text-black transition duration-300 cursor-pointer"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* SKILLS */}
        <motion.section
          variants={fadeUp(6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl p-8 backdrop-blur-md mb-10"
        >
          <h2 className="text-3xl font-semibold mb-6">Skills Improved</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              "Problem solving mindset",
              "Backend architecture understanding",
              "API handling & request flow",
              "Team communication skills",
            ].map((skill, i) => (
              <motion.div
                key={i}
                variants={scaleFade(i)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ y: -5, borderColor: "#2dd4bf" }}
                className="bg-black/5 dark:bg-black/30 border border-black/5 dark:border-white/5 rounded-2xl p-5 transition duration-300"
              >
                <p className="text-green-800 dark:text-gray-300 font-semibold">{skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* BUTTONS */}
        <motion.div
          variants={fadeUp(7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-wrap gap-5 pt-4"
        >
          <motion.a
            href="/certificate.pdf"
            download
            whileHover={{ scale: 1.08, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="px-7 py-4 bg-teal-500 dark:bg-teal-400 text-white dark:text-black rounded-2xl font-semibold hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-300"
          >
            Download Certificate
          </motion.a>

          
          <motion.button
            onClick={handleBack}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="px-7 py-4 bg-teal-500 dark:bg-teal-400 text-white dark:text-black rounded-2xl font-semibold hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-300"
          >
            Back to Portfolio
          </motion.button>
        </motion.div>
 

      </div>
    </div>
  );
}