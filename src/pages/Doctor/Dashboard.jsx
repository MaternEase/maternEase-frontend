import React, { useState } from 'react';
import { Card, Row, Col, Table, Space, Typography, Input, Button } from 'antd';
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import '../../styles/Admin/Dashboard.css';
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  CartesianGrid,
  XAxis,
  YAxis,
} from 'recharts';

const { Title } = Typography;
const { Search: AntSearch } = Input;

const mothersData = [
  { key: 1, name: 'Renuka De Silva', pagePath: '/doctor/expectantmother/1' },
  { key: 2, name: 'Pavani Rathnayaka', pagePath: '/doctor/expectantmother/2' },
  { key: 3, name: 'Sumitha Nalini', pagePath: '/doctor/mother/1' },
];

const babiesData = [
  { key: 1, name: 'Shanthu Liyanage', pagePath: '/doctor/baby/1' },
  { key: 2, name: 'Wanindu Hasaranga', pagePath: '/doctor/baby/2' },
  { key: 3, name: 'Kusal Mendis', pagePath: '/doctor/baby/3' },
];

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

  const handleSearch = (value) => {
    setSearchText(value);
  };

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
      dataIndex: 'pagePath',
      key: 'pagePath',
      render: (pagePath) => (
        <Button
          type="link"
          style={{ color: '#7C3AED' }}
          onClick={() => navigate(pagePath)}
        >
          Check
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
      dataIndex: 'pagePath',
      key: 'pagePath',
      render: (pagePath) => (
        <Button
          type="link"
          style={{ color: '#7C3AED' }}
          onClick={() => navigate(pagePath)}
        >
          Check
        </Button>
      ),
    },
  ];

  return (
    <div style={{ padding: '24px', minHeight: '100vh' }}>
      <Row gutter={16} style={{ marginTop: 24, marginLeft: '200px' }}>
        <Col span={6}>
          <Card
            hoverable
            title="Mothers Reports"
            bordered={false}
            style={{
              backgroundColor: '#eee4f9',
              borderRadius: '8px',
              cursor: 'pointer',
              textAlign: 'center',
            }}
            onClick={() => navigate('/doctor/mothers')}
          />
        </Col>
        <Col span={6}>
          <Card
            hoverable
            title="Babies Reports"
            bordered={false}
            style={{
              backgroundColor: '#eee4f9',
              borderRadius: '8px',
              cursor: 'pointer',
              textAlign: 'center',
            }}
            onClick={() => navigate('/doctor/babies')}
          />
        </Col>
        <Col span={6}>
          <Card
            hoverable
            title="Stastical Reports"
            bordered={false}
            style={{
              backgroundColor: '#eee4f9',
              borderRadius: '8px',
              cursor: 'pointer',
              textAlign: 'center',
            }}
            onClick={() => navigate('/doctor/reports')}
          />
        </Col>
      </Row>

      <Row gutter={16} justify="center" style={{ marginTop: 24 }}>
        <Col span={10}>
          <Card title="Number of Pregnancies per Year">
            <LineChart
              width={400}
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
        <Col span={10}>
          <Card title="Types of Deliveries">
            <PieChart width={400} height={300}>
              <Pie
                data={deliveriesData}
                cx={200}
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
