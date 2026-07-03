import React from "react";
import {
  FaProjectDiagram,
  FaCode,
  FaEnvelope,
  FaTools,
} from "react-icons/fa";

const activities = [
  {
    id: 1,
    title: "New Project Added",
    description: "Portfolio Management System",
    time: "10 minutes ago",
    icon: FaProjectDiagram,
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Skill Updated",
    description: "Added Spring Boot & Docker",
    time: "1 hour ago",
    icon: FaCode,
    color: "bg-emerald-500",
  },
  {
    id: 3,
    title: "New Contact Message",
    description: "Message received from John Doe",
    time: "2 hours ago",
    icon: FaEnvelope,
    color: "bg-purple-500",
  },
  {
    id: 4,
    title: "Service Modified",
    description: "Updated Full Stack Development",
    time: "Yesterday",
    icon: FaTools,
    color: "bg-orange-500",
  },
];

const RecentActivity = () => {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-md">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Recent Activity
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Latest updates in your portfolio dashboard.
          </p>
        </div>

        <button className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium transition hover:bg-slate-200">
          View All
        </button>
      </div>

      {/* Timeline */}
      <div className="space-y-6">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.id}
              className="flex items-start gap-4 rounded-xl border border-slate-200 p-4 transition-all duration-300 hover:border-blue-400 hover:shadow-lg"
            >
              {/* Icon */}
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl text-white ${activity.color}`}
              >
                <Icon />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <h3 className="font-semibold text-slate-800">
                    {activity.title}
                  </h3>

                  <span className="text-sm text-slate-400">
                    {activity.time}
                  </span>
                </div>

                <p className="mt-2 text-sm text-slate-500">
                  {activity.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RecentActivity;