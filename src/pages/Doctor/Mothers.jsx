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
    contactNumber: '091452452',
    motherHistory: 'Check',
    reportState: 'Ckeck',
    reportPath: '/doctor/expectantmother/1',
  },
  {
    key: '2',
    name: 'Pavani Rathnayaka',
    age: 32,
    condition: 'Risky',
    contactNumber: '093654321',
    motherHistory: 'Check',
    reportState: 'Ckeck',
    reportPath: '/doctor/expectantmother/2',
  },
  {
    key: '3',
    name: 'Ema Sirivardane',
    age: 24,
    condition: 'Nonrisky',
    contactNumber: '091234567',
    motherHistory: 'Check',
    reportState: 'Ckeck',
    reportPath: '/doctor/expectantmother/3',
  },
  {
    key: '4',
    name: 'Anushka Sharma',
    age: 30,
    condition: 'Nonrisky',
    contactNumber: '098765432',
    motherHistory: 'Check',
    reportState: 'Ckeck',
    reportPath: '/doctor/expectantmother/4',
  },
  {
    key: '5',
    name: 'Sanduni Rathnayeka',
    age: 24,
    condition: 'Nonrisky',
    contactNumber: '091234567',
    motherHistory: 'Check',
    reportState: 'Ckeck',
    reportPath: '/doctor/expectantmother/5',
  },
];

const data2 = [
  {
    key: '1',
    name: 'Sumitha Nalini',
    age: 29,
    contactNumber: '091987654',
    motherHistory: 'Check',
    reportState: 'Ckeck',
    reportPath: '/doctor/mother/1',
  },
  {
    key: '2',
    name: 'Lalani Rathnayake',
    age: 35,
    contactNumber: '093123456',
    motherHistory: 'Check',
    reportState: 'Ckeck',
    reportPath: '/doctor/mother/2',
  },
  {
    key: '3',
    name: 'Anjalika Sathsarani',
    age: 27,
    contactNumber: '091111111',
    motherHistory: 'Check',
    reportState: 'Ckeck',
    reportPath: '/doctor/mother/3',
  },
  {
    key: '4',
    name: 'Kalani Disanayake',
    age: 33,
    contactNumber: '098999999',
    motherHistory: 'Check',
    reportState: 'Ckeck',
    reportPath: '/doctor/mother/5',
  },
  {
    key: '5',
    name: 'Bavanthi Nimna',
    age: 31,
    contactNumber: '091222222',
    motherHistory: 'Check',
    reportState: 'Ckeck',
    reportPath: '/doctor/mother/6',
  },
];

const handleStateChange = (data, setData, key, navigate) => {
  const newData = data.map((item) =>
    item.key === key ? { ...item, reportState: 'Viewed' } : item
  );
  setData(newData);

  // Find the selected item and navigate to its unique report path
  const selectedItem = data.find((item) => item.key === key);
  if (selectedItem) {
    navigate(selectedItem.reportPath);
  }
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
          color: '#7C3AED',
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
          color: '#7C3AED',
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
        <Col span={6}>
          <Card
            hoverable
            style={{
              backgroundColor: '#D5C6E0',
              padding: '5px',
              cursor: 'pointer',
              border: selectedCard ? 'none' : 'none',
            }}
            onClick={() => handleCardClick('1')}
          >
            <a href={'/doctor/motherall'} className="text-xl font-semibold text-black">
              All Mother Details
            </a>
          </Card>
        </Col>
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
