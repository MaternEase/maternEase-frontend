import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";

// Icons
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'; //dashboard
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'; //clinics
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'; //clinical staff
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'; //reports
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined'; //mothers
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined'; //messages
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined'; //schedules
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined'; //time-slots
import VaccinesOutlinedIcon from '@mui/icons-material/VaccinesOutlined'; //vaccines
import MovingOutlinedIcon from "@mui/icons-material/MovingOutlined"; //progress charts
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"; //profile
import InsertChartOutlinedOutlinedIcon from "@mui/icons-material/InsertChartOutlinedOutlined"; //health charts
import StairsOutlinedIcon from "@mui/icons-material/StairsOutlined"; //growth
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'; //logout
import AssignmentLateOutlinedIcon from '@mui/icons-material/AssignmentLateOutlined';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import baby from "../../assets/images/baby.png"; //children

const { Sider } = Layout;
const { SubMenu } = Menu;
const iconStyle = { fontSize: "24px", color: "#4e5052" };
const selectedStyle = {
  backgroundColor: "#D5C6E0",
  color: "#967aa1",
};
const selectedFontColor = { color: "#967aa1" };

const Sidebar = ({ collapsed, userType }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const signOut = async () => {
    localStorage.removeItem('userToken');
    console.log('User signed out');
  };

  const handleLogout = async () => {
    try {
      await signOut();
      navigate('/signin');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const getMenuItems = () => {
    switch (userType) {
      case "MIDWIFE":
        return [
          { key: "/midwife/dashboard", icon: <DashboardOutlinedIcon style={iconStyle} />, label: <Link to="/midwife/dashboard">Dashboard</Link> },
          { key: "/midwife/clinics", icon: <HomeOutlinedIcon style={iconStyle} />, label: <Link to="/midwife/clinics">Clinics</Link> },
          { key: "mothers", icon: <Person3OutlinedIcon style={iconStyle} />, label: "Mothers", children: [
              { key: "/midwife/mothers/expected", label: <Link to="/midwife/mothers/expected">Expected Mothers</Link> },
              { key: "/midwife/mothers/delivered", label: <Link to="/midwife/mothers/delivered">Delivered Mothers</Link> },
            ]
          },
          { key: "/midwife/babies", icon: <img src={baby} alt="Children" style={{ width: "25px", height: "25px", objectFit: "contain", fontSize: "24px", color: "#4e5052" }} />, label: <Link to="/midwife/babies">Babies</Link> },
          { key: "/midwife/blog", icon: <DescriptionOutlinedIcon style={iconStyle} />, label: <Link to="/midwife/blog">Blog</Link> },
          { key: "/midwife/location", icon: <LocationOnOutlinedIcon style={iconStyle} />, label: <Link to="/midwife/location">Locations</Link> },
          { key: "/midwife/messages", icon: <MessageOutlinedIcon style={iconStyle} />, label: <Link to="/midwife/messages">Messages</Link> },
        ];
      case "DOCTOR":
        return [
          { key: "/doctor/dashboard", icon: <DashboardOutlinedIcon style={iconStyle} />, label: <Link to="/doctor/dashboard">Dashboard</Link> },
          { key: "/doctor/mothers", icon: <Person3OutlinedIcon style={iconStyle} />, label: <Link to="/doctor/mothers">Mothers</Link> },
          // { key: "mothers", icon: <Person3OutlinedIcon style={iconStyle} />, label: "Mothers", children: [
          //     { key: "/doctor/mothers/expected", label: <Link to="/doctor/mothers/expected">Expected Mothers</Link> },
          //     { key: "/doctor/mothers/delivered", label: <Link to="/doctor/mothers/delivered">Delivered Mothers</Link> },
          //   ]
          // },
          // { key: "/doctor/crud1", icon: <AssignmentLateOutlinedIcon style={iconStyle} />, label: <Link to="/doctor/crud1">Risky List</Link> },
          { key: "/doctor/babies", icon: <img src={baby} alt="Children" style={{ width: "25px", height: "25px", objectFit: "contain", fontSize: "24px", color: "#4e5052" }} />, label: <Link to="/doctor/babiesall">Babies</Link> },
          // { key: "/doctor/schedules", icon: <EventNoteOutlinedIcon style={iconStyle} />, label: <Link to="/doctor/schedules">Clinic Schedules</Link> },
          { key: "/doctor/reports", icon: <DescriptionOutlinedIcon style={iconStyle} />, label: <Link to="/doctor/reports">Reports</Link> },
        ];
      case "ADMIN":
        return [
          { key: "/admin/dashboard", icon: <DashboardOutlinedIcon style={iconStyle} />, label: <Link to="/admin/dashboard">Dashboard</Link> },
          { key: "/admin/clinics", icon: <HomeOutlinedIcon style={iconStyle} />, label: <Link to="/admin/clinics">Clinics</Link> },
          { key: "Clinical Staff", icon: <PeopleAltOutlinedIcon style={iconStyle} />, label: "Clinical Staff", children: [
              { key: "/admin/midwives", label: <Link to="/admin/midwives">Midwives</Link> },
              { key: "/admin/doctors", label: <Link to="/admin/doctors">Doctors</Link> },
            ]
          },
          { key: "/admin/reports", icon: <DescriptionOutlinedIcon style={iconStyle} />, label: <Link to="/admin/reports">Reports</Link> },
          { key: "/admin/moh", icon: <OtherHousesOutlinedIcon style={iconStyle} />, label: <Link to="/admin/moh">MOH</Link> },
        ];
      case "MOTHER":
        return [
          { key: "/mother/dashboard", icon: <DashboardOutlinedIcon style={iconStyle} />, label: <Link to="/mother/dashboard">Dashboard</Link> },
          // { key: "/mother/reports", icon: <DescriptionOutlinedIcon style={iconStyle} />, label: <Link to="/mother/reportone">Report</Link> },
          { key: "/mother/clinicrecord", icon: <DescriptionOutlinedIcon style={iconStyle} />, label: <Link to="/mother/pregnancyrecord">Clinic Record</Link> },
          { key: "/mother/allevents", icon: <PendingActionsOutlinedIcon style={iconStyle} />, label: <Link to="/mother/allevents">Events</Link> },
          { key: "children", icon: <img src={baby} alt="Children" style={{ width: "25px", height: "25px", objectFit: "contain", fontSize: "24px", color: "#4e5052" }} />, label:<Link to="/mother/childrendetails">Children</Link>
            //     "Children", children: [
            //   { key: "/mother/children/childrendetails", label: <Link to="/mother/children/childrendetails">Child 1</Link> },
            //   { key: "/mother/children/child2", label: <Link to="/mother/children/child2">Child 2</Link> },
            // ]
          },
        ];
      case "CHILD":
        return [
          { key: "/child/dashboard", icon: <DashboardOutlinedIcon style={iconStyle} />, label: <Link to="/child/dashboard">Dashboard</Link> },
          { key: "/child/profile1", icon: <PersonOutlineOutlinedIcon style={iconStyle} />, label: <Link to="/child/profile1">Profile1</Link> },
          { key: "/child/immunization", icon: <VaccinesOutlinedIcon style={iconStyle} />, label: <Link to="/child/immunization">Immunization</Link> },
          { key: "/child/health_charts", icon: <InsertChartOutlinedOutlinedIcon style={iconStyle} />, label: <Link to="/child/health_charts">Health Charts</Link> },
          { key: "/child", icon: <MovingOutlinedIcon style={iconStyle} />, label: "Progress Charts", children: [
              { key: "/child/weight", label: <Link to="/child/weight">Weight</Link> },
              { key: "/child/height", label: <Link to="/child/height">Height</Link> },
            ]
          },
          { key: "/child/growth", icon: <StairsOutlinedIcon style={iconStyle} />, label: <Link to="/child/growth">Growth</Link> },
        ];
      default:
        return [];
    }
  };

  const renderMenuItems = (items) => {
    return items.map(item => {
      if (item.children) {
        return (
            <SubMenu
                key={item.key}
                icon={item.icon}
                title={item.label}
            >
              {renderMenuItems(item.children)}
            </SubMenu>
        );
      }
      return (
          <Menu.Item
              key={item.key}
              icon={item.icon}
              style={location.pathname === item.key ? { ...selectedStyle, ...selectedFontColor } : null}
          >
            {item.label}
          </Menu.Item>
      );
    });
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
            backgroundColor: "#f7f7f7", // Ensure consistent background color
          }}
          trigger={null}
      >
        <Menu
            theme="light" // Set theme to light for default styling
            mode="inline"
            defaultSelectedKeys={['1']}
            selectedKeys={[location.pathname]}
            style={{ borderRight: 0, backgroundColor: "inherit" }}
        >
          {renderMenuItems(getMenuItems())}
          <Menu.Item
              key="logout"
              icon={<LogoutOutlinedIcon style={iconStyle} />}
              onClick={handleLogout}
          >
            Logout
          </Menu.Item>
        </Menu>
      </Sider>
  );
};

export default Sidebar;