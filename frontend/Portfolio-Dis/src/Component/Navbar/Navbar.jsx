import React, { useState, useEffect, useRef } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import DarkMode from "./DarkMode";
import PrabhatImg from "../../assets/myimg/prabhat.png";

const menuItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Project", link: "#project" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);

  const cvRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      setCvOpen(false);
      setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cvRef.current && !cvRef.current.contains(event.target)) {
        setCvOpen(false);
      }

      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuVariants = {
    hidden: { opacity: 0, scale: 0, originX: 1, originY: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 25 },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <div className="fixed top-0 z-40 w-screen">
      <div
        className={`mx-auto transition-all duration-300 shadow-md
        ${
          scrolled
            ? "w-1/2 h-12 rounded-lg bg-white/10 dark:bg-black/30 backdrop-blur-md"
            : "w-full h-14 bg-white/30 dark:bg-black/40 backdrop-blur-md"
        }`}
      >
        <div className="h-full px-4 md:px-6 lg:px-10">
          <div className="flex items-center justify-between h-full">

            {/* LOGO */}
            <a href="#" className="flex items-center gap-2 font-bold">
              <img
                src={PrabhatImg}
                alt="logo"
                className={`rounded-full transition-all ${
                  scrolled ? "w-7 h-7" : "w-10 h-10"
                }`}
              />
            </a>

            {/* MOBILE MENU BUTTON */}
            <div className="md:hidden z-[9999]">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <HiX className="w-6 h-6 text-black dark:text-white" />
                ) : (
                  <HiMenuAlt3 className="w-6 h-6 text-black dark:text-white" />
                )}
              </button>
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-8 text-gray-800 dark:text-gray-200 font-medium">
              {menuItems.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  className="hover:text-green-500 transition"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-3">

              {/* CV DROPDOWN */}
              <div ref={cvRef} className="relative">

                <button
                  onClick={() => setCvOpen(!cvOpen)}
                  className="px-3 py-1 rounded-full bg-cyan-500 text-black font-medium"
                >
                  ⬇ CV
                </button>

                <AnimatePresence>
                  {cvOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -10 }}
                      className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden z-[9999]"
                    >
                      <a
                        href="/resume.pdf"
                        target="_blank"
                        className="block px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                        onClick={() => setCvOpen(false)}
                      >
                        View
                      </a>

                      <a
                        href="/resume.pdf"
                        download
                        className="block px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                        onClick={() => setCvOpen(false)}
                      >
                        Download
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* DARK MODE */}
              <DarkMode />
            </div>

          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden absolute right-4 top-16 w-48 bg-white dark:bg-gray-900 rounded-lg shadow-md p-2 z-[9999]"
            >
              {menuItems.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="block p-2 hover:text-green-500"
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default Navbar;