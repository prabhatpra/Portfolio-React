import React from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaProjectDiagram,
  FaEnvelope,
  FaCode,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const MobileSidebar = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 lg:hidden z-50 flex items-center justify-between px-5 py-4 bg-[#111827]/80 backdrop-blur-xl border-b border-white/10">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Dashboard
        </h1>

        <button
          onClick={() => setMenuOpen(true)}
          className="text-2xl"
        >
          <FaBars />
        </button>
      </div>

      {/* Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setMenuOpen(false)}
        />

        {/* Sidebar */}
        <aside
          className={`absolute left-0 top-0 h-full w-72 bg-[#111827] border-r border-white/10 p-6 transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold">Dashboard</h2>

            <button onClick={() => setMenuOpen(false)}>
              <FaTimes />
            </button>
          </div>

          <nav className="space-y-3">
            <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-cyan-500/20">
              <FaHome />
              Dashboard
            </button>

            <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-white/10">
              <FaProjectDiagram />
              Projects
            </button>

            <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-white/10">
              <FaEnvelope />
              Messages
            </button>

            <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-white/10">
              <FaCode />
              Skills
            </button>

            <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-white/10">
              <FaCog />
              Settings
            </button>
          </nav>

          <button className="absolute bottom-8 left-6 right-6 py-3 rounded-xl bg-red-500 hover:bg-red-600 flex justify-center items-center gap-2">
            <FaSignOutAlt />
            Logout
          </button>
        </aside>
      </div>
    </>
  );
};

export default MobileSidebar;