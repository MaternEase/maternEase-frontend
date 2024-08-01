import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Modal, Form, Input, Button, Table, notification } from 'antd';
import ProfileDetailsPopup from "../../components/Admin/ProfileDetailsPopup";
import AssignMidwifePopup from "../../components/Admin/AssignMidwifePopup"; // Import the Assign midwife popup

const { Search } = Input;

// Updated data
const data = [
  {
    key: "1",
    id: "123M",
    name: "Wasanthi Perera",
    age: 48,
    date: "25 Jun 2024",
    time: "09:30 am",
    status: "Pending",
    assignedClinics: ["Athapaththukanda", "Polovita"],
    availableClinics: ["Athapaththukanda", "Polovita", "Deyiyandara", "Pallewella"],
  },
  {
    key: "2",
    id: "256M",
    name: "Sujatha Dahanayake",
    age: 26,
    date: "01 Jul 2024",
    time: "12:30 pm",
    status: "Pending",
    assignedClinics: ["Pallewella"],
    availableClinics: ["Athapaththukanda", "Polovita", "Deyiyandara", "Pallewella"],
  },
  {
    key: "3",
    id: "012M",
    name: "Naduni Bandara",
    age: 32,
    date: "29 Jul 2024",
    time: "12:30 pm",
    status: "Pending",
    assignedClinics: ["Athapaththukanda", "Deyiyandara"],
    availableClinics: ["Athapaththukanda", "Polovita", "Deyiyandara", "Pallewella"],
  },
];

const clinicOptions = [
  'Athapaththukanda',
  'Polovita',
  'Deyiyandara',
  'Pallewella',
];

const Midwives = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isViewModalVisible, setIsViewModalVisible] = useState(false);
  const [isAssignModalVisible, setIsAssignModalVisible] = useState(false);
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

  const handleAssignCancel = () => {
    setIsAssignModalVisible(false);
  };

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const handleView = (midwife) => {
    setSelectedMidwife(midwife);
    setIsViewModalVisible(true);
  };

  const handleAssign = (midwife) => {
    setSelectedMidwife(midwife);
    setIsAssignModalVisible(true);
  };

  const handleFilterChange = (value) => {
    setFilters(value);
  };

  const filterData = (data) => {
    return data.filter((item) => {
      const matchesSearch = 
        item.id.toLowerCase().includes(searchText.toLowerCase()) ||
        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.date.toLowerCase().includes(searchText.toLowerCase()) ||
        item.status.toLowerCase().includes(searchText.toLowerCase());
  
      const matchesFilter = (filters || []).length === 0 || (filters || []).some(filter => (item.assignedClinics || []).includes(filter));
  
      return matchesSearch && matchesFilter;
    });
  };

  const renderStatusBar = (assignedClinics) => {
    const totalSegments = 4;
    const baseColor = '#967aa1'; // Base color for the status bar
    const lightColor = '#e0e4f1'; // Lighter shade of the base color
  
    // Calculate the percentage of the bar that should be filled
    const percentage = (assignedClinics.length / totalSegments) * 100;
  
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
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id.localeCompare(b.id),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      sorter: (a, b) => new Date(a.date) - new Date(b.date),
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Assigned Clinics',
      dataIndex: 'assignedClinics',
      key: 'assignedClinics',
      render: (text) => text.join(', '), // Join multiple clinics with a comma
      filters: clinicOptions.map(clinic => ({ text: clinic, value: clinic })),
      onFilter: (value, record) => record.assignedClinics.join(' , ').includes(value),
    },
    {
      title: ' ',
      key: 'StatusBar',
      render: (text, record) => renderStatusBar(record.assignedClinics),
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
            disabled={record.assignedClinics.length >= 3}
            onClick={() => handleAssign(record)}
            style={{
              color: record.assignedClinics.length >= 3 ? '#F0EEED' : '#192A51',
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
          dataSource={filterData(data)}
          columns={columnsMidwives}
          pagination={{ pageSize: 5 }}
          rowKey="id"
          onChange={(pagination, filters) => handleFilterChange(filters.assignedClinics)}
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
        <ProfileDetailsPopup
          visible={isViewModalVisible}
          profile={selectedMidwife}
          onCancel={handleViewCancel}
        />
      )}

      {selectedMidwife && (
        <AssignMidwifePopup
          visible={isAssignModalVisible}
          midwifeDetails={selectedMidwife}
          onClose={handleAssignCancel}
          onAssign={(id, clinics) => {
            notification.success({
              message: 'Success',
              description: `Midwife ${selectedMidwife.name} has been assigned to selected clinics.`,
              placement: 'bottomRight',
            });
            handleAssignCancel(); // Close the modal
          }}
        />
      )}
    </Box>
  );
};

export default Midwives;
