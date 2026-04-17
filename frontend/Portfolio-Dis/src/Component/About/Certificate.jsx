import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Login from "../Navbar/Login";

const certificates = [
  { id: 1, title: "Java Full Stack Certificate", img: "/certificates/java_fullstack.png" },
  { id: 2, title: "React Developer Certificate", img: "/certificates/react_dev.png" },
  { id: 3, title: "Spring Boot Expert", img: "/certificates/spring_boot.png" },
];

const Certificate = ({ isAuthenticated }) => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  // ✅ Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  const handleView = (cert) => {
    if (!isAuthenticated) {
      setShowLogin(true);
      return;
    }
    setSelectedCert(cert);
  };

  const handleClose = () => {
    setSelectedCert(null);
    setShowLogin(false);
  };

  return (
    <section
      className="min-h-screen w-full py-16 px-4 bg-transparent"
      data-aos="fade-up"
    >
      {/* Heading */}
      <h2
        className="text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        My Certificates
      </h2>

      {/* Certificates Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {certificates.map((cert, i) => (
          <motion.div
            key={cert.id}
            className="relative cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl bg-white/10 dark:bg-gray-800/30 backdrop-blur-md transition-shadow"
            onClick={() => handleView(cert)}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 100 }}
            data-aos="flip-left"
            data-aos-delay={200 + i * 100}
          >
            <div className="overflow-hidden">
              <img
                src={cert.img}
                alt={cert.title}
                className="w-full h-64 sm:h-72 md:h-80 object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="absolute bottom-0 w-full bg-black/60 py-3 text-center opacity-0 hover:opacity-100 transition-opacity">
              <p className="text-white font-semibold text-lg">{cert.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-white/95 dark:bg-gray-900/95 rounded-2xl p-6 max-w-3xl w-full shadow-2xl backdrop-blur-md overflow-y-auto max-h-[90vh]"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
            >
              <button
                className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 text-xl font-bold hover:scale-110 transition-transform"
                onClick={handleClose}
              >
                ✕
              </button>

              <h3 className="text-2xl font-bold mb-4 text-center dark:text-white">
                {selectedCert.title}
              </h3>
              <img
                src={selectedCert.img}
                alt={selectedCert.title}
                className="w-full h-auto rounded-lg object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Login Modal */}
      <AnimatePresence>
        {showLogin && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-white/95 dark:bg-gray-900/95 rounded-2xl p-6 w-full max-w-md shadow-2xl backdrop-blur-md"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
            >
              <button
                className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 text-xl font-bold hover:scale-110 transition-transform"
                onClick={handleClose}
              >
                ✕
              </button>
              <Login />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificate;
