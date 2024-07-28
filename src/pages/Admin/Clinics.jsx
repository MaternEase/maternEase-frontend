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

const { Option } = Select;
const { Search: AntSearch } = Input;

const Clinics = () => {
  const [value, setValue] = useState("1");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [form] = Form.useForm();
  const [searchText, setSearchText] = useState("");

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

  const handleBoxClick = () => {
    // Emphasize the box on click (example: changing the background color)
    // This can be customized as per the design requirements
    console.log("Box clicked");
  };

  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
    setIsModalVisible(true);
  };

  const handleModalCancel = () => {
    setSelectedProfile(null);
  };

  const clinics = [
 // clinic details
  ];

  // Function to handle search text change
  const handleSearch = (text) => {
    setSearchText(text);
  };

  // Function to filter data based on search text
  const filterData = (data) => {
    return data.filter((item) => {
      return (
        item.RegistrationID.toLowerCase().includes(searchText.toLowerCase()) ||
        item.Name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.Condition.toLowerCase().includes(searchText.toLowerCase()) ||
        (item.GuardianName &&
          item.GuardianName.toLowerCase().includes(searchText.toLowerCase()))
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
        { text: "Healthy", value: "Healthy" },
        { text: "Unhealthy", value: "Unhealthy" },
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
                      color="primary"
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
                              placeholder="Search Expectant Mothers"
                              onSearch={handleSearch}
                              onChange={(e) => handleSearch(e.target.value)}
                              style={{ width: 300 }}
                            />
                          </Space>
                        }
                      >
                        <Table
                          dataSource={clinic.expectantMothers}
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
                              placeholder="Search Delivered Mothers"
                              onSearch={handleSearch}
                              onChange={(e) => handleSearch(e.target.value)}
                              style={{ width: 300 }}
                            />
                          </Space>
                        }
                      >
                        <Table
                          dataSource={clinic.deliveredMothers}
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
                              placeholder="Search Children"
                              onSearch={handleSearch}
                              onChange={(e) => handleSearch(e.target.value)}
                              style={{ width: 300 }}
                            />
                          </Space>
                        }
                      >
                        <Table
                          dataSource={clinic.children}
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
                          boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.4)", // Added for focus effect
                          outline: "none",
                        },
                      }}
                      tabIndex={0} // Added for focusable box
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

                    <Modal
                      visible={!!selectedProfile}
                      onCancel={() => setSelectedProfile(null)}
                      footer={null}
                    >
                      {selectedProfile && (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                          }}
                        >
                          <Typography
                            variant="h6"
                            style={{
                              marginBottom: "30px",
                              fontWeight: "bold",
                              fontSize: "20px",
                              alignSelf: "flex-start",
                            }}
                          >
                            {selectedProfile.type === "doctor"
                              ? "Doctor's Details"
                              : "Midwife Details"}
                          </Typography>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "flex-start",
                            }}
                          >
                            <img
                              src="/mnt/data/image.png" // Replace with the correct path to the image file
                              alt="Profile"
                              style={{
                                width: "150px",
                                height: "150px",
                                marginRight: "20px",
                              }}
                            />
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <Typography
                                variant="body1"
                                style={{ fontSize: "14px" }}
                              >
                                <b>Full name:</b> {selectedProfile.profile}
                              </Typography>
                              <Typography
                                variant="body1"
                                style={{ fontSize: "14px" }}
                              >
                                <b>Age:</b> {selectedProfile.age}
                              </Typography>
                              <Typography
                                variant="body1"
                                style={{ fontSize: "14px" }}
                              >
                                <b>DOB:</b> {selectedProfile.dob}
                              </Typography>
                              <Typography
                                variant="body1"
                                style={{ fontSize: "14px" }}
                              >
                                <b>Telephone:</b> {selectedProfile.telephone}
                              </Typography>
                              <Typography
                                variant="body1"
                                style={{ fontSize: "14px" }}
                              >
                                <b>Address:</b> {selectedProfile.address}
                              </Typography>
                              <Typography
                                variant="body1"
                                style={{ fontSize: "14px" }}
                              >
                                <b>Assigned Clinics:</b>{" "}
                                {selectedProfile.clinics}
                              </Typography>
                              <Typography
                                variant="body1"
                                style={{ fontSize: "14px" }}
                              >
                                <b>Registered Date:</b>{" "}
                                {selectedProfile.registeredDate}
                              </Typography>
                              <Typography
                                variant="body1"
                                style={{ fontSize: "14px" }}
                              >
                                <b>Experience:</b> {selectedProfile.experience}
                              </Typography>
                            </div>
                          </div>
                          <Button
                            style={{
                              backgroundColor: "#967aa1",
                              color: "#fff",
                              marginTop: "10px",
                              alignSelf: "flex-start",
                            }}
                          >
                            Edit
                          </Button>
                        </div>
                      )}
                    </Modal>

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
    </Box>
  );
};

export default Clinics;
