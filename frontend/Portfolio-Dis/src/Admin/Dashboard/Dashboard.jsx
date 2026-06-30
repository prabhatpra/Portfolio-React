import React, { useState } from "react";

import { stats, activities } from "./DashboardData";

import Sidebar from "./components/Sidebar";
import MobileSidebar from "./components/MobileSidebar";
import Topbar from "./components/Topbar";
import HeroBanner from "./components/HeroBanner";
import StatsCards from "./components/StatsCards";
import Overview from "./components/Overview";
import RecentActivity from "./components/RecentActivity";
import QuickActions from "./components/QuickActions";

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b] text-white flex">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-purple-500/10 blur-[120px]" />

      {/* Mobile Sidebar */}
      <MobileSidebar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 px-4 pt-24 pb-6 sm:px-6 lg:px-10 lg:pt-10 z-10">
        <Topbar />

        <HeroBanner />

        <StatsCards stats={stats} />

        <Overview />

        <RecentActivity activities={activities} />

        <QuickActions />
      </main>
    </div>
  );
};

export default Dashboard;