import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card } from 'antd';
import 'chart.js/auto';

const FundalHeightChart = () => {
    const labels = ['16', '20', '24', '28', '32', '36']; // x-coordinates
    const fundalHeightData = [16, 21, 25, 29, 33, 37]; // y-coordinates
    const normalRangeMin = [14, 18, 22, 26, 30, 34];
    const normalRangeMax = [18, 22, 26, 30, 34, 38];

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Fundal Height',
                data: fundalHeightData,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false,
                pointBackgroundColor: (context) => {
                    const index = context.dataIndex;
                    const specificPoints = [
                        [21, 22],
                        [25, 26],
                        [29, 30],
                        [33, 32],
                        [35, 37],
                        [37, 38],
                    ];
                    return specificPoints.some(point => point[0] === labels[index] && point[1] === fundalHeightData[index])
                        ? 'rgba(75, 192, 192, 1)'
                        : 'transparent';
                },
                pointRadius: (context) => {
                    const index = context.dataIndex;
                    const specificPoints = [
                        [21, 22],
                        [25, 26],
                        [29, 30],
                        [33, 32],
                        [35, 37],
                        [37, 38],
                    ];
                    return specificPoints.some(point => point[0] === labels[index] && point[1] === fundalHeightData[index])
                        ? 5
                        : 0;
                },
                pointBorderWidth: 2,
                pointHoverRadius: 7,
            },
            {
                label: 'Normal Range Min',
                data: normalRangeMin,
                borderColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 1,
                borderDash: [5, 5],
                fill: false,
            },
            {
                label: 'Normal Range Max',
                data: normalRangeMax,
                borderColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 1,
                borderDash: [5, 5],
                fill: false,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Weeks of Pregnancy (POA)',
                },
                ticks: {
                    stepSize: 4,
                },
                grid: {
                    drawOnChartArea: true,
                    borderDash: [4, 4],
                    color: (context) => context.tick && context.tick.value % 4 === 0 ? '#000' : '#ccc',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Fundal Height (cm)',
                },
                ticks: {
                    stepSize: 5,
                },
                grid: {
                    drawOnChartArea: true,
                    borderDash: [5, 5],
                    color: (context) => context.tick && context.tick.value % 5 === 0 ? '#000' : '#ccc',
                },
                min: 0,
                max: 40,
            },
        },
    };

    return (
        <Card title="Fundal Height Chart" style={{ width: '100%', height: 'calc(100vh - 100px)', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: '100%' }}>
                <Line data={data} options={options} />
            </div>
        </Card>
    );
};

export default FundalHeightChart;
