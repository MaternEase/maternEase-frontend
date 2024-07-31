import React, { useState } from 'react';
import { Card, Row, Col, Statistic, Table, Dropdown, Menu, Space, Button, Typography, Input } from 'antd';
import { ArrowForward, KeyboardArrowDown, Face, Face2, Face4, ChildCare, Search, Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import ReusableCard from './Card.jsx';
import CustomCalendar from './Calendar.jsx';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import '../../styles/ExpectantMother/Dashboard.css';
import WeightChart from "../../components/ExpectantMother/WeightChart.jsx";
import FundalHeightChart from "../../components/ExpectantMother/FundalHeightChart.jsx";

const { Title } = Typography;
const { Search: AntSearch } = Input;

const data = [
    {
        key: '1',
        id: 'D63ob',
        name: 'Wasantha Perera',
        age: 48,
        date: '25 Jun 2024',
        time: '09:30 am',
        type: 'Doctor',
        status: 'Pending',
    },
    {
        key: '2',
        id: 'M15623j',
        name: 'Sujatha Dahanayake',
        age: 26,
        date: '01 Jul 2024',
        time: '12:30 pm',
        type: 'Midwife',
        status: 'Pending',
    },
    {
        key: '3',
        id: 'M9586k',
        name: 'Naduni Bandara',
        age: 32,
        date: '29 Jul 2024',
        time: '12:30 pm',
        type: 'Midwife',
        status: 'Pending',
    },
];

const userEvents = {
    '2024-07-25': [{ id: 1, description: 'Event A' }],
    '2024-07-30': [{ id: 2, description: 'Event B' }]
};

const Dashboard = () => {
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

    const cardData = [
        // { key: 1, title: 'Total Children', value: 1052, icon: <ChildCare />, color: '#192A51', paragraph: 'Newborns this week have reached a significant number. Keep track of their progress and ensure proper care is provided.', },
        // { key: 2, title: 'Total Expectant Mothers', value: 475, icon: <Face4 />, color: '#192A51', paragraph: 'The count of expectant mothers is vital for planning and resource allocation. Ensure all are receiving the necessary prenatal care.', },
        // { key: 3, title: 'Doctors', value: 8, icon: <Face />, color: '#192A51', paragraph: 'We currently have a total of 8 doctors available. Their expertise and availability are crucial for providing quality medical care.', },
        // { key: 4, title: 'Midwives', value: 29, icon: <Face2 />, color: '#192A51', paragraph: 'With 29 midwives on duty, we are well-prepared to assist in childbirth and provide essential support to new mothers.', },
    ];

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
        {
            title: <span>ID Code</span>,
            dataIndex: 'id',
            key: 'id',
            sorter: (a, b) => a.id.localeCompare(b.id),
            render: (text) => <span>{text}</span>
        },
        {
            title: <span>Patient Name</span>,
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name),
            render: (text) => <span>{text}</span>
        },
        {
            title: <span>Age</span>,
            dataIndex: 'age',
            key: 'age',
            sorter: (a, b) => a.age - b.age,
            render: (text) => <span>{text}</span>
        },
        {
            title: <span>Created Date</span>,
            dataIndex: 'date',
            key: 'date',
            sorter: (a, b) => new Date(a.date) - new Date(b.date),
            render: (text) => <span>{text}</span>
        },
        {
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

    const clinicsData = [
        { clinic: 'Clinic A', expectantMothers: 30, children: 45, deadBirths: 2, maternalDeaths: 1 },
        { clinic: 'Clinic B', expectantMothers: 20, children: 30, deadBirths: 1, maternalDeaths: 0 },
        { clinic: 'Clinic C', expectantMothers: 50, children: 60, deadBirths: 3, maternalDeaths: 2 },
        { clinic: 'Clinic D', expectantMothers: 40, children: 55, deadBirths: 2, maternalDeaths: 1 },
        { clinic: 'Clinic E', expectantMothers: 35, children: 50, deadBirths: 1, maternalDeaths: 0 },
        { clinic: 'Clinic F', expectantMothers: 25, children: 35, deadBirths: 2, maternalDeaths: 1 },
        { clinic: 'Clinic G', expectantMothers: 45, children: 60, deadBirths: 4, maternalDeaths: 2 },
        { clinic: 'Clinic H', expectantMothers: 55, children: 70, deadBirths: 3, maternalDeaths: 1 },
        { clinic: 'Clinic I', expectantMothers: 65, children: 80, deadBirths: 0, maternalDeaths: 0 },
        { clinic: 'Clinic J', expectantMothers: 60, children: 75, deadBirths: 0, maternalDeaths: 1 },
    ];

    const chartData = {
        labels: clinicsData.map(clinic => clinic.clinic),
        datasets: [
            {
                label: 'Expectant Mothers',
                data: clinicsData.map(clinic => clinic.expectantMothers),
                borderColor: '#9C27B0',
                backgroundColor: '#9C27B0',
                fill: false,
                pointStyle: 'circle',
            },
            {
                label: 'Children Count',
                data: clinicsData.map(clinic => clinic.children),
                borderColor: '#4CAF50',
                backgroundColor: '#4CAF50',
                fill: false,
                pointStyle: 'circle',
            },
            {
                label: 'Dead Births',
                data: clinicsData.map(clinic => clinic.deadBirths),
                borderColor: '#ff4d4f',
                backgroundColor: '#ff4d4f',
                fill: false,
                pointStyle: 'circle',
            },
            {
                label: 'Maternal Deaths',
                data: clinicsData.map(clinic => clinic.maternalDeaths),
                borderColor: '#000',
                backgroundColor: '#000',
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
        <div style={{ padding: '24px', minHeight: '100vh' }}>
            <Title level={3}>Hi, Renuka 👋</Title>
            <Row gutter={16} style={{ marginTop: 24 }}>
                {cardData.map((card) => (
                    <Col span={6} key={card.key}>
                        <ReusableCard
                            card={card}
                            selectedCard={selectedCard}
                            handleCardClick={handleCardClick}
                            menu={menu}
                        />
                    </Col>
                ))}
            </Row>
            <Row gutter={16} style={{ marginTop: 24 }}>
                <Col span={16}>
                    <Card
                        title="Variation of Fundal Height"
                        // extra={
                        //   <Dropdown overlay={statisticsMenu}>
                        //     <Button>
                        //       Last Week <KeyboardArrowDown />
                        //     </Button>
                        //   </Dropdown>
                        // }
                    >
                        <Row style={{marginBottom: "15px"}}>
                            {/*<Col span={12}>*/}
                            {/*    <Statistic title="Total Children" value={1052} valueStyle={{ color: '#967aa1', fontSize: "15px" }} />*/}
                            {/*</Col>*/}
                            {/*<Col span={12}>*/}
                            {/*    <Statistic title="Total Expectant Mothers" value={475} valueStyle={{ color: '#967aa1', fontSize: "15px" }} />*/}
                            {/*</Col>*/}
                            {/* <Col span={6}>
                <Statistic title="Total Doctors" value={18} valueStyle={{ color: '#967aa1' }} />
              </Col>
              <Col span={6}>
                <Statistic title="Total Midwives" value={32} valueStyle={{ color: '#967aa1' }} />
              </Col> */}
                        </Row>
                        <Row gutter={16} style={{ marginTop: 16 }}>
                            <Col span={24}>
                                <div>
                                    <FundalHeightChart/>
                                    <Link to="/mother/fundalchart" style={{ marginLeft: '10px', color: '#1890ff', textDecoration: 'underline' }}>
                                        View full screen
                                    </Link>
                                </div>
                                {/*<div style={{ height: '325px', padding: '20px' }}>*/}
                                {/*    <Line data={chartData} options={chartOptions} />*/}
                                {/*</div>*/}
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col span={8}>
                    {/* <Card title="Calendar" style={{ borderWidth: "2px", borderColor: "#D5C6E0", borderRadius: "10px" }}> */}
                    <Card title="Calendar">
                        <CustomCalendar events={userEvents} fullCalendarPath={userFullCalendarPath} />
                    </Card>
                </Col>
            </Row>
            <Row gutter={24} style={{ marginTop: 24 }}>
                <Col span={24}>
                    <Card
                        title="Un-Assigned Doctors/Midwives"
                        extra={
                            <Space>
                                <AntSearch
                                    placeholder="Search..."
                                    prefix={<Search />}
                                    onSearch={handleSearch}
                                    style={{ width: 200 }}
                                />
                            </Space>
                        }
                    >
                        <Table
                            columns={columns}
                            dataSource={filteredData}
                            pagination={false}
                            components={components}
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;