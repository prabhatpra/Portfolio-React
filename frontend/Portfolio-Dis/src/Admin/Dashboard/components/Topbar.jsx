import React from "react";
import { FaBell, FaUser } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
      {/* Left */}
      <div>
        <h2 className="text-3xl sm:text-4xl font-bold">
          Welcome Back 👋
        </h2>

        <p className="text-gray-400 mt-2">
          Manage your portfolio from one place.
        </p>
      </div>

      {/* Right */}
      <div className="flex flex-wrap items-center gap-4">
        {/* Notification */}
        <button className="relative p-3 rounded-xl bg-white/5 border border-white/10">
          <FaBell />

          <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500" />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-2xl w-full sm:w-auto">
          <div className="h-12 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
            <FaUser />
          </div>

          <div>
            <h3 className="font-semibold">
              Prabhat Prajapati
            </h3>

            <p className="text-sm text-gray-400">
              Backend Developer
            </p>

            <p className="text-xs text-green-400">
              ● Online
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;