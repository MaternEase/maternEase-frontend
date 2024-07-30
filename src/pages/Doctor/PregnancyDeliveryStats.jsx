import React from 'react';
import { Container, Grid, Box, Typography, Paper } from '@mui/material';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell,
  BarChart, Bar
} from 'recharts';

const dummyPregnancyData = [
  { year: '2018', pregnancies: 100 },
  { year: '2019', pregnancies: 120 },
  { year: '2020', pregnancies: 150 },
  { year: '2021', pregnancies: 130 },
  { year: '2022', pregnancies: 170 },
];

const dummyDeliveryTypes = [
  { name: 'Vaginal', value: 65 },
  { name: 'Cesarean', value: 35 },
];

const dummyDeliveryOutcomes = [
  { outcome: 'Successful', rate: 80 },
  { outcome: 'Complications', rate: 15 },
  { outcome: 'Neonatal Outcomes', rate: 5 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ClinicSchedules = () => (
  <Container>
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Pregnancy and Delivery Statistics
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2, backgroundColor: '' }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Number of Pregnancies per Year
            </Typography>
            <LineChart width={500} height={300} data={dummyPregnancyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pregnancies" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2, backgroundColor: '' }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Types of Deliveries
            </Typography>
            <PieChart width={500} height={300}>
              <Pie
                data={dummyDeliveryTypes}
                cx={200}
                cy={150}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {dummyDeliveryTypes.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 2, backgroundColor: '' }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Delivery Outcomes
            </Typography>
            <BarChart width={1000} height={300} data={dummyDeliveryOutcomes}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="outcome" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="rate" fill="#8884d8" />
            </BarChart>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  </Container>
);

export default ClinicSchedules;
