import React from "react";
import {
FaUser,
FaProjectDiagram,
FaEnvelope,
FaCode,
FaSignOutAlt,
FaHome,
FaCog,
FaRocket,
FaBell,
} from "react-icons/fa";

const Dashboard = () => {
const stats = [
{
title: "Projects",
value: 12,
change: "+2 this month",
icon: <FaProjectDiagram />,
},
{
title: "Messages",
value: 24,
change: "+5 today",
icon: <FaEnvelope />,
},
{
title: "Skills",
value: 18,
change: "+3 added",
icon: <FaCode />,
},
{
title: "Visitors",
value: "1.2K",
change: "+18%",
icon: <FaRocket />,
},
];

const activities = [
"Added new Spring Boot project",
"Received 5 new messages",
"Updated portfolio UI",
"Uploaded latest resume",
];

return ( <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b] text-white flex">

  {/* BACKGROUND GLOW */}
  <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
  <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-purple-500/10 blur-[120px]" />

  {/* SIDEBAR */}
  <aside className="hidden lg:flex flex-col justify-between w-72 p-6 border-r border-white/10 bg-white/5 backdrop-blur-xl z-10">

    <div>
      <h1 className="text-3xl font-bold mb-10 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
        Dashboard
      </h1>

      <nav className="space-y-3">

        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-cyan-500/20 border border-cyan-500/30">
          <FaHome />
          Dashboard
        </button>

        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-white/10 hover:translate-x-2 transition-all">
          <FaProjectDiagram />
          Projects
        </button>

        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-white/10 hover:translate-x-2 transition-all">
          <FaEnvelope />
          Messages
        </button>

        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-white/10 hover:translate-x-2 transition-all">
          <FaCode />
          Skills
        </button>

        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-white/10 hover:translate-x-2 transition-all">
          <FaCog />
          Settings
        </button>

      </nav>
    </div>

    <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-red-500 hover:bg-red-600 transition">
      <FaSignOutAlt />
      Logout
    </button>
  </aside>

  {/* MAIN CONTENT */}
  <main className="flex-1 p-6 lg:p-10 z-10">

    {/* TOPBAR */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">

      <div>
        <h2 className="text-4xl font-bold">
          Welcome Back 👋
        </h2>

        <p className="text-gray-400 mt-2">
          Manage your portfolio from one place.
        </p>
      </div>

      <div className="flex items-center gap-4">

        <button className="relative p-3 rounded-xl bg-white/5 border border-white/10">
          <FaBell />
          <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500"></span>
        </button>

        <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-5 py-3 rounded-2xl">

          <div className="h-12 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
            <FaUser />
          </div>

          <div>
            <h3 className="font-semibold">
              Prabhat Prajapati
            </h3>

            <p className="text-sm text-gray-400">
              Backend Developer
            </p>

            <p className="text-xs text-green-400">
              ● Online
            </p>
          </div>

        </div>
      </div>

    </div>

    {/* HERO */}
    <div className="mb-8 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 p-8 backdrop-blur-xl">

      <h2 className="text-3xl md:text-4xl font-bold">
        Portfolio Control Center 🚀
      </h2>

      <p className="mt-3 text-gray-300 max-w-2xl">
        Monitor projects, manage skills, track messages and keep your portfolio updated.
      </p>

    </div>

    {/* STATS */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

      {stats.map((item, index) => (
        <div
          key={index}
          className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-cyan-500/50 hover:-translate-y-2 transition-all duration-300"
        >

          <div className="flex items-center justify-between">

            <div>
              <p className="text-gray-400">
                {item.title}
              </p>

              <h3 className="text-4xl font-bold mt-2">
                {item.value}
              </h3>

              <p className="text-green-400 text-sm mt-2">
                {item.change}
              </p>
            </div>

            <div className="text-3xl text-cyan-400">
              {item.icon}
            </div>

          </div>

        </div>
      ))}
    </div>

    {/* OVERVIEW */}
    <div className="grid md:grid-cols-2 gap-6 mb-10">

      <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

        <h3 className="text-xl font-bold mb-4">
          Portfolio Status
        </h3>

        <div className="space-y-3 text-gray-300">
          <p>✅ Portfolio Online</p>
          <p>✅ Resume Active</p>
          <p>✅ Contact Form Working</p>
          <p>✅ GitHub Connected</p>
        </div>

      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

        <h3 className="text-xl font-bold mb-4">
          Latest Update
        </h3>

        <p className="text-gray-300">
          Recently added new React and Spring Boot projects along with dashboard improvements.
        </p>

      </div>

    </div>

    {/* RECENT ACTIVITY */}
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-10">

      <h3 className="text-2xl font-bold mb-6">
        Recent Activity
      </h3>

      <div className="space-y-5">

        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 rounded-xl bg-white/5"
          >
            <span className="text-cyan-400 text-lg">
              ●
            </span>

            <p>{activity}</p>
          </div>
        ))}

      </div>

    </div>

    {/* QUICK ACTIONS */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="cursor-pointer bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-cyan-500 transition">
        <h3 className="font-bold text-xl">
          Add Project
        </h3>

        <p className="text-sm text-gray-400 mt-2">
          Create and publish a new portfolio project.
        </p>
      </div>

      <div className="cursor-pointer bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-purple-500 transition">
        <h3 className="font-bold text-xl">
          View Messages
        </h3>

        <p className="text-sm text-gray-400 mt-2">
          Check latest contact form submissions.
        </p>
      </div>

      <div className="cursor-pointer bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-green-500 transition">
        <h3 className="font-bold text-xl">
          Update Skills
        </h3>

        <p className="text-sm text-gray-400 mt-2">
          Add or manage your technical skills.
        </p>
      </div>

    </div>

  </main>
</div>

);
};

export default Dashboard;
