import React from "react";

import {
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
  FaCode,
  FaSignOutAlt,
} from "react-icons/fa";

const Dashboard = () => {

  const stats = [
    {
      title: "Projects",
      value: 12,
      icon: <FaProjectDiagram />,
    },
    {
      title: "Messages",
      value: 24,
      icon: <FaEnvelope />,
    },
    {
      title: "Skills",
      value: 18,
      icon: <FaCode />,
    },
  ];

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b] text-white flex">

      {/* SIDEBAR */}
      <aside className="w-72 bg-white/5 backdrop-blur-lg border-r border-white/10 p-6 hidden lg:flex flex-col justify-between">

        <div>

          <h1 className="text-3xl font-bold mb-10 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text">
            Admin Panel
          </h1>

          <nav className="space-y-4">

            <button className="w-full text-left px-4 py-3 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 transition">
              Dashboard
            </button>

            <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 transition">
              Projects
            </button>

            <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 transition">
              Messages
            </button>

            <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 transition">
              Skills
            </button>

            <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 transition">
              Settings
            </button>

          </nav>

        </div>

        <button
          className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 transition py-3 rounded-xl"
        >
          <FaSignOutAlt />

          Logout
        </button>

      </aside>

      {/* MAIN */}
      <main className="flex-1 p-6 lg:p-10">

        {/* TOPBAR */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">

          <div>

            <h2 className="text-4xl font-bold">
              Welcome Back 👋
            </h2>

            <p className="text-gray-400 mt-2">
              Manage your portfolio dashboard.
            </p>

          </div>

          {/* PROFILE */}
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-5 py-3 rounded-2xl">

            <div className="bg-cyan-500 p-3 rounded-full text-xl">
              <FaUser />
            </div>

            <div>
              <h3 className="font-semibold">
                Prabhat Prajapati
              </h3>

              <p className="text-sm text-gray-400">
                Backend Developer
              </p>
            </div>

          </div>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">

          {stats.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-105 transition duration-300"
            >

              <div className="flex items-center justify-between mb-4">

                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>

                <div className="text-2xl text-cyan-400">
                  {item.icon}
                </div>

              </div>

              <p className="text-4xl font-bold">
                {item.value}
              </p>

            </div>

          ))}

        </div>

        {/* RECENT ACTIVITY */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10">

          <h3 className="text-2xl font-bold mb-6">
            Recent Activity
          </h3>

          <div className="space-y-4">

            <div className="bg-white/5 p-4 rounded-xl">
              ✅ Added new Spring Boot project
            </div>

            <div className="bg-white/5 p-4 rounded-xl">
              📩 Received 5 new messages
            </div>

            <div className="bg-white/5 p-4 rounded-xl">
              🚀 Updated portfolio UI
            </div>

          </div>

        </div>

        {/* QUICK ACTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 p-5 rounded-2xl font-semibold hover:scale-105 transition">
            Add Project
          </button>

          <button className="bg-gradient-to-r from-purple-500 to-pink-500 p-5 rounded-2xl font-semibold hover:scale-105 transition">
            View Messages
          </button>

          <button className="bg-gradient-to-r from-green-500 to-emerald-500 p-5 rounded-2xl font-semibold hover:scale-105 transition">
            Update Skills
          </button>

        </div>

      </main>

    </div>
  );
};

export default Dashboard;
