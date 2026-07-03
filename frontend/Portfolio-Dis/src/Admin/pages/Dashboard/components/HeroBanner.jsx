import React from "react";
import {
  FaArrowRight,
  FaCode,
  FaFolderOpen,
} from "react-icons/fa";

const HeroBanner = () => {

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 text-white shadow-xl">

      {/* Background Blur */}
      <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute -bottom-20 left-0 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl"></div>

      <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

        {/* Left */}
        <div>

          <p className="text-sm font-medium text-blue-100">
            {today}
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            Welcome Back, Prabhat 👋
          </h1>

          <p className="mt-4 max-w-2xl text-blue-100 leading-7">
            Manage your portfolio, projects, skills, services,
            and messages from one beautiful dashboard.
          </p>

        </div>

        {/* Right */}
        <div className="flex flex-wrap gap-4">

          <button className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:scale-105">

            <FaFolderOpen />

            Add Project

          </button>

          <button className="flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold backdrop-blur transition hover:bg-white/20">

            <FaCode />

            Add Skill

          </button>

          <button className="flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold backdrop-blur transition hover:bg-white/20">

            View Portfolio

            <FaArrowRight />

          </button>

        </div>

      </div>

    </section>
  );
};

export default HeroBanner;