import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroImage from "../../assets/myimg/prabhat.jpg";

const HeroImg = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true, offset: 80, easing: "ease-in-out" });
  }, []);

  return (
    <div className="flex justify-center md:justify-start w-full lg:mt-8 mt-36">
      
      <motion.div
        
        className="
          relative
          w-44 sm:w-52 md:w-64 lg:w-72
          h-80 sm:h-[24rem] md:h-[28rem] lg:h-[32rem]
          rounded-[2rem]
          overflow-hidden
          bg-gradient-to-br from-white/80 to-gray-200/60 
          dark:from-gray-900/80 dark:to-gray-800/70
          border border-white/30 dark:border-gray-700/50
          shadow-[0_10px_40px_rgba(0,0,0,0.25)]
          backdrop-blur-xl
          group
          cursor-pointer
        "
        initial={{ scale: 0.9, opacity: 0, y: 0}}
        whileInView={{ scale: 1, opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        whileHover={{ scale: 1.04, rotate: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, duration: 1.2 }}

      >
        
        {/* Image */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src={HeroImage}
            alt="Prabhat Prajapati"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            draggable={false}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 blur-2xl opacity-30"></div>
        </div>

        {/* Bottom Info Section */}
        <div className="absolute bottom-4 right-4 z-10 text-right">
          <h2 className="text-xl font-bold bg-gradient-to-r from-fuchsia-600 via-orange-500 bg-clip-text text-transparent">Prabhat Prajapati</h2>
          <p className="text-sm opacity-90 bg-gradient-to-r from-orange-300 to-blue-400 bg-clip-text text-transparent">Java Backend Developer</p>
        </div>

      </motion.div>
    </div>
  );
};

export default HeroImg;