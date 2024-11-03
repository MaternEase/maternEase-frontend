import React, { useState, useEffect, useRef } from 'react';
import { Card, Row, Col, Typography, Space, Divider, Button } from 'antd';
import { CalendarOutlined, ClockCircleOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate
import CustomCalendar from './Calendar.jsx';
import dayjs from 'dayjs';

const { Title, Text } = Typography;

const userEvents = {
    '2024-11-25': [{ id: 1, description: 'Event A' }],
    '2024-11-06': [{ id: 1, description: 'Event A' }],
    '2024-11-12': [{ id: 1, description: 'Event A' }],
    '2024-11-30': [{ id: 2, description: 'Event B' }]
};

const Dashboard = () => {
    const [deliveryDate] = useState(dayjs('2025-01-01'));
    const eventContainerRef = useRef(null);
    const navigate = useNavigate(); // Get the navigate function

    const upcomingEvents = [
        { id: 1, date: '2024-11-02', description: 'Regular Clinic', type: 'Expectant Mother Clinic' },
        { id: 2, date: '2024-11-10', description: 'Importance of Prenatal Care', type: 'Awareness Session' },
        { id: 3, date: '2024-11-18', description: 'Polio Vaccination', type: 'Vaccination' },
        { id: 4, date: '2024-11-24', description: 'Prenatal Yoga Class', type: 'Other' },
        { id: 5, date: '2024-11-24', description: 'Prenatal Yoga Class', type: 'Other' }
    ];

    const eventColors = {
        'Expectant Mother Clinic': 'rgba(193,225,255,0.62)',
        'Awareness Session': 'rgba(234,193,255,0.62)',
        'Vaccination': 'rgba(255,221,193,0.62)',
        'Other': '#F0F0F0'
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

    const scrollEvents = (direction) => {
        if (eventContainerRef.current) {
            eventContainerRef.current.scrollBy({
                top: direction === 'down' ? 50 : -50,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div style={{ padding: '24px', minHeight: '100vh' }}>
            <Title level={3}>Hi, Sepali 👋</Title>
            <Row gutter={16} style={{ marginTop: 24 }}>
                <Col span={16}>
                    <Card
                        title={
                            <Space>
                                <CalendarOutlined style={{ color: '#0a0a0a' }} />
                                <span style={{ color: '#0a0a0a', fontSize: '18px', fontWeight: 'bold' }}>Your Upcoming Events</span>
                            </Space>
                        }
                        style={{ marginBottom: 50, borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                        bodyStyle={{ padding: '20px', maxHeight: '180px', overflow: 'hidden' }} // Remove scrollbar, add hidden overflow
                    >
                        <div ref={eventContainerRef} style={{ maxHeight: '150px', overflow: 'hidden' }}>
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
                                    <Text strong style={{ color: '#0a0a0a' }}>{event.date}</Text>
                                    <Divider type="vertical" />
                                    <span>{event.description}</span>
                                    <Text type="secondary" style={{ float: 'right' }}>{event.type}</Text>
                                </div>
                            ))}
                        </div>
                        <Space style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}>
                            <Button icon={<UpOutlined />} onClick={() => scrollEvents('up')} />
                            <Button icon={<DownOutlined />} onClick={() => scrollEvents('down')} />
                        </Space>
                    </Card>

                    <Row gutter={16}>
                        <Col span={18}>
                            <Card
                                title={
                                    <Space>
                                        <ClockCircleOutlined style={{ color: '#0a0a0a' }} />
                                        <span style={{ color: '#0a0a0a', fontSize: '18px', fontWeight: 'bold' }}>Countdown to Delivery Date</span>
                                    </Space>
                                }
                                style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                                bodyStyle={{ padding: '20px', textAlign: 'center' }}
                            >
                                <Text type="secondary">Estimated Delivery Date: {deliveryDate.format('MMMM D, YYYY')}</Text>
                                <div style={{ marginTop: '20px', fontSize: '32px', fontWeight: 'bold', color: '#967aa1' }}>
                                    {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
                                </div>
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Row gutter={8} style={{ margin: '10px' }}>
                                <Button
                                    type="primary"
                                    block
                                    style={{
                                        height: '80px',
                                        borderRadius: '10px',
                                        background: '#967aa1',
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                        fontWeight: 'bold'
                                    }}
                                    onClick={() => navigate('/mother/full-calendar')} // Navigate on button click
                                >
                                    Book a Timeslot
                                </Button>
                            </Row>
                            <Row gutter={8} style={{ margin: '10px' }}>
                                <Button type="primary" block style={{ height: '80px', borderRadius: '10px', background: '#967aa1', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', fontWeight: 'bold' }}>
                                    Community
                                </Button>
                            </Row>
                        </Col>
                    </Row>
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
