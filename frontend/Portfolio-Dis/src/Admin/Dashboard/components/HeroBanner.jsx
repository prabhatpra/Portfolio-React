
import React from "react";

const HeroBanner = () => {
  return (
    <div className="mb-8 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 p-5 sm:p-6 lg:p-8 backdrop-blur-xl">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
        Portfolio Control Center 🚀
      </h2>

      <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-2xl">
        Monitor projects, manage skills, track messages and keep your
        portfolio updated.
      </p>
    </div>
  );
};

export default HeroBanner;