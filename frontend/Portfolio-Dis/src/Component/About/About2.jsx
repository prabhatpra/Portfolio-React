import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { FaReact, FaPenNib, FaJava } from "react-icons/fa";
import { X } from "lucide-react";

const experiences = [
  {
    title: "Java Developer Intern",
    company: "HulkHire Tech",
    duration: "2020",
    icon: <FaJava />,
    shortDesc:
      "Completed a Java internship contributing to backend development and a secure Stripe payment system.",
    fullDesc:
      "Developed a secure Stripe-based payment system using microservices architecture. Implemented API Access, Product & Payment Calculation, and Notification microservices. Followed best practices for security, data privacy, and professional remote collaboration.",
    techStack: [
      "Java",
      "Spring Boot",
      "Microservices",
      "Stripe API",
      "REST APIs",
      "Git",
      "Postman",
      "GitHub",
      "Jira",
    ],
    achievements: [
      "Built a modular and scalable payment system for global transactions",
      "Implemented three microservices enabling secure and efficient payment processing",
      "Gained hands-on experience with microservice architecture and API integration",
      "Demonstrated professionalism and problem-solving skills during the internship",
    ],
    certificates: [
      { name: "Offer Letter", link: "/certificates/hulkhire-offer.pdf" },
      { name: "Completion Letter", link: "/certificates/hulkhire-completion.pdf" },
    ],
  },
  {
    title: "Frontend Developer",
    year: "2021",
    icon: <FaReact />,
    shortDesc: "Developed React dashboards and responsive interfaces.",
    fullDesc:
      "Focused on creating responsive dashboards using React, Redux, and TailwindCSS. Implemented reusable components and optimized performance for faster load times.",
    techStack: ["React", "Redux", "TailwindCSS", "Chart.js"],
    achievements: [
      "Built 3 major dashboards for clients",
      "Reduced component load times by 30%",
    ],
    certificates: [
      { name: "Advanced React", link: "/certificates/advanced-react.pdf" },
    ],
  },
  {
    title: "Freelance Developer",
    year: "2023",
    icon: <FaPenNib />,
    shortDesc: "Designed modern websites for clients.",
    fullDesc:
      "Worked independently to design and develop modern UI/UX websites. Managed client communications, project timelines, and deployed websites with best practices.",
    techStack: ["React", "Next.js", "TailwindCSS", "Figma"],
    achievements: [
      "Delivered 10+ client projects successfully",
      "Improved UI/UX resulting in higher client engagement",
    ],
    certificates: [
      { name: "UI/UX Design", link: "/certificates/ui-ux-design.pdf" },
    ],
  },
];

const AboutPage2 = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <section className="flex flex-col items-center justify-center w-full px-6 py-12 text-gray-900 dark:text-gray-100">
      <h1 className="text-5xl md:text-6xl font-extrabold text-cyan-600 dark:text-cyan-400 mb-6">
        Experience
      </h1>

      <p className="text-lg md:text-xl max-w-3xl text-center mb-12 text-gray-700 dark:text-gray-300">
        Over the years, I have gained experience working on various projects that
        enhanced my skills in full-stack development, creating efficient, beautiful,
        and responsive applications.
      </p>

      {/* Responsive Layout */}
      <div className="w-full max-w-7xl">
        {/* Small & Medium Screens */}
        <div className="flex lg:hidden overflow-x-auto gap-6 pb-6 snap-x snap-mandatory no-scrollbar">
          {experiences.map((exp, idx) => (
            <Tilt
              key={idx}
              glareEnable={true}
              glareMaxOpacity={0.3}
              glareColor="#ffffff"
              glarePosition="all"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              scale={1.05}
            >
              <div
                className="relative min-w-[80%] sm:min-w-[60%] p-6 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl transition-transform duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer group snap-center"
                onClick={() => setSelectedExp(exp)}
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center text-2xl bg-gradient-to-tr from-cyan-400 to-blue-500 text-white shadow-lg animate-bounce">
                  {exp.icon}
                </div>
                <div className="mt-10 text-center">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 text-sm">
                    {exp.shortDesc}
                  </p>
                </div>
              </div>
            </Tilt>
          ))}
        </div>

        {/* Large Screens */}
        <div className="hidden lg:grid grid-cols-3 gap-10">
          {experiences.map((exp, idx) => (
            <Tilt
              key={idx}
              glareEnable={true}
              glareMaxOpacity={0.3}
              glareColor="#ffffff"
              glarePosition="all"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              scale={1.05}
            >
              <div
                className="relative p-6 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl transition-transform duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer group"
                onClick={() => setSelectedExp(exp)}
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center text-2xl bg-gradient-to-tr from-cyan-400 to-blue-500 text-white shadow-lg animate-bounce">
                  {exp.icon}
                </div>
                <div className="mt-10 text-center">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 text-sm">
                    {exp.shortDesc}
                  </p>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>

      {/* Fullscreen 3D Popup */}
      {selectedExp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-[0_0_30px_rgba(0,255,255,0.4)] border border-cyan-400/30 bg-gradient-to-br from-white/10 to-cyan-500/10 dark:from-gray-900/70 dark:to-cyan-800/10 backdrop-blur-2xl transform-gpu animate-popup3D">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-300 hover:text-red-400 transition"
              onClick={() => setSelectedExp(null)}
            >
              <X size={28} />
            </button>

            {/* Content */}
            <div className="p-8 text-center">
              <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center text-4xl bg-gradient-to-tr from-cyan-400 to-blue-500 text-white shadow-2xl mb-6 transform hover:rotate-12 transition-transform duration-300">
                {selectedExp.icon}
              </div>

              <h2 className="text-4xl font-extrabold text-cyan-400 mb-3 drop-shadow-md">
                {selectedExp.title}
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">{selectedExp.fullDesc}</p>

              {/* Tech Stack */}
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">Tech Stack</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {selectedExp.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-100 rounded-full text-sm shadow-inner border border-cyan-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="mt-6 text-left">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                  Achievements
                </h3>
                <ul className="list-disc list-inside text-gray-200 space-y-1">
                  {selectedExp.achievements.map((a, idx) => (
                    <li key={idx}>{a}</li>
                  ))}
                </ul>
              </div>

              {/* Certificates */}
              <div className="mt-6 text-left">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                  Certificates
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedExp.certificates.map((c, idx) => (
                    <a
                      key={idx}
                      href={c.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-blue-500/20 text-blue-100 rounded-full text-sm hover:bg-blue-500/40 transition border border-blue-400/20"
                    >
                      {c.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hide scrollbar + animation */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @keyframes popup3D {
          0% {
            opacity: 0;
            transform: scale(0.8) rotateX(25deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotateX(0deg);
          }
        }
        .animate-popup3D {
          animation: popup3D 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default AboutPage2;
