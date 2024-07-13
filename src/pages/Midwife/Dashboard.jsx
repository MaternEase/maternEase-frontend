import React from 'react';
import { Card, Calendar, DatePicker, Button, List, Avatar, Row, Col, Dropdown, Menu } from 'antd';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { DownOutlined } from '@ant-design/icons';
import '../../styles/Midwife/Dashboard.css';


// Register the necessary components with Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = [
  { name: 'A.B.C. Silvaaaaaaaaaaaa' },
  { name: 'A.B.C. Silva' },
  { name: 'A.B.C. Silvassssss' },
  { name: 'A.B.C. Silvaaaaaaaaaaaa' },
  { name: 'A.B.C. Silva' },
  { name: 'A.B.C. Silvassssss' },
];

const chartData = {
  labels: ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
  datasets: [
    {
      label: 'Statistics',
      data: [20, 10, 25, 40, 15, 30, 45, 60, 40, 55, 70, 85],
      fill: false,
      backgroundColor: '#967AA1',
      borderColor: '#967AA1',
    },
  ],
};

const menu = (
  <Menu>
    <Menu.Item key="1">Clinic 1</Menu.Item>
    <Menu.Item key="2">Clinic 2</Menu.Item>
    <Menu.Item key="3">Clinic 3</Menu.Item>
  </Menu>
);

const Dashboard = () => (
  <div className="dashboard-container">
    <Row className="header" gutter={[16, 16]}>
      <Col>
        <div className="clinic-selector">
          <span>You're in</span>
          <Dropdown overlay={menu} trigger={['click']}>
            <Button className="dropdown-button">
              Clinic 1 <DownOutlined />
            </Button>
          </Dropdown>
        </div>
      </Col>
      <Col>
        <Button type="primary" className="add-button">+ Add New Expectant Mother</Button>
        <Button type="primary" className="add-button">+ Add New Child</Button>
      </Col>
    </Row>
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Card title="Statistics" bordered={false} className="statistics-card">
          <Line data={chartData} />
        </Card>
      </Col>
    </Row>
    <Row gutter={[16, 16]} className="calendar-section">
      <Col xs={24} md={8}>
        <DatePicker className="date-picker" placeholder="Select Date" />
      </Col>
      <Col xs={24} md={16}>
        <Calendar fullscreen={false} />
      </Col>
    </Row>
    <Row gutter={[16, 16]} className="lists">
      <Col xs={24} md={12}>
        <Card title="Children" bordered={false}>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar icon={<i className="fas fa-eye"></i>} />}
                  title={<a href="https://ant.design">{item.name}</a>}
                />
              </List.Item>
            )}
          />
        </Card>
      </Col>
      <Col xs={24} md={12}>
        <Card title="Expectant Mothers" bordered={false}>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar icon={<i className="fas fa-eye"></i>} />}
                  title={<a href="https://ant.design">{item.name}</a>}
                />
              </List.Item>
            )}
          />
        </Card>
      </Col>
    </Row>
  </div>
);

export default Dashboard;
