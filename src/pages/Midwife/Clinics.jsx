import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {
  Form,
  Input,
  Card,
  Row,
  Col,
  Table,
  Space,
} from "antd";
import { Button as AntButton } from "antd";
import ProfileDetailsPopup from "./ProfileDetailsPopup";

const { Search: AntSearch } = Input;

const Clinics = () => {
  const [value, setValue] = useState("1");
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [form] = Form.useForm();

  // Separate search states for each table
  const [searchTextExpectant, setSearchTextExpectant] = useState("");
  const [searchTextDelivered, setSearchTextDelivered] = useState("");
  const [searchTextChildren, setSearchTextChildren] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
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
  ];

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
      render: () => <AntButton type="link">View</AntButton>,
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
      render: () => <AntButton type="link">View</AntButton>,
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
      render: () => <AntButton type="link">View</AntButton>,
    },
  ];

  return (
    <Box
      sx={{ width: "100%", typography: "body1" }}
      className="clinics-container"
    >
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

                      <AntButton variant="contained" sx={{ mt: 2 }}>
                        Generate Report
                      </AntButton>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
};

export default Clinics;
