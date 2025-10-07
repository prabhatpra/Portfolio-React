import React, { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import PrabhatPrajapati from "../../assets/myimg/prabhat1.jpg";

const About1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  const { scrollYProgress } = useScroll();
  const yTransform = useTransform(scrollYProgress, [0, 1], [0, -20]);

  const container = { hidden: {}, visible: { transition: { staggerChildren: 0.25 } } };

  const floating = {
    animate: {
      y: [0, -5, 0],
      rotate: [0, 1, -1, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const fromLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80 } } };
  const fromRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80 } } };
  const fromBottom = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } } };

  const headingText = "My Developer Journey";
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, type: "spring", stiffness: 80 }
    }),
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-20 w-full"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Profile Image */}
      <motion.div
        style={{ y: yTransform }}
        className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 flex-shrink-0 rounded-full overflow-hidden shadow-2xl border-4 border-white cursor-pointer mx-auto md:mx-0"
        {...floating}
      >
        <img
          src={PrabhatPrajapati}
          alt="Prabhat Prajapati"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 via-purple-500 to-blue-400 blur opacity-25 animate-spin-slow"></div>
        <div className="absolute inset-0 rounded-full border-2 border-white opacity-20 animate-pulse-slow"></div>
      </motion.div>

      {/* Text Section */}
      <motion.div className="flex flex-col justify-between flex-1 max-w-xl h-full">
        {/* Animated Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 flex flex-wrap bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          {headingText.split(" ").map((word, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={headingVariants}
              className="mr-2"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Paragraphs */}
        <motion.p
          className="text-sm sm:text-base md:text-lg text-gray-900 leading-relaxed mb-4"
          variants={fromRight}
        >
          Hi! I’m <span className="text-purple-600 font-semibold">Prabhat Prajapati</span>, a Full Stack Developer passionate about building modern web applications. I specialize in <span className="text-blue-500 font-semibold">Java, Spring Boot, React, and Tailwind CSS</span>, and I love creating scalable backend systems, interactive frontends, and deploying projects to the cloud.
        </motion.p>

        <motion.p
          className="text-sm sm:text-base md:text-lg text-gray-900 leading-relaxed mb-2"
          variants={fromLeft}
        >
          I enjoy solving complex problems, learning new technologies, and turning innovative ideas into real products. My goal is to build applications that are <span className="font-semibold text-pink-500">efficient, user-friendly, and visually appealing</span>.
        </motion.p>

        <motion.p
          className="text-sm sm:text-base md:text-lg text-gray-900 leading-relaxed mb-2"
          variants={fromRight}
        >
          Beyond coding, I enjoy exploring cloud technologies, automating workflows, and keeping up with the latest trends in full stack development.
        </motion.p>

      {/* CTA */}
<motion.p
  className="mt-4 inline-block px-0 py-0 font-semibold cursor-pointer text-pink-500 hover:text-purple-500 transition-colors"
  variants={fromBottom}
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 80 }}
>
  Please click “Next” for more information.
</motion.p>

      </motion.div>
    </motion.div>
  );
};

export default About1;
