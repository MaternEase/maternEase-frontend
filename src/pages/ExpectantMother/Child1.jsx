import React from 'react';
import { Row, Col, Card } from 'antd';
import { PageHeader } from '@ant-design/pro-layout';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material';
import moment from 'moment';

const styles = {
    container: {
        padding: '24px',
        backgroundColor: '#ffffff',
    },
    pageHeader: {
        backgroundColor: '#f5f5f5',
        marginBottom: '10px',
    },
    card: {
        marginBottom: '16px',
    },
    sectionTitle: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '12px',
    },
    surgicalCondition: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '16px',
    },
    surgicalConditionText: {
        flex: 1,
    },
    immunizationCard: {
        p: 2,
        backgroundColor: 'white',
        borderRadius: 1,
        boxShadow: 1,
        display: 'flex',
        gap: 2,
    },
    immunizationTable: {
        mt: 2,
    },
};

const dummyData = {
    temperature: 36.5,
    stoolColor: 'Yellow',
    pecaniaState: 'Dry',
    skinColor: 'Pink',
    eye: 'Normal',
    breastfeedingOnly: 'No',
    complications: 'No',
    immunizations: [
        { age: 'At Birth', vaccine: 'BCG', date: '29/06/2019', batch: '0370G070', effects: 'None', scar: 'Present' },
        { age: '2 Months', vaccine: 'Pentavalent 1', date: '29/08/2019', batch: '0450H111', effects: 'Fever', scar: 'Absent' },
        { age: '2 Months', vaccine: 'OPV 1', date: '29/08/2019', batch: '0450H112', effects: 'None', scar: 'Absent' },
        // Add more data as needed
    ],
};

const Child1 = () => (
    <div style={styles.container}>
        <PageHeader
            className="site-page-header"
            title="Child Profile"
            style={styles.pageHeader}
        />
        <Row gutter={16}>
            <Col span={24}>
                <Card
                    title={(
                        <>
                            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Child Name : Senuka Nimsara</div>
                            <span>Birth Date : 29/06/2019</span>
                            <span style={{ marginLeft: '10px' }}>Age : 4 Years 01 Months</span>
                        </>
                    )}
                    style={styles.card}
                >
                    <Row gutter={16}>
                        <Col span={12}>
                            <Typography variant="body1"><strong>Temperature (Celsius):</strong> {dummyData.temperature}</Typography>
                            <Typography variant="body1"><strong>Complications Identified:</strong> {dummyData.complications}</Typography>
                        </Col>
                        <Col span={12}>
                            <Typography variant="body1"><strong>Eye:</strong> {dummyData.eye}</Typography>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>

        <PageHeader
            className="site-page-header"
            title="Immunization Details"
            style={styles.pageHeader}
        />

        <Box sx={styles.immunizationCard}>
            <Typography variant="body1">Immunization History</Typography>
        </Box>

        <TableContainer component={Paper} sx={styles.immunizationTable}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><Typography variant="body1" sx={{ fontWeight: 'bold' }}>Age</Typography></TableCell>
                        <TableCell><Typography variant="body1" sx={{ fontWeight: 'bold' }}>Type of Vaccine</Typography></TableCell>
                        <TableCell><Typography variant="body1" sx={{ fontWeight: 'bold' }}>Date</Typography></TableCell>
                        <TableCell><Typography variant="body1" sx={{ fontWeight: 'bold' }}>Batch Number</Typography></TableCell>
                        <TableCell><Typography variant="body1" sx={{ fontWeight: 'bold' }}>Adverse Effects</Typography></TableCell>
                        <TableCell><Typography variant="body1" sx={{ fontWeight: 'bold' }}>BCG Scar</Typography></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dummyData.immunizations.map((record, index) => (
                        <TableRow key={index}>
                            <TableCell>{record.age}</TableCell>
                            <TableCell>{record.vaccine}</TableCell>
                            <TableCell>{record.date}</TableCell>
                            <TableCell>{record.batch}</TableCell>
                            <TableCell>{record.effects}</TableCell>
                            <TableCell>{record.scar}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
);

export default Child1;
