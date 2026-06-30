import React from "react";

const QuickActions = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {/* Add Project */}
      <div className="cursor-pointer bg-white/5 border border-white/10 rounded-3xl p-5 sm:p-6 hover:border-cyan-500 hover:-translate-y-2 transition-all duration-300">
        <h3 className="font-bold text-lg sm:text-xl">
          Add Project
        </h3>

        <p className="text-sm text-gray-400 mt-2">
          Create and publish a new portfolio project.
        </p>
      </div>

      {/* View Messages */}
      <div className="cursor-pointer bg-white/5 border border-white/10 rounded-3xl p-5 sm:p-6 hover:border-purple-500 hover:-translate-y-2 transition-all duration-300">
        <h3 className="font-bold text-lg sm:text-xl">
          View Messages
        </h3>

        <p className="text-sm leading-6 text-gray-400 mt-2">
          Check latest contact form submissions.
        </p>
      </div>

      {/* Update Skills */}
      <div className="cursor-pointer bg-white/5 border border-white/10 rounded-3xl p-5 sm:p-6 hover:border-green-500 hover:-translate-y-2 transition-all duration-300">
        <h3 className="font-bold text-lg sm:text-xl">
          Update Skills
        </h3>

        <p className="text-sm text-gray-400 mt-2">
          Add or manage your technical skills.
        </p>
      </div>
    </div>
  );
};

export default QuickActions;