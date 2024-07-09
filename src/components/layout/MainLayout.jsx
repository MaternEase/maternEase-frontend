import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const MainLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleDrawerToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex">
      <Navbar handleDrawerToggle={handleDrawerToggle} />
      <Sidebar open={sidebarOpen} />
      <div className={`flex-1 ${sidebarOpen ? 'ml-64' : 'ml-20'} mt-16`}>
        <main className="p-4 bg-EEEEEE">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
