import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Card } from 'antd';
import 'chart.js/auto';
import axios from 'axios';

const FundalHeightChart = () => {
    const [fundalHeightData, setFundalHeightData] = useState([]);
    const [labels, setLabels] = useState([]);
    const [normalRangeMin, setNormalRangeMin] = useState([]);
    const [normalRangeMax, setNormalRangeMax] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/v1/mother/AS9/fundal-height'); // Update with your actual API endpoint
                const { weeks, fundalHeight, normalRangeMin, normalRangeMax } = response.data;

                setLabels(weeks);
                setFundalHeightData(fundalHeight);
                setNormalRangeMin(normalRangeMin);
                setNormalRangeMax(normalRangeMax);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching fundal height data:', error);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <Card>Loading...</Card>;
    }

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Fundal Height',
                data: fundalHeightData,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false,
                pointBackgroundColor: 'rgba(75, 192, 192, 1)',
                pointRadius: 4,
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
                },
                min: 20,
                max: 40,
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
                },
                min: 0,
                max: 40,
            },
        },
    };

    return (
        <Card title="Fundal Height Chart" style={{ width: '100%', height: '100%' }}>
            <div style={{ height: '100%' }}>
                <Line data={data} options={options} />
            </div>
        </Card>
    );
};

export default FundalHeightChart;
