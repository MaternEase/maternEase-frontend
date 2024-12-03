import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Card, Form, InputNumber, Button } from 'antd';

const Height = () => {
    const [data, setData] = useState([
        { age: 0, weight: 3.5 },
        { age: 1, weight: 4.5 },
        { age: 2, weight: 5.8 },
        { age: 3, weight: 6.7 },
        { age: 4, weight: 7.5 },
    ]);

    const [newEntry, setNewEntry] = useState({ age: '', weight: '' });

    const handleInputChange = (key, value) => {
        setNewEntry({ ...newEntry, [key]: value });
    };

    const handleAddData = () => {
        if (newEntry.age !== '' && newEntry.weight !== '') {
            setData([...data, { age: parseFloat(newEntry.age), weight: parseFloat(newEntry.weight) }]);
            setNewEntry({ age: '', weight: '' });
        }
    };

    const chartData = {
        labels: data.map(entry => entry.age),
        datasets: [
            {
                label: 'Height (cm)',
                data: data.map(entry => entry.weight),
                borderColor: '#003366', 
                backgroundColor: '#003366', 
                fill: false,
                pointStyle: 'circle',
            },
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
                    text: 'Height (cm)',
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Age (months)',
                },
            },
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
        <Card title="Child Growth Chart - Height">
            <div style={{ height: '325px', padding: '20px' }}>
                <Line data={chartData} options={chartOptions} />
            </div>
            <div style={{ marginTop: '20px' }}>
                <Form layout="inline" onFinish={handleAddData}>
                    <Form.Item label="Age (months)" required>
                        <InputNumber
                            value={newEntry.age}
                            onChange={value => handleInputChange('age', value)}
                            min={0}
                            placeholder="Age"
                        />
                    </Form.Item>
                    <Form.Item label="Height (cm)" required>
                        <InputNumber
                            value={newEntry.weight}
                            onChange={value => handleInputChange('weight', value)}
                            min={0}
                            placeholder="Height"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            style={{
                                backgroundColor: '#003366', 
                                borderColor: '#003366', 
                            }}
                            onClick={handleAddData}
                        >
                            Add Entry
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Card>
    );
};

export default Height;
