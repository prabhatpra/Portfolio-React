import React from "react";
import HeroBanner from "./components/HeroBanner";
import StatsCards from "./components/StatsCards";
import Overview from "./components/Overview";
import RecentActivity from "./components/RecentActivity";
import QuickActions from "./components/QuickActions"
import WelcomeCard from "./components/WelcomeCard";

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <HeroBanner />
      <StatsCards />
      <Overview />
      <RecentActivity />
      <QuickActions />
      <WelcomeCard />
    </div>
  );
};

export default Dashboard;