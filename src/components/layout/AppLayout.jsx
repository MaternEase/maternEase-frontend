import React, { useState } from 'react';
import { Layout } from 'antd';
import AppHeader from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

const AppLayout = ({ userType }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AppHeader onMenuClick={toggleSidebar} />
      <Layout>
        <Sidebar collapsed={collapsed} userType={userType} />
        <Content style={{ padding: '24px', background: '#fff', marginLeft: collapsed ? 80 : 200, transition: 'margin-left 0.2s' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
