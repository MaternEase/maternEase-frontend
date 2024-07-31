import React from 'react';
import { Row, Col, Input, Radio, DatePicker, Card, Form, InputNumber } from 'antd';
import { PageHeader } from '@ant-design/pro-layout';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material';
import moment from 'moment';

const validateNonNegative = (rule, value) => {
    if (value < 0) {
        return Promise.reject('Value cannot be negative');
    }
    return Promise.resolve();
};

const validateAge = (rule, value) => {
    if (value < 0) {
        return Promise.reject('Age cannot be negative');
    }
    if (value > 18) {
        return Promise.reject('Age cannot be more than 18');
    }
    return Promise.resolve();
};

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
    paginationContainer: {
        textAlign: 'right',
        marginTop: '24px',
    },
    button: {
        backgroundColor: '#967AA1',
        borderColor: '#967AA1',
    },
    immunizationHeader: {
        backgroundColor: '#f5f5f5',
        marginBottom: '10px',
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
    numberOfChildrenAlive: 2,
    ageOfYoungestChild: 5,
    gravidity: {
        G: 3,
        P: 2,
        C: 1,
    },
    lastMenstrualDate: moment('2023-01-15'),
    expectedDeliveryDate: moment('2023-10-22'),
    usCorrectedEDD: moment('2023-10-25'),
    expectedPeriod: '38 weeks',
    dateOfQuickening: moment('2023-04-15'),
    poaAtRegistration: '12 weeks',
    familyMedicalHistory: {
        diabetesMellitus: 'yes',
        hypertension: 'no',
        haematologicalDiseases: 'no',
        twinPregnancies: 'yes',
        otherSpecify: 'None',
    },
    surgicalHistory: {
        diabetes: 'no',
        hypertension: 'yes',
        cardiacDiseases: 'no',
        renalDiseases: 'no',
        hepaticDiseases: 'no',
        psychiatricIllnesses: 'yes',
        epilepsy: 'no',
        malignancies: 'no',
        haematologicalDiseases: 'no',
        tuberculosis: 'yes',
        thyroidDiseases: 'no',
        bronchialAsthma: 'yes',
        previousDVT: 'no',
        Skin_color: 'Pink',
        Eye: 'Normal',
        pecania: 'Dry',
        Temperature: 35.5,
        Stool_color: 4,
    },
};

const Child1 = () => (
    <Form layout="vertical" initialValues={dummyData}>
        <div style={styles.container}>
            <PageHeader
                className="site-page-header"
                title="Health Chart and Immunization"
                style={styles.pageHeader}
            />
            <div className="content">
                <Row gutter={16}>
                    <Col span={24}>
                        <Card
                            title={(
                                <>
                                    <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Child Name: Minuka Sathsara</div>
                                    <span>Birth Date: 21/09/2021</span>
                                    <span style={{ marginLeft: '10px' }}>Age: 2 Years 11 Months</span>
                                </>
                            )}
                            style={styles.card}
                        >
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item
                                        label="Temperature (Celsius)"
                                        name={['surgicalHistory', 'Temperature']}
                                    >
                                        <Input placeholder="Temperature" />
                                    </Form.Item>
                                    <Form.Item label="Stool Color" name={['surgicalHistory', 'Stool_color']}>
                                        <Input placeholder="Stool Color" />
                                    </Form.Item>
                                    <Form.Item label="The state of the pecania" name={['surgicalHistory', 'pecania']}>
                                        <InputNumber min={0} max={10} style={{ width: '100%' }} />
                                    </Form.Item>
                                    <div style={styles.surgicalCondition}>
                                        <span style={styles.surgicalConditionText}>Breastfeeding Only</span>
                                        <Form.Item name={['surgicalHistory', 'diabetes']} noStyle>
                                            <Radio.Group>
                                                <Radio value="yes">Yes</Radio>
                                                <Radio value="no">No</Radio>
                                            </Radio.Group>
                                        </Form.Item>
                                    </div>
                                    <div style={styles.surgicalCondition}>
                                        <span style={styles.surgicalConditionText}>Breastfeeding Only (Connection)</span>
                                        <Form.Item name={['surgicalHistory', 'hypertension']} noStyle>
                                            <Radio.Group>
                                                <Radio value="yes">Yes</Radio>
                                                <Radio value="no">No</Radio>
                                            </Radio.Group>
                                        </Form.Item>
                                    </div>
                                    <div style={styles.surgicalCondition}>
                                        <span style={styles.surgicalConditionText}>Other complications identified</span>
                                        <Form.Item name={['surgicalHistory', 'cardiacDiseases']} noStyle>
                                            <Radio.Group>
                                                <Radio value="yes">Yes</Radio>
                                                <Radio value="no">No</Radio>
                                            </Radio.Group>
                                        </Form.Item>
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        label="Skin color"
                                        name={['surgicalHistory', 'Skin_color']}
                                    >
                                        <Input placeholder="Skin color" />
                                    </Form.Item>
                                    <Form.Item label="Eye" name={['surgicalHistory', 'Eye']}>
                                        <Input placeholder="Eye" />
                                    </Form.Item>
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
                                <TableCell>
                                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Age</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Type of Vaccine</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Date</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Batch Number</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Adverse Effects</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>BCG Scar</Typography>
                                </TableCell>
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
                            <TableRow>
                                <TableCell>2 Months Completed</TableCell>
                                <TableCell>Pentavalent 1</TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>2 Months Completed</TableCell>
                                <TableCell>OPV 1</TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>4 Months Completed</TableCell>
                                <TableCell>Pentavalent 2</TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    </Form>
);

export default Child1;
