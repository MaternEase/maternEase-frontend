import React, { useState } from 'react';
import { Row, Col, Input, Radio, Card, Button, Form, InputNumber } from 'antd';
import { PageHeader } from '@ant-design/pro-layout';
import { Link } from 'react-router-dom';
import moment from 'moment';

const { TextArea } = Input;

const validateNonNegative = (rule, value) => {
    if (value < 0) {
        return Promise.reject('Value cannot be negative');
    }
    return Promise.resolve();
};

const validateTemperature = (rule, value) => {
    if (value < 35 || value > 42) {
        return Promise.reject('Temperature must be between 35°C and 42°C');
    }
    return Promise.resolve();
};

const validateStoolColor = (rule, value) => {
    if (!value || isNaN(value) || value < 1 || value > 7) {
        return Promise.reject('Stool color must be a number between 1 and 7');
    }
    return Promise.resolve();
};

const validateWeight = (rule, value) => {
    if (value <= 0 || value > 10) {
        return Promise.reject('Weight must be between 0 and 10 kg');
    }
    return Promise.resolve();
};

const validateHeight = (rule, value) => {
    if (value <= 0 || value > 150) {
        return Promise.reject('Height must be between 0 and 150 cm');
    }
    return Promise.resolve();
};

const validateVaccinationStatus = (rule, value) => {
    if (!value || !['Completed', 'Incomplete', 'Pending'].includes(value)) {
        return Promise.reject('Vaccination status must be "Completed", "Incomplete", or "Pending"');
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
    babyDetails: {
        weight: 3.2,
        height: 50,
        vaccinationStatus: 'Completed',
    },
};

const Health_charts = () => {
    const [isSaved, setIsSaved] = useState(false);

    const handleSave = () => {
        // Implement save logic here (e.g., call an API or update state)
        setIsSaved(true);
    };

    return (
        <Form layout="vertical" initialValues={dummyData}>
            <div style={styles.container}>
                <PageHeader
                    className="site-page-header"
                    title="Health Chart"
                    style={styles.pageHeader}
                />
                <div className="content">
                    <Row gutter={16}>
                        <Col span={24}>
                            <Card title={<span>Birth Date: 21/09/2021</span>} style={styles.card}>
                                <Row gutter={16}>
                                    <Col span={12}>
                                        <Form.Item
                                            label="Temperature (Celsius)"
                                            name={['surgicalHistory', 'Temperature']}
                                            rules={[{ validator: validateTemperature }]}
                                        >
                                            <Input placeholder="Temperature" />
                                        </Form.Item>
                                        <Form.Item
                                            label="Stool Color"
                                            name={['surgicalHistory', 'Stool_color']}
                                            rules={[{ validator: validateStoolColor }]}
                                        >
                                            <Input placeholder="Stool Color" />
                                        </Form.Item>
                                        <Form.Item
                                            label="The state of the pecania"
                                            name={['surgicalHistory', 'pecania']}
                                        >
                                            <InputNumber min={0} max={10} style={{ width: '100%' }} />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                            label="Skin Color"
                                            name={['surgicalHistory', 'Skin_color']}
                                        >
                                            <Input placeholder="Skin Color" />
                                        </Form.Item>
                                        <Form.Item
                                            label="Eye"
                                            name={['surgicalHistory', 'Eye']}
                                        >
                                            <Input placeholder="Eye" />
                                        </Form.Item>
                                        <Form.Item
                                            label="Weight (kg)"
                                            name={['babyDetails', 'weight']}
                                            rules={[{ validator: validateWeight }]}
                                        >
                                            <InputNumber min={0} style={{ width: '100%' }} />
                                        </Form.Item>
                                        <Form.Item
                                            label="Height (cm)"
                                            name={['babyDetails', 'height']}
                                            rules={[{ validator: validateHeight }]}
                                        >
                                            <InputNumber min={0} style={{ width: '100%' }} />
                                        </Form.Item>
                                        <Form.Item
                                            label="Vaccination Status"
                                            name={['babyDetails', 'vaccinationStatus']}
                                            rules={[{ validator: validateVaccinationStatus }]}
                                        >
                                            <Input placeholder="Vaccination Status" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <div style={styles.surgicalCondition}>
                                    <span style={styles.surgicalConditionText}>Breastfeeding Only</span>
                                    <Form.Item name={['surgicalHistory', 'diabetes']} noStyle>
                                        <Radio.Group>
                                            <Radio value="yes">Yes</Radio>
                                            <Radio value="no">No</Radio>
                                        </Radio.Group>
                                    </Form.Item>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <div style={styles.paginationContainer}>
                        <Button
                            type={isSaved ? 'default' : 'primary'}
                            style={styles.button}
                            onClick={handleSave}
                        >
                            {isSaved ? 'Saved' : 'Save'}
                        </Button>
                    </div>
                    <div style={styles.paginationContainer}>
                        <Link to="/doctor/recommandations">
                            <Button type="primary" style={styles.button}>
                                Add Recommendations
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Form>
    );
};

export default Health_charts;
