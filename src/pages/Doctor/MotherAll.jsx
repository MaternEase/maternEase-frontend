import React, { useState } from 'react';
import { Card, Row, Col, Table, Button, Typography, Input, Space } from 'antd';
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import '../../styles/Admin/Dashboard.css';

const { Search: AntSearch } = Input;

const data1 = [
  {
    key: '1',
    name: 'Renuka De Silva',
    age: 28,
    risky: 'Risky',
    reportState: 'Check',
    page: '/doctor/expectantmother/1',
  },
  {
    key: '2',
    name: 'Pavani Rathnayaka',
    age: 32,
    risky: 'Risky',
    reportState: 'Check',
    page: '/doctor/expectantmother/2',
  },
  {
    key: '3',
    name: 'Sumitha Nalini',
    age: 24,
    risky: 'Nonrisky',
    reportState: 'Check',
    page: '/doctor/mother/1',
  },
  {
    key: '4',
    name: 'Ema Sirivardane',
    age: 24,
    risky: 'Nonrisky',
    reportState: 'Check',
    page: '/doctor/expectantmother/3',
  },
  {
    key: '5',
    name: 'Lalani Rathnayake',
    age: 35,
    risky: 'Nonrisky',
    reportState: 'Check',
    page: '/doctor/mother/2',
  },
  {
    key: '5',
    name: 'Anjalika Sathsarani',
    age: 27,
    risky: 'Nonrisky',
    reportState: 'Check',
    page: '/doctor/mother/3',
  },
  {
    key: '5',
    name: 'Anushka Sharma',
    age: 30,
    risky: 'Nonrisky',
    reportState: 'Check',
    page: '/doctor/expectantmother/4',
  },
  {
    key: '5',
    name: 'Kalani Disanayake',
    age: 33,
    risky: 'Nonrisky',
    reportState: 'Check',
    page: '/doctor/mother/5',
  },
  {
    key: '5',
    name: 'Bavanthi Nimna',
    age: 31,
    risky: 'Nonrisky',
    reportState: 'Check',
    page: '/doctor/mother/6',
  },
  {
    key: '5',
    name: 'Bavanthi Nimna',
    age: 31,
    risky: 'Nonrisky',
    reportState: 'Check',
    page: '/doctor/expectantmother/5',
  },
];

const handleStateChange = (data, setData, key, navigate) => {
  const selectedItem = data.find((item) => item.key === key);
  if (selectedItem?.page) {
    navigate(selectedItem.page);
  }
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

const Babies = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredData1, setFilteredData1] = useState(data1);
  const navigate = useNavigate();

  const handleSearch = (value) => {
    setSearchText(value);
    const lowerCaseValue = value.toLowerCase();
    const filtered1 = data1.filter((item) =>
      item.name.toLowerCase().includes(lowerCaseValue)
    );
    setFilteredData1(filtered1);
  };

  const getRowClassName = (record) => {
    return record.risky;
  };

  return (
    <div style={{ padding: '24px', minHeight: '100vh' }}>
      <Row gutter={24} style={{ marginTop: 24 }}>
        <Col span={24}>
          <Card
            title="Details of all mothers"
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
