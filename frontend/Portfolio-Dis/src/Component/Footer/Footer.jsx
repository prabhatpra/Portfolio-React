import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full text-gray-800 dark:text-gray-100">

      {/* MAIN */}
      <div className="w-full px-6 lg:px-20 py-12 
        flex flex-col lg:flex-row 
        justify-between items-center gap-10">

        {/* LEFT */}
        <div className="flex-1 text-center lg:text-left space-y-3">
          <h1 className="text-xl font-bold 
          text-transparent bg-clip-text 
          bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500">
            Prabhat Prajapati
          </h1>

          <p className="text-sm text-gray-500 max-w-sm mx-auto lg:mx-0">
            Backend Developer focused on building scalable APIs, clean architecture,
            and real-world applications.
          </p>

          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* CENTER */}
        <div className="flex-1 flex flex-col items-center gap-2 text-sm">

          <span className="text-gray-500 text-xs uppercase tracking-wide">
            Get in touch
          </span>

          <div className="flex flex-wrap justify-center gap-5">
            <a href="mailto:prabhatprajapati01@gmail.com" className="hover:underline">
              📧 Email
            </a>

            <a href="tel:+918409363297" className="hover:underline">
              📞 Call
            </a>

            <a
              href="https://wa.me/918409363297"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 flex flex-col items-center lg:items-end gap-3">

          <span className="text-gray-500 text-xs uppercase tracking-wide">
            Connect
          </span>

          <div className="flex gap-5 text-xl">
            <a
              href="https://github.com/prabhatpra"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/prabhat-prajapati-01p6/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition text-blue-500"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://wa.me/918409363297"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition text-green-500"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 dark:border-gray-700 mx-6 lg:mx-20"></div>

      {/* Bottom */}
      <div className="text-center py-4 text-xs text-gray-500">
        Designed & built with ❤️ by{" "}
        <span className="font-semibold">Prabhat Prajapati</span>
      </div>
    </footer>
  );
};

export default Footer;