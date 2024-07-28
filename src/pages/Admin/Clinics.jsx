import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {
  Modal,
  Form,
  Input,
  Select,
  message,
  Button,
  Card,
  Row,
  Col,
  Table,
  Space,
} from "antd";

import AssignStaffPopup from "./AssignStaffPopup";
import ProfileDetailsPopup from "./ProfileDetailsPopup";

const { Option } = Select;
const { Search: AntSearch } = Input;

const Clinics = () => {
  const [value, setValue] = useState("1");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAssignPopupVisible, setIsAssignPopupVisible] = useState(false); // State for AssignClinicPopup
  const [selectedClinic, setSelectedClinic] = useState(null); // State for selected clinic
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [form] = Form.useForm();

  // Separate search states for each table
  const [searchTextExpectant, setSearchTextExpectant] = useState("");
  const [searchTextDelivered, setSearchTextDelivered] = useState("");
  const [searchTextChildren, setSearchTextChildren] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleAddClinic = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleOk = (values) => {
    console.log("New Clinic Details:", values);
    // Logic to add new clinic goes here
    message.success("Clinic Created Successfully!");
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
    setIsModalVisible(true);
  };

  const handleModalCancel = () => {
    setSelectedProfile(null);
  };

  const clinics = [
    {
      name: "Clinic A",
      location: "Location A",
      doctors: ["Doctor A"],
      midwives: ["Midwife 1", "Midwife 2", "Midwife 3"],
      expectantMothers: [
        {
          id: 1,
          RegistrationID: "A001",
          Name: "Alice",
          Age: 28,
          Condition: "Normal",
        },
        {
          id: 2,
          RegistrationID: "A002",
          Name: "Bella",
          Age: 30,
          Condition: "Risky",
        },
      ],
      deliveredMothers: [
        {
          id: 3,
          RegistrationID: "A003",
          Name: "Catherine",
          Age: 32,
          Condition: "Risky",
          DeliveredDate: "2024-07-20",
        },
        {
          id: 4,
          RegistrationID: "A004",
          Name: "Diana",
          Age: 29,
          Condition: "Normal",
          DeliveredDate: "2024-07-21",
        },
      ],
      children: [
        {
          id: 5,
          RegistrationID: "CA001",
          Name: "Ethan",
          GuardianName: "Alice",
          Age: 1,
          Condition: "Normal",
        },
        {
          id: 6,
          RegistrationID: "CA002",
          Name: "Fiona",
          GuardianName: "Catherine",
          Age: 2,
          Condition: "Normal",
        },
      ],
      stats: { birthCount: 5, deadBirthCount: 1, maternalDeathCount: 0 },
    },
    {
      name: "Clinic B",
      location: "Location B",
      doctors: ["Doctor B"],
      midwives: ["Midwife 4", "Midwife 5"],
      expectantMothers: [
        {
          id: 7,
          RegistrationID: "B001",
          Name: "Grace",
          Age: 30,
          Condition: "Risky",
        },
        {
          id: 8,
          RegistrationID: "B002",
          Name: "Hannah",
          Age: 28,
          Condition: "Normal",
        },
      ],
      deliveredMothers: [
        {
          id: 9,
          RegistrationID: "B003",
          Name: "Ivy",
          Age: 29,
          Condition: "Normal",
          DeliveredDate: "2024-07-21",
        },
        {
          id: 10,
          RegistrationID: "B004",
          Name: "Jasmine",
          Age: 31,
          Condition: "Risky",
          DeliveredDate: "2024-07-22",
        },
      ],
      children: [
        {
          id: 11,
          RegistrationID: "CB001",
          Name: "Kyle",
          GuardianName: "Grace",
          Age: 2,
          Condition: "Normal",
        },
        {
          id: 12,
          RegistrationID: "CB002",
          Name: "Liam",
          GuardianName: "Ivy",
          Age: 1,
          Condition: "Normal",
        },
      ],
      stats: { birthCount: 3, deadBirthCount: 0, maternalDeathCount: 0 },
    },
    {
      name: "Clinic C",
      location: "Location C",
      doctors: ["Doctor C"],
      midwives: ["Midwife 6", "Midwife 7", "Midwife 8"],
      expectantMothers: [
        {
          id: 13,
          RegistrationID: "C001",
          Name: "Mia",
          Age: 26,
          Condition: "Normal",
        },
        {
          id: 14,
          RegistrationID: "C002",
          Name: "Nina",
          Age: 27,
          Condition: "Risky",
        },
      ],
      deliveredMothers: [
        {
          id: 15,
          RegistrationID: "C003",
          Name: "Olivia",
          Age: 34,
          Condition: "Normal",
          DeliveredDate: "2024-07-22",
        },
        {
          id: 16,
          RegistrationID: "C004",
          Name: "Piper",
          Age: 33,
          Condition: "Risky",
          DeliveredDate: "2024-07-23",
        },
      ],
      children: [
        {
          id: 17,
          RegistrationID: "CC001",
          Name: "Quinn",
          GuardianName: "Mia",
          Age: 3,
          Condition: "Normal",
        },
        {
          id: 18,
          RegistrationID: "CC002",
          Name: "Riley",
          GuardianName: "Olivia",
          Age: 1,
          Condition: "Normal",
        },
      ],
      stats: { birthCount: 7, deadBirthCount: 1, maternalDeathCount: 1 },
    },
    {
      name: "Clinic D",
      location: "Location D",
      doctors: ["Doctor D"],
      midwives: ["Midwife 9", "Midwife 10"],
      expectantMothers: [
        {
          id: 19,
          RegistrationID: "D001",
          Name: "Sara",
          Age: 29,
          Condition: "Risky",
        },
        {
          id: 20,
          RegistrationID: "D002",
          Name: "Tina",
          Age: 30,
          Condition: "Normal",
        },
      ],
      deliveredMothers: [
        {
          id: 21,
          RegistrationID: "D003",
          Name: "Uma",
          Age: 31,
          Condition: "Risky",
          DeliveredDate: "2024-07-23",
        },
        {
          id: 22,
          RegistrationID: "D004",
          Name: "Violet",
          Age: 32,
          Condition: "Normal",
          DeliveredDate: "2024-07-24",
        },
      ],
      children: [
        {
          id: 23,
          RegistrationID: "CD001",
          Name: "Will",
          GuardianName: "Sara",
          Age: 2,
          Condition: "Normal",
        },
        {
          id: 24,
          RegistrationID: "CD002",
          Name: "Xander",
          GuardianName: "Uma",
          Age: 1,
          Condition: "Normal",
        },
      ],
      stats: { birthCount: 4, deadBirthCount: 2, maternalDeathCount: 0 },
    },
  ];

  const unassignedDoctors = [
    { name: "Dr. John Doe", clinics: ["Clinic A"] },
    { name: "Dr. Jane Smith", clinics: [] },
    { name: "Dr. Emily Johnson", clinics: ["Clinic B", "Clinic C"] },
    { name: "Dr. Michael Brown", clinics: [] },
    { name: "Dr. Linda Davis", clinics: ["Clinic D"] },
  ];

  const unassignedMidwives = [
    { name: "Midwife Alice Green", clinics: ["Clinic A", "Clinic B"] },
    { name: "Midwife Barbara White", clinics: [] },
    { name: "Midwife Carol Black", clinics: ["Clinic C"] },
    { name: "Midwife Diana Gray", clinics: [] },
    { name: "Midwife Evelyn Blue", clinics: ["Clinic D", "Clinic E"] },
  ];

  const handleAssignStaffClick = (clinic) => {
    setSelectedClinic(clinic);
    setIsAssignPopupVisible(true);
  };

  const handleAssignPopupCancel = () => {
    setIsAssignPopupVisible(false);
    setSelectedClinic(null);
  };

  const handleAssignPopupAssign = () => {
    // Handle the assignment logic
    setIsAssignPopupVisible(false);
    setSelectedClinic(null);
  };

  // Function to handle search text change for each table
  const handleSearchExpectant = (text) => {
    setSearchTextExpectant(text);
  };

  const handleSearchDelivered = (text) => {
    setSearchTextDelivered(text);
  };

  const handleSearchChildren = (text) => {
    setSearchTextChildren(text);
  };

  // Function to filter data based on search text for each table
  const filterDataExpectant = (data) => {
    return data.filter((item) => {
      return (
        item.RegistrationID.toLowerCase().includes(
          searchTextExpectant.toLowerCase()
        ) ||
        item.Name.toLowerCase().includes(searchTextExpectant.toLowerCase()) ||
        item.Condition.toLowerCase().includes(searchTextExpectant.toLowerCase())
      );
    });
  };

  const filterDataDelivered = (data) => {
    return data.filter((item) => {
      return (
        item.RegistrationID.toLowerCase().includes(
          searchTextDelivered.toLowerCase()
        ) ||
        item.Name.toLowerCase().includes(searchTextDelivered.toLowerCase()) ||
        item.Condition.toLowerCase().includes(searchTextDelivered.toLowerCase())
      );
    });
  };

  const filterDataChildren = (data) => {
    return data.filter((item) => {
      return (
        item.RegistrationID.toLowerCase().includes(
          searchTextChildren.toLowerCase()
        ) ||
        item.Name.toLowerCase().includes(searchTextChildren.toLowerCase()) ||
        (item.GuardianName &&
          item.GuardianName.toLowerCase().includes(
            searchTextChildren.toLowerCase()
          )) ||
        item.Condition.toLowerCase().includes(searchTextChildren.toLowerCase())
      );
    });
  };

  const columnsExpectantMothers = [
    {
      title: "Registration ID",
      dataIndex: "RegistrationID",
      key: "RegistrationID",
      sorter: (a, b) => a.RegistrationID.localeCompare(b.RegistrationID),
    },
    {
      title: "Name",
      dataIndex: "Name",
      key: "Name",
      sorter: (a, b) => a.Name.localeCompare(b.Name),
    },
    {
      title: "Age",
      dataIndex: "Age",
      key: "Age",
      sorter: (a, b) => a.Age - b.Age,
    },
    {
      title: "Condition",
      dataIndex: "Condition",
      key: "Condition",
      filters: [
        { text: "Normal", value: "Normal" },
        { text: "Risky", value: "Risky" },
      ],
      onFilter: (value, record) => record.Condition.includes(value),
    },
    {
      title: " ",
      key: "action",
      render: () => <Button type="link">View</Button>,
    },
  ];

  const columnsDeliveredMothers = [
    {
      title: "Registration ID",
      dataIndex: "RegistrationID",
      key: "RegistrationID",
      sorter: (a, b) => a.RegistrationID.localeCompare(b.RegistrationID),
    },
    {
      title: "Name",
      dataIndex: "Name",
      key: "Name",
      sorter: (a, b) => a.Name.localeCompare(b.Name),
    },
    {
      title: "Age",
      dataIndex: "Age",
      key: "Age",
      sorter: (a, b) => a.Age - b.Age,
    },
    {
      title: "Condition",
      dataIndex: "Condition",
      key: "Condition",
      filters: [
        { text: "Normal", value: "Normal" },
        { text: "Risky", value: "Risky" },
      ],
      onFilter: (value, record) => record.Condition.includes(value),
    },
    {
      title: "Delivered Date",
      dataIndex: "DeliveredDate",
      key: "DeliveredDate",
      sorter: (a, b) => new Date(a.DeliveredDate) - new Date(b.DeliveredDate),
    },
    {
      title: " ",
      key: "action",
      render: () => <Button type="link">View</Button>,
    },
  ];

  const columnsChildren = [
    {
      title: "Registration ID",
      dataIndex: "RegistrationID",
      key: "RegistrationID",
      sorter: (a, b) => a.RegistrationID.localeCompare(b.RegistrationID),
    },
    {
      title: "Name",
      dataIndex: "Name",
      key: "Name",
      sorter: (a, b) => a.Name.localeCompare(b.Name),
    },
    {
      title: "Guardian Name",
      dataIndex: "GuardianName",
      key: "GuardianName",
      sorter: (a, b) => a.GuardianName.localeCompare(b.GuardianName),
    },
    {
      title: "Age",
      dataIndex: "Age",
      key: "Age",
      sorter: (a, b) => a.Age - b.Age,
    },
    {
      title: "Condition",
      dataIndex: "Condition",
      key: "Condition",
      filters: [
        { text: "Normal", value: "Normal" },
        { text: "UnNormal", value: "UnNormal" },
      ],
      onFilter: (value, record) => record.Condition.includes(value),
    },
    {
      title: " ",
      key: "action",
      render: () => <Button type="link">View</Button>,
    },
  ];

  return (
    <Box
      sx={{ width: "100%", typography: "body1" }}
      className="clinics-container"
    >
      <Button
        variant="contained"
        onClick={handleAddClinic}
        style={{
          marginBottom: "20px",
          backgroundColor: "#192A51",
          color: "#fff",
        }}
        className="add-clinic-button"
      >
        + Add New Clinic
      </Button>
      <TabContext value={value}>
        <Box
          sx={{ borderBottom: 1, borderColor: "divider" }}
          className="tab-header"
        >
          <TabList onChange={handleChange} aria-label="clinic tabs">
            {clinics.map((clinic, index) => (
              <Tab
                key={index}
                label={clinic.name}
                value={`${index + 1}`}
                className="tab-item"
                sx={{
                  color:
                    value === `${index + 1}`
                      ? "#967aa1"
                      : "rgba(0, 0, 0, 0.58)",
                  fontWeight: value === `${index + 1}` ? 600 : "normal",
                  fontSize: 14,
                  mx: 2,
                }}
              />
            ))}
          </TabList>
        </Box>
        {clinics.map((clinic, index) => (
          <TabPanel key={index} value={`${index + 1}`} className="tab-panel">
            <Grid container spacing={2}>
              {/* Top section for clinic details, location, and action buttons */}
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 1,
                    mb: 3,
                    mt: 2,
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ fontSize: 16, fontWeight: "bold" }}
                      className="clinic-name"
                    >
                      {clinic.name}
                    </Typography>
                    <Typography
                      // variant="body1"
                      variant="subtitle1"
                      component="div"
                      sx={{ fontSize: 14, fontWeight: "bold" }}
                      className="clinic-location"
                    >
                      Location:{" "}
                      <span style={{ fontWeight: "normal" }}>
                        {clinic.location}
                      </span>
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Button
                      variant="contained"
                      type="primary"
                      style={{
                        backgroundColor: "#192A51",
                        color: "#fff",
                        borderRadius: "4px",
                        fontWeight: "bold",
                      }}
                      onClick={() => handleAssignStaffClick(clinic)}
                      className="assign-staff-button"
                      disabled={
                        clinic.doctors.length > 0 && clinic.midwives.length >= 3
                      }
                    >
                      Assign Staff
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: "#192A51",
                        color: "#192A51",
                        textTransform: "none",
                      }}
                      className="edit-button"
                    >
                      Edit Clinic
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: "#192A51",
                        color: "#192A51",
                        textTransform: "none",
                      }}
                      className="delete-button"
                    >
                      Delete Clinic
                    </Button>
                  </Box>
                </Box>
              </Grid>

              <Grid container item xs={12} spacing={2}>
                <Grid item xs={9.5}>
                  {/* Tables */}

                  {/* Section for expectant mothers table */}
                  <Row gutter={24} style={{ marginTop: 24 }}>
                    <Col span={24}>
                      <Card
                        title="Expectant Mothers"
                        extra={
                          <Space>
                            <AntSearch
                              placeholder="Search"
                              value={searchTextExpectant}
                              onChange={(e) =>
                                handleSearchExpectant(e.target.value)
                              }
                            />
                          </Space>
                        }
                      >
                        <Table
                          dataSource={filterDataExpectant(
                            clinic.expectantMothers
                          )}
                          columns={columnsExpectantMothers}
                          pagination={{ pageSize: 5 }}
                          rowKey="id"
                        />
                      </Card>
                    </Col>
                  </Row>

                  {/* Section for delivered mothers table */}
                  <Row gutter={24} style={{ marginTop: 50 }}>
                    <Col span={24}>
                      <Card
                        title="Delivered Mothers"
                        extra={
                          <Space>
                            <AntSearch
                              placeholder="Search"
                              value={searchTextDelivered}
                              onChange={(e) =>
                                handleSearchDelivered(e.target.value)
                              }
                            />
                          </Space>
                        }
                      >
                        <Table
                          dataSource={filterDataDelivered(
                            clinic.deliveredMothers
                          )}
                          columns={columnsDeliveredMothers}
                          pagination={{ pageSize: 5 }}
                          rowKey="id"
                        />
                      </Card>
                    </Col>
                  </Row>

                  {/* Section for children table */}
                  <Row gutter={24} style={{ marginTop: 50 }}>
                    <Col span={24}>
                      <Card
                        title="Children"
                        extra={
                          <Space>
                            <AntSearch
                              placeholder="Search"
                              value={searchTextChildren}
                              onChange={(e) =>
                                handleSearchChildren(e.target.value)
                              }
                            />
                          </Space>
                        }
                      >
                        <Table
                          dataSource={filterDataChildren(clinic.children)}
                          columns={columnsChildren}
                          pagination={{ pageSize: 5 }}
                          rowKey="id"
                        />
                      </Card>
                    </Col>
                  </Row>
                </Grid>

                {/* Doctor, midwives, and additional statistics section */}
                <Grid item xs={2.5}>
                  <Box sx={{ pl: 2 }}>
                    {/* Doctor and Midwives */}
                    <Box sx={{ pl: 2 }}>
                      {/* Doctor and Midwives */}
                      <Box
      sx={{
        marginTop: 3,
        border: "1px solid #F0EEED",
        borderRadius: 2,
        p: 3,
        mb: 5,
        height: "250px",
        cursor: "pointer",
        transition: "box-shadow 0.3s ease-in-out",
        "&:hover": {
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
        },
        "&:focus": {
          boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.4)",
          outline: "none",
        },
      }}
      tabIndex={0}
    >
      <Typography
        variant="h6"
        sx={{ fontSize: 14, fontWeight: "bold", mb: 2 }}
      >
        Doctor
      </Typography>
      <Typography
        variant="body1"
        className="clinic-info"
        sx={{
          fontSize: 14,
          fontWeight: "normal",
          mb: 3,
        }}
      >
        {clinic.doctors.length > 0 ? (
          <span
            style={{ cursor: "pointer" }}
            onClick={() =>
              setSelectedProfile({
                type: "doctor",
                profile: clinic.doctors[0],
              })
            }
          >
            • {clinic.doctors[0]}
          </span>
        ) : (
          " "
        )}
      </Typography>

      <Typography
        variant="h6"
        sx={{ fontSize: 14, fontWeight: "bold", mb: 1 }}
      >
        Midwives
      </Typography>
      {clinic.midwives.length > 0 && (
        <Typography
          variant="body1"
          className="clinic-info"
          sx={{ fontSize: 14, fontWeight: "normal", mb: 1 }}
        >
          <span
            style={{ cursor: "pointer" }}
            onClick={() =>
              setSelectedProfile({
                type: "midwife",
                profile: clinic.midwives[0],
              })
            }
          >
            • {clinic.midwives[0]}
          </span>
        </Typography>
      )}
      {clinic.midwives.length > 1 && (
        <Typography
          variant="body1"
          className="clinic-info"
          sx={{ fontSize: 14, fontWeight: "normal", mb: 1 }}
        >
          <span
            style={{ cursor: "pointer" }}
            onClick={() =>
              setSelectedProfile({
                type: "midwife",
                profile: clinic.midwives[1],
              })
            }
          >
            • {clinic.midwives[1]}
          </span>
        </Typography>
      )}
      {clinic.midwives.length > 2 && (
        <Typography
          variant="body1"
          className="clinic-info"
          sx={{ fontSize: 14, fontWeight: "normal" }}
        >
          <span
            style={{ cursor: "pointer" }}
            onClick={() =>
              setSelectedProfile({
                type: "midwife",
                profile: clinic.midwives[2],
              })
            }
          >
            • {clinic.midwives[2]}
          </span>
        </Typography>
      )}
    </Box>
                    </Box>

                    <ProfileDetailsPopup
  visible={!!selectedProfile}
  profile={selectedProfile}
  onCancel={() => setSelectedProfile(null)}
/>

                    {/* Additional statistics */}
                    <Box
                      sx={{
                        border: "1px solid #F0EEED",
                        borderRadius: 2,
                        p: 3,
                        minHeight: "250px",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{ fontSize: 14, fontWeight: "normal" }}
                      >
                        This Month Birth Count: {clinic.stats.birthCount}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ fontSize: 14, fontWeight: "normal" }}
                      >
                        Total Dead Birth Count:{" "}
                        <span style={{ fontWeight: "normal" }}>
                          {clinic.stats.deadBirthCount}
                        </span>
                      </Typography>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mt: 2 }}
                      >
                        <Typography
                          variant="body1"
                          sx={{ ml: 1, fontSize: 14, fontWeight: "bold" }}
                        >
                          Statistics Chart
                        </Typography>
                      </Box>

                      <Button variant="contained" sx={{ mt: 2 }}>
                        Generate Report
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </TabPanel>
        ))}
      </TabContext>

      <Modal
        title={
          <Typography variant="h6" sx={{ fontSize: 20, fontWeight: "bold" }}>
            Add New Clinic
          </Typography>
        }
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <Button
              key="back"
              onClick={handleCancel}
              style={{
                color: "#967aa1",
                border: "none",
              }}
            >
              Cancel
            </Button>
            <Button
              key="submit"
              type="primary"
              onClick={() => form.submit()}
              style={{
                backgroundColor: "#967aa1",
                borderColor: "#967aa1",
                color: "#fff",
              }}
            >
              Create
            </Button>
          </div>,
        ]}
        centered
      >
        <Form form={form} layout="vertical" onFinish={handleOk}>
          <Form.Item
            label={<span style={{ fontWeight: "bold" }}>Clinic Name</span>}
            name="name"
            rules={[
              { required: true, message: "Please enter the clinic name" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={<span style={{ fontWeight: "bold" }}>Location</span>}
            name="location"
            rules={[
              { required: true, message: "Please enter the clinic location" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={<span style={{ fontWeight: "bold" }}>Doctor</span>}
            name="doctor"
            rules={[{ required: true, message: "Please select a doctor" }]}
          >
            <Select placeholder="Select a doctor">
              <Option value="doctor1">Doctor 1</Option>
              <Option value="doctor2">Doctor 2</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label={<span style={{ fontWeight: "bold" }}>Midwife 1</span>}
            name="midwife1"
            rules={[{ required: true, message: "Please select a midwife" }]}
          >
            <Select placeholder="Select a midwife">
              <Option value="midwife1">Midwife 1</Option>
              <Option value="midwife2">Midwife 2</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label={<span style={{ fontWeight: "bold" }}>Midwife 2</span>}
            name="midwife2"
          >
            <Select placeholder="Select a midwife">
              <Option value="midwife1">Midwife 2</Option>
              <Option value="midwife2">Midwife 3</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label={<span style={{ fontWeight: "bold" }}>Midwife 3</span>}
            name="midwife3"
          >
            <Select placeholder="Select a midwife">
              <Option value="midwife1">Midwife 3</Option>
              <Option value="midwife2">Midwife 4</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>

      {selectedClinic && (
        <AssignStaffPopup
          visible={isAssignPopupVisible}
          onCancel={handleAssignPopupCancel}
          clinic={selectedClinic}
          unassignedDoctors={unassignedDoctors}
          unassignedMidwives={unassignedMidwives}
          onAssign={handleAssignPopupAssign}
        />
      )}
    </Box>
  );
};

export default Clinics;
