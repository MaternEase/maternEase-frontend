import React, { useState } from 'react';
import { Card, Row, Col, Table, Space, Typography, Input, Button } from 'antd';
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import CustomCalendar from '../../components/Calendar';
import { LineChart, Line, PieChart, Pie, Cell, Tooltip, Legend, CartesianGrid, XAxis, YAxis } from 'recharts';
import '../../styles/Admin/Dashboard.css';

const { Title } = Typography;
const { Search: AntSearch } = Input;

const mothersData = [
  { key: 1, name: 'Wasanthi Perera', report: 'View' },
  { key: 2, name: 'Sujatha Dahanayakce', report: 'View' },
  { key: 3, name: 'Naduni Bandara', report: 'View' },
];

const babiesData = [
  { key: 1, name: 'Banuka Rajapakse', report: 'View' },
  { key: 2, name: 'Wanindu Hasaranga', report: 'View' },
  { key: 3, name: 'Kusal Mendis3', report: 'View' },
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
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const handleEdit = (path) => {
    navigate(path);
  };

  const cardData = [
    {
      key: 1,
      title: 'Mothers Reports',
      path: '/doctor/mothers',
    },
    {
      key: 2,
      title: 'Babies Reports',
      path: '/doctor/babies',
    },
    {
      key: 3,
      title: 'Statistical Reports',
      path: '/doctor/reports',
    },
    // {
    //   key: 4,
    //   title: 'Risky Mothers & Babies',
    //   path: '/doctor/risky-mothers-babies',
    // },
  ];

  const userFullCalendarPath = '/doctor/doctorcalendar';

  const filteredMothersData = mothersData.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const filteredBabiesData = babiesData.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const mothersColumns = [
    {
      title: <span>Mother Name</span>,
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (text) => <span>{text}</span>,
    },
    {
      title: <span>Report</span>,
      dataIndex: 'report',
      key: 'report',
      render: (text, record) => (
        <Button
          type="link"
          style={{ color: '#7C3AED' }}
          onClick={() => handleEdit('/doctor/motherrefer')}
        >
          {text}
        </Button>
      ),
    },
  ];

  const babiesColumns = [
    {
      title: <span>Baby Name</span>,
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (text) => <span>{text}</span>,
    },
    {
      title: <span>Report</span>,
      dataIndex: 'report',
      key: 'report',
      render: (text, record) => (
        <Button
          type="link"
          style={{ color: '#7C3AED' }}
          onClick={() => handleEdit('/doctor/babyrefer')}
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
      <Row gutter={16} style={{ marginTop: 24,marginLeft:'200PX' }}>
        {cardData.map((card) => (
          <Col span={6} key={card.key}>
            <Card
              hoverable
              onClick={() => handleCardClick(card.path)}
              title={<span style={{ color: 'black', textAlign: 'center' }}>{card.title}</span>}
              bordered={false}
              style={{
                backgroundColor: '#eee4f9',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
                textAlign: 'center'
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
      <Row gutter={24} style={{ marginTop: 48 }}>
        <Col span={12}>
          <Card
            title="Refer Mothers"
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
              dataSource={filteredMothersData}
              columns={mothersColumns}
              pagination={false}
              scroll={{ y: 200 }}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card
            title="Refer Babies"
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
              dataSource={filteredBabiesData}
              columns={babiesColumns}
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
