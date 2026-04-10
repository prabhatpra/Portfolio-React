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

  // Scroll handler (close everything)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      setCvOpen(false);
      setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Outside click handler (CV + Menu)
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
        className={`mx-auto transition-all duration-300 shadow-md relative
        ${
          scrolled
            ? "w-1/2 h-12 rounded-lg bg-white/10 dark:bg-black/30 backdrop-blur-md"
            : "w-full h-14 bg-white/30 dark:bg-black/40 backdrop-blur-md"
        }`}
      >
        <div className="py-1 px-2 h-full">
          <div className="container mx-auto flex items-center justify-between px-4 md:px-6 lg:px-10">

            {/* Logo */}
            <a href="#" className="flex items-center gap-2 font-bold">
              <img
                src={PrabhatImg}
                alt="logo"
                className={`rounded-full ${
                  scrolled ? "w-7 h-7" : "w-10 h-10"
                }`}
              />
            </a>

            {/* Mobile Button */}
            <div className="md:hidden absolute right-2 top-4 z-[9999]">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <HiX className="w-6 h-6 text-black dark:text-white" /> : <HiMenuAlt3 className="w-6 h-6 text-black dark:text-white"/>}
              </button>
            </div>

            {/* Mobile Menu */}
            <div ref={menuRef}>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    className="absolute top-16 right-4 bg-transparent dark:bg-transparent border-2 rounded-lg hover:border-2 border-sky-500rounded-lg shadow-md p-2 w-48 z-[9999]"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={menuVariants}
                  >
                    {menuItems.map((item, i) => (
                      <a
                        key={i}
                        href={item.link}
                        onClick={() => setIsOpen(false)}
                        className="block p-2 hover:text-green-500 dark:hover:text-cyan-500 text-violet-700 font-medium rounded-md transition-colors"
                      >
                        {item.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-4">
              {menuItems.map((item, i) => (
                <a key={i} href={item.link}>
                  {item.name}
                </a>
              ))}
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-3">

              {/* CV DROPDOWN */}
              <div
                ref={cvRef}
                className="relative"
              >
                <button
                  onClick={() => setCvOpen(!cvOpen)}
                  className="px-3 py-1 rounded-full bg-cyan-500 text-black"
                >
                  ⬇ CV
                </button>

                {cvOpen && (
                  <div className="absolute left-0 mt-2 w-28 bg-white dark:bg-gray-800 rounded shadow z-[9999]">
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      className="block px-3 py-2 hover:bg-gray-200"
                      onClick={() => setCvOpen(false)}
                    >
                      View
                    </a>

                    <a
                      href="/resume.pdf"
                      download
                      className="block px-3 py-2 hover:bg-gray-200"
                      onClick={() => setCvOpen(false)}
                    >
                      Download
                    </a>
                  </div>
                )}
              </div>

              {/* Dark Mode */}
              <DarkMode />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;