import React from "react";
import {
  FaUserCircle,
  FaCalendarAlt,
  FaClock,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";

const WelcomeCard = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <section className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 text-white shadow-lg">
      {/* Profile */}
      <div className="flex items-center gap-4">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
          <FaUserCircle className="text-6xl text-blue-400" />
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            Welcome Back, Prabhat 👋
          </h2>

          <p className="text-slate-300">
            Portfolio Administrator
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="my-6 border-t border-slate-700"></div>

      {/* Date */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <FaCalendarAlt className="text-blue-400" />
          <span>{currentDate}</span>
        </div>

        <div className="flex items-center gap-3">
          <FaClock className="text-emerald-400" />
          <span>{currentTime}</span>
        </div>

        <div className="flex items-center gap-3">
          <FaRocket className="text-orange-400" />
          <span>Keep building amazing projects 🚀</span>
        </div>
      </div>

      {/* Divider */}
      <div className="my-6 border-t border-slate-700"></div>

      {/* Progress */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm text-slate-300">
            Portfolio Completion
          </span>

          <span className="font-semibold">85%</span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-700">
          <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>
        </div>
      </div>

      {/* Button */}
      <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold transition-all duration-300 hover:bg-blue-700">
        Edit Profile
        <FaArrowRight />
      </button>
    </section>
  );
};

export default WelcomeCard;