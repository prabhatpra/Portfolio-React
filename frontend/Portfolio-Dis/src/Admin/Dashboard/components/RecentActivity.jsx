import React from "react";

const RecentActivity = ({ activities }) => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-10">
      <h3 className="text-2xl font-bold mb-6">
        Recent Activity
      </h3>

      <div className="space-y-5">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-4 rounded-xl bg-white/5"
          >
            <span className="text-cyan-400 text-lg">
              ●
            </span>

            <p className="text-sm sm:text-base break-words">
              {activity}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;