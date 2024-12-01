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

import AssignStaffPopup from "../../components/Admin/AssignStaffPopup";
import ProfileDetailsPopup from "../../components/Admin/ProfileDetailsPopup";
import ExpectantMotherProfilePopup from "../../components/Admin/ExpectantMotherProfilePopup";
import DeliveredMotherProfilePopup from "../../components/Admin/DeliveredMotherProfilePopup";
import ChildProfilePopup from "../../components/Admin/ChildProfilePopup";

const { Option } = Select;
const { Search: AntSearch } = Input;

const Clinics = () => {
  const [value, setValue] = useState("1"); // State to track the current tab value
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAssignPopupVisible, setIsAssignPopupVisible] = useState(false); // State for AssignClinicPopup
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [selectedClinic, setSelectedClinic] = useState(null); // State for selected clinic
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [visibleExpectant, setVisibleExpectant] = useState(false);
  const [visibleDelivered, setVisibleDelivered] = useState(false);
  const [visibleChild, setVisibleChild] = useState(false);
  const [form] = Form.useForm();

  // Single doctor responsible for all clinics
  const responsibleDoctor = "Dr. Sujeewa Kumara";

  const clinics = [
    {
      name: "Athapaththukanda",
      id: "A5",
      created_at: "2019-02-12",
      location: "Community Hall",
      midwives: ["Niramala Wasanthi", "Maduri Gunawardana", "Vishaka Sugandi"],
      expectantMothers: [
        {
          id: 1,
          RegistrationID: "A001",
          Name: "Waruni Kumari",
          Age: 28,
          Condition: "Normal",
        },
      ],
      deliveredMothers: [
        {
          id: 3,
          RegistrationID: "A003",
          Name: "Riya Sahandi",
          Age: 32,
          Condition: "Risky",
          DeliveredDate: "2024-07-20",
        },
      ],
      children: [
        {
          id: 5,
          RegistrationID: "CA001",
          Name: "Suramya Fernando",
          GuardianName: "Aruni Perera",
          Age: 1,
          Condition: "Normal",
        },
      ],
      stats: { birthCount: 5, deadBirthCount: 1, maternalDeathCount: 0 },
    },
    {
      name: "Pallewella",
      id: "A5",
      created_at: "2019-02-12",
      location: "Temple",
      midwives: ["Niramala Wasanthi", "Maduri Gunawardana", "Vishaka Sugandi"],
      expectantMothers: [
        {
          id: 7,
          RegistrationID: "B001",
          Name: "Waruni Kumari",
          Age: 30,
          Condition: "Risky",
        },
      ],
      deliveredMothers: [
        {
          id: 9,
          RegistrationID: "B003",
          Name: "Riya Sahandi",
          Age: 29,
          Condition: "Normal",
          DeliveredDate: "2024-07-21",
        },
      ],
      children: [
        {
          id: 11,
          RegistrationID: "CB001",
          Name: "Suramya Fernando",
          GuardianName: "Aruni Perera",
          Age: 2,
          Condition: "Normal",
        },
      ],
      stats: { birthCount: 3, deadBirthCount: 0, maternalDeathCount: 0 },
    },
    {
      name: "Deyiyandara",
      id: "A5",
      created_at: "2019-02-12",
      location: "Community Hall",
      midwives: ["Niramala Wasanthi"],
      expectantMothers: [
        {
          id: 13,
          RegistrationID: "C001",
          Name: "Waruni Kumari",
          Age: 26,
          Condition: "Normal",
        },
      ],
      deliveredMothers: [
        {
          id: 15,
          RegistrationID: "C003",
          Name: "Riya Sahandi",
          Age: 34,
          Condition: "Normal",
          DeliveredDate: "2024-07-22",
        },
      ],
      children: [
        {
          id: 17,
          RegistrationID: "CC001",
          Name: "Suramya Fernando",
          GuardianName: "Aruni Perera",
          Age: 3,
          Condition: "Normal",
        },
      ],
      stats: { birthCount: 7, deadBirthCount: 1, maternalDeathCount: 1 },
    },
    {
      name: "Bamunugama",
      id: "A5",
      created_at: "2019-02-12",
      location: "Community Hall",
      midwives: ["Niramala Wasanthi", "Vishaka Sugandi"],
      expectantMothers: [
        {
          id: 19,
          RegistrationID: "D001",
          Name: "Waruni Kumari",
          Age: 29,
          Condition: "Risky",
        },
      ],
      deliveredMothers: [
        {
          id: 21,
          RegistrationID: "D003",
          Name: "Riya Sahandi",
          Age: 31,
          Condition: "Risky",
          DeliveredDate: "2024-07-23",
        },
      ],
      children: [
        {
          id: 23,
          RegistrationID: "CD001",
          Name: "Suramya Fernando",
          GuardianName: "Aruni Perera",
          Age: 2,
          Condition: "Normal",
        },
      ],
      stats: { birthCount: 4, deadBirthCount: 2, maternalDeathCount: 0 },
    },
  ];

  // unassigned midwives data
  const unassignedMidwives = [
    { name: "Nirmala peris", clinics: ["Bamunugama", "Deyiyanada"] },
    { name: "Uma Perera", clinics: [] }, // Unassigned
    {
      name: "Wasanthi Siva",
      clinics: ["Deyiyanadara", "Athapaththukanada", "Polovita"],
    }, // Assigned to three clinics (maximum)
    { name: "Diana Kumari", clinics: [] }, // Unassigned
    { name: "Sumana Disanayaka", clinics: ["Athapaththukanda"] }, // Assigned to one clinic
  ];

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
      render: (text, record) => (
        <Button
          type="link"
          onClick={() => handleViewProfile(record, "expectant")}
        >
          View
        </Button>
      ),
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
      render: (text, record) => (
        <Button
          type="link"
          onClick={() => handleViewProfile(record, "delivered")}
        >
          View
        </Button>
      ),
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
      render: (text, record) => (
        <Button type="link" onClick={() => handleViewProfile(record, "child")}>
          View
        </Button>
      ),
    },
  ];

  // Separate search states for each table
  const [searchTextExpectant, setSearchTextExpectant] = useState("");
  const [searchTextDelivered, setSearchTextDelivered] = useState("");
  const [searchTextChildren, setSearchTextChildren] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleEditClinic = (clinic) => {
    setSelectedClinic(clinic);
    setIsEditModalVisible(true);
    form.setFieldsValue({
      name: clinic.name,
      location: clinic.location,
      midwife1: clinic.midwives[0],
      midwife2: clinic.midwives[1],
      midwife3: clinic.midwives[2],
    });
  };

  const handleEditOk = (values) => {
    console.log("Edited Clinic Details:", values);
    // Logic to update clinic goes here
    message.success("Clinic Updated Successfully!");
    setIsEditModalVisible(false);
    form.resetFields();
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

  // Function to handle dropdown selection change
  const handleClinicChange = (value) => {
    setValue(value);
  };

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

  const handleViewProfile = (profile, type) => {
    setSelectedProfile({ ...profile, type });
    if (type === "expectant") setVisibleExpectant(true);
    if (type === "delivered") setVisibleDelivered(true);
    if (type === "child") setVisibleChild(true);
  };

  const handleDoctorMidwifeProfileClick = (profile) => {
    setSelectedProfile(profile);
    setIsModalVisible(true);
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

  return (
    <Box
      sx={{ width: "100%", typography: "body1" }}
      className="clinics-container"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        {/* Dropdown to select clinic */}
        <Select
          value={value}
          onChange={handleClinicChange}
          style={{
            width: "30%",
            height: "40px",
          }}
        >
          {clinics.map((clinic, index) => (
            <Option
              key={clinic.id}
              value={`${index + 1}`}
              // sx={{ padding: "10px", backgroundColor: '#000' }}
            >
              {clinic.name}
            </Option>
          ))}
        </Select>

        <Button
          variant="contained"
          onClick={handleAddClinic}
          style={{
            backgroundColor: "#192A51",
            color: "#fff",
            width: "150px",
            padding: "20px",
            borderRadius: "10px",
            marginLeft: "auto", // Ensures the button stays at the end of the container
          }}
          className="add-clinic-button"
        >
          + Add New Clinic
        </Button>
      </div>

      <TabContext value={value}>
        <Box
          sx={{ borderBottom: 1, borderColor: "#f0f0f0" }}
          className="tab-header"
        >
          {/* <TabList
          onChange={handleChange}
          aria-label="clinic tabs"
          sx={{ borderBottom: "none", marginBottom: 0, marginTop: 0 }}
        > */}
          {/* No Tab components are rendered here */}
          {/* </TabList> */}
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
                      sx={{ fontSize: 20, fontWeight: "bold", marginBottom: 2 }}
                      className="clinic-name"
                    >
                      {clinic.name}
                    </Typography>
                    <Typography
                      // variant="body1"
                      variant="subtitle1"
                      component="div"
                      sx={{ fontSize: 14, fontWeight: "bold" }}
                      className="clinic-id"
                    >
                      Clinic ID:{" "}
                      <span
                        style={{ marginLeft: "10px", fontWeight: "normal" }}
                      >
                        {clinic.id}
                      </span>
                    </Typography>
                    <Typography
                      // variant="body1"
                      variant="subtitle1"
                      component="div"
                      sx={{ fontSize: 14, fontWeight: "bold" }}
                      className="clinic-location"
                    >
                      Location:{" "}
                      <span
                        style={{ marginLeft: "10px", fontWeight: "normal" }}
                      >
                        {clinic.location}
                      </span>
                    </Typography>
                    <Typography
                      // variant="body1"
                      variant="subtitle1"
                      component="div"
                      sx={{ fontSize: 14, fontWeight: "bold" }}
                      className="clinic-createDate"
                    >
                      Created Date:{"  "}
                      <span
                        style={{ marginLeft: "10px", fontWeight: "normal" }}
                      >
                        {clinic.created_at}
                      </span>
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Button
                      variant="contained"
                      type="primary"
                      onClick={() => handleAssignStaffClick(clinic)}
                      className="assign-staff-button"
                      disabled={clinic.midwives.length === 3}
                      style={{
                        padding: "20px",
                        width: "150px",
                        backgroundColor: "#D5C6E0",
                        color: "#967aa1",
                        borderRadius: "10px",
                        "&.Mui-disabled": {
                          backgroundColor: "#ccc", // Optional: Change color when disabled
                          color: "#888", // Optional: Change text color when disabled
                        },
                      }}
                    >
                      Assign Staff
                    </Button>
                    <Button
                      variant="contained"
                      style={{
                        padding: "20px",
                        width: "150px",
                        backgroundColor: "#D5C6E0",
                        color: "#967aa1",
                        borderRadius: "10px",
                      }}
                      className="edit-button"
                      onClick={() => handleEditClinic(clinic)}
                    >
                      Edit Clinic
                    </Button>
                  </Box>
                </Box>
              </Grid>

              <Grid container item xs={12} spacing={2}>
                <Grid item xs={9}>
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
                <Grid item xs={3}>
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
                          Width: "250px",
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
                          sx={{ fontSize: 13, fontWeight: "bold", mb: 2 }}
                        >
                          Doctor
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ fontSize: 13, fontWeight: "normal", mb: 3 }}
                        >
                          <span
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              setSelectedProfile(responsibleDoctor)
                            }
                          >
                            • {responsibleDoctor}
                          </span>
                        </Typography>

                        <Typography
                          variant="h6"
                          sx={{ fontSize: 13, fontWeight: "bold", mb: 1 }}
                        >
                          Midwives
                        </Typography>
                        {clinic.midwives.map((midwife, index) => (
                          <Typography
                            key={index}
                            variant="body1"
                            sx={{ fontSize: 13, fontWeight: "normal", mb: 1 }}
                          >
                            <span
                              style={{ cursor: "pointer" }}
                              onClick={() => setSelectedProfile(midwife)}
                            >
                              • {midwife}
                            </span>
                          </Typography>
                        ))}
                      </Box>
                    </Box>

                    {/* <ProfileDetailsPopup
                      visible={!!selectedProfile}
                      profile={selectedProfile}
                      onCancel={() => setSelectedProfile(null)}
                    /> */}

                    {selectedProfile && selectedProfile.type === undefined && (
                      <ProfileDetailsPopup
                        visible={isModalVisible}
                        profile={selectedProfile}
                        onCancel={() => {
                          setSelectedProfile(null);
                          setIsModalVisible(false);
                        }}
                      />
                    )}

                    {/* Additional statistics */}
                    <Box
                      sx={{
                        marginTop: 3,
                        border: "1px solid #F0EEED",
                        borderRadius: 2,
                        p: 3,
                        mb: 5,
                        minHeight: "250px",
                        Width: "250px",
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
                    >
                      <Typography
                        variant="h6"
                        sx={{ fontSize: 13, fontWeight: "normal", mb: 1 }}
                      >
                        This Month Birth Count: {clinic.stats.birthCount}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ fontSize: 13, fontWeight: "normal", mb: 1 }}
                      >
                        Total Expectant Mothers Count:{" "}
                        <span style={{ fontWeight: "normal" }}>
                          {clinic.stats.deadBirthCount}
                        </span>
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ fontSize: 13, fontWeight: "normal", mb: 1 }}
                      >
                        Total Delivered Mothers Count:{" "}
                        <span style={{ fontWeight: "normal" }}>
                          {clinic.stats.deadBirthCount}
                        </span>
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ fontSize: 13, fontWeight: "normal", mb: 1 }}
                      >
                        Total Dead Birth Count:{" "}
                        <span style={{ fontWeight: "normal" }}>
                          {clinic.stats.deadBirthCount}
                        </span>
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ fontSize: 13, fontWeight: "normal", mb: 1 }}
                      >
                        Total Maternal Death Count:{" "}
                        <span style={{ fontWeight: "normal" }}>
                          {clinic.stats.deadBirthCount}
                        </span>
                      </Typography>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mt: 2 }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            ml: 1,
                            fontSize: 13,
                            fontWeight: "bold",
                            marginBottom: "50px",
                          }}
                        ></Typography>
                      </Box>

                      <Button
                        variant="contained"
                        style={{
                          padding: "20px",
                          width: "150px",
                          backgroundColor: "#D5C6E0",
                          color: "#967aa1",
                          borderRadius: "10px",
                          marginBottom: "10px",
                        }}
                        className="edit-button"
                      >
                        Generate Report
                      </Button>

                      <Button
                        variant="contained"
                        style={{
                          padding: "20px",
                          width: "150px",
                          backgroundColor: "#D5C6E0",
                          color: "#967aa1",
                          borderRadius: "10px",
                        }}
                        className="edit-button"
                      >
                        Statistics Chart
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
            label={<span style={{ fontWeight: "bold" }}>Midwife - 1</span>}
            name="midwife1"
            rules={[{ required: true, message: "Please select a midwife" }]}
          >
            <Select placeholder="Select a midwife">
              <Option value="midwife1">Kamala Gamage</Option>
              <Option value="midwife2">Nirmala Bandara</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label={<span style={{ fontWeight: "bold" }}>Midwife 2</span>}
            name="midwife2"
            rules={[{ required: true, message: "Please select a midwife" }]}
          ></Form.Item>
          <Form.Item
            label={<span style={{ fontWeight: "bold" }}>Midwife 3</span>}
            name="midwife3"
          >
            <Select placeholder="Select a midwife">
              <Option value="midwife1">Divya Gunawaradana</Option>
              <Option value="midwife2">Suramaya Fernando</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>

      {selectedClinic && (
        <AssignStaffPopup
          visible={isAssignPopupVisible}
          onCancel={handleAssignPopupCancel}
          clinic={selectedClinic}
          unassignedMidwives={unassignedMidwives}
          onAssign={handleAssignPopupAssign}
        />
      )}

      <Modal
        title={
          <Typography variant="h6" sx={{ fontSize: 20, fontWeight: "bold" }}>
            Edit Clinic
          </Typography>
        }
        visible={isEditModalVisible}
        onCancel={() => setIsEditModalVisible(false)}
        footer={[
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <Button
              key="back"
              onClick={() => setIsEditModalVisible(false)}
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
              Update
            </Button>
          </div>,
        ]}
        centered
      >
        <Form form={form} layout="vertical" onFinish={handleEditOk}>
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
            label={<span style={{ fontWeight: "bold" }}>Midwife 1</span>}
            name="midwife1"
            rules={[{ required: true, message: "Please select a midwife" }]}
          >
            <Select placeholder="Select a midwife">
              {unassignedMidwives.map((midwife) => (
                <Option key={midwife.name} value={midwife.name}>
                  {midwife.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label={<span style={{ fontWeight: "bold" }}>Midwife 2</span>}
            name="midwife2"
            rules={[{ required: true, message: "Please select a midwife" }]}
          >
            <Select placeholder="Select a midwife">
              {unassignedMidwives.map((midwife) => (
                <Option key={midwife.name} value={midwife.name}>
                  {midwife.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label={<span style={{ fontWeight: "bold" }}>Midwife 3</span>}
            name="midwife3"
          >
            <Select placeholder="Select a midwife">
              {unassignedMidwives.map((midwife) => (
                <Option key={midwife.name} value={midwife.name}>
                  {midwife.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </Modal>

      {/* Expectant Mother Profile Pop-Up */}
      {visibleExpectant && (
        <ExpectantMotherProfilePopup
          visible={visibleExpectant}
          profile={selectedProfile}
          onCancel={() => setVisibleExpectant(false)}
        />
      )}

      {/* Delivered Mother Profile Pop-Up */}
      {visibleDelivered && (
        <DeliveredMotherProfilePopup
          visible={visibleDelivered}
          profile={selectedProfile}
          onCancel={() => setVisibleDelivered(false)}
        />
      )}

      {/* Child Profile Pop-Up */}
      {visibleChild && (
        <ChildProfilePopup
          visible={visibleChild}
          profile={selectedProfile}
          onCancel={() => setVisibleChild(false)}
        />
      )}
    </Box>
  );
};

export default Clinics;

