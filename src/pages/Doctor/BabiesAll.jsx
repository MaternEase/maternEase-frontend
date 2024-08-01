import React, { useState } from 'react';
import { Card, Row, Col, Table, Button, Typography, Input, Space } from 'antd';
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import '../../styles/Admin/Dashboard.css';

const { Search: AntSearch } = Input;

const data1 = [
  {
    key: '1',
    name: 'Jayani Priyanka',
    age: '8 months',
    risky: 'Risky',
    registrationnumber: 'B452',
    reportState: 'View',
  },
  {
    key: '2',
    name: 'Malki Rashmika',
    age: '3 months',
    risky: 'Risky',
    registrationnumber: 'B321',
    reportState: 'View',
  },
  {
    key: '3',
    name: 'Emily Biyanka',
    age:' 2 months',
    risky: 'Nonrisky',
    registrationnumber: 'B567',
    reportState: 'View',
  },
  {
    key: '4',
    name: 'Akila Janandi',
    age: '13 months',
    risky: 'Nonrisky',
    registrationnumber: 'B432',
    reportState: 'View',
  },
  {
    key: '5',
    name: 'Emilya Dewmini',
    age: '4 months',
    risky: 'Nonrisky',
    registrationnumber: 'B567',
    reportState: 'View',
  },
];

const data2 = [
  // Your data2 entries if any
];

const handleStateChange = (data, setData, key, navigate) => {
  const newData = data.map((item) =>
    item.key === key ? { ...item, reportState: 'Viewed' } : item
  );
  setData(newData);
  navigate('/doctor/babyreport1');
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
    title: 'Registration Number',
    dataIndex: 'registrationnumber',
    key: 'registrationnumber',
  },
  {
    title: 'Condition',
    dataIndex: 'risky',
    key: 'risky',
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
    title: 'All Babies Details',
    link: '#link1',
  },
  {
    key: '2',
    title: 'Risky Babies Details',
    link: '#link2',
  },
];

const Babies = () => {
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

  const getRowClassName = (record) => {
    return record.risky ;
  };

  return (
    <div style={{ padding: '24px', minHeight: '100vh' }}>
      {/* <Row gutter={16} style={{ marginTop: 24 }}>
        {cardData.map((card) => (
          <Col span={6} key={card.key}>
            <Card
              hoverable
              style={{
                backgroundColor: '#D5C6E0',
                padding: 'px',
                cursor: 'pointer',
                border: selectedCard === card.key ? 'none' : 'none',
              }}
              onClick={() => handleCardClick(card.key)}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#AAA1C8')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#D5C6E0')}
            >
              <a href={'/doctor/matherall'} className="text-xl font-semibold text-black">
                {card.title}
              </a>
            </Card>
          </Col>
        ))}
      </Row> */}
      <Row gutter={24} style={{ marginTop: 24 }}>
        <Col span={24}>
          <Card
            title="Details of all babies"
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
              rowClassName={getRowClassName}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Babies;
