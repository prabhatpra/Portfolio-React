import React from "react";

const experiences = [
  { title: "Junior Developer", desc: "Built small web apps and internal tools.", year: "2020" },
  { title: "Frontend Developer", desc: "Worked on React projects and dashboards.", year: "2021" },
  { title: "Freelance Developer", desc: "Designed modern UI/UX websites for clients.", year: "2023" },
];

const AboutPage3 = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full px-6 text-center">
      <h1
        className="text-4xl md:text-5xl font-bold text-cyan-600 mb-6"
        data-aos="fade-down"
      >
        Experience
      </h1>

      <p
        className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Over the years, I have gained experience working on various projects that enhanced my skills in full-stack development.
      </p>

      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 w-full max-w-4xl"
        data-aos="zoom-in-up"
        data-aos-delay="400"
      >
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-1">{exp.title}</h3>
            <time className="block mb-2 text-sm text-gray-500">{exp.year}</time>
            <p className="text-gray-600 text-sm">{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutPage3;
