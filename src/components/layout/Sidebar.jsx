import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { AppstoreFilled, MedicineBoxFilled, UserOutlined, TeamOutlined, NotificationOutlined } from '@ant-design/icons';

const { Sider } = Layout;
const iconStyle = { fontSize: '24px' };

const Sidebar = ({ collapsed, userType }) => {
  console.log('Sidebar userType:', userType); // Debug log to verify userType in Sidebar

  const getMenuItems = () => {
    switch (userType) {
      case 'MIDWIFE':
        return [
          { key: '/midwife/dashboard', icon: <AppstoreFilled style={iconStyle} />, label: <Link to="/midwife/dashboard">Dashboard</Link> },
          { key: '/midwife/clinics', icon: <MedicineBoxFilled style={iconStyle} />, label: <Link to="/midwife/clinics">Clinics</Link> },
          {
            key: 'mothers',
            icon: <UserOutlined style={iconStyle} />,
            label: 'Mothers',
            children: [
              { key: '/midwife/mothers/expected', label: <Link to="/midwife/mothers/expected">Expected Mothers</Link> },
              { key: '/midwife/mothers/delivered', label: <Link to="/midwife/mothers/delivered">Delivered Mothers</Link> },
            ],
          },
          { key: '/midwife/babies', icon: <TeamOutlined style={iconStyle} />, label: <Link to="/midwife/babies">Babies</Link> },
          { key: '/midwife/reports', icon: <NotificationOutlined style={iconStyle} />, label: <Link to="/midwife/reports">Reports</Link> },
          { key: '/midwife/messages', icon: <NotificationOutlined style={iconStyle} />, label: <Link to="/midwife/messages">Messages</Link> },
        ];
      case 'DOCTOR':
        return [
          { key: '/doctor/dashboard', icon: <AppstoreFilled style={iconStyle} />, label: <Link to="/doctor/dashboard">Dashboard</Link> },
          {
            key: 'mothers',
            icon: <UserOutlined style={iconStyle} />,
            label: 'Mothers',
            children: [
              { key: '/doctor/mothers/expected', label: <Link to="/doctor/mothers/expected">Expected Mothers</Link> },
              { key: '/doctor/mothers/delivered', label: <Link to="/doctor/mothers/delivered">Delivered Mothers</Link> },
            ],
          },
          { key: '/doctor/clinics', icon: <MedicineBoxFilled style={iconStyle} />, label: <Link to="/doctor/clinics">Clinics</Link> },
          { key: '/doctor/babies', icon: <TeamOutlined style={iconStyle} />, label: <Link to="/doctor/babies">Babies</Link> },
          { key: '/doctor/schedules', icon: <NotificationOutlined style={iconStyle} />, label: <Link to="/doctor/schedules">Clinic Schedules</Link> },
          { key: '/doctor/reports', icon: <NotificationOutlined style={iconStyle} />, label: <Link to="/doctor/reports">Reports</Link> },
        ];
      case 'ADMIN':
        return [
          { key: '/admin/dashboard', icon: <AppstoreFilled style={iconStyle} />, label: <Link to="/admin/dashboard">Dashboard</Link> },
          {
            key: 'mothers',
            icon: <UserOutlined style={iconStyle} />,
            label: 'Mothers',
            children: [
              { key: '/admin/mothers/expected', label: <Link to="/admin/mothers/expected">Expected Mothers</Link> },
              { key: '/admin/mothers/delivered', label: <Link to="/admin/mothers/delivered">Delivered Mothers</Link> },
            ],
          },
          { key: '/admin/clinics', icon: <MedicineBoxFilled style={iconStyle} />, label: <Link to="/admin/clinics">Clinics</Link> },
          { key: '/admin/reports', icon: <MedicineBoxFilled style={iconStyle} />, label: <Link to="/admin/reports">Reports</Link> },
        ];

        case 'MOTHER':
            return [
                { key: '/mother/dashboard', icon: <AppstoreFilled style={iconStyle} />, label: <Link to="/mother/dashboard">Dashboard</Link> },
                // { key: '/mother/clinics', icon: <MedicineBoxFilled style={iconStyle} />, label: <Link to="/admin/clinics">Clinics</Link> },
                // { key: '/mother/reports', icon: <MedicineBoxFilled style={iconStyle} />, label: <Link to="/admin/reports">Reports</Link> },
            ];

        case 'CHILD':
            return [
                { key: '/child/dashboard', icon: <AppstoreFilled style={iconStyle} />, label: <Link to="/child/dashboard">Dashboard</Link> },
                // { key: '/mother/clinics', icon: <MedicineBoxFilled style={iconStyle} />, label: <Link to="/admin/clinics">Clinics</Link> },
                // { key: '/mother/reports', icon: <MedicineBoxFilled style={iconStyle} />, label: <Link to="/admin/reports">Reports</Link> },
            ];
      default:
        return [];
    }
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      width={200}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 64,
        bottom: 0,
        background: '#EEEEEE',
        borderRight: '2px solid #EEEEEE',
      }}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={['/']}
        items={getMenuItems()}
        style={{
          height: '100%',
          borderRight: 0,
          backgroundColor: '#EEEEEE',
        }}
      />
    </Sider>
  );
};

export default Sidebar;
