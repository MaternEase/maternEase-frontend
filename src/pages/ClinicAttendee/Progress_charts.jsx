import React, { useState } from 'react';
import { Card, Row, Col, Statistic, Table, Dropdown, Menu, Space, Button, Typography, Input } from 'antd';
import { ArrowForward, KeyboardArrowDown, Face, Face2, Face4, ChildCare, Search, Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import ReusableCard from './Card.jsx';
import CustomCalendar from './Calendar.jsx';
import ChildGrowthChart from './ChildGrowthChart.jsx';
import '../../styles/ClinicAttendee/Dashboard.css';

const { Title } = Typography;
const { Search: AntSearch } = Input;

const data = [
    {
        key: '1',
        age: 2,
        name: 'Pentavalent 1',
        date: '25 Jun 2024',
        num: '25140G',
    },
    {
        key: '2',
        age: 2,
        name: 'OPV 1',
        date: '25 Jun 2024',
        num: '25140G',
    },
    {
        key: '3',
        age: 4,
        name: 'Pentavalent 2',
        date: '25 Aug 2024',
        num: '25140G',
    },
];

const userEvents = {
    '2024-07-25': [{ id: 1, description: 'Event A' }],
    '2024-07-30': [{ id: 2, description: 'Event B' }]
};

const Progress_charts = () => {
    const [selectedCard, setSelectedCard] = useState(null);
    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();

    const handleCardClick = (cardKey) => {
        setSelectedCard(cardKey);
    };

    const handleSearch = (value) => {
        setSearchText(value);
    };

    const handleEdit = (key) => {
        console.log('Edit action for record with key:', key);
        // Implement the edit functionality here
    };

    const menu = (
        <Menu>
            <Menu.Item key="1">View Details</Menu.Item>
        </Menu>
    );

    const statisticsMenu = (
        <Menu>
            <Menu.Item key="1" onClick={() => navigate('/admin/dashboard')}>
                Last Week
            </Menu.Item>
            <Menu.Item key="2" onClick={() => navigate('/admin/dashboard')}>
                This Week
            </Menu.Item>
        </Menu>
    );

    
    const userFullCalendarPath = '/mother/full-calendar';

    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.id.toLowerCase().includes(searchText.toLowerCase())
    );

    const columns = [
        {
            title: <span>No</span>,
            dataIndex: 'key',
            key: 'key',
            sorter: (a, b) => a.key - b.key,
            render: (text) => <span>{text}</span>
        },
        /*{
            title: <span>Age</span>,
            dataIndex: 'age',
            key: 'age',
            sorter: (a, b) => a.age - b.age,
            render: (text) => <span>{text}</span>
        },*/
        {
            title: <span>Type of Vaccine</span>,
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name),
            render: (text) => <span>{text}</span>
        },
        /*{
            title: <span>Age</span>,
            dataIndex: 'age',
            key: 'age',
            sorter: (a, b) => a.age - b.age,
            render: (text) => <span>{text}</span>
        },*/
        {
            title: <span>Date of vaccination</span>,
            dataIndex: 'date',
            key: 'date',
            sorter: (a, b) => new Date(a.date) - new Date(b.date),
            render: (text) => <span>{text}</span>
        },
        /*{
            title: <span>Time</span>,
            dataIndex: 'time',
            key: 'time',
            sorter: (a, b) => a.time.localeCompare(b.time),
            render: (text) => <span>{text}</span>
        },
        {
            title: <span>Type</span>,
            dataIndex: 'type',
            key: 'type',
            filters: [
                { text: 'Doctor', value: 'Doctor' },
                { text: 'Midwife', value: 'Midwife' },
            ],
            onFilter: (value, record) => record.type.includes(value),
            render: (text) => <span>{text}</span>
        },
        {
            title: <span>Status</span>,
            dataIndex: 'status',
            key: 'status',
            filters: [
                { text: 'Pending', value: 'Pending' },
                { text: 'Assigned', value: 'Assigned' },
            ],
            onFilter: (value, record) => record.status.includes(value),
            render: (text) => <span style={{backgroundColor: "#f6dda9", padding: "7px", borderRadius: "10px", fontSize: "12px"}}>{text}</span>
        },
        {
            title: <span>Action</span>,
            dataIndex: 'action',
            key: 'action',
            render: (_, record) => (
                <Button
                    icon={<Edit fontSize="small" />}
                    onClick={() => handleEdit(record.key)}
                    size="small"
                    style={{ border: 'none' }}
                />
            ),
        },*/
    ];

    const columns2 = [
        {
            title: <span>No</span>,
            dataIndex: 'key',
            key: 'key',
            sorter: (a, b) => a.key - b.key,
            render: (text) => <span>{text}</span>
        },
       
        {
            title: <span>Batch Number </span>,
            dataIndex: 'num',
            key: 'num',
            sorter: (a, b) => a.num.localeCompare(b.num),
            render: (text) => <span>{text}</span>
        },
       
        {
            title: <span>Date of vaccination</span>,
            dataIndex: 'date',
            key: 'date',
            sorter: (a, b) => new Date(a.date) - new Date(b.date),
            render: (text) => <span>{text}</span>
        },
            ];

    const components = {
        header: {
            cell: (props) => (
                <th
                    {...props}
                    style={{
                        // backgroundColor: '#f0f0f0',
                        color: '#192A51',
                        padding: '8px',
                    }}
                />
            ),
        },
    };

    // Sample data for the child growth chart
    const growthData = [
        { age: 0, weight: 3.5 },
        { age: 1, weight: 4.2 },
        { age: 2, weight: 5.0 },
        { age: 3, weight: 5.7 },
        { age: 4, weight: 6.3 },
        { age: 5, weight: 6.8 },
        { age: 6, weight: 7.2 },
        { age: 7, weight: 7.5 },
        { age: 8, weight: 7.8 },
        { age: 9, weight: 8.0 },
        { age: 10, weight: 8.2 },
        { age: 11, weight: 8.4 },
        { age: 12, weight: 8.5 },
    ];

    return (
        <div style={{ padding: '24px', minHeight: '100vh' }}>
            <Title level={3}>Birth Weight - 3.560 kg</Title>
            <Title level={3}>1 year old</Title>
            
            <Row gutter={16} style={{ marginTop: 24 }}>
                <Col span={16}>
                    
                    
                        <Row gutter={16} style={{ marginTop: 16 }}>
                            <Col span={24}>
                                <div style={{ height: '325px', padding: '20px' }}>
                                    <ChildGrowthChart data={growthData} />
                                </div>
                            </Col>
                        </Row>
                   
                </Col>
                
            </Row>
           
        </div>
    );
};

export default Progress_charts;
