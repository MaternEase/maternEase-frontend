import React, { useState } from 'react';
import { Card, Row, Col, Table, Space, Typography, Input, Button } from 'antd';
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import CustomCalendar from '../../components/Calendar';
import { LineChart, Line, PieChart, Pie, Cell, Tooltip, Legend, CartesianGrid, XAxis, YAxis } from 'recharts';
import '../../styles/Admin/Dashboard.css';

const { Title } = Typography;
const { Search: AntSearch } = Input;

const data = [
  {
    name: 'Wasanthi Perera',
    age: 28,
    number: '091234567',
    report: 'Pending',
  },
  {
    name: 'Sujatha Dahanayake',
    age: 26,
    number: '091234567',
    report: 'Pending',
  },
  {
    name: 'Naduni Bandara',
    age: 32,
    number: '091234567',
    report: 'Pending',
  },
];

const userEvents = {
  '2024-07-25': [{ id: 1, description: 'Event A' }],
  '2024-07-30': [{ id: 2, description: 'Event B' }],
};

const pregnanciesData = [
  { year: '2019', pregnancies: 120 },
  { year: '2020', pregnancies: 150 },
  { year: '2021', pregnancies: 200 },
  { year: '2022', pregnancies: 170 },
  { year: '2023', pregnancies: 210 },
];

const deliveriesData = [
  { name: 'Normal Delivery', value: 70 },
  { name: 'C-Section', value: 25 },
  { name: 'Assisted Delivery', value: 5 },
];

const COLORS = ['#192A51', '#FF8042', '#00C49F'];

const Dashboard = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const handleEdit = (key) => {
    console.log('Edit action for record with key:', key);
    // Implement the edit functionality here
  };

  const cardData = [
    {
      key: 1,
      title: 'Mothers Reports',
      // value: 1052,
      // paragraph: 'Newborns this week have reached a significant number. Keep track of their progress and ensure proper care is provided.',
      path: '/doctor/mothers',
    },
    {
      key: 2,
      title: 'Babies Reports',
      // value: 475,
      // paragraph: 'The count of expectant mothers is vital for planning and resource allocation. Ensure all are receiving the necessary prenatal care.',
      path: '/doctor/babies',
    },
    {
      key: 3,
      title: 'Statistical Reports',
      // value: 8,
      // paragraph: 'We currently have a total of 8 doctors available. Their expertise and availability are crucial for providing quality medical care.',
      path: '/doctor/reports',
    },
    {
      key: 4,
      title: 'Risky Mothers & Babies',
      // value: 29,
      // paragraph: 'With 29 midwives on duty, we are well-prepared to assist in childbirth and provide essential support to new mothers.',
      path: '/doctor/risky-mothers-babies',
    },
  ];

  const userFullCalendarPath = '/admin/full-calendar';

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.id.toLowerCase().includes(searchText.toLowerCase())
  );

  const columns = [
    {
      title: <span>Mother Name</span>,
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (text) => <span>{text}</span>,
    },
    {
      title: <span>Age</span>,
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
      render: (text) => <span>{text}</span>,
    },
    {
      title: <span>Contact Number</span>,
      dataIndex: 'number',
      key: 'number',
      sorter: (a, b) => new Date(a.date) - new Date(b.date),
      render: (text) => <span>{text}</span>,
    },
    {
      title: <span>Report</span>,
      dataIndex: 'report',
      key: 'report',
      sorter: (a, b) => a.time.localeCompare(b.time),
      render: (text, record) => (
        <Button
          type="link"
          style={{ color: '#7C3AED' }}
          onClick={() => handleEdit(record.key)}
        >
          {text}
        </Button>
      ),
    },
  ];

  const components = {
    header: {
      cell: (props) => (
        <th
          {...props}
          style={{
            color: '#192A51',
            padding: '8px',
          }}
        />
      ),
    },
  };

  return (
    <div style={{ padding: '24px', minHeight: '100vh' }}>
      <Row gutter={16} style={{ marginTop: 24 }}>
        {cardData.map((card) => (
          <Col span={6} key={card.key}>
            <Card
              hoverable
              onClick={() => handleCardClick(card.path)}
              title={<span style={{ color: '#7C3AED' }}>{card.title}</span>}
              bordered={false}
              style={{
                backgroundColor: '#eee4f9',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
              bodyStyle={{ padding: '8px 16px' }}
              headStyle={{ borderBottom: 0 }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#d9c3f1')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#eee4f9')}
            >
              <Title level={3}>{card.value}</Title>
              <p>{card.paragraph}</p>
            </Card>
          </Col>
        ))}
      </Row>
      <Row gutter={16} style={{ marginTop: 24 }}>
        <Col span={8}>
          <Card title="Number of Pregnancies per Year">
            <LineChart
              width={300}
              height={300}
              data={pregnanciesData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pregnancies" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Types of Deliveries">
            <PieChart width={300} height={300}>
              <Pie
                data={deliveriesData}
                cx={150}
                cy={150}
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {deliveriesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Calendar">
            <CustomCalendar events={userEvents} fullCalendarPath={userFullCalendarPath} />
          </Card>
        </Col>
      </Row>
      <Row gutter={24} style={{ marginTop: 24 }}>
        <Col span={24}>
          <Card
            title="Special Referring"
            extra={
              <Space>
                <AntSearch
                  placeholder="Search..."
                  onSearch={handleSearch}
                  enterButton={<Search />}
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </Space>
            }
          >
            <Table
              components={components}
              dataSource={filteredData}
              columns={columns}
              pagination={false}
              scroll={{ y: 200 }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
