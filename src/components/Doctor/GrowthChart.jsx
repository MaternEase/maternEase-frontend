import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale);

function GrowthChart({ data }) {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Bar data={data} options={{ responsive: true, maintainAspectRatio: false }} />
    </div>
  );
}

export default GrowthChart;
