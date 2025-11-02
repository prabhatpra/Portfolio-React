
import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaCss3Alt,
  FaJava,
  FaDatabase,
  FaGithub,
  FaCloud,
  FaGitAlt,
  FaServer,
  FaLock,
  FaCog,
} from "react-icons/fa";

const skills = [
  { title: "React", level: 90, desc: "Dynamic, responsive UIs.", icon: <FaReact className="text-[#61DBFB]" /> },
  { title: "Tailwind CSS", level: 85, desc: "Utility-first styling & responsive layouts.", icon: <FaCss3Alt className="text-[#38B2AC]" /> },
  { title: "Java", level: 85, desc: "OOP & backend logic.", icon: <FaJava className="text-[#f89820]" /> },
  { title: "Spring Boot", level: 80, desc: "REST APIs & microservices.", icon: <FaServer className="text-[#6DB33F]" /> },
  { title: "Spring Security", level: 75, desc: "Authentication & authorization.", icon: <FaLock className="text-[#3B82F6]" /> },
  { title: "JDBC", level: 70, desc: "Database connectivity.", icon: <FaDatabase className="text-[#b07219]" /> },
  { title: "JPA / Hibernate", level: 70, desc: "ORM for databases.", icon: <FaDatabase className="text-[#59666C]" /> },
  { title: "Microservices", level: 80, desc: "Scalable backend architecture.", icon: <FaGitAlt className="text-[#EC4899]" /> },
  { title: "Git & GitHub", level: 85, desc: "Version control & collaboration.", icon: <FaGithub className="text-[#171515]" /> },
  { title: "Bitbucket", level: 75, desc: "Repository & CI/CD.", icon: <FaGitAlt className="text-[#2684FF]" /> },
  { title: "Maven", level: 70, desc: "Build automation & dependencies.", icon: <FaCog className="text-[#C71A36]" /> },
  { title: "Jira", level: 65, desc: "Agile project management.", icon: <FaCog className="text-[#0052CC]" /> },
  { title: "AWS", level: 70, desc: "Cloud services & deployment.", icon: <FaCloud className="text-[#FF9900]" /> },
  { title: "Vercel", level: 65, desc: "Frontend & full-stack deployment.", icon: <FaCloud className="text-black" /> },
];

const Skill = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70 } },
  };

  return (
    <section className="flex flex-col items-center justify-center px-4 py-10">
      {/* Heading */}
      <motion.h1
        className="text-2xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-6 text-center"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        These Are My Powers
      </motion.h1>

      {/* Skills Grid */}
      <motion.div
        className="w-full max-w-6xl"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="grid grid-cols-4 gap-3">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-br from-transparent via-transparent to-transparent rounded-lg shadow-md p-2 sm:p-2.5 md:p-3 lg:p-3.5 hover:shadow-lg hover:scale-105 transition-all duration-400 flex flex-col justify-between border border-transparent hover:border-purple-300"
              variants={item}
            >
              {/* Icon + Title */}
              <div className="flex flex-col items-center">
                <div className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-2">
                  {skill.icon}
                </div>
                <h3 className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] font-bold text-gray-800 text-center">
                  {skill.title}
                </h3>
              </div>

              {/* Progress Bar */}
              <div className="mt-1 w-full bg-gray-200 rounded-full h-1 sm:h-1.5 md:h-1.5 lg:h-2 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.1, delay: i * 0.08 }}
                />
              </div>

              <p className="text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] text-gray-600 dark:text-white mt-1 text-center">
                {skill.level}% • {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skill;
