import React, { useState, useEffect, useRef } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import DarkMode from "./DarkMode";
import PrabhatImg from "../../assets/myimg/prabhat.png";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const menuItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Project", link: "#project" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
  { name: "Dashboard", link: "/admin" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);

  const cvRef = useRef(null);
  const menuRef = useRef(null);

  // SCROLL HANDLER
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // OUTSIDE CLICK SAFE HANDLER
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

  // CLOSE ALL MENUS (SAFE UX)
  const closeMenus = () => {
    setIsOpen(false);
    setCvOpen(false);
  };

  return (
    <div className="fixed top-0 z-50 w-full">
      <div
        className={`mx-auto transition-all duration-300 shadow-md relative
        ${scrolled
            ? "w-[90%] md:w-1/2 h-12 rounded-lg bg-white/10 dark:bg-black/30 backdrop-blur-lg"
            : "w-full h-12 bg-white/30 dark:bg-black/40 backdrop-blur-lg"
          }`}
      >
        <div className="h-full px-4 md:px-6 lg:px-10">
          <div className="flex items-center justify-between h-full">

            {/* LOGO */}
            <a href="#home" className="flex items-center gap-2">
              <img
                src={PrabhatImg}
                alt="logo"
                className="rounded-full w-10 h-10 hover:scale-110 transition"
              />
            </a>

            {/* MENU */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 text-gray-800 dark:text-yellow-400 font-extrabold">
              {menuItems.map((item, i) =>
                item.link.startsWith("#") ? (
                  <a
                    key={i}
                    href={item.link}
                    className="hover:text-green-500 hover:scale-105 transition"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={i}
                    to={item.link}
                    className="hover:text-green-500 hover:scale-105 transition"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-5 ml-auto">

              {/* CV */}
              <div ref={cvRef} className="relative">
                <button
                  onClick={() => setCvOpen((prev) => !prev)}
                  className="px-2 py-1 text-xs md:px-4 md:py-2 md:text-base rounded-full border-2 border-sky-900 text-black dark:text-white font-medium hover:bg-cyan-600 hover:text-white hover:scale-105 transition"
                >
                  ⬇ CV
                </button>

                <AnimatePresence>
                  {cvOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -10 }}
                      className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden z-50"
                    >
                      <Link
                        to="/resume"
                        onClick={closeMenus}
                        className="block px-3 py-2 hover:bg-gray-200 dark:text-sky-300 dark:hover:bg-gray-700"
                      >
                        View
                      </Link>

                      <a
                        href="/resume.pdf"
                        download
                        onClick={closeMenus}
                        className="block px-3 py-2 hover:bg-gray-200 dark:text-sky-300 dark:hover:bg-gray-700"
                      >
                        Download
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* DARK MODE */}
              <DarkMode />

              {/* HAMBURGER */}
              <div className="md:hidden">
                <button onClick={() => setIsOpen((prev) => !prev)}>
                  {isOpen ? (
                    <HiX className="w-6 h-6 dark:text-white" />
                  ) : (
                    <HiMenuAlt3 className="w-6 h-6 dark:text-white transition" />
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
          <MobileMenu
          menuItems={menuItems}
          closeMenus={closeMenus}
          menuRef={menuRef}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;