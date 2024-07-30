import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const backgroundPlugin = {
    id: 'backgroundPlugin',
    beforeDraw: (chart) => {
        const ctx = chart.ctx;
        const { chartArea: { top, bottom, left, right }, scales: { x, y } } = chart;

        const areas = [
            { points: [[0, 0], [16, 4], [41, 20], [41, 16], [16, 3], [0, 0]], color: '#d5c0c0' },
            { points: [[0, 0], [16, 3], [41, 16], [41, 12.5], [16.5, 2], [0, 0]], color: '#c3e7ce' },
            { points: [[0, 0], [16.5, 2], [41, 12.5], [41, 11], [17, 1.8], [0, 0]], color: '#e7f6ad' },
            { points: [[0, 0], [17, 1.8], [41, 11], [41, 7], [16.5, 0.8], [0, 0]], color: '#efaeae' }
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
        labels: Array.from({ length: 43 }, (_, i) => i),
        datasets: [
            {
                label: '',
                data: [
                    { x: 7, y: 0 },
                    { x: 14, y: -0.8 },
                    { x: 21, y: 1 },
                    { x: 25, y: 3.7 },
                    { x: 30, y: 5.8 },
                    { x: 33, y: 8.5 },
                    { x: 35, y: 8.7 },
                    { x: 38, y: 9.8 }
                ],
                borderColor: '#3e95cd',
                fill: false,
                tension: 0.1,
                showLine: true,
                pointBackgroundColor: '#3e95cd'
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    generateLabels: (chart) => {
                        const original = ChartJS.defaults.plugins.legend.labels.generateLabels;
                        const labelsOriginal = original.call(this, chart).filter(label => label.text !== '');
                        labelsOriginal.push(
                            { text: 'A ', fillStyle: '#d5c0c0' },
                            { text: 'B ', fillStyle: '#c3e7ce' },
                            { text: 'C', fillStyle: '#e7f6ad' },
                            { text: 'D', fillStyle: '#efaeae' }
                        );
                        return labelsOriginal;
                    }
                }
            },
            title: {
                display: true,
                text: 'BMI Variation Chart'
            },
            backgroundPlugin: {}
        },
        scales: {
            y: {
                min: -2,
                max: 20,
                ticks: {
                    stepSize: 2
                },
                title: {
                    display: true,
                    text: 'Weight Gain'
                }
            },
            x: {
                min: 0,
                max: 42,
                ticks: {
                    stepSize: 2
                },
                title: {
                    display: true,
                    text: 'POA'
                }
            }
        }
    };

    return (
        <Card style={{ maxWidth: '100%', height: '100%' }}>
            <CardContent style={{ height: '100%' }}>
                <Typography variant="h6" component="div">
                    BMI Variation Chart
                </Typography>
                <div style={{ height: '100%' }}>
                    <Line data={data} options={options} plugins={[backgroundPlugin]} />
                </div>
            </CardContent>
        </Card>
    );
};

export default WeightChart;
