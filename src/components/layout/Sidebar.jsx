import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { AppstoreFilled, MedicineBoxFilled, UserOutlined, TeamOutlined, NotificationOutlined, FieldTimeOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import ReportIcon from '@mui/icons-material/Description';
import baby from '../../assets/images/child.png';
import graph from '../../assets/images/graph.png';
import vac from '../../assets/images/vac.png';

const { Sider } = Layout;
const { SubMenu } = Menu;
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
          { key: '/admin/midwives', icon: <MedicineBoxFilled style={iconStyle} />, label: <Link to="/admin/midwives">Midwives</Link> },
          { key: '/admin/doctors', icon: <MedicineBoxFilled style={iconStyle} />, label: <Link to="/admin/doctors">Doctors</Link> },
          { key: '/admin/reports', icon: <NotificationOutlined style={iconStyle} />, label: <Link to="/admin/reports">Reports</Link> },
        ];

        case 'MOTHER':
            return [
                { key: '/mother/dashboard', icon: <AppstoreFilled style={iconStyle} />, label: <Link to="/mother/dashboard">Dashboard</Link> },
                { key: '/mother/reports', icon: <ReportIcon style={iconStyle} />, label: <Link to="/mother/reportone">Report</Link> },
                { key: '/mother/timeslots', icon: <FieldTimeOutlined style={iconStyle} />, label: <Link to="/mother/timeslots">Timeslots</Link> },
                { key: '/mother/children', icon: <img src={baby} alt="Children" style={{ width: '25px', height: '25px' }} />, label: 'Children', children: [
                        { key: '/mother/children/child1', label: <Link to="/mother/children/child1">Child 1</Link> },
                        { key: '/mother/children/child2', label: <Link to="/mother/children/child2">Child 2</Link> },
                    ]},
                { key: '/mother/vaccines', icon: <VaccinesIcon style={iconStyle} />, label: <Link to="/mother/vaccines">Vaccines</Link> },
                { key: '/mother/awareness', icon: <CoPresentIcon style={iconStyle} />, label: <Link to="/mother/awareness">Awareness</Link> },
            ];
        case 'CHILD':
            return [
                { key: '/child/dashboard', icon: <AppstoreFilled style={iconStyle} />, label: <Link to="/child/dashboard">Dashboard</Link> },
                { key: '/child/profile1', icon: <AppstoreFilled style={iconStyle} />, label: <Link to="/child/profile1">Profile1</Link> },
                { key: '/child/immunization', icon: <img src={vac} alt="Vaccine" style={{ width: '25px', height: '25px' }} />, label: <Link to="/child/immunization">Immunization</Link> },
                { key: '/child/health_charts', icon: <AppstoreFilled style={iconStyle} />, label: <Link to="/child/health_charts">Health Charts</Link> },
                
                { key: '/child/progress_charts', icon: <img src={graph} alt="Children" style={{ width: '25px', height: '25px' }} />, label: 'Progress Charts', children: [
                  { key: '/child/progress_charts/', label: <Link to="/child/progress_charts/">Weight</Link> },
                  { key: '/child/progress_charts/', label: <Link to="/child/progress_charts/">Height 2</Link> },
              ]},
                { key: '/child/growth', icon: <AppstoreFilled style={iconStyle} />, label: <Link to="/child/growth">Growth</Link> },
                // Additional items for CHILD user type can be added here
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
