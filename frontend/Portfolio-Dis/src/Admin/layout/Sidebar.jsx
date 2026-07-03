import React from "react";
import { NavLink } from "react-router-dom";
import { menuItems } from "../utils/menuItems";

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-72 flex-col border-r border-slate-800 bg-slate-900 text-white lg:flex">
      {/* Logo */}
      <div className="flex h-20 items-center justify-center border-b border-slate-800">
        <h1 className="text-2xl font-bold tracking-wide">
          Portfolio Admin
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-4 py-6">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.name}>
                <NavLink
                  to={item.path}
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
  );
};

export default Sidebar;