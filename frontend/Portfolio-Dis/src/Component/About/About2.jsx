import React from "react";

const skills = [
  { title: "React", desc: "Proficient in building dynamic, responsive UIs using React and Tailwind CSS." },
  { title: "HTML & CSS", desc: "Expert in semantic HTML and modern CSS practices for clean, accessible web pages." },
  { title: "JavaScript", desc: "Skilled in writing clean, modular, and efficient JavaScript for scalable applications." },
  { title: "TypeScript", desc: "Experience in adding type safety and scalability with TypeScript." },
  { title: "Git & GitHub", desc: "Version control and collaboration using Git and GitHub." },
  { title: "Tailwind CSS", desc: "Rapidly building responsive and beautiful designs with Tailwind CSS." },
];

const AboutPage2 = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full px-4 sm:px-6 md:px-8 text-center py-12">
      <h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 mb-6"
        data-aos="fade-down"
      >
        My Skills
      </h1>

      <p
        className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl sm:max-w-2xl md:max-w-3xl leading-relaxed"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        I specialize in front-end development, creating responsive, user-friendly, and high-performance web applications using modern technologies and best practices.
      </p>

      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-10 w-full max-w-6xl"
        data-aos="zoom-in-up"
        data-aos-delay="400"
      >
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="p-4 sm:p-6 md:p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3">{skill.title}</h3>
            <p className="text-sm sm:text-base md:text-sm text-gray-600">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutPage2;
