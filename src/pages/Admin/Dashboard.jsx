import React, { useState } from 'react';
import { Card, Row, Col, Statistic, Table, Calendar, Badge, Dropdown, Menu, Space, Button, Typography } from 'antd';
import { EllipsisOutlined, DownOutlined, ExportOutlined, UserOutlined, WomanOutlined, ManOutlined, SolutionOutlined } from '@ant-design/icons';
import '../../styles/Admin/Dashboard.css';

const { Title, Text } = Typography;

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

// const getListData = (value) => {
//   let listData;
//   switch (value.date()) {
//     case 10:
//       listData = [
//         { type: 'warning', content: 'DR. Rick Appointment' },
//         { type: 'success', content: 'Dentist Meetup' },
//         { type: 'error', content: 'Jon Surgery' },
//       ];
//       break;
//     default:
//   }
//   return listData || [];
// };

// const dateCellRender = (value) => {
//   const listData = getListData(value);
//   return (
//     <ul className="events">
//       {listData.map((item) => (
//         <li key={item.content}>
//           <Badge status={item.type} text={item.content} />
//         </li>
//       ))}
//     </ul>
//   );
// };

const Dashboard = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">View Details</Menu.Item>
      <Menu.Item key="2">Edit</Menu.Item>
      <Menu.Item key="3">Delete</Menu.Item>
    </Menu>
  );

  const cardData = [
    { key: 1, title: 'Total Children', value: 1052, icon: <UserOutlined />, color: '#3f8600' },
    { key: 2, title: 'Total Expectant Mothers', value: 475, icon: <WomanOutlined />, color: '#3f8600' },
    { key: 3, title: 'Doctors', value: 8, icon: <SolutionOutlined />, color: '#3f8600' },
    { key: 4, title: 'Midwives', value: 29, icon: <ManOutlined />, color: '#3f8600' },
  ];

  return (
    <div style={{ padding: '24px', minHeight: '100vh' }}>
      <Title level={3}>Hi, Nimal 👋</Title>
      <Row gutter={16} style={{ marginTop: 24 }}>
        {cardData.map((card) => (
          <Col span={6} key={card.key}>
            <Card
              className={`custom-card ${selectedCard === card.key ? 'selected' : ''}`}
              onClick={() => handleCardClick(card.key)}
              hoverable
            >
              <Row justify="space-between">
                <Col>
                  {card.icon}
                  <span className="card-title">{card.title}</span>
                </Col>
                <Col>
                  <Dropdown overlay={menu} trigger={['click']}>
                    <EllipsisOutlined className="more-icon" />
                  </Dropdown>
                </Col>
              </Row>
              <Statistic
                value={card.value}
                valueStyle={{ color: card.color }}
                suffix="Today"
                style={{ marginTop: '16px' }}
              />
            </Card>
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
                  Last Week <DownOutlined />
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
            <Calendar fullscreen={false}  />
            {/* <Calendar fullscreen={false} dateCellRender={dateCellRender} /> */}
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
