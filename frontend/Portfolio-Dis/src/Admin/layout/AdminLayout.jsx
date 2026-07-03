import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import MobileSidebar from "./MobileSidebar";
import Topbar from "./Topbar";

const AdminLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Mobile Sidebar */}
      <MobileSidebar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* Main Content */}
      <div className="lg:ml-72">
        {/* Topbar */}
        <Topbar setMenuOpen={setMenuOpen} />

        {/* Page Content */}
        <main className="min-h-[calc(100vh-72px)] p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;