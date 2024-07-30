import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Button } from "antd";
import { TeamOutlined, LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

// MUI Icons
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined"; //dashboard
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"; //clinics
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined"; // clinical staff
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined"; //reports
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined"; //mothers
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined"; //messages
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined"; //clinic shedules
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined"; //time slots
import VaccinesOutlinedIcon from "@mui/icons-material/VaccinesOutlined"; //vaccines 
// import CoPresentOutlinedIcon from "@mui/icons-material/CoPresentOutlined"; //awareness
import MovingOutlinedIcon from '@mui/icons-material/MovingOutlined'; //progress charts
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'; //profile
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined'; //charts
import StairsOutlinedIcon from '@mui/icons-material/StairsOutlined'; //growth

import baby from "../../assets/images/child.png";
// import graph from "../../assets/images/graph.png";
// import vac from "../../assets/images/vac.png";

const { Sider } = Layout;
const iconStyle = { fontSize: "24px", color: "#4e5052" };

const Sidebar = ({ collapsed, userType }) => {
  const navigate = useNavigate();


  // Handle logout functionality
  const handleLogout = async () => {
    console.log('logout');
    try {
      await signOut(); // Removed email, password as they are not defined
      navigate('/signin'); // Redirect to login page or any other desired page after logout
    } catch (error) {
      console.log('error', error);
      // setError('Logout failed.');
    }
  };

  // Define menu items based on userType
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
          { key: "/midwife/babies", icon: <TeamOutlined style={iconStyle} />, label: <Link to="/midwife/babies">Babies</Link> },
          { key: "/midwife/reports", icon: <DescriptionOutlinedIcon style={iconStyle} />, label: <Link to="/midwife/reports">Reports</Link> },
          { key: "/midwife/messages", icon: <MessageOutlinedIcon style={iconStyle} />, label: <Link to="/midwife/messages">Messages</Link> },
        ];
      case "DOCTOR":
        return [
          { key: "/doctor/dashboard", icon: <DashboardOutlinedIcon style={iconStyle} />, label: <Link to="/doctor/dashboard">Dashboard</Link> },
          { key: "mothers", icon: <Person3OutlinedIcon style={iconStyle} />, label: "Mothers", children: [
              { key: "/doctor/mothers/expected", label: <Link to="/doctor/mothers/expected">Expected Mothers</Link> },
              { key: "/doctor/mothers/delivered", label: <Link to="/doctor/mothers/delivered">Delivered Mothers</Link> },
            ]
          },
          { key: "/doctor/clinics", icon: <HomeOutlinedIcon style={iconStyle} />, label: <Link to="/doctor/clinics">Clinics</Link> },
          { key: "/doctor/babies", icon: <TeamOutlined style={iconStyle} />, label: <Link to="/doctor/babies">Babies</Link> },
          { key: "/doctor/schedules", icon: <EventNoteOutlinedIcon style={iconStyle} />, label: <Link to="/doctor/schedules">Clinic Schedules</Link> },
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
        ];
      case "MOTHER":
        return [
          { key: "/mother/dashboard", icon: <DashboardOutlinedIcon style={iconStyle} />, label: <Link to="/mother/dashboard">Dashboard</Link> },
          { key: "/mother/reports", icon: <DescriptionOutlinedIcon style={iconStyle} />, label: <Link to="/mother/reportone">Report</Link> },
          { key: "/mother/timeslots", icon: <PendingActionsOutlinedIcon style={iconStyle} />, label: <Link to="/mother/timeslots">Timeslots</Link> },
          { key: "children", icon: <img src={baby} alt="Children" style={{ width: "25px", height: "25px" }} />, label: "Children", children: [
              { key: "/mother/children/child1", label: <Link to="/mother/children/child1">Child 1</Link> },
              { key: "/mother/children/child2", label: <Link to="/mother/children/child2">Child 2</Link> },
            ]
          },
          // { key: "/mother/vaccines", icon: <VaccinesOutlinedIcon style={iconStyle} />, label: <Link to="/mother/vaccines">Vaccines</Link> },
          // { key: "/mother/awareness", icon: <CoPresentOutlinedIcon style={iconStyle} />, label: <Link to="/mother/awareness">Awareness</Link> },
        ];
      case "CHILD":
        return [
          { key: "/child/dashboard", icon: <DashboardOutlinedIcon style={iconStyle} />, label: <Link to="/child/dashboard">Dashboard</Link> },
          { key: "/child/profile1", icon: <PersonOutlineOutlinedIcon style={iconStyle} />, label: <Link to="/child/profile1">Profile1</Link> },
          { key: "/child/immunization", icon: <VaccinesOutlinedIcon style={iconStyle} />, label: <Link to="/child/immunization">Immunization</Link> },
          { key: "/child/health_charts", icon: <InsertChartOutlinedOutlinedIcon style={iconStyle} />, label: <Link to="/child/health_charts">Health Charts</Link> },
          { key: "/child/progress_charts", icon: <MovingOutlinedIcon style={iconStyle} />, label: "Progress Charts", children: [
              { key: "/child/progress_charts/weight", label: <Link to="/child/progress_charts/weight">Weight</Link> },
              { key: "/child/progress_charts/height", label: <Link to="/child/progress_charts/height">Height</Link> },
            ]
          },
          { key: "/child/growth", icon: <StairsOutlinedIcon style={iconStyle} />, label: <Link to="/child/growth">Growth</Link> },
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
      overflow: "auto",
      height: "100vh",
      position: "fixed",
      left: 0,
      top: 64,
      bottom: 0,
      background: "#f7f7f7", // Light background color
    }}
    trigger={null}
  >
    {/* Render the menu items */}
    <Menu
      mode="inline"
      defaultSelectedKeys={["/"]}
      items={getMenuItems()}
      style={{
        height: "100%", // Full height to accommodate all items
        borderRight: 0,
        backgroundColor: "inherit", // Inherit sidebar color
      }}
    />
  </Sider>
  );
};

export default Sidebar;
