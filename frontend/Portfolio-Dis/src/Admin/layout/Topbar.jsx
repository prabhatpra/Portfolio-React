import React from "react";
import {
  FaBars,
  FaBell,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

const Topbar = ({ setMenuOpen }) => {
  return (
    <header className="sticky top-0 z-30 h-20 bg-white/90 backdrop-blur-md border-b border-slate-200">

      <div className="h-full flex items-center justify-between px-6">

        {/* Left */}
        <div className="flex items-center gap-4">

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition"
          >
            <FaBars className="text-xl text-slate-700" />
          </button>

          {/* Search */}
          <div className="hidden md:flex items-center bg-slate-100 rounded-xl px-4 py-2 w-80">

            <FaSearch className="text-slate-500" />

            <input
              type="text"
              placeholder="Search..."
              className="ml-3 w-full bg-transparent outline-none text-sm"
            />

          </div>

        </div>

        {/* Right */}
        <div className="flex items-center gap-5">

          {/* Notification */}
          <button className="relative p-2 rounded-xl hover:bg-slate-100 transition">

            <FaBell className="text-xl text-slate-700" />

            <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-red-500"></span>

          </button>

          {/* Profile */}
          <button className="flex items-center gap-3 hover:bg-slate-100 px-3 py-2 rounded-xl transition">

            <FaUserCircle className="text-3xl text-slate-700" />

            <div className="hidden sm:block text-left">

              <h4 className="text-sm font-semibold text-slate-800">
                Prabhat
              </h4>

              <p className="text-xs text-slate-500">
                Administrator
              </p>

            </div>

          </button>

        </div>

      </div>

    </header>
  );
};

export default Topbar;