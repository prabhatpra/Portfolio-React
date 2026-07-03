import React from "react";
import {
  FaChartLine,
  FaEye,
  FaUsers,
  FaMousePointer,
} from "react-icons/fa";

const analytics = [
  {
    id: 1,
    title: "Portfolio Views",
    value: "12,480",
    change: "+18%",
    icon: FaEye,
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Visitors",
    value: "3,250",
    change: "+12%",
    icon: FaUsers,
    color: "bg-emerald-500",
  },
  {
    id: 3,
    title: "Clicks",
    value: "1,870",
    change: "+9%",
    icon: FaMousePointer,
    color: "bg-orange-500",
  },
];

const Overview = () => {
  return (
    <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
      {/* Analytics Card */}
      <div className="xl:col-span-2 rounded-2xl bg-white p-6 shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Analytics Overview
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Portfolio performance over the last 30 days.
            </p>
          </div>

          <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
            <FaChartLine size={24} />
          </div>
        </div>

        {/* Fake Chart */}
        <div className="mt-10 flex h-72 items-end justify-between gap-3">
          {[40, 70, 55, 90, 65, 110, 80, 130, 95, 150, 120, 170].map(
            (height, index) => (
              <div
                key={index}
                className="flex-1 rounded-t-xl bg-gradient-to-t from-blue-600 to-cyan-400 transition-all duration-300 hover:opacity-80"
                style={{ height: `${height}px` }}
              />
            )
          )}
        </div>
      </div>

      {/* Right Side Analytics */}
      <div className="space-y-5">
        {analytics.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="rounded-2xl bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">
                    {item.title}
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-slate-900">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-emerald-600">
                    {item.change} this month
                  </p>
                </div>

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl text-2xl text-white ${item.color}`}
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

export default Overview;