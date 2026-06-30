import React from "react";
import {
  FaHome,
  FaProjectDiagram,
  FaEnvelope,
  FaCode,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="hidden lg:flex flex-col justify-between w-72 p-6 border-r border-white/10 bg-white/5 backdrop-blur-xl z-10">
      <div>
        <h1 className="text-3xl font-bold mb-10 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
          Dashboard
        </h1>

        <nav className="space-y-3">
          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-cyan-500/20 border border-cyan-500/30">
            <FaHome />
            Dashboard
          </button>

          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-white/10 hover:translate-x-2 transition-all">
            <FaProjectDiagram />
            Projects
          </button>

          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-white/10 hover:translate-x-2 transition-all">
            <FaEnvelope />
            Messages
          </button>

          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-white/10 hover:translate-x-2 transition-all">
            <FaCode />
            Skills
          </button>

          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-white/10 hover:translate-x-2 transition-all">
            <FaCog />
            Settings
          </button>
        </nav>
      </div>

      <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-red-500 hover:bg-red-600 transition">
        <FaSignOutAlt />
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;