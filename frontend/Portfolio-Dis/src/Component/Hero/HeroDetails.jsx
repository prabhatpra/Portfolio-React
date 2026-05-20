import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { roles, scrollingDetails, typewriterSettings } from "./HeroData";

const HeroDetails = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  
  const { scrollY } = useScroll();
  const scrollScale = useTransform(scrollY, [0, 300], [1, 1.3]); 
  const speedRef = useRef(0.5);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    let scrollPos = 0;
    let animationFrameId;

    const step = () => {
      scrollPos += speedRef.current;

      const maxScroll = content.offsetHeight + container.offsetHeight;

      if (scrollPos >= maxScroll) scrollPos = 0;

      content.style.transform = `translateY(${container.offsetHeight - scrollPos}px)`;

     animationFrameId = requestAnimationFrame(step);
    };

     animationFrameId = requestAnimationFrame(step);

      const handleMouseEnter = () => {
        speedRef.current = 0.15; 
      };

      const handleMouseLeave = () => {
        speedRef.current = 0.5;
      };

      const handleTouchStart = () => {
        speedRef.current = 0.15;
      };
     
      const handleTouchEnd = () => {
        speedRef.current = 0.5;
      };

      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      container.addEventListener("touchstart", handleTouchStart);
      container.addEventListener("touchend", handleTouchEnd);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="flex flex-col max-w-xl mx-auto md:mx-0 px-2 sm:px-0 items-center md:items-start">
    
      <motion.h1
        className="hidden md:block text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4 whitespace-nowrap"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ scale: scrollScale }}
      >
        Prabhat Prajapati
      </motion.h1>

      
      <div className="w-full text-center md:text-left">
        <Typewriter roles={roles} />
      </div>

     
      <div
        ref={containerRef}
        className="overflow-hidden h-64 sm:h-72 md:h-96 relative mt-4 w-full text-center md:text-left"
      >
        <div ref={contentRef}>
          {scrollingDetails.map((line, i) => (
            <p
              key={i}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-yellow-700 dark:text-cyan-400 mb-2"
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const Typewriter = ({ roles }) => {
  const [roleIndex, setRoleIndex] = React.useState(0);
  const [typedText, setTypedText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  const { TYPING_SPEED, DELETING_SPEED, PAUSE_TIME } = typewriterSettings;

  React.useEffect(() => {
    const currentRole = roles[roleIndex]?.title || "";
    if (!currentRole) return;

    let timer;

    if (!isDeleting && typedText.length < currentRole.length) {
      timer = setTimeout(
        () => setTypedText(currentRole.slice(0, typedText.length + 1)),
        TYPING_SPEED
      );
    } else if (!isDeleting && typedText.length === currentRole.length) {
      timer = setTimeout(() => setIsDeleting(true), PAUSE_TIME);
    } else if (isDeleting && typedText.length > 0) {
      timer = setTimeout(
        () => setTypedText(currentRole.slice(0, typedText.length - 1)),
        DELETING_SPEED
      );
    } else if (isDeleting && typedText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex, roles, TYPING_SPEED, DELETING_SPEED, PAUSE_TIME]);

  return (
    <motion.p
      className="text-sm sm:text-base md:text-2xl font-semibold text-white flex gap-2 justify-center md:justify-start mb-4"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <span className="text-blue-500 font-extrabold">I’m</span>
      <span className="text-pink-400 dark:text-cyan-400 font-mono">{typedText}</span>
      <span className="animate-pulse text-cyan-400">|</span>
    </motion.p>
  );
};

export default HeroDetails;