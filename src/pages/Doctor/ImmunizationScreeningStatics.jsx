import React from 'react';
import { Grid, Container, Typography, Paper } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const Dashboard = () => {
  const prenatalScreeningsData = {
    labels: ['Ultrasound', 'Blood Test', 'Glucose Test', 'Amniocentesis'],
    datasets: [
      {
        label: 'Number of Screenings',
        data: [50, 40, 30, 20],
        backgroundColor: '#7C3AED',
      },
    ],
  };

  const vaccinationRatesData = {
    labels: ['First Trimester', 'Second Trimester', 'Third Trimester'],
    datasets: [
      {
        label: 'Vaccination Rates',
        data: [80, 60, 70],
        backgroundColor: '#D8B4FE',
      },
    ],
  };

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Statistical Reports
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Prenatal Screenings
            </Typography>
            <Bar data={prenatalScreeningsData} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Vaccination Rates
            </Typography>
            <Bar data={vaccinationRatesData} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
