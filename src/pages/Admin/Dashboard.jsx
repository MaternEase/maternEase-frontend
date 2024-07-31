import React, { useState } from "react";
import {
  Card,
  Row,
  Col,
  Statistic,
  Table,
  Dropdown,
  Menu,
  Space,
  Button,
  Typography,
  Input,
} from "antd";
import { Face2, Face4 } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ReusableCard from "../../components/Card";
import CustomCalendar from "../../components/Calendar";
import { Line } from "react-chartjs-2";
import "../../styles/Admin/Dashboard.css";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"; //clinics
import EditOutlinedIcon from "@mui/icons-material/EditOutlined"; //edit
import baby from "../../assets/images/baby.png"; //children

import AssignMidwifePopup from "../../components/Admin/AssignMidwifePopup"; // Import the Assign midwife popup

const { Title } = Typography;
const { Search: AntSearch } = Input;

const data = [
  {
    key: "1",
    id: "123M",
    name: "Wasanthi Perera",
    age: 48,
    date: "25 Jun 2024",
    time: "09:30 am",
    status: "Pending",
    assignedClinics: ["Clinic A", "Clinic B"],
    availableClinics: ["Clinic A", "Clinic B", "Clinic C", "Clinic D"],
  },
  {
    key: "2",
    id: "256M",
    name: "Sujatha Dahanayake",
    age: 26,
    date: "01 Jul 2024",
    time: "12:30 pm",
    status: "Pending",
    assignedClinics: ["Clinic D"],
    availableClinics: ["Clinic A", "Clinic B", "Clinic C", "Clinic D"],
  },
  {
    key: "3",
    id: "012M",
    name: "Naduni Bandara",
    age: 32,
    date: "29 Jul 2024",
    time: "12:30 pm",
    status: "Pending",
    assignedClinics: ["Clinic A", "Clinic C"],
    availableClinics: ["Clinic A", "Clinic B", "Clinic C", "Clinic D"],
  },
];

const userEvents = {
  "2024-07-25": [{ id: 1, description: "Event A" }],
  "2024-07-30": [{ id: 2, description: "Event B" }],
};

const Dashboard = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [isEditPopupVisible, setEditPopupVisible] = useState(false);
  const [selectedMidwife, setSelectedMidwife] = useState(null);

  const navigate = useNavigate();

  const handleCardClick = (cardKey) => {
    setSelectedCard(cardKey);
    switch (cardKey) {
      case 1:
      case 2:
      case 3:
        navigate("/admin/clinics");
        break;
      case 4:
        navigate("/admin/midwives");
        break;
      default:
        break;
    }
  };

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const handleEdit = (key) => {
    const midwife = data.find((item) => item.key === key);
    setSelectedMidwife(midwife);
    setEditPopupVisible(true);
  };

  const handleAssign = (midwifeKey, clinics) => {
    // Update the midwife's data with the assigned clinics
    // (You would typically update the state or send this data to the server)
    console.log(`Assigned clinics ${clinics} to midwife with key ${midwifeKey}`);
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">View Details</Menu.Item>
    </Menu>
  );

  const statisticsMenu = (
    <Menu>
      <Menu.Item key="1" onClick={() => navigate("/admin/dashboard")}>
        Last Week
      </Menu.Item>
      <Menu.Item key="2" onClick={() => navigate("/admin/dashboard")}>
        This Week
      </Menu.Item>
    </Menu>
  );

  const cardData = [
    {
      key: 1,
      title: "Children",
      value: 1052,
      icon: (
        <img
          src={baby}
          alt="Children"
          style={{ width: "25px", height: "25px" }}
        />
      ),
      color: "#192A51",
      paragraph:
        "Newborns this week have reached a significant number. Keep track of their progress and ensure proper care is provided.",
    },
    {
      key: 2,
      title: "Mothers",
      value: 475,
      icon: <Face4 />,
      color: "#192A51",
      paragraph:
        "The system tracks expectant and delivered mothers, enabling effective planning and resource allocation for comprehensive care.",
    },
    {
      key: 4,
      title: "Midwives",
      value: 29,
      icon: <Face2 />,
      color: "#192A51",
      paragraph:
        "With 29 midwives on duty, we are well-prepared to assist in childbirth and provide essential support to new mothers.",
    },
    {
      key: 3,
      title: "Clinics",
      value: 36,
      icon: <HomeOutlinedIcon />,
      color: "#192A51",
      paragraph:
        "Our clinics are fully equipped to handle patient needs, with detailed data aiding in continuous service improvement.",
    },
  ];

  const userFullCalendarPath = "/admin/full-calendar";

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.id.toLowerCase().includes(searchText.toLowerCase())
  );

  const columns = [
    {
      title: <span>Registration ID</span>,
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id.localeCompare(b.id),
      render: (text) => <span>{text}</span>,
    },
    {
      title: <span>Name</span>,
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (text) => <span>{text}</span>,
    },
    {
      title: <span>Registered Date</span>,
      dataIndex: "date",
      key: "date",
      sorter: (a, b) => new Date(a.date) - new Date(b.date),
      render: (text) => <span>{text}</span>,
    },
    {
      title: <span> </span>,
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <Button
          icon={<EditOutlinedIcon fontSize="small" />}
          onClick={() => handleEdit(record.key)}
          size="small"
          style={{ border: "none" }}
        />
      ),
    },
  ];

  const components = {
    header: {
      cell: (props) => (
        <th
          {...props}
          style={{
            // backgroundColor: '#f0f0f0',
            color: "#192A51",
            padding: "8px",
          }}
        />
      ),
    },
  };

  const clinicsData = [
    {
      clinic: "Clinic A",
      expectantMothers: 30,
      deliveredMothers: 11,
      children: 45,
      deadBirths: 2,
      maternalDeaths: 1,
    },
    {
      clinic: "Clinic B",
      expectantMothers: 20,
      deliveredMothers: 5,
      children: 30,
      deadBirths: 1,
      maternalDeaths: 0,
    },
    {
      clinic: "Clinic C",
      expectantMothers: 50,
      deliveredMothers: 19,
      children: 60,
      deadBirths: 3,
      maternalDeaths: 2,
    },
    {
      clinic: "Clinic D",
      expectantMothers: 40,
      deliveredMothers: 3,
      children: 55,
      deadBirths: 2,
      maternalDeaths: 1,
    },
    {
      clinic: "Clinic E",
      expectantMothers: 35,
      deliveredMothers: 1,
      children: 50,
      deadBirths: 1,
      maternalDeaths: 0,
    },
    {
      clinic: "Clinic F",
      expectantMothers: 25,
      deliveredMothers: 4,
      children: 35,
      deadBirths: 2,
      maternalDeaths: 1,
    },
    {
      clinic: "Clinic G",
      expectantMothers: 45,
      deliveredMothers: 13,
      children: 60,
      deadBirths: 4,
      maternalDeaths: 2,
    },
    {
      clinic: "Clinic H",
      expectantMothers: 55,
      deliveredMothers: 11,
      children: 70,
      deadBirths: 3,
      maternalDeaths: 1,
    },
    {
      clinic: "Clinic I",
      expectantMothers: 65,
      deliveredMothers: 10,
      children: 80,
      deadBirths: 0,
      maternalDeaths: 0,
    },
    {
      clinic: "Clinic J",
      expectantMothers: 60,
      deliveredMothers: 17,
      children: 75,
      deadBirths: 0,
      maternalDeaths: 1,
    },
  ];

  const chartData = {
    labels: clinicsData.map((clinic) => clinic.clinic),
    datasets: [
      {
        label: "Expectant Mothers",
        data: clinicsData.map((clinic) => clinic.expectantMothers),
        borderColor: "#9C27B0",
        backgroundColor: "#9C27B0",
        fill: false,
        pointStyle: "circle",
      },
      {
        label: "Delivered Mothers",
        data: clinicsData.map((clinic) => clinic.deliveredMothers || 0), // Adding a default value if not present
        borderColor: "#FFA500",
        backgroundColor: "#FFA500",
        fill: false,
        pointStyle: "circle",
      },
      {
        label: "Children Count",
        data: clinicsData.map((clinic) => clinic.children || 0),
        borderColor: "#4CAF50",
        backgroundColor: "#4CAF50",
        fill: false,
        pointStyle: "circle",
      },
      {
        label: "Dead Births",
        data: clinicsData.map((clinic) => clinic.deadBirths || 0),
        borderColor: "#ff4d4f",
        backgroundColor: "#ff4d4f",
        fill: false,
        pointStyle: "circle",
      },
      {
        label: "Maternal Deaths",
        data: clinicsData.map((clinic) => clinic.maternalDeaths || 0),
        borderColor: "#000",
        backgroundColor: "#000",
        fill: false,
        pointStyle: "circle",
      },
    ],
  };
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
  };

  return (
    <div style={{ padding: "24px", minHeight: "100vh" }}>
      <Title level={3}>Hi, Nimal 👋</Title>
      <Row gutter={16} style={{ marginTop: 24 }}>
        {cardData.map((card) => (
          <Col span={6} key={card.key}>
            <ReusableCard
              card={card}
              selectedCard={selectedCard}
              handleCardClick={handleCardClick}
              menu={menu}
            />
          </Col>
        ))}
      </Row>
      <Row gutter={16} style={{ marginTop: 24 }}>
        <Col span={16}>
          <Card
            title="Overall Statistics"
            // extra={
            //   <Dropdown overlay={statisticsMenu}>
            //     <Button>
            //       Last Week <KeyboardArrowDown />
            //     </Button>
            //   </Dropdown>
            // }
          >
            <Row style={{ marginBottom: "15px" }}>
              <Col span={12}>
                <Statistic
                  title="Total Children"
                  value={1052}
                  valueStyle={{ color: "#967aa1", fontSize: "15px" }}
                />
              </Col>
              <Col span={12}>
                <Statistic
                  title="Total Expectant Mothers"
                  value={475}
                  valueStyle={{ color: "#967aa1", fontSize: "15px" }}
                />
              </Col>
              {/* <Col span={6}>
                <Statistic title="Total Doctors" value={18} valueStyle={{ color: '#967aa1' }} />
              </Col>
              <Col span={6}>
                <Statistic title="Total Midwives" value={32} valueStyle={{ color: '#967aa1' }} />
              </Col> */}
            </Row>
            <Row gutter={16} style={{ marginTop: 16 }}>
              <Col span={24}>
                <div style={{ height: "325px", padding: "20px" }}>
                  <Line data={chartData} options={chartOptions} />
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={8}>
          {/* <Card title="Calendar" style={{ borderWidth: "2px", borderColor: "#D5C6E0", borderRadius: "10px" }}> */}
          <Card title="Calendar">
            <CustomCalendar
              events={userEvents}
              fullCalendarPath={userFullCalendarPath}
            />
          </Card>
        </Col>
      </Row>
      <Row gutter={24} style={{ marginTop: 24 }}>
        <Col span={24}>
          <Card
            title="Un-Assigned Midwives"
            extra={
              <Space>
                <AntSearch
                  placeholder="Search..."
                  onSearch={handleSearch}
                  style={{ width: 200 }}
                />
              </Space>
            }
          >
            <Table
              columns={columns}
              dataSource={filteredData}
              pagination={false}
              components={components}
            />
          </Card>
        </Col>
      </Row>

      <AssignMidwifePopup
        visible={isEditPopupVisible}
        onClose={() => setEditPopupVisible(false)}
        midwifeDetails={selectedMidwife}
        onAssign={handleAssign}
      />

    </div>
  );
};

export default Dashboard;
