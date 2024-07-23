// Dashboard.js
import React, { useState } from 'react';
import { Card, Row, Col, Statistic, Table, Dropdown, Menu, Space, Button, Typography } from 'antd';
import { ArrowForward, KeyboardArrowDown, Face, Face2, Face4, ChildCare } from '@mui/icons-material';
import ReusableCard from '../../components/Card';
import CustomCalendar from '../../components/Calendar';
import '../../styles/Admin/Dashboard.css';

const { Title } = Typography;

const data = [
  {
    key: '1',
    id: '#FUP12312424',
    name: 'Isagi Yoichi',
    age: 20,
    date: '25 Dec 2023',
    time: '08:30 pm',
    type: 'Doctor',
    status: 'Pending',
  },
  {
    key: '2',
    id: '#12312312424',
    name: 'Kaiser Brown',
    age: 23,
    date: '01 Dec 2023',
    time: '12:30 pm',
    type: 'Midwife',
    status: 'pending',
  },
];

const Dashboard = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardKey) => {
    setSelectedCard(cardKey);
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">View Details</Menu.Item>
      {/* <Menu.Item key="2">Edit</Menu.Item>
      <Menu.Item key="3">Delete</Menu.Item> */}
    </Menu>
  );

  const cardData = [
    { key: 1, title: 'Total Children', value: 1052, icon: <ChildCare />, color: '#192A51', paragraph: 'Newborns this week have reached a significant number. Keep track of their progress and ensure proper care is provided.', },
    { key: 2, title: 'Total Expectant Mothers', value: 475, icon: <Face4 />, color: '#192A51', paragraph: 'The count of expectant mothers is vital for planning and resource allocation. Ensure all are receiving the necessary prenatal care.', },
    { key: 3, title: 'Doctors', value: 8, icon: <Face />, color: '#192A51', paragraph: 'We currently have a total of 8 doctors available. Their expertise and availability are crucial for providing quality medical care.', },
    { key: 4, title: 'Midwives', value: 29, icon: <Face2 />, color: '#192A51', paragraph: 'With 29 midwives on duty, we are well-prepared to assist in childbirth and provide essential support to new mothers.', },
  ];

  return (
    <div style={{ padding: '24px', minHeight: '100vh' }}>
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
            extra={
              <Dropdown overlay={menu}>
                <Button>
                  Last Week <KeyboardArrowDown />
                </Button>
              </Dropdown>
            }
          >
            <Row>
              <Col span={6}>
                <Statistic title="Total Children" value={1560} valueStyle={{ color: '#3f8600' }} />
              </Col>
              <Col span={6}>
                <Statistic title="Total Expectant Mothers" value={452} valueStyle={{ color: '#3f8600' }} />
              </Col>
              <Col span={6}>
                <Statistic title="Total Doctors" value={18} valueStyle={{ color: '#3f8600' }} />
              </Col>
              <Col span={6}>
                <Statistic title="Total Midwives" value={32} valueStyle={{ color: '#3f8600' }} />
              </Col>
            </Row>
            <Row gutter={16} style={{ marginTop: 16 }}>
              <Col span={24}>
                <img
                  src="https://via.placeholder.com/600x300" 
                  alt="chart"
                  style={{ width: '100%' }}
                />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Calendar">
            <CustomCalendar /> {/* Use the custom calendar component */}
          </Card>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: 24 }}>
        <Col span={16}>
          <Card
            title="Un-Assigned Doctors/Midwives"
            extra={
              <Space>
                {/* <Button icon={<ExportOutlined />}>Export</Button> */}
                <Button>Filter</Button>
              </Space>
            }
          >
            <Table
              columns={[
                { title: 'No', dataIndex: 'key', key: 'key' },
                { title: 'ID Code', dataIndex: 'id', key: 'id' },
                { title: 'Patient Name', dataIndex: 'name', key: 'name' },
                { title: 'Age', dataIndex: 'age', key: 'age' },
                { title: 'Created Date', dataIndex: 'date', key: 'date' },
                { title: 'Time', dataIndex: 'time', key: 'time' },
                { title: 'Type', dataIndex: 'type', key: 'type' },
                { title: 'Status', dataIndex: 'status', key: 'status' },
                { title: 'Action', dataIndex: 'action', key: 'action' },
              ]}
              dataSource={data}
              pagination={false}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Activity Details">
            <Space direction="vertical">
              <Button>DR. Rick Appointment</Button>
              <Button>Doctor Meetup</Button>
              <Button>Assign Midwife</Button>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
