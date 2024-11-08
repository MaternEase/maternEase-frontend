import React, { useState } from 'react';
import { Card, Row, Col, Table, Button, Typography, Input, Space } from 'antd';
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import '../../styles/Admin/Dashboard.css';


const { Search: AntSearch } = Input;

const data1 = [
  {
    key: '1',
    name: 'Renuka De Silva ',
    age: 30,
    condition: 'Risky',
    contactNumber: 'M452',
    motherHistory: 'View',
    reportState: 'New',
  },
  {
    key: '2',
    name: 'Pavani Rathnayaka',
    age: 32,
    condition: 'Risky',
    contactNumber: 'M321',
    motherHistory: 'View',
    reportState: 'New',
  },
  {
    key: '3',
    name: 'Ema Sirivardane',
    age: 24,
    condition: 'Nonrisky',
    contactNumber: 'M4567',
    motherHistory: 'View',
    reportState: 'New',
  },
  {
    key: '4',
    name: 'Anushka Sharma',
    age: 30,
    condition: 'Nonrisky',
    contactNumber: 'M432',
    motherHistory: 'View',
    reportState: 'New',
  },
  {
    key: '5',
    name: 'Sanduni Rathnayeka',
    age: 24,
    condition: 'Nonrisky',
    contactNumber: 'M567',
    motherHistory: 'View',
    reportState: 'New',
  },
];

const data2 = [
  {
    key: '1',
    name: 'Sumitha Nalini',
    age: 29,
    contactNumber: 'M654',
    motherHistory: 'View',
    reportState: 'New',
  },
  {
    key: '2',
    name: 'Lalani Rathnayake',
    age: 35,
    contactNumber: 'M344',
    motherHistory: 'View',
    reportState: 'New',
  },
  {
    key: '3',
    name: 'Anjalika Sathsarani',
    age: 27,
    contactNumber: 'M111',
    motherHistory: 'View',
    reportState: 'New',
  },
  {
    key: '4',
    name: 'Kalani Disanayake',
    age: 33,
    contactNumber: 'M999',
    motherHistory: 'View',
    reportState: 'New',
  },
  {
    key: '5',
    name: 'Bavanthi Nimna',
    age: 31,
    contactNumber: 'M222',
    motherHistory: 'View',
    reportState: 'New',
  },
];

const handleStateChange = (data, setData, key, navigate, path) => {
  const newData = data.map((item) =>
    item.key === key ? { ...item, reportState: 'Viewed' } : item
  );
  setData(newData);
  navigate(path); // Navigate to the provided path
};

const columnsMotherTable = (data, setData, navigate) => [
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
    dataIndex: 'contactNumber',
    key: 'contactNumber',
  },
  {
    title: 'Mother History',
    dataIndex: 'motherHistory',
    key: 'motherHistory',
    render: (text, record) => (
      <Button
        type="link"
        style={{
          color: '#7C3AED',
          backgroundColor: record.reportState === 'Viewed' ? '#E9D5FF' : '',
          borderColor: record.reportState === 'Viewed' ? '#D8B4FE' : '#7C3AED',
        }}
        onClick={() => handleStateChange(data, setData, record.key, navigate, `/doctor/motherhistory`)}
      >
        {text}
      </Button>
    ),
  },
  {
    title: 'Report',
    dataIndex: 'reportState',
    key: 'reportState',
    render: (text, record) => (
      <Button
        type="link"
        style={{
          color: '#7C3AED',
          backgroundColor: text === 'Viewed' ? '#E9D5FF' : '',
          borderColor: text === 'Viewed' ? '#D8B4FE' : '#7C3AED',
        }}
        onClick={() => handleStateChange(data, setData, record.key, navigate, `/doctor/motherreport1`)}
      >
        {text}
      </Button>
    ),
  },
];

const columnsExpectantMotherTable = (data, setData, navigate) => [
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
    title: 'Condition',
    dataIndex: 'condition',
    key: 'condition',
  },
  {
    title: 'Registration Number',
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
          color: '#7C3AED',
          backgroundColor: text === 'Viewed' ? '#E9D5FF' : '',
          borderColor: text === 'Viewed' ? '#D8B4FE' : '#7C3AED',
        }}
        onClick={() => handleStateChange(data, setData, record.key, navigate, '/doctor/motherreport1')}
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
    link: '',
  },
  // {
  //   key: '2',
  //   title: 'Risky Mother Details',
  //   link: '#link2',
  // },
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
                backgroundColor: '#D5C6E0',
                padding: '5px',
                cursor: 'pointer',
                border: selectedCard === card.key ? 'none' : 'none',
              }}
              onClick={() => handleCardClick(card.key)}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#AAA1C8')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#D5C6E0')}
            >
              <a href={'/doctor/motherall'} className="text-xl font-semibold text-black">
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
              columns={columnsExpectantMotherTable(filteredData1, setFilteredData1, navigate)}
              dataSource={filteredData1}
              pagination={false}
              scroll={{ y: 200 }}
              rowClassName={(record) => (record.condition === 'Risky' ? 'risky-row' : '')}
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
              columns={columnsMotherTable(filteredData2, setFilteredData2, navigate)}
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
