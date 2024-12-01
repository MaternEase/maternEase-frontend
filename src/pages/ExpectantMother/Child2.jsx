import React from 'react';
import { Row, Col, Card, Collapse } from 'antd';
import { PageHeader } from '@ant-design/pro-layout';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material';

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

const ChildCombined = () => (
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
                        </TableBody>
                    </Table>
                </TableContainer>
            </Panel>

            {/* Adding three additional panels */}
            <Panel header="Growth Monitoring" key="4">
                <Card>
                    <Typography>Details about the child's growth monitoring metrics such as height, weight, and head circumference.</Typography>
                </Card>
            </Panel>

            <Panel header="Allergies and Medications" key="5">
                <Card>
                    <Typography>Details about known allergies, medications, and medical history.</Typography>
                </Card>
            </Panel>

            <Panel header="Family Medical History" key="6">
                <Card>
                    <Typography>Information about family medical history, such as hereditary conditions and health risks.</Typography>
                </Card>
            </Panel>
        </Collapse>
    </div>
);

export default ChildCombined;
