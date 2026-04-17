import React from "react";
import { motion } from "framer-motion";
import HeroImg from "./HeroImg";
import HeroDetails from "./HeroDetails";
import HeroSocial from "./HeroSocial";

const Hero = () => {
  return (
    <section
      id="home"
      className="
      relative w-screen h-screen min-h-screen overflow-hidden
      flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-20
      transition-colors duration-700
    "
    >

      {/* Main Content */}
      <motion.div
        className="z-10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 w-full max-w-7xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <HeroImg />

        <div className="flex-1 flex flex-col justify-center md:justify-start md:ml-10 mt-6 md:mt-0 text-center md:text-left">
          <HeroDetails />
        </div>
      </motion.div>

      {/* Social */}
      <div className="absolute bottom-8 w-full flex justify-center z-20">
        <HeroSocial />
      </div>
    </section>
  );
};

export default Hero;