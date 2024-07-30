import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card } from 'antd';

const FundalHeightChart = () => {
    const data = {
        labels: ['24', '26', '28', '30', '32', '34', '36'],
        datasets: [
            {
                label: 'Fundal Height',
                data: [24, 26, 28, 29, 32, 34, 36],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false,
            },
            {
                label: 'Normal Range Min',
                data: [22, 24, 26, 27, 30, 32, 34],
                borderColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 1,
                borderDash: [5, 5],
                fill: false,
            },
            {
                label: 'Normal Range Max',
                data: [26, 28, 30, 31, 34, 36, 38],
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
            },
            y: {
                title: {
                    display: true,
                    text: 'Fundal Height (cm)',
                },
                beginAtZero: false,
                suggestedMin: 20,
                suggestedMax: 40,
            },
        },
    };

    return (
        <Card title="Fundal Height Chart" style={{ marginBottom: '16px' }}>
            <Line data={data} options={options} />
        </Card>
    );
};

export default FundalHeightChart;
