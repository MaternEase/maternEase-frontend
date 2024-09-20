import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Immunization = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/doctor/babyreport1'); // Replace '/another-view' with the actual path you want to navigate to
  };

  return (
    <>
      <Box sx={{ p: 2, mb: 4, backgroundColor: '#192A51', borderRadius: 1, boxShadow: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ color: 'white' }}>
            The Next Clinic Date:
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box sx={{ p: 2, backgroundColor: 'white', borderRadius: 1, boxShadow: 1 }}>
              <Typography variant="body1" sx={{ color: 'black' }}>
                21/11/2021
              </Typography>
            </Box>
            <Box sx={{ p: 2, backgroundColor: 'white', borderRadius: 1, boxShadow: 1 }}>
              <Typography variant="body1" sx={{ color: 'black' }}>
                MOH
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Age</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Type of Vaccine</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Date</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Batch Number</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Adverse Effects</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>BCG Scar</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>At Birth</TableCell>
              <TableCell>BCG</TableCell>
              <TableCell>21/09/2021</TableCell>
              <TableCell>0370G070</TableCell>
              <TableCell>0</TableCell>
              <TableCell>Present</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2 Months Completed</TableCell>
              <TableCell>Pentavalent 1</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2 Months Completed</TableCell>
              <TableCell>OPV 1</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>4 Months Completed</TableCell>
              <TableCell>Pentavalent 2</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>4 Months Completed</TableCell>
              <TableCell>OPV 2</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>4 Months Completed</TableCell>
              <TableCell>IPV</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>6 Months Completed</TableCell>
              <TableCell>Pentavalent 3</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>6 Months Completed</TableCell>
              <TableCell>OPV 3</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            {/* Add more rows as needed */}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ mt: 2, textAlign: 'end' }}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleNavigate}
        >
          Back
        </Button>
        
      </Box>
    </>
  );
};

export default Immunization;
