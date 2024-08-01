import React from 'react';
import { Row, Col, Input, Radio, DatePicker, Card, Button, Form, InputNumber } from 'antd';
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
        backgroundColor: '#fff5f5',
    },
    pageHeader: {
        backgroundColor: '#ffcccc',
        marginBottom: '10px',
    },
    card: {
        marginBottom: '16px',
        border: '1px solid #ff4d4f',
    },
    sectionTitle: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '12px',
        color: '#a8071a',
    },
    surgicalCondition: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '16px',
    },
    surgicalConditionText: {
        flex: 1,
    },
    inputField: {
        backgroundColor: '#fff1f0',
        borderColor: '#ffa39e',
    },
    paginationContainer: {
        textAlign: 'right',
        marginTop: '24px',
    },
    button: {
        backgroundColor: '#d32029',
        borderColor: '#d32029',
        color: '#ffffff',
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

const Health_charts = () => (
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
                        <Card title={<span style={styles.sectionTitle}>Birth Date : 21/09/2021</span>} style={styles.card}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item
                                        label="Temperature (Celsius)"
                                        name={['surgicalHistory', 'Temperature']}
                                    >
                                        <Input placeholder="Temperature" style={styles.inputField} />
                                    </Form.Item>
                                    <Form.Item label="Stool Color" name={['surgicalHistory', 'Stool_color']}>
                                        <Input placeholder="Stool Color" style={styles.inputField} />
                                    </Form.Item>
                                    <Form.Item label="The state of the pecania" name={['surgicalHistory', 'pecania']}>
                                        <InputNumber min={0} max={10} style={{ width: '100%' }} className="input-number" />
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
                                        <Input placeholder="Skin color" style={styles.inputField} />
                                    </Form.Item>
                                    <Form.Item label="Eye" name={['surgicalHistory', 'Eye']}>
                                        <Input placeholder="Eye" style={styles.inputField} />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Card title={<span style={styles.sectionTitle}>Doctor's Recommendations and Instructions</span>} style={styles.card}>
                            <Form.Item name="recommendations" label="Recommendations and Instructions">
                                <TextArea rows={4} placeholder="Enter recommendations and instructions here..." style={styles.inputField} />
                            </Form.Item>
                            <Link to="">
                        <Button type="primary" style={styles.button}>
                            Save
                        </Button>
                    </Link>
                        </Card>
                    </Col>
                </Row>
                <div style={styles.paginationContainer}>
                    
                </div>
            </div>
        </div>
    </Form>
);

export default Health_charts;