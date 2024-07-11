import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { AppstoreFilled, MedicineBoxFilled,UserOutlined, TeamOutlined, NotificationOutlined } from '@ant-design/icons';

const { Sider } = Layout;

const iconStyle = { fontSize: '24px' };

const Sidebar = ({ collapsed, userType }) => {
  const getMenuItems = () => {
    switch (userType) {
      case 'Midwife':
        return (
          <>
            <Menu.Item key="/midwife/dashboard" icon={<AppstoreFilled style={iconStyle} />}>
              <Link to="/midwife/dashboard">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="/midwife/clinics" icon={<MedicineBoxFilled style={iconStyle} />}>
              <Link to="/midwife/clinics">Clinics</Link>
            </Menu.Item>
            <Menu.Item key="/midwife/mothers" icon={<UserOutlined style={{ fontSize: '24px', fontWeight: 'bold',iconStyle }}/>}>
              <Link to="/midwife/mothers">Mothers</Link>
            </Menu.Item>
            <Menu.Item key="/midwife/babies" icon={<TeamOutlined style={iconStyle} />}>
              <Link to="/midwife/babies">Babies</Link>
            </Menu.Item>
            <Menu.Item key="/midwife/reports" icon={<NotificationOutlined style={iconStyle} />}>
              <Link to="/midwife/reports">Reports</Link>
            </Menu.Item>
            <Menu.Item key="/midwife/messages" icon={<NotificationOutlined style={iconStyle} />}>
              <Link to="/midwife/messages">Messages</Link>
            </Menu.Item>
          </>
        );
        case 'Doctor':
        return (
          <>
            <Menu.Item key="/doctor/dashboard" icon={<AppstoreFilled style={iconStyle} />}>
              <Link to="/doctor/dashboard">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="/doctor/mothers" icon={<UserOutlined style={iconStyle}/>}>
              <Link to="/doctor/mothers">Mothers</Link>
            </Menu.Item>
            <Menu.Item key="/doctor/clinics" icon={<MedicineBoxFilled style={iconStyle} />}>
              <Link to="/doctor/clinis">Clinics</Link>
            </Menu.Item>
            <Menu.Item key="/doctor/babies" icon={<TeamOutlined style={iconStyle} />}>
              <Link to="/doctor/babies">Babies</Link>
            </Menu.Item>
            <Menu.Item key="/doctor/shedules" icon={<NotificationOutlined style={iconStyle} />}>
              <Link to="/doctor/shedules"> Clinic Schedules </Link>
            </Menu.Item>
            <Menu.Item key="/doctor/reports" icon={<NotificationOutlined style={iconStyle} />}>
              <Link to="/doctor/reports">Reports</Link>
            </Menu.Item>
          </>
        );
      // Add cases for other user types as needed
      default:
        return null;
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
        background: '#EEEEEE', // Ensure the background is white
        borderRight: '2px solid #EEEEEE', // Add a border to match the layout
      }}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={['/']}
        style={{
          height: '100%',
          borderRight: 0,
          backgroundColor:'#EEEEEE'
        }}
      >
        {getMenuItems()}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
