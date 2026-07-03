import React from "react";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { menuItems } from "../utils/menuItems";

const MobileSidebar = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-72 bg-slate-900 text-white shadow-2xl transform transition-transform duration-300 lg:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex h-20 items-center justify-between border-b border-slate-800 px-6">
          <h2 className="text-xl font-bold tracking-wide">
            Portfolio Admin
          </h2>

          <button
            onClick={() => setMenuOpen(false)}
            className="rounded-lg p-2 text-xl transition hover:bg-slate-800 hover:text-blue-400"
          >
            <FaTimes />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-4 rounded-xl px-4 py-3 font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-blue-600 text-white shadow-lg"
                          : "text-slate-300 hover:bg-slate-800 hover:text-white"
                      }`
                    }
                  >
                    <Icon className="text-lg" />
                    <span>{item.name}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="border-t border-slate-800 p-5">
          <p className="text-center text-sm text-slate-400">
            © 2026 Portfolio Admin
          </p>
        </div>
      </aside>
    </>
  );
};

export default MobileSidebar;