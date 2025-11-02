import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCloud, FaCode, FaServer } from "react-icons/fa";

const internships = [
  {
    id: 1,
    role: "Cloud Computing & DevOps Intern",
    company: "Techvanto Academy",
    duration: "June 2023 - August 2023",
    description:
      "Worked with AWS EC2, Docker, Jenkins, and CI/CD pipelines. Automated deployments and learned real-world DevOps workflow.",
    icon: <FaCloud size={30} />,
  },
  {
    id: 2,
    role: "Full Stack Java Developer Intern",
    company: "NextGen Coders",
    duration: "January 2024 - April 2024",
    description:
      "Developed REST APIs in Spring Boot, integrated MySQL, and built front-end in React with Tailwind CSS and JWT security.",
    icon: <FaCode size={30} />,
  },
  {
    id: 3,
    role: "Backend & API Developer Intern",
    company: "Code Matrix Labs",
    duration: "May 2024 - July 2024",
    description:
      "Focused on backend performance, API optimization, Swagger documentation, and microservice-based architecture.",
    icon: <FaServer size={30} />,
  },
];

const Internship = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
  }, []);

  return (
    <section className="min-h-screen py-16 px-6 md:px-12 bg-transparent">
      {/* 🔹 Heading */}
      <motion.h2
        data-aos="fade-up"
        className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 relative inline-block"
      >
        Internship Journey
        <motion.span
          className="absolute left-1/2 -bottom-2 w-0 h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full"
          initial={{ width: 0, x: "-50%" }}
          animate={{ width: "60%", x: "-50%" }}
          transition={{ duration: 1 }}
        />
      </motion.h2>

      {/* 🔹 Internship Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {internships.map((intern, index) => (
          <motion.div
            key={intern.id}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} // alternate directions
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 25px rgba(168,85,247,0.3)",
            }}
            className="relative bg-white/10 dark:bg-gray-900/40 border border-white/20 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 to-blue-400 text-white shadow-md">
                {intern.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {intern.role}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {intern.company}
                </p>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {intern.description}
            </p>

            <motion.div
              className="mt-4 text-xs font-medium text-gray-500 dark:text-gray-400"
              whileHover={{ color: "#c084fc" }}
            >
              📅 {intern.duration}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Internship;
