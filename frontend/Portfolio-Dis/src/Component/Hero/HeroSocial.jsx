import React, { useState, useRef, useEffect} from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaUserCircle,
} from "react-icons/fa";
import { profileWithImages, basicProfileDescriptions } from "./HeroData";

const HeroSocial = () => {
  const [popupOpen, setPopupOpen] = useState(false);


  const [profile, setProfile] = useState("instagram");

  const profiles = ["instagram", "facebook", "linkedin", "github"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const [hoverText, setHoverText] = useState("Instagram Profile");
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      setPopupOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % profiles.length;
    setCurrentIndex(nextIndex);
    setProfile(profiles[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex =
      currentIndex === 0 ? profiles.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setProfile(profiles[prevIndex]);
  };

  const socialButtons = [
    {
      id: "instagram",
      label: "Instagram",
      icon: <FaInstagram />,
      activeClass: "bg-pink-400 text-black shadow-md shadow-pink-500/40",
      hoverClass: "hover:bg-pink-300 hover:text-white",
      text: "Instagram Profile",
    },
    {
      id: "facebook",
      label: "Facebook",
      icon: <FaFacebook />,
      activeClass: "bg-blue-600 text-black shadow-md shadow-blue-500/40",
      hoverClass: "hover:bg-blue-500 hover:text-white",
      text: "Facebook Profile",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      icon: <FaLinkedin />,
      activeClass: "bg-blue-400 text-black shadow-md shadow-blue-500/40",
      hoverClass: "hover:bg-blue-300 hover:text-white",
      text: "Connect on LinkedIn",
    },
    {
      id: "github",
      label: "GitHub",
      icon: <FaGithub />,
      activeClass: "bg-green-400 text-black shadow-md shadow-green-500/40",
      hoverClass: "hover:bg-green-300 hover:text-white",
      text: "View GitHub Projects",
    },
  ];

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setRotateY(((x / rect.width) - 0.5) * 15);
    setRotateX(((y / rect.height) - 0.5) * -15);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovering(false);
  };

  const handleMouseEnter = () => setIsHovering(true);

  const glowShadow = isHovering
    ? `${-rotateY / 3}px ${rotateX / 3}px 20px 5px rgba(255,0,0,0.6),
       inset ${rotateY / 5}px ${-rotateX / 5}px 10px rgba(255,0,0,0.3)`
    : "none";

  const allProfileLines = [
    ...(profileWithImages[profile].lines || []),
    ...(basicProfileDescriptions[profile].lines || []),
  ];

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.5, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Open Button */}
      <div className="w-full flex justify-center items-center mb-6">
        <button
          onClick={() => setPopupOpen(true)}
          className="px-6 py-3 border-2 border-green-300 hover:bg-gradient-to-r from-sky-400 to-pink-400 dark:hover:bg-fuchsia-400 dark:text-white text-purple-700 font-bold rounded-full shadow-lg flex items-center gap-2 group"
        >
          <FaUserCircle size={24} />
          <span className="block group-hover:hidden">Social Profiles</span>
          <span className="hidden group-hover:block">Click to Explore</span>
        </button>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {popupOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={() => setPopupOpen(false)}
          >
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
              style={{
                rotateX,
                rotateY,
                transformPerspective: 1000,
                boxShadow: glowShadow,
              }}
              className="bg-gradient-to-br from-blue-50/90 via-cyan-200/70 to-purple-100/90
              dark:from-gray-900/80 dark:via-purple-900/60 dark:to-indigo-800/80
              p-4 sm:p-6 md:p-8 rounded-2xl 
              w-full max-w-[85%] sm:max-w-md md:max-w-2xl 
              h-[320px] sm:h-[340px] md:h-[350px] lg:h-auto
              text-gray-800 dark:text-gray-200 
              shadow-xl relative flex flex-col md:flex-row gap-6 
              overflow-y-auto scrollbar-hide"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                className="absolute top-4 right-4 text-white text-3xl font-bold z-50 cursor-pointer 
                hover:text-red-400 hover:scale-110 transition duration-300"
                onClick={(e) => {e.stopPropagation();
                  setPopupOpen(false)}}
      
              >
                &times;
              </button>

              {/* LEFT */}
              <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left relative">
                <a href={profileWithImages[profile].link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={profileWithImages[profile].img}
                    alt="preview"
                    className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg mb-3 hover:scale-105 transition duration-300"
                  />
                </a>

                <h2 className="text-red-400 text-lg font-semibold mb-2">
                  {profileWithImages[profile].title}
                </h2>

                <div className="text-white text-sm space-y-1 mb-2">
                  {allProfileLines.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>

                <a
                  href={profileWithImages[profile].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline font-semibold"
                >
                  Click to visit profile
                </a>

                {/* 🔥 Mobile Arrows */}
                <div className="flex md:hidden justify-between w-full absolute top-1/2 left-0 px-2 -translate-y-1/2">
                  <button onClick={handlePrev} className="text-white bg-black/40 px-3 py-1 rounded-full">
                    ←
                  </button>
                  <button onClick={handleNext} className="text-white bg-black/40 px-3 py-1 rounded-full">
                    →
                  </button>
                </div>
              </div>

              {/* RIGHT (Desktop only) */}
              <div className="hidden md:flex w-full md:w-40 flex flex-col md:pl-6 items-center md:items-start justify-center">
                <div className="text-center md:text-left text-white/70 mb-2">
                  {hoverText}
                </div>

                <div className="relative flex flex-row md:flex-col gap-2 md:gap-4 overflow-x-auto scrollbar-hide">
                  {socialButtons.map((btn) => (
                    <motion.button
                      key={btn.id}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => {
                        const index = profiles.indexOf(btn.id);
                        setCurrentIndex(index);
                        setProfile(btn.id);
                        setHoverText(btn.text);
                      }}
                      className={`flex-shrink-0 flex items-center gap-2 
                        px-2 py-1 text-xs
                        sm:px-3 sm:py-1.5 sm:text-sm
                        md:px-4 md:py-2 md:text-sm
                        rounded-md font-semibold transition duration-300 ${profile === btn.id
                          ? btn.activeClass
                          : `bg-white/10 ${btn.hoverClass}`
                        }`}
                    >
                      {btn.icon} {btn.label}
                    </motion.button>
                  ))}
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default HeroSocial;