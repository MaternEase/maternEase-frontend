import React, { useState } from 'react';
import { Card, Row, Col, Table, Button, Typography, Input, Space } from 'antd';
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import '../../styles/Admin/Dashboard.css';

const { Search: AntSearch } = Input;

const data1 = [
  {
    key: '1',
    name: 'Jane Doe',
    age: 28,
    contactNumber: '091452452',
    reportState: 'New',
  },
  {
    key: '2',
    name: 'Mary Johnson',
    age: 32,
    contactNumber: '093654321',
    reportState: 'New',
  },
  {
    key: '3',
    name: 'Emily Brown',
    age: 24,
    contactNumber: '091234567',
    reportState: 'New',
  },
  {
    key: '4',
    name: 'Anna Smith',
    age: 30,
    contactNumber: '098765432',
    reportState: 'New',
  },
  {
    key: '5',
    name: 'Emilya Brown',
    age: 24,
    contactNumber: '091234567',
    reportState: 'New',
  },
];

const data2 = [
  {
    key: '1',
    name: 'Susan Green',
    age: 29,
    contactNumber: '091987654',
    reportState: 'New',
  },
  {
    key: '2',
    name: 'Linda White',
    age: 35,
    contactNumber: '093123456',
    reportState: 'New',
  },
  {
    key: '3',
    name: 'Nancy Black',
    age: 27,
    contactNumber: '091111111',
    reportState: 'New',
  },
  {
    key: '4',
    name: 'Karen Red',
    age: 33,
    contactNumber: '098999999',
    reportState: 'New',
  },
  {
    key: '5',
    name: 'Barbara Blue',
    age: 31,
    contactNumber: '091222222',
    reportState: 'New',
  },
];

const handleStateChange = (data, setData, key, navigate) => {
  const newData = data.map((item) =>
    item.key === key ? { ...item, reportState: 'Viewed' } : item
  );
  setData(newData);
  navigate('/form'); // Replace with the actual path to your form
};

const columns = (data, setData, navigate) => [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Contact Number',
    dataIndex: 'contactNumber',
    key: 'contactNumber',
  },
  {
    title: 'Report',
    dataIndex: 'reportState',
    key: 'reportState',
    render: (text, record) => (
      <Button
        type="link"
        style={{
          color: text === 'New' ? '#7C3AED' : '#7C3AED',
          backgroundColor: text === 'Viewed' ? '#E9D5FF' : '',
          borderColor: text === 'Viewed' ? '#D8B4FE' : '#7C3AED',
          hover: {
            backgroundColor: '#D8B4FE',
            color: '#7C3AED',
          },
        }}
        onClick={() => handleStateChange(data, setData, record.key, navigate)}
      >
        {text}
      </Button>
    ),
  },
];

const cardData = [
  {
    key: '1',
    title: 'All Mother Details',
    link: '#link1',
  },
  {
    key: '2',
    title: 'Risky Mother Details',
    link: '#link2',
  },
];

const Mothers = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [filteredData1, setFilteredData1] = useState(data1);
  const [filteredData2, setFilteredData2] = useState(data2);
  const navigate = useNavigate();

  const handleCardClick = (cardKey) => {
    setSelectedCard(cardKey);
  };

  const handleSearch = (value) => {
    setSearchText(value);
    const lowerCaseValue = value.toLowerCase();
    const filtered1 = data1.filter(
      (item) =>
        item.name.toLowerCase().includes(lowerCaseValue) ||
        item.contactNumber.toLowerCase().includes(lowerCaseValue)
    );
    const filtered2 = data2.filter(
      (item) =>
        item.name.toLowerCase().includes(lowerCaseValue) ||
        item.contactNumber.toLowerCase().includes(lowerCaseValue)
    );
    setFilteredData1(filtered1);
    setFilteredData2(filtered2);
  };

  return (
    <div style={{ padding: '24px', minHeight: '100vh' }}>
      <Row gutter={16} style={{ marginTop: 24 }}>
        {cardData.map((card) => (
          <Col span={6} key={card.key}>
            <Card
              hoverable
              style={{
                backgroundColor: '#E9D5FF',
                padding: '20px',
                cursor: 'pointer',
                border: selectedCard === card.key ? '2px solid #7C3AED' : 'none',
              }}
              onClick={() => handleCardClick(card.key)}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#D8B4FE')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#E9D5FF')}
            >
              <a href={card.link} className="text-xl font-semibold text-purple-600 hover:underline">
                {card.title}
              </a>
            </Card>
          </Col>
        ))}
      </Row>
      <Row gutter={24} style={{ marginTop: 24 }}>
        <Col span={24}>
          <Card
            title="Expectant Mother Reports"
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
              columns={columns(filteredData1, setFilteredData1, navigate)}
              dataSource={filteredData1}
              pagination={false}
              scroll={{ y: 200 }}
            />
          </Card>
        </Col>
      </Row>
      <Row gutter={24} style={{ marginTop: 24 }}>
        <Col span={24}>
          <Card
            title="Mother Reports"
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
              columns={columns(filteredData2, setFilteredData2, navigate)}
              dataSource={filteredData2}
              pagination={false}
              scroll={{ y: 200 }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Mothers;
