import React, { useState } from 'react';
import { Box, Grid, Typography, Avatar } from '@mui/material';
import { Modal, Form, Input, Select, Button, Table } from 'antd';

const { Option } = Select;
const { Search } = Input;

// Example generated data for midwives
const generatedMidwives = [
  {
    StaffId: 'M001',
    FullName: 'Alice Johnson',
    Age: 30,
    RegisteredDate: '2023-01-15',
    Status: 'Assigned',
    Address: '123 Main St, Anytown, USA',
    Telephone: '555-1234',
    ProfileImage: 'https://via.placeholder.com/64',
    AssignedClinics: 2,
    AssignedClinicsDetails: 'Clinic A, Clinic B', // New field
  },
  {
    StaffId: 'M002',
    FullName: 'Betty Smith',
    Age: 45,
    RegisteredDate: '2022-05-20',
    Status: 'Assigned',
    Address: '456 Elm St, Othertown, USA',
    Telephone: '555-5678',
    ProfileImage: 'https://via.placeholder.com/64',
    AssignedClinics: 3,
    AssignedClinicsDetails: 'Clinic X, Clinic Y, Clinic Z', // New field
  },
  {
    StaffId: 'M003',
    FullName: 'Cathy Brown',
    Age: 28,
    RegisteredDate: '2021-11-10',
    Status: 'Unassigned',
    Address: '789 Pine St, Sometown, USA',
    Telephone: '555-9101',
    ProfileImage: 'https://via.placeholder.com/64',
    AssignedClinics: 1,
    AssignedClinicsDetails: 'Clinic D', // New field
  },
];

// Define filter options
const clinicOptions = [
  'Clinic A',
  'Clinic B',
  'Clinic C',
  'Clinic D',
  'Clinic X',
  'Clinic Y',
  'Clinic Z',
];

const Midwives = ({ clinic = { midwives: generatedMidwives } }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isViewModalVisible, setIsViewModalVisible] = useState(false);
  const [selectedMidwife, setSelectedMidwife] = useState(null);
  const [form] = Form.useForm();
  const [searchText, setSearchText] = useState('');
  const [filters, setFilters] = useState([]);

  const handleAddClinic = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleViewCancel = () => {
    setIsViewModalVisible(false);
  };

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const handleView = (midwife) => {
    setSelectedMidwife(midwife);
    setIsViewModalVisible(true);
  };

  const handleFilterChange = (value) => {
    setFilters(value);
  };

  const filterData = (data) => {
    return data.filter((item) => {
      const matchesSearch = 
        item.StaffId.toLowerCase().includes(searchText.toLowerCase()) ||
        item.FullName.toLowerCase().includes(searchText.toLowerCase()) ||
        item.RegisteredDate.toLowerCase().includes(searchText.toLowerCase()) ||
        item.Status.toLowerCase().includes(searchText.toLowerCase());
  
      const matchesFilter = (filters || []).length === 0 || (filters || []).some(filter => (item.AssignedClinicsDetails || '').includes(filter));
  
      return matchesSearch && matchesFilter;
    });
  };  

  const renderStatusBar = (assignedClinics) => {
    const totalSegments = 3;
    const baseColor = '#967aa1'; // Base color for the status bar
    const lightColor = '#e0e4f1'; // Lighter shade of the base color
  
    // Calculate the percentage of the bar that should be filled
    const percentage = (assignedClinics / totalSegments) * 100;
  
    return (
      <Box
        sx={{
          width: '100px',
          height: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          background: `linear-gradient(to right, ${lightColor}, ${baseColor} ${percentage}%, ${baseColor} ${percentage}%, #e0e0e0 ${percentage}%, #e0e0e0)`,
        }}
      />
    );
  };

  const columnsMidwives = [
    {
      title: 'Staff ID',
      dataIndex: 'StaffId',
      key: 'StaffId',
      sorter: (a, b) => a.StaffId.localeCompare(b.StaffId),
    },
    {
      title: 'Full Name',
      dataIndex: 'FullName',
      key: 'FullName',
      sorter: (a, b) => a.FullName.localeCompare(b.FullName),
    },
    {
      title: 'Registered Date',
      dataIndex: 'RegisteredDate',
      key: 'RegisteredDate',
      sorter: (a, b) => new Date(a.RegisteredDate) - new Date(b.RegisteredDate),
    },
    {
      title: 'Assigned Clinics',
      dataIndex: 'AssignedClinicsDetails',
      key: 'AssignedClinicsDetails',
      filters: clinicOptions.map(clinic => ({ text: clinic, value: clinic })),
      onFilter: (value, record) => record.AssignedClinicsDetails.includes(value),
    },
    {
      title: ' ',
      key: 'StatusBar',
      render: (text, record) => renderStatusBar(record.AssignedClinics),
    },
    {
      title: ' ',
      key: 'actions',
      render: (text, record) => (
        <div>
          <Button type="link" onClick={() => handleView(record)} style={{ color: '#192A51' }}>
            View
          </Button>
          <Button
            type="link"
            disabled={record.AssignedClinics >= 3}
            onClick={handleAddClinic}
            style={{
              color: record.AssignedClinics >= 3 ? '#F0EEED' : '#192A51',
            }}
          >
            Assign
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Box sx={{ width: '100%', typography: 'body1' }} className="clinics-container">
      <Grid item xs={12}>
        <Typography
          variant="subtitle1"
          className="section-title"
          fontWeight="bold"
          marginBottom="15px"
          // color="#967aa1"
        >
          Midwives
        </Typography>
        <Search
          placeholder="Search Midwives"
          onSearch={handleSearch}
          onChange={(e) => handleSearch(e.target.value)}
          style={{ width: 300, marginBottom: 16, color: '#967aa1' }}
          onFocus={(e) => (e.target.style.borderColor = '#192A51')}
          onBlur={(e) => (e.target.style.borderColor = '')}
        />
        <Table
          dataSource={filterData(clinic.midwives || [])}
          columns={columnsMidwives}
          pagination={{ pageSize: 5 }}
          rowKey="StaffId"
          onChange={(pagination, filters) => handleFilterChange(filters.AssignedClinicsDetails)}
        />
      </Grid>

      <Modal
        title="Add Clinic"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={() => form.submit()}>
            Submit
          </Button>,
        ]}
      >
        <Form form={form} layout="vertical">
          {/* Add your form items here */}
        </Form>
      </Modal>

      {selectedMidwife && (
        <Modal
          title="Midwife Details"
          open={isViewModalVisible}
          onCancel={handleViewCancel}
          footer={[
            <Button key="back" onClick={handleViewCancel}>
              Close
            </Button>,
            <Button
              key="assign"
              type="primary"
              onClick={handleAddClinic}
              disabled={selectedMidwife.AssignedClinics >= 3}
            >
              Assign
            </Button>,
          ]}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
            <Avatar size={64} src={selectedMidwife.ProfileImage} />
            <Box sx={{ marginLeft: 2 }}>
              <Typography variant="h6">{selectedMidwife.FullName}</Typography>
              <Typography variant="body2">Age: {selectedMidwife.Age}</Typography>
              <Typography variant="body2">Registered Date: {selectedMidwife.RegisteredDate}</Typography>
              <Typography variant="body2">Status: {selectedMidwife.Status}</Typography>
              <Typography variant="body2">Address: {selectedMidwife.Address}</Typography>
              <Typography variant="body2">Telephone: {selectedMidwife.Telephone}</Typography>
            </Box>
          </Box>
        </Modal>
      )}
    </Box>
  );
};

export default Midwives;
