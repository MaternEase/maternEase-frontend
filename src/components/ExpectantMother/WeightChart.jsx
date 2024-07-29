import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

// Custom plugin to draw background areas
const backgroundPlugin = {
    id: 'backgroundPlugin',
    beforeDraw: (chart) => {
        const ctx = chart.ctx;
        const { chartArea: { top, bottom, left, right }, scales: { x, y } } = chart;

        // Define the areas
        const areas = [
            { points: [[0, 0], [16, 4], [41, 20], [41, 16], [16, 3], [0, 0]], color: '#BB9393' },
            { points: [[0, 0], [16, 3], [41, 16], [41, 12.5], [16.5, 2], [0, 0]], color: '#79BA93' },
            { points: [[0, 0], [16.5, 2], [41, 12.5], [41, 11], [17, 1.8], [0, 0]], color: '#79BA93' },
            { points: [[0, 0], [17, 1.8], [41, 11], [41, 7], [16.5, 0.8], [0, 0]], color: '#CA6363' }
        ];

        ctx.save();
        areas.forEach(area => {
            ctx.beginPath();
            area.points.forEach(([xVal, yVal], index) => {
                const xPixel = x.getPixelForValue(xVal);
                const yPixel = y.getPixelForValue(yVal);
                if (index === 0) {
                    ctx.moveTo(xPixel, yPixel);
                } else {
                    ctx.lineTo(xPixel, yPixel);
                }
            });
            ctx.closePath();
            ctx.fillStyle = area.color;
            ctx.fill();
        });
        ctx.restore();
    }
};

const WeightChart = () => {
    const data = {
        labels: Array.from({ length: 43 }, (_, i) => (i % 2 === 0 ? i.toString() : '')), // Create an array of labels from 0 to 42 with labels at increments of 2
        datasets: [
            {
                label: 'Weight Gain',
                data: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8],
                borderColor: '#3e95cd',
                fill: false,
                tension: 0.1
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    generateLabels: (chart) => {
                        const original = ChartJS.defaults.plugins.legend.labels.generateLabels;
                        const labelsOriginal = original.call(this, chart);
                        labelsOriginal.push(
                            { text: 'A - Underweight', fillStyle: '#BB9393' },
                            { text: 'B - Normal', fillStyle: '#79BA93' },
                            { text: 'C', fillStyle: '#79BA93' },
                            { text: 'D', fillStyle: '#CA6363' }
                        );
                        return labelsOriginal;
                    }
                }
            },
            title: {
                display: true,
                text: 'Weight Gain Chart'
            },
            backgroundPlugin: {} // activate the plugin
        },
        scales: {
            y: {
                min: -2, // Set the minimum value of the y-axis to -2
                max: 20,
                title: {
                    display: true,
                    text: 'Weight Gain'
                }
            },
            x: {
                min: 0,
                max: 42,
                title: {
                    display: true,
                    text: 'Weeks'
                },
                ticks: {
                    stepSize: 1 // Set the step size to 1 to reduce the distance between labels
                }
            }
        }
    };

    return (
        <Card>
            <CardContent>
                <Typography variant="h6" component="div">
                    Weight Gain Chart
                </Typography>
                <Line data={data} options={options} plugins={[backgroundPlugin]} />
            </CardContent>
        </Card>
    );
};

export default WeightChart;
