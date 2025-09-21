import React from "react";
import PrabhatPrajapati from "../../assets/myimg/prabhat1.jpg";

const About1 = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full px-6 text-center">
      <h1
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
        data-aos="fade-down"
      >
        About Me
      </h1>

      <p
        className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed mb-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Hi, I’m <span className="font-semibold text-purple-600">Prabhat Prajapati</span>,  
        a passionate <span className="font-semibold text-pink-500">Full Stack Developer</span>  
        who loves building interactive and dynamic web applications.
      </p>

      <img
        src={PrabhatPrajapati}  // Variable ko {} me wrap kiya
        alt="Prabhat Prajapati"
        className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg"
        data-aos="zoom-in"
        data-aos-delay="400"
      />
    </section>
  );
};

export default About1;
