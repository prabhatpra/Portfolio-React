import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { statsData } from "../dashboardData";

const StatsCards = () => {
  return (
    <section className="mt-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {statsData.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Background Decoration */}
              <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-slate-100 transition group-hover:scale-125"></div>

              <div className="relative flex items-start justify-between">
                {/* Left */}
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {item.title}
                  </p>

                  <h2 className="mt-3 text-4xl font-bold text-slate-900">
                    {item.value}
                  </h2>

                  <p className="mt-2 text-sm text-slate-500">
                    {item.description}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                    <FaArrowUp className="text-xs" />
                    {item.change}
                  </div>
                </div>

                {/* Right */}
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl text-3xl text-white shadow-lg ${item.color}`}
                >
                  <Icon />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsCards;