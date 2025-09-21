import React from "react";

const AboutPage4 = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full px-6 text-center">
      <h1
        className="text-4xl md:text-5xl font-bold text-purple-600 mb-6"
        data-aos="fade-down"
      >
        Let's Connect
      </h1>

      <p
        className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        I'm always open for new projects or collaborations. Reach out and let's build something amazing together!
      </p>

      <a
        href="mailto:prabhat@example.com"
        className="mt-10 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold px-10 py-3 rounded-full shadow-lg hover:shadow-xl transition-transform duration-300"
        data-aos="zoom-in-up"
        data-aos-delay="400"
      >
        Contact Me
      </a>
    </section>
  );
};

export default AboutPage4;
