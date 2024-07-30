import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Button } from "antd";
import { TeamOutlined } from "@ant-design/icons";
import { LogoutOutlined } from "@ant-design/icons"; // Import the logout icon

// Icons
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import VaccinesOutlinedIcon from "@mui/icons-material/VaccinesOutlined";
import CoPresentOutlinedIcon from "@mui/icons-material/CoPresentOutlined";
import baby from "../../assets/images/child.png";
import graph from "../../assets/images/graph.png";
import vac from "../../assets/images/vac.png";

const { Sider } = Layout;
const iconStyle = { fontSize: "24px", color: "#4e5052" };

const Sidebar = ({ collapsed, userType }) => {
  console.log("Sidebar userType:", userType);

  const getMenuItems = () => {
    switch (userType) {
      case "MIDWIFE":
        return [
          {
            key: "/midwife/dashboard",
            icon: <DashboardOutlinedIcon style={iconStyle} />,
            label: <Link to="/midwife/dashboard">Dashboard</Link>,
          },
          {
            key: "/midwife/clinics",
            icon: <HomeOutlinedIcon style={iconStyle} />,
            label: <Link to="/midwife/clinics">Clinics</Link>,
          },
          {
            key: "mothers",
            icon: <Person3OutlinedIcon style={iconStyle} />,
            label: "Mothers",
            children: [
              {
                key: "/midwife/mothers/expected",
                label: (
                  <Link to="/midwife/mothers/expected">Expected Mothers</Link>
                ),
              },
              {
                key: "/midwife/mothers/delivered",
                label: (
                  <Link to="/midwife/mothers/delivered">Delivered Mothers</Link>
                ),
              },
            ],
          },
          {
            key: "/midwife/babies",
            icon: <TeamOutlined style={iconStyle} />,
            label: <Link to="/midwife/babies">Babies</Link>,
          },
          {
            key: "/midwife/reports",
            icon: <DescriptionOutlinedIcon style={iconStyle} />,
            label: <Link to="/midwife/reports">Reports</Link>,
          },
          {
            key: "/midwife/messages",
            icon: <MessageOutlinedIcon style={iconStyle} />,
            label: <Link to="/midwife/messages">Messages</Link>,
          },
        ];
      case "DOCTOR":
        return [
          {
            key: "/doctor/dashboard",
            icon: <DashboardOutlinedIcon style={iconStyle} />,
            label: <Link to="/doctor/dashboard">Dashboard</Link>,
          },
          {
            key: "mothers",
            icon: <Person3OutlinedIcon style={iconStyle} />,
            label: "Mothers",
            children: [
              {
                key: "/doctor/mothers/expected",
                label: (
                  <Link to="/doctor/mothers/expected">Expected Mothers</Link>
                ),
              },
              {
                key: "/doctor/mothers/delivered",
                label: (
                  <Link to="/doctor/mothers/delivered">Delivered Mothers</Link>
                ),
              },
            ],
          },
          {
            key: "/doctor/clinics",
            icon: <HomeOutlinedIcon style={iconStyle} />,
            label: <Link to="/doctor/clinics">Clinics</Link>,
          },
          {
            key: "/doctor/babies",
            icon: <TeamOutlined style={iconStyle} />,
            label: <Link to="/doctor/babies">Babies</Link>,
          },
          {
            key: "/doctor/schedules",
            icon: <EventNoteOutlinedIcon style={iconStyle} />,
            label: <Link to="/doctor/schedules">Clinic Schedules</Link>,
          },
          {
            key: "/doctor/reports",
            icon: <DescriptionOutlinedIcon style={iconStyle} />,
            label: <Link to="/doctor/reports">Reports</Link>,
          },
        ];
      case "ADMIN":
        return [
          {
            key: "/admin/dashboard",
            icon: <DashboardOutlinedIcon style={iconStyle} />,
            label: <Link to="/admin/dashboard">Dashboard</Link>,
          },
          {
            key: "/admin/clinics",
            icon: <HomeOutlinedIcon style={iconStyle} />,
            label: <Link to="/admin/clinics">Clinics</Link>,
          },
          {
            key: "Clinical Staff",
            icon: <PeopleAltOutlinedIcon style={iconStyle} />,
            label: "Clinical Staff",
            children: [
              {
                key: "/admin/midwives",
                label: <Link to="/admin/midwives">Midwives</Link>,
              },
              {
                key: "/admin/doctors",
                label: <Link to="/admin/doctors">Doctors</Link>,
              },
            ],
          },
          {
            key: "/admin/reports",
            icon: <DescriptionOutlinedIcon style={iconStyle} />,
            label: <Link to="/admin/reports">Reports</Link>,
          },
        ];
      case "MOTHER":
        return [
          {
            key: "/mother/dashboard",
            icon: <DashboardOutlinedIcon style={iconStyle} />,
            label: <Link to="/mother/dashboard">Dashboard</Link>,
          },
          {
            key: "/mother/reports",
            icon: <DescriptionOutlinedIcon style={iconStyle} />,
            label: <Link to="/mother/reportone">Report</Link>,
          },
          {
            key: "/mother/timeslots",
            icon: <PendingActionsOutlinedIcon style={iconStyle} />,
            label: <Link to="/mother/timeslots">Timeslots</Link>,
          },
          {
            key: "children",
            icon: (
              <img
                src={baby}
                alt="Children"
                style={{ width: "25px", height: "25px" }}
              />
            ),
            label: "Children",
            children: [
              {
                key: "/mother/children/child1",
                label: <Link to="/mother/children/child1">Child 1</Link>,
              },
              {
                key: "/mother/children/child2",
                label: <Link to="/mother/children/child2">Child 2</Link>,
              },
            ],
          },
          {
            key: "/mother/vaccines",
            icon: <VaccinesOutlinedIcon style={iconStyle} />,
            label: <Link to="/mother/vaccines">Vaccines</Link>,
          },
          {
            key: "/mother/awareness",
            icon: <CoPresentOutlinedIcon style={iconStyle} />,
            label: <Link to="/mother/awareness">Awareness</Link>,
          },
        ];
      case "CHILD":
        return [
          {
            key: "/child/dashboard",
            icon: <AppstoreFilled style={iconStyle} />,
            label: <Link to="/child/dashboard">Dashboard</Link>,
          },
          {
            key: "/child/profile1",
            icon: <AppstoreFilled style={iconStyle} />,
            label: <Link to="/child/profile1">Profile1</Link>,
          },
          {
            key: "/child/immunization",
            icon: (
              <img
                src={vac}
                alt="Vaccine"
                style={{ width: "25px", height: "25px" }}
              />
            ),
            label: <Link to="/child/immunization">Immunization</Link>,
          },
          {
            key: "/child/health_charts",
            icon: <AppstoreFilled style={iconStyle} />,
            label: <Link to="/child/health_charts">Health Charts</Link>,
          },

          {
            key: "/child/progress_charts",
            icon: (
              <img
                src={graph}
                alt="Children"
                style={{ width: "25px", height: "25px" }}
              />
            ),
            label: "Progress Charts",
            children: [
              {
                key: "/child/progress_charts/",
                label: <Link to="/child/progress_charts/">Weight</Link>,
              },
              {
                key: "/child/progress_charts/",
                label: <Link to="/child/progress_charts/">Height 2</Link>,
              },
            ],
          },
          {
            key: "/child/growth",
            icon: <AppstoreFilled style={iconStyle} />,
            label: <Link to="/child/growth">Growth</Link>,
          },
          // Additional items for CHILD user type can be added here
        ];
      default:
        return [];
    }
  };

  const handleLogout = () => {
    // Handle logout logic, such as clearing user data and redirecting to login page
    console.log("Logging out...");
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
        background: "#333333", // Custom background color
        color: "#ffffff", // Text color to match the dark background
      }}
      trigger={null} // This will remove the trigger element
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={["/"]}
        items={getMenuItems()}
        style={{
          height: "calc(100% - 50px)", // Leave space for the logout button
          borderRight: 0,
          backgroundColor: "inherit", // Inherit the background color
          color: "inherit", // Inherit text color
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          padding: "10px",
          backgroundColor: "#333333", // Ensure the logout area matches the sidebar
          textAlign: "center",
        }}
      >
        <Button
          type="primary"
          icon={<LogoutOutlined />}
          onClick={handleLogout}
          style={{
            width: "80%",
            color: "#ffffff",
            backgroundColor: "#444444", // Slightly different shade for the button
          }}
        >
          Logout
        </Button>
      </div>
    </Sider>
  );
};

export default Sidebar;
