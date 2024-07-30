import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const ClinicSchedules = () => {
  const ageDistributionData = {
    labels: ['Under 18', '18-23', '23-28', '28-35', 'Above 35'],
    datasets: [
      {
        label: 'Age Distribution',
        data: [5, 15, 25, 30, 25],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
      }
    ]
  };

  const healthConditionsData = {
    labels: ['Gestational Diabetes', 'Preeclampsia', 'Hyperemesis Gravidarum', 'Preterm Labor', 'Placenta Previa'],
    datasets: [
      {
        label: 'Health Conditions Prevalence',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1
      }
    ]
  };

  const bmiDistributionData = {
    labels: ['Underweight (BMI < 18.5)', 'Normal Weight (BMI 18.5 - 24.9)', 'Overweight (BMI 25 - 29.9)', 'Obesity (BMI 30 - 39)', 'Severe Obesity (BMI ≥ 40)'],
    datasets: [
      {
        label: 'BMI Distribution',
        data: [5, 25, 35, 20, 15],
        backgroundColor: 'rgba(153,102,255,0.6)',
        borderColor: 'rgba(153,102,255,1)',
        borderWidth: 1
      }
    ]
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Maternal Health Statisticals
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '16px', borderRadius: '8px' }}>
            <Box>
              <Typography variant="h6" component="h2" gutterBottom>
                Age Distribution
              </Typography>
              <Pie data={ageDistributionData} />
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '16px', borderRadius: '8px' }}>
            <Box>
              <Typography variant="h6" component="h2" gutterBottom>
                Health Conditions Prevalence
              </Typography>
              <Bar data={healthConditionsData} />
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: '16px', borderRadius: '8px' }}>
            <Box>
              <Typography variant="h6" component="h2" gutterBottom>
                BMI Distribution
              </Typography>
              <Bar data={bmiDistributionData} />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ClinicSchedules;
