import React, { useState, useEffect, useRef } from 'react';
import {Card, Row, Col, Typography, Space, Divider, Button, Modal} from 'antd';
import { CalendarOutlined, ClockCircleOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
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
    const [deliveryDate] = useState(dayjs('2025-04-22'));
    const eventContainerRef = useRef(null);
    const navigate = useNavigate();
    const [isUpPressed, setIsUpPressed] = useState(false);
    const [isDownPressed, setIsDownPressed] = useState(false);

    const upcomingEvents = [
        { id: 1, date: '2024-11-02', description: 'Regular Clinic', type: 'Expectant Mother Clinic', venue: 'Field Clinic - Weligama', startTime: '10:00 AM', endTime: '12:00 PM' },
        { id: 2, date: '2024-11-10', description: 'Importance of Prenatal Care', type: 'Awareness Session', venue: 'Public Hall - Welipitiya', startTime: '2:00 PM', endTime: '3:30 PM', online: true, zoomLink: 'https://zoom.us/j/123456789' },        { id: 3, date: '2024-11-18', description: 'Polio Vaccination', type: 'Vaccination', venue: 'Field Clinic - Weligama', startTime: '9:00 AM', endTime: '11:00 AM' },
        { id: 4, date: '2024-11-24', description: 'Prenatal Yoga Class', type: 'Other', venue: 'Agbo Vihara Premises', startTime: '4:00 PM', endTime: '5:30 PM' },
        { id: 5, date: '2024-11-24', description: 'Prenatal Yoga Class', type: 'Other', venue: 'Public Hall - Welipitiya', startTime: '5:30 PM', endTime: '7:00 PM' }
    ];


    const eventColors = {
        'Expectant Mother Clinic': 'rgba(193,225,255,0.62)',
        'Awareness Session': 'rgba(234,193,255,0.62)',
        'Vaccination': 'rgba(255,221,193,0.62)',
        'Other': '#F0F0F0'
    };

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

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

    const showModal = (event) => {
        setSelectedEvent(event);
        setIsModalVisible(true);
    };

    const handleModalClose = () => {
        setIsModalVisible(false);
        setSelectedEvent(null);
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
                        bodyStyle={{ padding: '20px', position: 'relative', maxHeight: '220px' }}
                    >
                        <div ref={eventContainerRef} style={{ maxHeight: '150px', overflow: 'hidden' }}>
                            {upcomingEvents.map((event) => (
                                <div
                                    key={event.id}
                                    onClick={() => showModal(event)}
                                    style={{
                                        marginBottom: '10px',
                                        padding: '10px',
                                        borderRadius: '8px',
                                        backgroundColor: eventColors[event.type] || eventColors['Other'],
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Text strong style={{ color: '#0a0a0a' }}>{event.date}</Text>
                                    <Divider type="vertical" />
                                    <span>{event.description}</span>
                                    <Text type="secondary" style={{ float: 'right' }}>{event.type}</Text>
                                </div>
                            ))}
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'right', marginTop: '10px' }}>
                            <Button
                                style={{
                                    borderRadius: '100%',
                                    background: '#f7f7f7',
                                    marginRight: '2%',
                                    color: isUpPressed ? '#967aa1' : '#000',
                                    borderColor: isUpPressed ? '#967aa1' : '#f7f7f7',
                                    transition: 'color 0.2s, border-color 0.2s'
                                }}
                                icon={<UpOutlined />}
                                onClick={() => scrollEvents('up')}
                                onMouseDown={() => setIsUpPressed(true)}
                                onMouseUp={() => setIsUpPressed(false)}
                                onMouseLeave={() => setIsUpPressed(false)}
                            />
                            <Button
                                style={{
                                    borderRadius: '100%',
                                    background: '#f7f7f7',
                                    color: isDownPressed ? '#967aa1' : '#000',
                                    borderColor: isDownPressed ? '#967aa1' : '#f7f7f7',
                                    transition: 'color 0.2s, border-color 0.2s'
                                }}
                                icon={<DownOutlined />}
                                onClick={() => scrollEvents('down')}
                                onMouseDown={() => setIsDownPressed(true)}
                                onMouseUp={() => setIsDownPressed(false)}
                                onMouseLeave={() => setIsDownPressed(false)}
                            />
                        </div>
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
                                    onClick={() => navigate('/mother/allevents')}
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

            {/* Modal for Event Details */}
            <Modal
                title={selectedEvent?.description}
                visible={isModalVisible}
                onCancel={handleModalClose}
                footer={null}
            >
                {selectedEvent && (
                    <div>
                        <p><strong>Date:</strong> {selectedEvent.date}</p>
                        {/*<p><strong>Type:</strong> {selectedEvent.type}</p>*/}
                        <p><strong>Venue:</strong> {selectedEvent.venue}</p>
                        <p><strong>Time:</strong> {selectedEvent.startTime} - {selectedEvent.endTime}</p> {/* Updated to show from - to */}

                        {selectedEvent.online && (
                            <p><strong>Join Zoom:</strong> <a href={selectedEvent.zoomLink} target="_blank" rel="noopener noreferrer" style={{color:'#186faf'}}>Click Here to Join</a></p>
                        )}
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default Dashboard;
