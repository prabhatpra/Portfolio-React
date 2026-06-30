import React from "react";

const StatsCards = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 sm:p-6 hover:border-cyan-500/50 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400">{item.title}</p>

                <h3 className="text-3xl sm:text-4xl font-bold mt-2">
                  {item.value}
                </h3>

                <p className="text-green-400 text-sm mt-2">
                  {item.change}
                </p>
              </div>

              <div className="text-2xl sm:text-3xl text-cyan-400">
                <Icon />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;