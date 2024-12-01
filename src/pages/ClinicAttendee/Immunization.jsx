import React, { useState } from "react";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

const Immunization = () => {
  const [open, setOpen] = useState(false);
  const [records, setRecords] = useState([]);
  const [formData, setFormData] = useState({
    age: "",
    vaccineType: "",
    date: "",
    batchNumber: "",
    adverseEffects: "",
    bcgScar: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddRecord = () => {
    setRecords([...records, formData]);
    setFormData({
      age: "",
      vaccineType: "",
      date: "",
      batchNumber: "",
      adverseEffects: "",
      bcgScar: "",
    });
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <Typography variant="h4" sx={{ color: "#003366" }}>
          Immunization
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mb: 2,
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#003366",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#002244",
            },
          }}
          onClick={() => setOpen(true)}
        >
          Add A Record
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Age
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Type of Vaccine
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Date
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Batch Number
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Adverse Effects
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  BCG Scar
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {records.map((record, index) => (
              <TableRow key={index}>
                <TableCell>{record.age}</TableCell>
                <TableCell>{record.vaccineType}</TableCell>
                <TableCell>{record.date}</TableCell>
                <TableCell>{record.batchNumber}</TableCell>
                <TableCell>{record.adverseEffects}</TableCell>
                <TableCell>{record.bcgScar}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Popup Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add a New Record</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}
          >
            <TextField
              label="Age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              label="Type of Vaccine"
              name="vaccineType"
              value={formData.vaccineType}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              label="Date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleInputChange}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              label="Batch Number"
              name="batchNumber"
              value={formData.batchNumber}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              label="Adverse Effects"
              name="adverseEffects"
              value={formData.adverseEffects}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              label="BCG Scar"
              name="bcgScar"
              value={formData.bcgScar}
              onChange={handleInputChange}
              fullWidth
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#003366",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#002244",
              },
            }}
            onClick={handleAddRecord}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Immunization;
