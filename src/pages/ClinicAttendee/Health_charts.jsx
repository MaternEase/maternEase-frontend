import React, { useState } from 'react';
import Button from '@mui/material/Button';
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
  IconButton,
  Tabs,
  Tab,
  TextField,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const initialDataSpecial = [
  { age: 'Premature births', marked: false },
  { age: 'Low birth weight', marked: false },
  { age: 'Neonatal complications', marked: false },
  { age: 'Cognitive Disorders', marked: false },
  { age: 'Argymogeneous dysthyroidism', marked: false },
  { age: 'Breastfeeding in the first 6 months', marked: false },
  { age: 'Stunted growth', marked: false },
  { age: 'Difficulty in breastfeeding/feeding', marked: false },
  { age: 'Death of mother/father', marked: false },
  { age: 'Separation of mother/father/going abroad', marked: false },
];

const initialDataNewborn = [
  { age: 'Skin Colour', text: '' },
  { age: 'Eyes', text: '' },
  { age: 'The nature of the belly button', text: '' },
  { age: 'Temperature', text: '' },
  { age: 'Breastfeeding', text: '' },
];

const HealthCharts = () => {
  const [data, setData] = useState(initialDataSpecial);
  const [isEditing, setIsEditing] = useState(false);
  const [tabIndex, setTabIndex] = useState(0); // Tracks the selected tab

  const toggleEditMode = () => {
    setIsEditing((prev) => !prev);
  };

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
    // Switch data depending on tab index
    if (newValue === 0) {
      setData(initialDataSpecial);
    } else if (newValue === 1) {
      setData(initialDataNewborn);
    }
  };

  const handleTextChange = (index, event) => {
    const updatedData = [...data];
    updatedData[index].text = event.target.value;
    setData(updatedData);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you can handle the save logic, e.g., send the data to an API or save it in the state.
    console.log('Saved data:', data);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', flexDirection: 'column', width: '100%' }}>
      
      {/* Tabs */}
      <Tabs value={tabIndex} onChange={handleTabChange} centered sx={{ mb: 2 }}>
        <Tab label="Special Health Chart" />
        <Tab label="Newborn Health Table" />
      </Tabs>

      {/* Edit Button */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2, width: '100%' }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#003366',
            '&:hover': { backgroundColor: '#002244' },
          }}
          startIcon={isEditing ? <SaveIcon /> : <EditIcon />}
          onClick={isEditing ? handleSave : toggleEditMode}
        >
          {isEditing ? 'Save' : 'Edit'}
        </Button>
      </Box>

      {/* Table Title */}
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <Typography variant="h5" sx={{ color: '#003366' }}>
          {tabIndex === 0 ? 'Special Health Chart' : 'Newborn Health Table'}
        </Typography>
      </Box>

      {/* Table for Special Health Chart or Newborn Health Table */}
      <TableContainer component={Paper} sx={{ mt: 2, maxWidth: 600, height: 400, overflowY: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left" sx={{ width: '70%' }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Special Reasons</Typography>
              </TableCell>
              <TableCell align="center" sx={{ width: '30%' }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  {tabIndex === 0 ? 'Marked' : 'Notes'}
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.age}</TableCell>
                <TableCell align="center">
                  {tabIndex === 1 ? (
                    // For Newborn Health Table: Allow editing text
                    isEditing ? (
                      <TextField
                        value={row.text}
                        onChange={(e) => handleTextChange(index, e)}
                        variant="outlined"
                        size="small"
                        sx={{ width: '120px' }}
                      />
                    ) : (
                      row.text || 'No notes'
                    )
                  ) : (
                    // For Special Health Chart: Show marked checkboxes
                    isEditing ? (
                      <IconButton onClick={() => {
                        const updatedData = [...data];
                        updatedData[index].marked = !updatedData[index].marked;
                        setData(updatedData);
                      }} color={row.marked ? 'success' : 'default'}>
                        {row.marked ? <CheckCircleIcon /> : <CancelIcon />}
                      </IconButton>
                    ) : (
                      row.marked ? <CheckCircleIcon color="success" /> : <CancelIcon color="disabled" />
                    )
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default HealthCharts;
