import React from 'react';
import { Row, Col, Input, Radio, Card, Form, InputNumber, Collapse } from 'antd';
import { PageHeader } from '@ant-design/pro-layout';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material';
import moment from 'moment';

const { Panel } = Collapse;

const styles = {
    container: { padding: '24px', backgroundColor: '#ffffff' },
    pageHeader: { backgroundColor: '#f5f5f5', marginBottom: '10px' },
    sectionTitle: { fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' },
    immunizationCard: { p: 2, backgroundColor: 'white', borderRadius: 1, boxShadow: 1, display: 'flex', gap: 2 },
    immunizationTable: { mt: 2 },
};

const dummyData = {
    surgicalHistory: {
        Temperature: 35.5,
        Stool_color: 4,
        pecania: 'Dry',
        diabetes: 'no',
        hypertension: 'yes',
        Skin_color: 'Pink',
        Eye: 'Normal',
    },
};

const Child1 = () => (
    <div style={styles.container}>
        <PageHeader
            className="site-page-header"
            title="Health Chart and Immunization"
            style={styles.pageHeader}
        />

        <Collapse accordion>
            <Panel header="Basic Information" key="1">
                <Card style={styles.sectionTitle}>
                    <div><strong>Child Name:</strong> Minuka Sathsara</div>
                    <div><strong>Birth Date:</strong> 21/09/2021</div>
                    <div><strong>Age:</strong> 2 Years 11 Months</div>
                </Card>
            </Panel>

            <Panel header="Health Chart" key="2">
                <Row gutter={16}>
                    <Col span={12}>
                        <div><strong>Temperature (Celsius):</strong> {dummyData.surgicalHistory.Temperature}</div>
                        <div><strong>Stool Color:</strong> {dummyData.surgicalHistory.Stool_color}</div>
                        <div><strong>Pecania:</strong> {dummyData.surgicalHistory.pecania}</div>
                    </Col>
                    <Col span={12}>
                        <div><strong>Skin Color:</strong> {dummyData.surgicalHistory.Skin_color}</div>
                        <div><strong>Eye:</strong> {dummyData.surgicalHistory.Eye}</div>
                    </Col>
                </Row>
            </Panel>

            <Panel header="Immunization Details" key="3">
                <Box sx={styles.immunizationCard}>
                    <Box>
                        <Typography variant="body1">21/11/2021</Typography>
                    </Box>
                    <Box>
                        <Typography variant="body1">MOH</Typography>
                    </Box>
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
                            <TableRow>
                                <TableCell>At Birth</TableCell>
                                <TableCell>BCG</TableCell>
                                <TableCell>21/09/2021</TableCell>
                                <TableCell>0370G070</TableCell>
                                <TableCell>0</TableCell>
                                <TableCell>Present</TableCell>
                            </TableRow>
                            {/* Add other rows as needed */}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Panel>
        </Collapse>
    </div>
);

export default Child1;
