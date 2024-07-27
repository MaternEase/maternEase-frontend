import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Typography from "@mui/material/Typography";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import GraphicEqSharp from "@mui/icons-material/GraphicEqSharp";
import Grid from "@mui/material/Grid";
import { Modal, Form, Input, Select, message, Button, Table } from "antd";

const { Option } = Select;
const { Search } = Input;

// const ClinicTable = ({ rows, columns, showViewMore }) => (
//   <TableContainer component={Paper} className="clinic-table">
//     <Table>
//       <TableHead>
//         <TableRow>
//           {columns.map((col) => (
//             <TableCell key={col} className="table-header-cell">
//               {col}
//             </TableCell>
//           ))}
//           {showViewMore && (
//             <TableCell className="table-header-cell">View</TableCell>
//           )}
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {rows.map((row) => (
//           <TableRow key={row.id}>
//             {columns.map((col) => (
//               <TableCell key={col} className="table-cell">
//                 {row[col]}
//               </TableCell>
//             ))}
//             {showViewMore && (
//               <TableCell>
//                 <Button variant="outlined" className="view-button">
//                   View
//                 </Button>
//               </TableCell>
//             )}
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   </TableContainer>
// );

const Clinics = () => {
  const [value, setValue] = useState("1");
  const [isModalVisible, setIsModalVisible] = useState(false);
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

  const clinics = [
    {
      name: "Clinic A",
      location: "Location A",
      doctors: ["Doctor A"],
      midwives: ["Midwife1", "Midwife2", "Midwife3"],
      expectantMothers: [
        {
          id: 1,
          RegistrationID: "A001",
          Name: "Alice",
          Age: 28,
          Condition: "Normal",
        },
      ],
      deliveredMothers: [
        {
          id: 2,
          RegistrationID: "A002",
          Name: "Beth",
          Age: 32,
          Condition: "Risky",
          DeliveredDate: "2024-07-20",
        },
      ],
      children: [
        {
          id: 3,
          RegistrationID: "CA001",
          Name: "Charlie",
          GuardianName: "Alice",
          Age: 1,
          Condition: "Healthy",
        },
      ],
      stats: { birthCount: 5, deadBirthCount: 1, maternalDeathCount: 0 },
    },
    {
      name: "Clinic B",
      location: "Location B",
      doctors: ["Doctor B"],
      midwives: ["Midwife4", "Midwife5"],
      expectantMothers: [
        {
          id: 4,
          RegistrationID: "B001",
          Name: "Diana",
          Age: 30,
          Condition: "Risky",
        },
      ],
      deliveredMothers: [
        {
          id: 5,
          RegistrationID: "B002",
          Name: "Eva",
          Age: 29,
          Condition: "Normal",
          DeliveredDate: "2024-07-21",
        },
      ],
      children: [
        {
          id: 6,
          RegistrationID: "CB001",
          Name: "Finn",
          GuardianName: "Diana",
          Age: 2,
          Condition: "Healthy",
        },
      ],
      stats: { birthCount: 3, deadBirthCount: 0, maternalDeathCount: 0 },
    },
    {
      name: "Clinic C",
      location: "Location C",
      doctors: ["Doctor C"],
      midwives: ["Midwife6", "Midwife7", "Midwife8"],
      expectantMothers: [
        {
          id: 7,
          RegistrationID: "C001",
          Name: "Grace",
          Age: 26,
          Condition: "Normal",
        },
      ],
      deliveredMothers: [
        {
          id: 8,
          RegistrationID: "C002",
          Name: "Hannah",
          Age: 34,
          Condition: "Delivered",
          DeliveredDate: "2024-07-22",
        },
      ],
      children: [
        {
          id: 9,
          RegistrationID: "CC001",
          Name: "Ian",
          GuardianName: "Grace",
          Age: 3,
          Condition: "Healthy",
        },
      ],
      stats: { birthCount: 7, deadBirthCount: 1, maternalDeathCount: 1 },
    },
    {
      name: "Clinic D",
      location: "Location D",
      doctors: ["Doctor D"],
      midwives: ["Midwife9", "Midwife10"],
      expectantMothers: [
        {
          id: 10,
          RegistrationID: "D001",
          Name: "Jane",
          Age: 29,
          Condition: "High Risk",
        },
      ],
      deliveredMothers: [
        {
          id: 11,
          RegistrationID: "D002",
          Name: "Kate",
          Age: 31,
          Condition: "Delivered",
          DeliveredDate: "2024-07-23",
        },
      ],
      children: [
        {
          id: 14,
          RegistrationID: "CD001",
          Name: "Liam",
          GuardianName: "Jane",
          Age: 2,
          Condition: "Healthy",
        },
      ],
      stats: { birthCount: 4, deadBirthCount: 2, maternalDeathCount: 0 },
    },
    // {
    //   name: "Clinic E",
    //   location: "Location E",
    //   doctors: ["Doctor E"],
    //   midwives: ["Midwife11", "Midwife12", "Midwife13"],
    //   expectantMothers: [
    //     {
    //       id: 13,
    //       RegistrationID: "E001",
    //       Name: "Mary",
    //       Age: 33,
    //       Condition: "Normal",
    //     },
    //   ],
    //   deliveredMothers: [
    //     {
    //       id: 14,
    //       RegistrationID: "E002",
    //       Name: "Nina",
    //       Age: 35,
    //       Condition: "Delivered",
    //       DeliveredDate: "2024-07-24",
    //     },
    //   ],
    //   children: [
    //     {
    //       id: 15,
    //       RegistrationID: "CE001",
    //       Name: "Owen",
    //       GuardianName: "Mary",
    //       Age: 1,
    //       Condition: "Healthy",
    //     },
    //   ],
    //   stats: { birthCount: 6, deadBirthCount: 0, maternalDeathCount: 1 },
    // },
    // {
    //   name: "Clinic F",
    //   location: "Location F",
    //   doctors: ["Doctor F"],
    //   midwives: ["Midwife14", "Midwife15"],
    //   expectantMothers: [
    //     {
    //       id: 16,
    //       RegistrationID: "F001",
    //       Name: "Olivia",
    //       Age: 30,
    //       Condition: "Normal",
    //     },
    //   ],
    //   deliveredMothers: [
    //     {
    //       id: 17,
    //       RegistrationID: "F002",
    //       Name: "Paula",
    //       Age: 28,
    //       Condition: "Delivered",
    //       DeliveredDate: "2024-07-25",
    //     },
    //   ],
    //   children: [
    //     {
    //       id: 18,
    //       RegistrationID: "CF001",
    //       Name: "Quinn",
    //       GuardianName: "Olivia",
    //       Age: 1,
    //       Condition: "Healthy",
    //     },
    //   ],
    //   stats: { birthCount: 5, deadBirthCount: 1, maternalDeathCount: 0 },
    // },
    // {
    //   name: "Clinic G",
    //   location: "Location G",
    //   doctors: ["Doctor G"],
    //   midwives: ["Midwife16", "Midwife17", "Midwife18"],
    //   expectantMothers: [
    //     {
    //       id: 19,
    //       RegistrationID: "G001",
    //       Name: "Rachel",
    //       Age: 31,
    //       Condition: "High Risk",
    //     },
    //   ],
    //   deliveredMothers: [
    //     {
    //       id: 20,
    //       RegistrationID: "G002",
    //       Name: "Samantha",
    //       Age: 30,
    //       Condition: "Delivered",
    //       DeliveredDate: "2024-07-26",
    //     },
    //   ],
    //   children: [
    //     {
    //       id: 21,
    //       RegistrationID: "CG001",
    //       Name: "Tom",
    //       GuardianName: "Rachel",
    //       Age: 2,
    //       Condition: "Healthy",
    //     },
    //   ],
    //   stats: { birthCount: 7, deadBirthCount: 2, maternalDeathCount: 0 },
    // },
    // {
    //   name: "Clinic H",
    //   location: "Location H",
    //   doctors: ["Doctor H"],
    //   midwives: ["Midwife19", "Midwife20"],
    //   expectantMothers: [
    //     {
    //       id: 22,
    //       RegistrationID: "H001",
    //       Name: "Sara",
    //       Age: 27,
    //       Condition: "Normal",
    //     },
    //   ],
    //   deliveredMothers: [
    //     {
    //       id: 23,
    //       RegistrationID: "H002",
    //       Name: "Tina",
    //       Age: 29,
    //       Condition: "Delivered",
    //       DeliveredDate: "2024-07-27",
    //     },
    //   ],
    //   children: [
    //     {
    //       id: 24,
    //       RegistrationID: "CH001",
    //       Name: "Uma",
    //       GuardianName: "Sara",
    //       Age: 1,
    //       Condition: "Healthy",
    //     },
    //   ],
    //   stats: { birthCount: 6, deadBirthCount: 0, maternalDeathCount: 1 },
    // },
    // {
    //   name: "Clinic I",
    //   location: "Location I",
    //   doctors: ["Doctor I"],
    //   midwives: ["Midwife21", "Midwife22", "Midwife23"],
    //   expectantMothers: [
    //     {
    //       id: 25,
    //       RegistrationID: "I001",
    //       Name: "Victoria",
    //       Age: 32,
    //       Condition: "High Risk",
    //     },
    //   ],
    //   deliveredMothers: [
    //     {
    //       id: 26,
    //       RegistrationID: "I002",
    //       Name: "Wendy",
    //       Age: 34,
    //       Condition: "Delivered",
    //       DeliveredDate: "2024-07-28",
    //     },
    //   ],
    //   children: [
    //     {
    //       id: 27,
    //       RegistrationID: "CI001",
    //       Name: "Xander",
    //       GuardianName: "Victoria",
    //       Age: 2,
    //       Condition: "Healthy",
    //     },
    //   ],
    //   stats: { birthCount: 4, deadBirthCount: 0, maternalDeathCount: 1 },
    // },
    // {
    //   name: "Clinic J",
    //   location: "Location J",
    //   doctors: [],
    //   midwives: ["Midwife24", "Midwife25", "Midwife26"],
    //   expectantMothers: [
    //     {
    //       id: 28,
    //       RegistrationID: "J001",
    //       Name: "Yvonne",
    //       Age: 29,
    //       Condition: "Normal",
    //     },
    //   ],
    //   deliveredMothers: [
    //     {
    //       id: 29,
    //       RegistrationID: "J002",
    //       Name: "Zoe",
    //       Age: 30,
    //       Condition: "Delivered",
    //       DeliveredDate: "2024-07-29",
    //     },
    //   ],
    //   children: [
    //     {
    //       id: 30,
    //       RegistrationID: "CJ001",
    //       Name: "Aaron",
    //       GuardianName: "Yvonne",
    //       Age: 3,
    //       Condition: "Healthy",
    //     },
    //   ],
    //   stats: { birthCount: 5, deadBirthCount: 1, maternalDeathCount: 0 },
    // },
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
                  {/* <Box sx={{ display: "flex", gap: 1 }}> */}
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
                    {/* <Button variant="contained" color="secondary">
                      Edit Clinic
                    </Button> */}
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
                  {/* <Box sx={{ pr: 2 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        mt: 2,
                        fontSize: 14,
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      Expectant Mothers
                    </Typography>
                    <ClinicTable
                      rows={clinic.expectantMothers}
                      columns={["RegistrationID", "Name", "Age", "Condition"]}
                      showViewMore
                    />

                    <Typography
                      variant="h6"
                      sx={{
                        mt: 2,
                        fontSize: 14,
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      Delivered Mothers
                    </Typography>
                    <ClinicTable
                      rows={clinic.deliveredMothers}
                      columns={[
                        "RegistrationID",
                        "Name",
                        "Age",
                        "Condition",
                        "DeliveredDate",
                      ]}
                      showViewMore
                    />

                    <Typography
                      variant="h6"
                      sx={{
                        mt: 2,
                        fontSize: 14,
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      Children
                    </Typography>
                    <ClinicTable
                      rows={clinic.children}
                      columns={[
                        "RegistrationID",
                        "Name",
                        "GuardianName",
                        "Age",
                        "Condition",
                      ]}
                      showViewMore
                    />
                  </Box> */}
                  {/* Section for expectant mothers table */}
                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle1"
                      className="section-title"
                      fontWeight="bold"
                      marginBottom="15px"
                    >
                      Expectant Mothers
                    </Typography>
                    <Search
                      placeholder="Search Expectant Mothers"
                      onSearch={handleSearch}
                      onChange={(e) => handleSearch(e.target.value)}
                      style={{ width: 300, marginBottom: 16 }}
                    />
                    <Table
                      dataSource={clinic.expectantMothers}
                      columns={columnsExpectantMothers}
                      pagination={{ pageSize: 5 }}
                      rowKey="id"
                    />
                  </Grid>
                  {/* Section for delivered mothers table */}
                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle1"
                      className="section-title"
                      fontWeight="bold"
                      marginBottom="15px"
                    >
                      Delivered Mothers
                    </Typography>
                    <Search
                      placeholder="Search Delivered Mothers"
                      onSearch={handleSearch}
                      onChange={(e) => handleSearch(e.target.value)}
                      style={{ width: 300, marginBottom: 16 }}
                    />
                    <Table
                      dataSource={clinic.deliveredMothers}
                      columns={columnsDeliveredMothers}
                      pagination={{ pageSize: 5 }}
                      rowKey="id"
                    />
                  </Grid>
                  {/* Section for children table */}
                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle1"
                      className="section-title"
                      fontWeight="bold"
                      marginBottom="15px"
                    >
                      Children
                    </Typography>
                    <Search
                      placeholder="Search Children"
                      onSearch={handleSearch}
                      onChange={(e) => handleSearch(e.target.value)}
                      style={{ width: 300, marginBottom: 16 }}
                    />
                    <Table
                      dataSource={clinic.children}
                      columns={columnsChildren}
                      pagination={{ pageSize: 5 }}
                      rowKey="id"
                    />
                  </Grid>
                </Grid>

                {/* Doctor, midwives, and additional statistics section */}
                <Grid item xs={2.5}>
                  <Box sx={{ pl: 2 }}>
                    {/* Doctor and Midwives */}
                    <Box
                      sx={{
                        border: "1px solid #F0EEED",
                        borderRadius: 1,
                        p: 2,
                        mb: 5,
                        height: "250px",
                      }}
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
                        sx={{ fontSize: 14, fontWeight: "normal", mb: 3 }}
                      >
                        {clinic.doctors.length > 0
                          ? `• ${clinic.doctors[0]}`
                          : " "}
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
                          • {clinic.midwives[0]}
                        </Typography>
                      )}
                      {clinic.midwives.length > 1 && (
                        <Typography
                          variant="body1"
                          className="clinic-info"
                          sx={{ fontSize: 14, fontWeight: "normal", mb: 1 }}
                        >
                          • {clinic.midwives[1]}
                        </Typography>
                      )}
                      {clinic.midwives.length > 2 && (
                        <Typography
                          variant="body1"
                          className="clinic-info"
                          sx={{ fontSize: 14, fontWeight: "normal" }}
                        >
                          • {clinic.midwives[2]}
                        </Typography>
                      )}
                    </Box>

                    {/* Additional statistics */}
                    <Box
                      sx={{
                        border: "1px solid #F0EEED",
                        borderRadius: 1,
                        p: 2,
                        height: "250px",
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
                        {/* <GraphicEqSharp /> */}
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
              {/* Add more options as needed */}
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
              {/* Add more options as needed */}
            </Select>
          </Form.Item>
          <Form.Item
            label={<span style={{ fontWeight: "bold" }}>Midwife 2</span>}
            name="midwife2"
          >
            <Select placeholder="Select a midwife">
              <Option value="midwife1">Midwife 2</Option>
              <Option value="midwife2">Midwife 3</Option>
              {/* Add more options as needed */}
            </Select>
          </Form.Item>
          <Form.Item
            label={<span style={{ fontWeight: "bold" }}>Midwife 3</span>}
            name="midwife3"
          >
            <Select placeholder="Select a midwife">
              <Option value="midwife1">Midwife 3</Option>
              <Option value="midwife2">Midwife 4</Option>
              {/* Add more options as needed */}
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </Box>
  );
};

export default Clinics;
