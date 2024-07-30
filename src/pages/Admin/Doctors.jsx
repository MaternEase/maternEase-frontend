import React, { useState } from 'react';
import { Box, Grid, Typography, Avatar } from '@mui/material';
import { Modal, Form, Input, Select, Button, Table } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Search } = Input;

// Example generated data for Doctors
const generatedDoctors = [
  {
    StaffId: 'D001',
    FullName: 'Dr. Emily Parker',
    Age: 34,
    RegisteredDate: '2023-03-12',
    Status: 'Assigned',
    Address: '101 Oak Ave, Greenwood, USA',
    Telephone: '555-1122',
    ProfileImage: 'https://via.placeholder.com/64',
    AssignedClinicsDetails: 'Clinic A',
  },
  {
    StaffId: 'D002',
    FullName: 'Dr. David Wright',
    Age: 40,
    RegisteredDate: '2022-08-05',
    Status: 'Assigned',
    Address: '202 Maple St, Springfield, USA',
    Telephone: '555-2233',
    ProfileImage: 'https://via.placeholder.com/64',
    AssignedClinicsDetails: 'Clinic B',
  },
  {
    StaffId: 'D003',
    FullName: 'Dr. Karen White',
    Age: 50,
    RegisteredDate: '2021-12-20',
    Status: 'Unassigned',
    Address: '303 Pine St, Rivertown, USA',
    Telephone: '555-3344',
    ProfileImage: 'https://via.placeholder.com/64',
    AssignedClinicsDetails: '',
  },
  {
    StaffId: 'D004',
    FullName: 'Dr. Michael Brown',
    Age: 29,
    RegisteredDate: '2023-07-18',
    Status: 'Assigned',
    Address: '404 Birch St, Lakewood, USA',
    Telephone: '555-4455',
    ProfileImage: 'https://via.placeholder.com/64',
    AssignedClinicsDetails: 'Clinic D',
  },
  {
    StaffId: 'D005',
    FullName: 'Dr. Sarah Lee',
    Age: 38,
    RegisteredDate: '2022-11-10',
    Status: 'Assigned',
    Address: '505 Cedar St, Hillside, USA',
    Telephone: '555-5566',
    ProfileImage: 'https://via.placeholder.com/64',
    AssignedClinicsDetails: 'Clinic E',
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

const Doctors = ({ clinic = { Doctors: generatedDoctors } }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isViewModalVisible, setIsViewModalVisible] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
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

  const handleView = (doctor) => {
    setSelectedDoctor(doctor);
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

  const renderAssignedStatus = (assignedClinicsDetails) => (
    assignedClinicsDetails ? <CheckCircleOutlined style={{ color: '#967aa1' }} /> : null
  );

  const columnsDoctors = [
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
      key: 'AssignedStatus',
      render: (text, record) => renderAssignedStatus(record.AssignedClinicsDetails),
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
            disabled={!!record.AssignedClinicsDetails}
            onClick={handleAddClinic}
            style={{
              color: record.AssignedClinicsDetails ? '#F0EEED' : '#192A51',
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
        >
          Doctors
        </Typography>
        <Search
          placeholder="Search Doctors"
          onSearch={handleSearch}
          onChange={(e) => handleSearch(e.target.value)}
          style={{ width: 300, marginBottom: 16, color: '#967aa1' }}
          onFocus={(e) => (e.target.style.borderColor = '#192A51')}
          onBlur={(e) => (e.target.style.borderColor = '')}
        />
        <Table
          dataSource={filterData(clinic.Doctors || [])}
          columns={columnsDoctors}
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

      {selectedDoctor && (
        <Modal
          title="Doctor Details"
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
              disabled={!!selectedDoctor.AssignedClinicsDetails}
            >
              Assign
            </Button>,
          ]}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
            <Avatar size={64} src={selectedDoctor.ProfileImage} />
            <Box sx={{ marginLeft: 2 }}>
              <Typography variant="h6">{selectedDoctor.FullName}</Typography>
              <Typography variant="body2">Age: {selectedDoctor.Age}</Typography>
              <Typography variant="body2">Registered Date: {selectedDoctor.RegisteredDate}</Typography>
              <Typography variant="body2">Status: {selectedDoctor.Status}</Typography>
              <Typography variant="body2">Address: {selectedDoctor.Address}</Typography>
              <Typography variant="body2">Telephone: {selectedDoctor.Telephone}</Typography>
            </Box>
          </Box>
        </Modal>
      )}
    </Box>
  );
};

export default Doctors;
