import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MobileMenu = ({ menuItems, closeMenus, menuRef }) => {
    
  return (
    <motion.div
      ref={menuRef}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="md:hidden absolute right-4 top-[60px] w-48 bg-white dark:bg-gray-900 dark:text-red-500 rounded-lg shadow-md p-2 z-50"
    >
      {menuItems.map((item, i) =>
        item.link.startsWith("#") ? (
          <a
            key={i}
            href={item.link}
            onClick={closeMenus}
            className="block p-2 hover:text-green-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition"
          >
            {item.name}
          </a>
        ) : (
          <Link
            key={i}
            to={item.link}
            onClick={closeMenus}
            className="block p-2 hover:text-green-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition"
          >
            {item.name}
          </Link>
        )
      )}
    </motion.div>
  );
};

export default MobileMenu;