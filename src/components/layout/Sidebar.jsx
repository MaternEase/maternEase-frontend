import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import baby from '../../assets/images/child.png';
import { AppstoreFilled, MedicineBoxFilled, UserOutlined, TeamOutlined, NotificationOutlined , FieldTimeOutlined} from '@ant-design/icons';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import ReportIcon from '@mui/icons-material/Description';

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
          { key: '/midwife/mothers', icon: <UserOutlined style={iconStyle} />, label: <Link to="/midwife/mothers">Mothers</Link> },
          { key: '/midwife/babies', icon: <TeamOutlined style={iconStyle} />, label: <Link to="/midwife/babies">Babies</Link> },
          { key: '/midwife/reports', icon: <NotificationOutlined style={iconStyle} />, label: <Link to="/midwife/reports">Reports</Link> },
          { key: '/midwife/messages', icon: <NotificationOutlined style={iconStyle} />, label: <Link to="/midwife/messages">Messages</Link> },
        ];
      case 'DOCTOR':
        return [
          { key: '/doctor/dashboard', icon: <AppstoreFilled style={iconStyle} />, label: <Link to="/doctor/dashboard">Dashboard</Link> },
          { key: '/doctor/mothers', icon: <UserOutlined style={iconStyle} />, label: <Link to="/doctor/mothers">Mothers</Link> },
          { key: '/doctor/clinics', icon: <MedicineBoxFilled style={iconStyle} />, label: <Link to="/doctor/clinics">Clinics</Link> },
          { key: '/doctor/babies', icon: <TeamOutlined style={iconStyle} />, label: <Link to="/doctor/babies">Babies</Link> },
          { key: '/doctor/schedules', icon: <NotificationOutlined style={iconStyle} />, label: <Link to="/doctor/schedules">Clinic Schedules</Link> },
          { key: '/doctor/reports', icon: <NotificationOutlined style={iconStyle} />, label: <Link to="/doctor/reports">Reports</Link> },
        ];
      case 'ADMIN':
        return [
          { key: '/admin/dashboard', icon: <AppstoreFilled style={iconStyle} />, label: <Link to="/admin/dashboard">Dashboard</Link> },
          { key: '/admin/clinics', icon: <MedicineBoxFilled style={iconStyle} />, label: <Link to="/admin/clinics">Clinics</Link> },
          { key: '/admin/reports', icon: <MedicineBoxFilled style={iconStyle} />, label: <Link to="/admin/reports">Reports</Link> },
        ];

        case 'MOTHER':
            return [
                { key: '/mother/dashboard', icon: <AppstoreFilled style={iconStyle} />, label: <Link to="/mother/dashboard">Dashboard</Link> },
                { key: '/mother/reports', icon: <ReportIcon style={iconStyle} />, label: <Link to="/mother/pregnancy-history">Report</Link> },
                { key: '/mother/timeslots', icon: <FieldTimeOutlined style={iconStyle} />, label: <Link to="/mother/timeslots">Timeslots</Link> },
                { key: '/mother/children', icon: <img src={baby} alt="Children" style={{ width: '25px', height: '25px' }} />, label: <Link to="/mother/children">Children</Link> },                // { key: '/mother/reports', icon: <MedicineBoxFilled style={iconStyle} />, label: <Link to="/admin/reports">Reports</Link> },
                { key: '/mother/vaccines', icon: <VaccinesIcon style={iconStyle} />, label: <Link to="/mother/vaccines">Vaccines</Link> },
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
