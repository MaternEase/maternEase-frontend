import React, { useState } from 'react';
import { Card, Row, Col, Statistic, Table, Typography, Input, Button } from 'antd';
import { Face, Face2, Face4, ChildCare, Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import ReusableCard from '../../components/Card';
import CustomCalendar from '../../components/Calendar';
import { Line } from 'react-chartjs-2';
import '../../styles/Admin/Dashboard.css';
import { AddExpectantMotherPopup } from '../../components/Shared/Popup/AddExpectantMotherPopup';

const { Title } = Typography;
const { Search: AntSearch } = Input;

const data = [
  {
    key: '1',
    id: 'D63ob',
    name: 'Wasantha Perera',
    age: 48,
    date: '25 Jun 2024',
    time: '09:30 am',
    type: 'Expected Mother',
    status: 'Pending',
  },
  {
    key: '2',
    id: 'M15623j',
    name: 'Sujatha Dahanayake',
    age: 26,
    date: '01 Jul 2024',
    time: '12:30 pm',
    type: 'Expected Mother',
    status: 'Pending',
  },
  {
    key: '3',
    id: 'M9586k',
    name: 'Naduni Bandara',
    age: 32,
    date: '29 Jul 2024',
    time: '12:30 pm',
    type: 'Delivered Mothers',
    status: 'Pending',
  },
];

const userEvents = {
  '2024-07-25': [{ id: 1, description: 'Event A' }],
  '2024-07-30': [{ id: 2, description: 'Event B' }]
};

const Dashboard = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [searchTextMothers, setSearchTextMothers] = useState('');
  const [searchTextBabies, setSearchTextBabies] = useState('');
  const [isAddMotherPopupOpen, setIsAddMotherPopupOpen] = useState(false);
  const [isAddChildPopupOpen, setIsAddChildPopupOpen] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = (cardKey) => {
    setSelectedCard(cardKey);
  };

  const handleSearchMothers = (value) => {
    setSearchTextMothers(value);
  };

  const handleSearchBabies = (value) => {
    setSearchTextBabies(value);
  };

  const handleEdit = (key) => {
    console.log('Edit action for record with key:', key);
    // Implement the edit functionality here
  };

  const openAddMotherPopup = () => {
    setIsAddMotherPopupOpen(true);
  };

  const closeAddMotherPopup = () => {
    setIsAddMotherPopupOpen(false);
  };

  const openAddChildPopup = () => {
    setIsAddChildPopupOpen(true);
  };

  const closeAddChildPopup = () => {
    setIsAddChildPopupOpen(false);
  };

  const cardData = [
    { key: 1, title: 'Total Children', value: 1052, icon: <ChildCare />, color: '#192A51', paragraph: 'Newborns this week have reached a significant number. Keep track of their progress and ensure proper care is provided.', },
    { key: 2, title: 'Total Expectant Mothers', value: 475, icon: <Face4 />, color: '#192A51', paragraph: 'The count of expectant mothers is vital for planning and resource allocation. Ensure all are receiving the necessary prenatal care.', },
    { key: 3, title: 'Total Delivered Mothers', value: 8, icon: <Face />, color: '#192A51', paragraph: 'We currently have a total of 8 doctors available. Their expertise and availability are crucial for providing quality medical care.', },
    { key: 4, title: 'Total Clinics', value: 29, icon: <Face2 />, color: '#192A51', paragraph: 'With 29 midwives on duty, we are well-prepared to assist in childbirth and provide essential support to new mothers.', },
  ];

  const userFullCalendarPath = '/midwife/full-calendar'; 

  const filteredDataMothers = data.filter(item => 
    item.name.toLowerCase().includes(searchTextMothers.toLowerCase()) ||
    item.id.toLowerCase().includes(searchTextMothers.toLowerCase())
  );

  const filteredDataBabies = data.filter(item => 
    item.name.toLowerCase().includes(searchTextBabies.toLowerCase()) ||
    item.id.toLowerCase().includes(searchTextBabies.toLowerCase())
  );

  const columns = [
    { 
      title: <span>ID Code</span>, 
      dataIndex: 'id', 
      key: 'id',
      sorter: (a, b) => a.id.localeCompare(b.id),
      render: (text) => <span>{text}</span> 
    },
    { 
      title: <span>Mother Name</span>, 
      dataIndex: 'name', 
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (text) => <span>{text}</span> 
    },
    { 
      title: <span>Age</span>, 
      dataIndex: 'age', 
      key: 'age',
      sorter: (a, b) => a.age - b.age,
      render: (text) => <span>{text}</span> 
    },
    { 
      title: <span>Type</span>, 
      dataIndex: 'type', 
      key: 'type',
      filters: [
        { text: 'Expected Mother', value: 'Expected Mother' },
        { text: 'Delivered Mother', value: 'Delivered Mother' },
      ],
      onFilter: (value, record) => record.type.includes(value),
      render: (text) => <span>{text}</span> 
    }
  ];

  const components = {
    header: {
      cell: (props) => (
        <th 
          {...props}
          style={{ 
            color: '#192A51',
            padding: '8px',
            border: '1px solid #ddd'
          }}
        />
      ),
    },
    body: {
      cell: (props) => (
        <td 
          {...props}
          style={{ 
            border: '1px solid #ddd'
          }}
        />
      )
    }
  };

  const clinicsData = [
    { clinic: 'Clinic A', expectantMothers: 30, children: 45, deadBirths: 2, maternalDeaths: 1 },
    { clinic: 'Clinic B', expectantMothers: 20, children: 30, deadBirths: 1, maternalDeaths: 0 },
    { clinic: 'Clinic C', expectantMothers: 50, children: 60, deadBirths: 3, maternalDeaths: 2 },
    { clinic: 'Clinic D', expectantMothers: 40, children: 55, deadBirths: 2, maternalDeaths: 1 },
    { clinic: 'Clinic E', expectantMothers: 35, children: 50, deadBirths: 1, maternalDeaths: 0 },
    { clinic: 'Clinic F', expectantMothers: 25, children: 35, deadBirths: 2, maternalDeaths: 1 },
    { clinic: 'Clinic G', expectantMothers: 45, children: 60, deadBirths: 4, maternalDeaths: 2 },
    { clinic: 'Clinic H', expectantMothers: 55, children: 70, deadBirths: 3, maternalDeaths: 1 },
    { clinic: 'Clinic I', expectantMothers: 65, children: 80, deadBirths: 0, maternalDeaths: 0 },
    { clinic: 'Clinic J', expectantMothers: 60, children: 75, deadBirths: 0, maternalDeaths: 1 },
  ];

  const chartData = {
    labels: clinicsData.map(clinic => clinic.clinic),
    datasets: [
      {
        label: 'Expectant Mothers',
        data: clinicsData.map(clinic => clinic.expectantMothers),
        borderColor: '#9C27B0',
        backgroundColor: '#9C27B0',
        fill: false,
        pointStyle: 'circle',
      },
      {
        label: 'Children Count',
        data: clinicsData.map(clinic => clinic.children),
        borderColor: '#4CAF50',
        backgroundColor: '#4CAF50',
        fill: false,
        pointStyle: 'circle',
      },
      {
        label: 'Dead Births',
        data: clinicsData.map(clinic => clinic.deadBirths),
        borderColor: '#ff4d4f',
        backgroundColor: '#ff4d4f',
        fill: false,
        pointStyle: 'circle',
      },
      {
        label: 'Maternal Deaths',
        data: clinicsData.map(clinic => clinic.maternalDeaths),
        borderColor: '#000',
        backgroundColor: '#000',
        fill: false,
        pointStyle: 'circle',
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
          pointStyle: 'circle',
        },
      },
    },
  };

  return (
    <div style={{ padding: '24px', minHeight: '100vh' }}>
      {/* Header Section */}
      <Row justify="space-between" align="middle">
        <Col>
          <Typography>WERT MOH Area</Typography>
          <Title level={3}>Hi, Nimali Miss 👋</Title>
        </Col>
        <Col>
          <Row gutter={16}>
            <Col>
              <Button
                type="primary"
                style={{
                  backgroundColor: '#192A51',
                  borderColor: '#192A51',
                  borderRadius: '20px',
                  height: '40px',
                  fontSize: '16px'
                }}
                onClick={openAddMotherPopup}
              >
                + Add New Expectant Mother
              </Button>
            </Col>
            <Col>
              <Button
                type="primary"
                style={{
                  backgroundColor: '#192A51',
                  borderColor: '#192A51',
                  borderRadius: '20px',
                  height: '40px',
                  fontSize: '16px'
                }}
                onClick={openAddChildPopup}
              >
                + Add New Child
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Cards Display Section */}
      <Row gutter={16} style={{ marginTop: 24 }}>
        {cardData.map((card) => (
          <Col span={6} key={card.key}>
            <ReusableCard
              card={card}
              selectedCard={selectedCard}
              handleCardClick={handleCardClick}
            />
          </Col>
        ))}
      </Row>

      {/* Statistics and Calendar Section */}
      <Row gutter={16} style={{ marginTop: 24 }}>
        <Col span={16}>
          {/* Statistics Card */}
          <Card title="Overall Statistics">
            <Row style={{ marginBottom: "15px" }}>
              <Col span={12}>
                <Statistic title="Total Children" value={1052} valueStyle={{ color: '#967aa1', fontSize: "15px" }} />
              </Col>
              <Col span={12}>
                <Statistic title="Total Expectant Mothers" value={475} valueStyle={{ color: '#967aa1', fontSize: "15px" }} />
              </Col>
            </Row>
            <Row gutter={16} style={{ marginTop: 16 }}>
              <Col span={24}>
                <div style={{ height: '325px', padding: '20px' }}>
                  {/* Line Chart Display */}
                  <Line data={chartData} options={chartOptions} />
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Calendar">
            <CustomCalendar events={userEvents} fullCalendarPath={userFullCalendarPath} />
          </Card>
        </Col>
      </Row>

      {/* Un-Assigned Doctors/Midwives Table Section */}
      <Row gutter={24} style={{ marginTop: 24 }}>
        <Col span={24}>
          <Card>
            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ flex: 1 }}>
                <Title level={4}>Recent Add Mothers</Title>
                <AntSearch
                  placeholder="Search Mothers"
                  allowClear
                  enterButton={<Button style={{ backgroundColor: '#D5C6E0' }}>Search</Button>}
                  size="large"
                  onSearch={handleSearchMothers}
                  style={{ marginBottom: 16, width: '50%' }}
                />
                <Table
                  columns={columns}
                  dataSource={filteredDataMothers}
                  pagination={false}
                  components={components}
                  expandable={{
                    expandedRowRender: record => (
                      <div style={{ margin: 0 }}>
                        <p><b>Date:</b> {record.date}</p>
                        <p><b>Time:</b> {record.time}</p>
                        <p><b>Status:</b> {record.status}</p>
                      </div>
                    ),
                    rowExpandable: record => true,
                  }}
                  actions={[
                    {
                      key: 'edit',
                      icon: <Edit />,
                      onClick: (record) => handleEdit(record.key),
                    },
                  ]}
                  style={{ marginBottom: 32 }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <Title level={4}>Recent Add Babies</Title>
                <AntSearch
                  placeholder="Search Babies"
                  allowClear
                  enterButton={<Button style={{ backgroundColor: '#D5C6E0' }}>Search</Button>}
                  size="large"
                  onSearch={handleSearchBabies}
                  style={{ marginBottom: 16, width: '50%' }}
                />
                <Table
                  columns={columns}
                  dataSource={filteredDataBabies}
                  pagination={false}
                  components={components}
                  expandable={{
                    expandedRowRender: record => (
                      <div style={{ margin: 0 }}>
                        <p><b>Date:</b> {record.date}</p>
                        <p><b>Time:</b> {record.time}</p>
                        <p><b>Status:</b> {record.status}</p>
                      </div>
                    ),
                    rowExpandable: record => true,
                  }}
                  actions={[
                    {
                      key: 'edit',
                      icon: <Edit />,
                      onClick: (record) => handleEdit(record.key),
                    },
                  ]}
                />
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Add Expectant Mother Popup */}
      <AddExpectantMotherPopup open={isAddMotherPopupOpen} onClose={closeAddMotherPopup} />

      {/* Add Child Popup */}
      <AddChildPopup open={isAddChildPopupOpen} onClose={closeAddChildPopup} />
    </div>
  );
};

export default Dashboard;
