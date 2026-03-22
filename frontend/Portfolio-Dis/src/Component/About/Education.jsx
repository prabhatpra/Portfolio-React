import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const educationData = [
  {
    id: "btech",
    title: "Bachelor of Science in Information Technology",
    institution: "Dr. Shyama Prasad Mukherjee University (DSPMU), Ranchi",
    year: "2021 - 2024",
    location: "Ranchi, Jharkhand",
    achievements: [
      "Scored 76.39% overall with consistent academic performance.",
      "Built multiple full-stack web projects using Java Spring Boot, MySQL, HTML, and Bootstrap.",
      "Developed a 'Travel and Tourism Management System' desktop app using Java and JDBC for the final-year project.",
      "Completed industrial training on Cloud Computing and DevOps fundamentals.",
      "Collaborated with peers in mini-projects and coding practice sessions to strengthen teamwork and technical skills.",
      "Gained hands-on experience in REST API development, debugging, and backend optimization.",
    ],
    description:
      "During my B.Sc. in IT at DSPMU, I focused on developing a deep understanding of programming, databases, and system design. I learned technologies like Java, Spring Boot, SQL, and front-end tools such as HTML and Bootstrap. My academic journey involved solving real-world problems through coding projects, participating in group assignments, and gaining exposure to software development processes used in the industry.",
    icon: <FaGraduationCap size={28} />,
  },
  {
    id: "highschool",
    title: "Senior Secondary (Class 12th)",
    institution: "O.P. Jindal School, Patratu",
    year: "2018 - 2020",
    location: "Patratu, Ramgarh",
    achievements: [
      "Secured 69.8% in the PCM (Physics, Chemistry, Mathematics) stream.",
      "Excelled in Physics and Mathematics with a strong focus on logical and analytical problem-solving.",
      "Represented school in National Science Exhibition for an innovative physics project.",
      "Led the Science Club — organized experiments, coding awareness sessions, and peer learning activities.",
      "Developed an early interest in programming and computer fundamentals.",
    ],
    description:
      "My higher secondary education built the foundation for my technical career. With a focus on science and mathematics, I developed analytical and quantitative reasoning skills. As the head of the Science Club, I actively participated in tech-based discussions and school-level innovation programs, which sparked my interest in pursuing Information Technology.",
    icon: <FaSchool size={28} />,
  },
  {
    id: "middleschool",
    title: "Secondary School (Class 10th)",
    institution: "O.P. Jindal School, Patratu",
    year: "2016 - 2018",
    location: "Patratu, Jharkhand",
    achievements: [
      "Scored 61.2% in CBSE Board Examination.",
      "Winner of the School-Level Science Project Competition for an environmental model.",
      "Served as Class Representative and House Captain — improving teamwork and leadership skills.",
      "Participated in inter-school quizzes, debates, and cultural activities.",
      "Built curiosity towards computers and technology at an early age.",
    ],
    description:
      "In my secondary school years, I explored the basics of computers, science, and teamwork. Leading classmates and participating in competitions helped me grow in confidence and develop communication and leadership qualities that continue to help me in my academic and professional life.",
    icon: <FaSchool size={28} />,
  },
];

export default function Education() {
  const [activeTab, setActiveTab] = useState("btech");
  const activeEdu = educationData.find((e) => e.id === activeTab);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div
      className="min-h-screen py-16 px-4 sm:px-6 md:px-12 lg:px-24 bg-gradient-to-b from-gray-50/0 via-gray-100/0 to-gray-200/0 dark:from-gray-900/0 dark:to-gray-950/0"
      data-aos="fade-up"
    >
      {/* 🔹 Heading */}
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
        data-aos="zoom-in"
      >
        Education Journey
      </h2>

      {/* 🔹 Buttons */}
      <div
        className="flex justify-center flex-wrap gap-3 sm:gap-4 mb-10"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {educationData.map((edu) => (
          <button
            key={edu.id}
            onClick={() => setActiveTab(edu.id)}
            className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm md:text-base font-semibold transition-all border 
              ${
                activeTab === edu.id
                  ? "bg-gradient-to-r from-red-200 to-slate-400 text-white border-transparent shadow-md"
                  : "bg-transparent border-purple-400 text-purple-400 hover:bg-purple-400/10"
              }`}
            data-aos="zoom-in-up"
            data-aos-delay="300"
          >
            {edu.title.split("(")[0].trim()}
          </button>
        ))}
      </div>

      {/* 🔹 Active Education Card */}
      <div
        key={activeTab}
        data-aos="fade-up"
        data-aos-delay="400"
        className="max-w-full sm:max-w-3xl md:max-w-5xl mx-auto border border-purple-500/40 rounded-2xl p-6 sm:p-8 md:p-10 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 via-pink-500/10 to-blue-400/10 rounded-2xl pointer-events-none"></div>

        <div className="relative z-10">
          <div
            className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6"
            data-aos="fade-right"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-purple-500 to-blue-400 flex items-center justify-center text-white shadow-md">
              {activeEdu.icon}
            </div>
            <div>
              <h3
                className="text-xl sm:text-2xl md:text-3xl font-bold text-black dark:text-white"
                data-aos="fade-left"
              >
                {activeEdu.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base">
                {activeEdu.institution}
              </p>
              <p className="text-xs sm:text-sm text-gray-500">{activeEdu.location}</p>
              <p className="text-xs sm:text-sm text-gray-500">{activeEdu.year}</p>
            </div>
          </div>

          <p
            className="mt-4 sm:mt-6 text-gray-800 dark:text-gray-300 leading-relaxed text-sm sm:text-base"
            data-aos="fade-up"
          >
            {activeEdu.description}
          </p>

          <div
            className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 md:space-y-4 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {activeEdu.achievements.map((ach, i) => (
              <p
                key={i}
                className="text-xs sm:text-sm text-gray-900 dark:text-gray-200 flex items-start gap-2"
                data-aos="fade-right"
                data-aos-delay={100 + i * 100}
              >
                <span className="w-2 h-2 mt-1 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex-shrink-0"></span>
                {ach}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
