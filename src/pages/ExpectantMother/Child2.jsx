import React from 'react';
import { Row, Col, Input, Radio, Card, Form, InputNumber } from 'antd';
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
    ageOfYoungestChild: 4,
    gravidity: {
        G: 3,
        P: 2,
        C: 1,
    },
    lastMenstrualDate: moment('2019-06-29'),
    expectedDeliveryDate: moment('2019-04-15'),
    usCorrectedEDD: moment('2019-04-22'),
    expectedPeriod: '38 weeks',
    dateOfQuickening: moment('2019-01-10'),
    poaAtRegistration: '12 weeks',
    familyMedicalHistory: {
        diabetesMellitus: 'no',
        hypertension: 'no',
        haematologicalDiseases: 'no',
        twinPregnancies: 'no',
        otherSpecify: 'None',
    },
    surgicalHistory: {
        diabetes: 'no',
        hypertension: 'no',
        cardiacDiseases: 'no',
        renalDiseases: 'no',
        hepaticDiseases: 'no',
        psychiatricIllnesses: 'no',
        epilepsy: 'no',
        malignancies: 'no',
        haematologicalDiseases: 'no',
        tuberculosis: 'no',
        thyroidDiseases: 'no',
        bronchialAsthma: 'no',
        previousDVT: 'no',
        Skin_color: 'Pink',
        Eye: 'Normal',
        pecania: 'Dry',
        Temperature: 36.5,
        Stool_color: 'Yellow',
    },
};

const Child2 = () => (
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
                                    <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Child Name: Senuka Nimsara</div>
                                    <span>Birth Date: 29/06/2019</span>
                                    <span style={{ marginLeft: '10px' }}>Age: 4 Years 01 Months</span>
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
                        <Typography variant="body1">29/06/2019</Typography>
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
                                <TableCell>29/06/2019</TableCell>
                                <TableCell>0370G070</TableCell>
                                <TableCell>None</TableCell>
                                <TableCell>Present</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>2 Months</TableCell>
                                <TableCell>Pentavalent 1</TableCell>
                                <TableCell>29/08/2019</TableCell>
                                <TableCell>0450H111</TableCell>
                                <TableCell>Fever</TableCell>
                                <TableCell>Absent</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>2 Months</TableCell>
                                <TableCell>OPV 1</TableCell>
                                <TableCell>29/08/2019</TableCell>
                                <TableCell>0450H112</TableCell>
                                <TableCell>None</TableCell>
                                <TableCell>Absent</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>4 Months</TableCell>
                                <TableCell>Pentavalent 2</TableCell>
                                <TableCell>29/10/2019</TableCell>
                                <TableCell>0450H113</TableCell>
                                <TableCell>None</TableCell>
                                <TableCell>Absent</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>6 Months</TableCell>
                                <TableCell>Pentavalent 3</TableCell>
                                <TableCell>29/12/2019</TableCell>
                                <TableCell>0450H114</TableCell>
                                <TableCell>None</TableCell>
                                <TableCell>Absent</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>12 Months</TableCell>
                                <TableCell>MMR 1</TableCell>
                                <TableCell>29/06/2020</TableCell>
                                <TableCell>0450H115</TableCell>
                                <TableCell>None</TableCell>
                                <TableCell>Absent</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>18 Months</TableCell>
                                <TableCell>Pentavalent Booster</TableCell>
                                <TableCell>29/12/2020</TableCell>
                                <TableCell>0450H116</TableCell>
                                <TableCell>None</TableCell>
                                <TableCell>Absent</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>4 Years</TableCell>
                                <TableCell>MMR 2</TableCell>
                                <TableCell>29/06/2023</TableCell>
                                <TableCell>0450H117</TableCell>
                                <TableCell>None</TableCell>
                                <TableCell>Absent</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    </Form>
);

export default Child2;
