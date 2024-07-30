import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { ComposedChart, Line, Area, Scatter } from 'recharts';
import { PieChart, Pie, Cell, Legend } from 'recharts';

// Dummy data
const birthWeightData = [
  { name: '<2.5 kg', count: 30 },
  { name: '2.5-3 kg', count: 50 },
  { name: '3-3.5 kg', count: 100 },
  { name: '3.5-4 kg', count: 70 },
  { name: '>4 kg', count: 20 },
];

const apgarScoresData = [
  { name: '0-3', count: 10 },
  { name: '4-6', count: 20 },
  { name: '7-10', count: 170 },
];

const neonatalComplicationsData = [
  { name: 'Jaundice', count: 50 },
  { name: 'Respiratory Distress', count: 30 },
  { name: 'Sepsis', count: 20 },
  { name: 'Others', count: 10 },
];

const colors = ['#8884d8', '#82ca9d', '#ffc658'];

const ClinicSchedules = () => (
  <Container maxWidth="lg">
    <Box className="container p-8 mx-auto my-8 bg-white rounded-lg shadow-lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Newborn Health Statistics
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: 20 }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Birth Weight Distribution
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={birthWeightData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: 20 }}>
            <Typography variant="h6" component="h2" gutterBottom>
              APGAR Scores
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={apgarScoresData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" barSize={20} fill="#413ea0" />
              </ComposedChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: 20 }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Neonatal Complications
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={neonatalComplicationsData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                  label
                >
                  {neonatalComplicationsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  </Container>
);

export default ClinicSchedules;
