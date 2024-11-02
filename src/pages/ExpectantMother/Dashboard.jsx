import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Typography, Space, Divider } from 'antd';
import { CalendarOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import CustomCalendar from './Calendar.jsx';
import dayjs from 'dayjs';

const { Title, Text } = Typography;

const userEvents = {
    '2024-07-25': [{ id: 1, description: 'Event A' }],
    '2024-07-30': [{ id: 2, description: 'Event B' }]
};

const Dashboard = () => {
    const [selectedCard, setSelectedCard] = useState(null);
    const [deliveryDate, setDeliveryDate] = useState(dayjs('2025-01-01')); // Replace with the actual delivery date

    const upcomingEvents = [
        { id: 1, date: '2024-11-02', description: 'Doctor’s Appointment', type: 'Child Clinic' },
        { id: 2, date: '2024-11-10', description: 'Ultrasound Scan', type: 'Awareness Session' },
        { id: 3, date: '2024-11-18', description: 'Prenatal Yoga Class', type: 'Vaccination' }
    ];

    const eventColors = {
        'Child Clinic': '#FFDDC1',      // Light Orange
        'Awareness Session': '#C1E1FF', // Light Blue
        'Vaccination': '#D1FFC1',       // Light Green
        'Other': '#F0F0F0'              // Default Gray for unrecognized types
    };

    const calculateTimeLeft = () => {
        const now = dayjs();
        const difference = deliveryDate.diff(now);
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, [deliveryDate]);

    return (
        <div style={{ padding: '24px', minHeight: '100vh' }}>
            <Title level={3}>Hi, Sepali 👋</Title>
            <Row gutter={16} style={{ marginTop: 24 }}>
                <Col span={16}>
                    {/* Enhanced Upcoming Events Card */}
                    <Card
                        title={
                            <Space>
                                <CalendarOutlined style={{ color: '#1890ff' }} />
                                <span style={{ color: '#1890ff', fontSize: '18px', fontWeight: 'bold' }}>Upcoming Events</span>
                            </Space>
                        }
                        style={{ marginBottom: 24, borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                        bodyStyle={{ padding: '20px' }}
                    >
                        {upcomingEvents.map((event) => (
                            <div
                                key={event.id}
                                style={{
                                    marginBottom: '10px',
                                    padding: '10px',
                                    borderRadius: '8px',
                                    backgroundColor: eventColors[event.type] || eventColors['Other']
                                }}
                            >
                                <Text strong style={{ color: '#096dd9' }}>{event.date}</Text>
                                <Divider type="vertical" />
                                <span>{event.description}</span>
                                <Text type="secondary" style={{ float: 'right' }}>{event.type}</Text>
                            </div>
                        ))}
                        <Link to="/mother/events" style={{ color: '#1890ff', textDecoration: 'underline' }}>
                            View all events
                        </Link>
                    </Card>

                    {/* Countdown Timer Card */}
                    <Card
                        title={
                            <Space>
                                <ClockCircleOutlined style={{ color: '#ff4d4f' }} />
                                <span style={{ color: '#ff4d4f', fontSize: '18px', fontWeight: 'bold' }}>Countdown to Delivery Date</span>
                            </Space>
                        }
                        style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                        bodyStyle={{ padding: '20px', textAlign: 'center' }}
                    >
                        <Text type="secondary">Estimated Delivery Date: {deliveryDate.format('MMMM D, YYYY')}</Text>
                        <div style={{ marginTop: '20px', fontSize: '32px', fontWeight: 'bold', color: '#ff4d4f' }}>
                            {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
                        </div>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Calendar" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        <CustomCalendar events={userEvents} fullCalendarPath="/mother/full-calendar" />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;
