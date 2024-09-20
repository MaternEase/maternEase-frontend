import React, { useState } from "react";
import { Box, Grid, Typography, Avatar, Button, Divider } from "@mui/material";
import { Modal, Form, Input, Select, Table } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import doctorImage1 from '../../assets/images/doctor11.jpg';

const { Option } = Select;
const { Search } = Input;

// Example generated data for Doctors
const generatedDoctors = [
  {
    StaffId: "D001",
    FullName: "Dr. Sarath Wimalasena",
    Age: 34,
    DOB: "1989-02-15",
    RegisteredDate: "2023-03-12",
    Status: "Assigned",
    Address: "101 Park Ave, Hewagama, Moratuwa",
    Telephone: "555-1122",
    ProfileImage: doctorImage1,
    AssignedClinicsDetails: "Athapaththukanda",
    Experience: "10 years",
  },
  {
    StaffId: "D002",
    FullName: "Dr. Sujeewa Kumarasena",
    Age: 40,
    DOB: "1983-06-10",
    RegisteredDate: "2022-08-05",
    Status: "Assigned",
    Address: "202 Temple St, Siripura, Mathara",
    Telephone: "555-2233",
    ProfileImage: doctorImage1,
    AssignedClinicsDetails: "Bamunugama",
    Experience: "15 years",
  },
];

// Define filter options
// const clinicOptions = [
//   'Athapaththukanda',
//   'Bamunugama',
//   'Clinic C',
//   'Clinic D',
//   'Clinic X',
//   'Clinic Y',
//   'Clinic Z',
// ];

const Doctors = ({ clinic = { Doctors: generatedDoctors } }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [form] = Form.useForm();
  const [searchText, setSearchText] = useState("");
  const [filters, setFilters] = useState([]);

  const handleAddClinic = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const handleView = (doctor) => {
    setSelectedDoctor(doctor);
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

      const matchesFilter =
        (filters || []).length === 0 ||
        (filters || []).some((filter) =>
          (item.AssignedClinicsDetails || "").includes(filter)
        );

      return matchesSearch && matchesFilter;
    });
  };

  const renderAssignedStatus = (assignedClinicsDetails) =>
    assignedClinicsDetails ? (
      <CheckCircleOutlined style={{ color: "#967aa1" }} />
    ) : null;

  const columnsDoctors = [
    {
      title: "Staff ID",
      dataIndex: "StaffId",
      key: "StaffId",
      sorter: (a, b) => a.StaffId.localeCompare(b.StaffId),
    },
    {
      title: "Full Name",
      dataIndex: "FullName",
      key: "FullName",
      sorter: (a, b) => a.FullName.localeCompare(b.FullName),
    },
    {
      title: "Registered Date",
      dataIndex: "RegisteredDate",
      key: "RegisteredDate",
      sorter: (a, b) => new Date(a.RegisteredDate) - new Date(b.RegisteredDate),
    },
    // {
    //   title: 'Assigned Clinics',
    //   dataIndex: 'AssignedClinicsDetails',
    //   key: 'AssignedClinicsDetails',
    //   filters: clinicOptions.map(clinic => ({ text: clinic, value: clinic })),
    //   onFilter: (value, record) => record.AssignedClinicsDetails.includes(value),
    // },
    // {
    //   title: ' ',
    //   key: 'AssignedStatus',
    //   render: (text, record) => renderAssignedStatus(record.AssignedClinicsDetails),
    // },
    {
      title: " ",
      key: "actions",
      render: (text, record) => (
        <div>
          <Button
            type="link"
            onClick={() => handleView(record)}
            style={{ color: "#192A51" }}
          >
            View
          </Button>
          <Button
            type="link"
            disabled={!!record.AssignedClinicsDetails}
            onClick={handleAddClinic}
            style={{
              color: record.AssignedClinicsDetails ? "#F0EEED" : "#192A51",
            }}
          >
            Assign
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Box
      sx={{ width: "100%", typography: "body1" }}
      className="clinics-container"
    >
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
          style={{ width: 300, marginBottom: 16, color: "#967aa1" }}
          onFocus={(e) => (e.target.style.borderColor = "#192A51")}
          onBlur={(e) => (e.target.style.borderColor = "")}
        />
        <Table
          dataSource={filterData(clinic.Doctors || [])}
          columns={columnsDoctors}
          pagination={{ pageSize: 5 }}
          rowKey="StaffId"
          onChange={(pagination, filters) =>
            handleFilterChange(filters.AssignedClinicsDetails)
          }
        />
      </Grid>

      {selectedDoctor && (
        <Box
          sx={{
            padding: 2,
            border: "1px solid #f0f0f0",
            borderRadius: "10px",
            marginTop: 2,
          }}
        >
          <Typography
            variant="h6"
            style={{ marginBottom: "30px", color: "#000" }}
          >
            Doctor's Details
          </Typography>
          <Box
            sx={{ display: "flex", alignItems: "flex-start", marginBottom: 2, width: "100%" }}
          >
            <Avatar
              size={64}
              src={selectedDoctor.ProfileImage}
              sx={{ width: "20%", height: "auto", marginRight: 10, marginLeft: 5, }}
            />
            <Box sx={{ flex: 1, marginLeft: "100px" }}>
              <Typography
                variant="h6"
                style={{ fontSize: "16px", marginBottom: "20px" }}
              >
                {selectedDoctor.FullName}
              </Typography>
              <Typography variant="body2" style={{ fontSize: "14px" }}>
                <strong>Age :</strong>
                <br />
                {selectedDoctor.Age}
              </Typography>
              <Typography
                variant="body2"
                style={{ fontSize: "14px", marginTop: "10px" }}
              >
                <strong>Date of Birth :</strong>
                <br />
                {selectedDoctor.DOB}
              </Typography>
              <Typography
                variant="body2"
                style={{ fontSize: "14px", marginTop: "10px" }}
              >
                <strong>Registered Date :</strong>
                <br />
                {selectedDoctor.RegisteredDate}
              </Typography>
              <Typography
                variant="body2"
                style={{ fontSize: "14px", marginTop: "10px" }}
              >
                <strong>Status :</strong>
                <br />
                {selectedDoctor.Status}
              </Typography>
              <Typography
                variant="body2"
                style={{ fontSize: "14px", marginTop: "10px" }}
              >
                <strong>Address :</strong>
                <br />
                {selectedDoctor.Address}
              </Typography>
              <Typography
                variant="body2"
                style={{ fontSize: "14px", marginTop: "10px" }}
              >
                <strong>Telephone :</strong>
                <br />
                {selectedDoctor.Telephone}
              </Typography>
              <Typography
                variant="body2"
                style={{ fontSize: "14px", marginTop: "10px" }}
              >
                <strong>Experience :</strong>
                <br />
                {selectedDoctor.Experience}
              </Typography>
            </Box>
          </Box>
          {/* <Button
            style={{
              backgroundColor: "#967aa1",
              color: "#fff",
              marginTop: "20px",
              display: "block",
            }}
            onClick={handleAddClinic}
            disabled={!!selectedDoctor.AssignedClinicsDetails}
          >
            Assign
          </Button> */}
        </Box>
      )}

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
    </Box>
  );
};

export default Doctors;
