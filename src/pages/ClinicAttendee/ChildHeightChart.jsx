// src/pages/ClinicAttendee/ChildGrowthChart.jsx

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card } from 'antd';

const ChildHeightChart = ({ data }) => {
    const chartData = {
        labels: data.map(entry => entry.age),
        datasets: [
            {
                label: 'Height (cm)',
                data: data.map(entry => entry.weight),
                borderColor: '#FA963A',
                backgroundColor: '#CF2929',
                fill: false,
                pointStyle: 'circle',
            }
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Height (cm)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Age (months)'
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                },
            },
        },
    };

    return (
        <Card title="Child Height Chart">
            <div style={{ height: '325px', padding: '20px' }}>
                <Line data={chartData} options={chartOptions} />
            </div>
        </Card>
    );
};

export default ChildHeightChart;
