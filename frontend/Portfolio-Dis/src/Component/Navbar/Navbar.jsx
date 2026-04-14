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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 z-40 w-screen">
      <div
        className={`mx-auto transition-all duration-300 shadow-md relative
        ${
          scrolled
            ? "w-1/2 h-12 rounded-lg bg-white/10 dark:bg-black/30 backdrop-blur-md"
            : "w-full h-14 bg-white/30 dark:bg-black/40 backdrop-blur-md"
        }`}
      >
        <div className="h-full px-4 md:px-6 lg:px-10">
          <div className="flex items-center justify-between h-full">

            {/* LOGO */}
            <a href="#" className="flex items-center gap-2">
              <img
                src={PrabhatImg}
                alt="logo"
                className="rounded-full w-10 h-10 hover:scale-110 transition"
              />
            </a>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-6 text-gray-800 dark:text-gray-200 font-medium">
              {menuItems.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  className="hover:text-green-500 hover:scale-105 transition"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-5 ml-auto">

              {/* CV */}
              <div ref={cvRef} className="relative">
                <button
                  onClick={() => setCvOpen(!cvOpen)}
                  className="px-2 py-1 sm:px-3 sm:py-1 sm:text-sm 
                  md:px-4 md:py-2 md:text-base rounded-full bg-transparent border-2 border-sky-900 text-black dark:text-white font-medium hover:bg-cyan-600 hover:scale-105 transition"
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
              <div className="hover:scale-110 transition">
                <DarkMode />
              </div>

              {/* HAMBURGER (ONLY MD/SM) */}
              <div className="md:hidden flex items-center">
                <button onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? (
                    <HiX className="w-6 h-6 text-black dark:text-white" />
                  ) : (
                    <HiMenuAlt3 className="w-6 h-6 text-black dark:text-white hover:text-green-500 transition" />
                  )}
                </button>
              </div>

            </div>

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
                className="block p-2 hover:text-green-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Navbar;