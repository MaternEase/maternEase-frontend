import React from 'react';
import { Row, Col, Input, Radio, DatePicker, Card, Button, Form, InputNumber } from 'antd';
import { PageHeader } from '@ant-design/pro-layout';
import { Link } from 'react-router-dom';
import { CalendarOutlined, UserOutlined, SafetyCertificateOutlined } from '@ant-design/icons';

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

const PregnancyHistory = () => (
    <Form layout="vertical">
        <div style={styles.container}>
            <PageHeader
                className="site-page-header"
                onBack={() => window.history.back()}
                title="Pregnancy Record"
                style={styles.pageHeader}
            />
            <div className="content">
                <Row gutter={16}>
                    <Col span={24}>
                        <Card title={<span><UserOutlined /> Pregnancy History</span>} style={styles.card}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <div style={styles.sectionTitle}>Present Obstetric History</div>
                                    <Form.Item label="Gravidity">
                                        <Row gutter={16}>
                                            <Col span={8}>
                                                <Form.Item label="G">
                                                    <Input placeholder="G" />
                                                </Form.Item>
                                            </Col>
                                            <Col span={8}>
                                                <Form.Item label="P">
                                                    <Input placeholder="P" />
                                                </Form.Item>
                                            </Col>
                                            <Col span={8}>
                                                <Form.Item label="C">
                                                    <Input placeholder="C" />
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                    </Form.Item>
                                    <Form.Item
                                        label="Number of Children Alive"
                                        name="numberOfChildrenAlive"
                                        rules={[{ validator: validateNonNegative }]}
                                    >
                                        <InputNumber min={0} style={{ width: '100%' }} />
                                    </Form.Item>
                                    <Form.Item
                                        label="Age of Youngest Child"
                                        name="ageOfYoungestChild"
                                        rules={[{ validator: validateAge }]}
                                    >
                                        <InputNumber min={0} max={18} style={{ width: '100%' }} />
                                    </Form.Item>
                                    <Row gutter={16}>
                                        <Col span={8}>
                                            <Form.Item label="Last Menstrual Date">
                                                <DatePicker placeholder="Select Date" style={{ width: '100%' }} />
                                            </Form.Item>
                                        </Col>
                                        <Col span={8}>
                                            <Form.Item label="Expected Delivery Date">
                                                <DatePicker placeholder="Select Date" style={{ width: '100%' }} />
                                            </Form.Item>
                                        </Col>
                                        <Col span={8}>
                                            <Form.Item label="US Corrected Expected Delivery Date">
                                                <DatePicker placeholder="Select Date" style={{ width: '100%' }} />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Form.Item label="Expected Period">
                                        <Input placeholder="Expected Period" />
                                    </Form.Item>
                                    <Form.Item label="Date of Quickening">
                                        <DatePicker placeholder="Select Date" style={{ width: '100%' }} />
                                    </Form.Item>
                                    <Form.Item label="POA at Registration">
                                        <Input placeholder="POA at Registration" />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <div style={styles.sectionTitle}>Family Medical History</div>
                                    <Form.Item>
                                        <Radio.Group>
                                            <Radio value="diabetesMellitus">Diabetes Mellitus</Radio>
                                        </Radio.Group>
                                    </Form.Item>
                                    <Form.Item>
                                        <Radio.Group>
                                            <Radio value="hypertension">Hypertension</Radio>
                                        </Radio.Group>
                                    </Form.Item>
                                    <Form.Item>
                                        <Radio.Group>
                                            <Radio value="haematologicalDiseases">Haematological Diseases</Radio>
                                        </Radio.Group>
                                    </Form.Item>
                                    <Form.Item>
                                        <Radio.Group>
                                            <Radio value="twinPregnancies">Twin / multiple pregnancies</Radio>
                                        </Radio.Group>
                                    </Form.Item>
                                    <Form.Item label="Others (Specify)">
                                        <Input placeholder="Others (Specify)" />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Card title={<span><SafetyCertificateOutlined /> Surgical History</span>} style={styles.card}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <div style={styles.surgicalCondition}>
                                        <span style={styles.surgicalConditionText}>Diabetes</span>
                                        <Form.Item name="diabetes" noStyle>
                                            <Radio.Group>
                                                <Radio value="yes">Yes</Radio>
                                                <Radio value="no">No</Radio>
                                            </Radio.Group>
                                        </Form.Item>
                                    </div>
                                    <div style={styles.surgicalCondition}>
                                        <span style={styles.surgicalConditionText}>Hypertension</span>
                                        <Form.Item name="hypertension" noStyle>
                                            <Radio.Group>
                                                <Radio value="yes">Yes</Radio>
                                                <Radio value="no">No</Radio>
                                            </Radio.Group>
                                        </Form.Item>
                                    </div>
                                    <div style={styles.surgicalCondition}>
                                        <span style={styles.surgicalConditionText}>Cardiac diseases</span>
                                        <Form.Item name="cardiacDiseases" noStyle>
                                            <Radio.Group>
                                                <Radio value="yes">Yes</Radio>
                                                <Radio value="no">No</Radio>
                                            </Radio.Group>
                                        </Form.Item>
                                    </div>
                                    <div style={styles.surgicalCondition}>
                                        <span style={styles.surgicalConditionText}>Renal diseases</span>
                                        <Form.Item name="renalDiseases" noStyle>
                                            <Radio.Group>
                                                <Radio value="yes">Yes</Radio>
                                                <Radio value="no">No</Radio>
                                            </Radio.Group>
                                        </Form.Item>
                                    </div>
                                    <div style={styles.surgicalCondition}>
                                        <span style={styles.surgicalConditionText}>Hepatic diseases</span>
                                        <Form.Item name="hepaticDiseases" noStyle>
                                            <Radio.Group>
                                                <Radio value="yes">Yes</Radio>
                                                <Radio value="no">No</Radio>
                                            </Radio.Group>
                                        </Form.Item>
                                    </div>
                                    <div style={styles.surgicalCondition}>
                                        <span style={styles.surgicalConditionText}>Psychiatric illnesses</span>
                                        <Form.Item name="psychiatricIllnesses" noStyle>
                                            <Radio.Group>
                                                <Radio value="yes">Yes</Radio>
                                                <Radio value="no">No</Radio>
                                            </Radio.Group>
                                        </Form.Item>
                                    </div>
                                    <div style={styles.surgicalCondition}>
                                        <span style={styles.surgicalConditionText}>Epilepsy</span>
                                        <Form.Item name="epilepsy" noStyle>
                                            <Radio.Group>
                                                <Radio value="yes">Yes</Radio>
                                                <Radio value="no">No</Radio>
                                            </Radio.Group>
                                        </Form.Item>
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div style={styles.surgicalCondition}>
                                        <span style={styles.surgicalConditionText}>Malignancies</span>
                                        <Form.Item name="malignancies" noStyle>
                                            <Radio.Group>
                                                <Radio value="yes">Yes</Radio>
                                                <Radio value="no">No</Radio>
                                            </Radio.Group>
                                        </Form.Item>
                                    </div>
                                    <div style={styles.surgicalCondition}>
                                        <span style={styles.surgicalConditionText}>Haematological diseases</span>
                                        <Form.Item name="haematologicalDiseases" noStyle>
                                            <Radio.Group>
                                                <Radio value="yes">Yes</Radio>
                                                <Radio value="no">No</Radio>
                                            </Radio.Group>
                                        </Form.Item>
                                    </div>
                                    <div style={styles.surgicalCondition}>
                                        <span style={styles.surgicalConditionText}>Tuberculosis</span>
                                        <Form.Item name="tuberculosis" noStyle>
                                            <Radio.Group>
                                                <Radio value="yes">Yes</Radio>
                                                <Radio value="no">No</Radio>
                                            </Radio.Group>
                                        </Form.Item>
                                    </div>
                                    <div style={styles.surgicalCondition}>
                                        <span style={styles.surgicalConditionText}>Thyroid diseases</span>
                                        <Form.Item name="thyroidDiseases" noStyle>
                                            <Radio.Group>
                                                <Radio value="yes">Yes</Radio>
                                                <Radio value="no">No</Radio>
                                            </Radio.Group>
                                        </Form.Item>
                                    </div>
                                    <div style={styles.surgicalCondition}>
                                        <span style={styles.surgicalConditionText}>Bronchial asthma</span>
                                        <Form.Item name="bronchialAsthma" noStyle>
                                            <Radio.Group>
                                                <Radio value="yes">Yes</Radio>
                                                <Radio value="no">No</Radio>
                                            </Radio.Group>
                                        </Form.Item>
                                    </div>
                                    <div style={styles.surgicalCondition}>
                                        <span style={styles.surgicalConditionText}>Previous DVT</span>
                                        <Form.Item name="previousDVT" noStyle>
                                            <Radio.Group>
                                                <Radio value="yes">Yes</Radio>
                                                <Radio value="no">No</Radio>
                                            </Radio.Group>
                                        </Form.Item>
                                    </div>
                                    <div style={styles.surgicalCondition}>
                                        <span style={styles.surgicalConditionText}>Surgeries other than LSCS</span>
                                        <Form.Item name="surgeriesOtherThanLSCS" noStyle>
                                            <Input placeholder="Surgeries other than LSCS" />
                                        </Form.Item>
                                    </div>
                                    <div style={styles.surgicalCondition}>
                                        <span style={styles.surgicalConditionText}>Other (Specify)</span>
                                        <Form.Item name="otherSpecify" noStyle>
                                            <Input placeholder="Other (Specify)" />
                                        </Form.Item>
                                    </div>
                                    <div style={styles.surgicalCondition}>
                                        <span style={styles.surgicalConditionText}>Social Z score</span>
                                        <Form.Item name="socialZScore" noStyle>
                                            <Input placeholder="Social Z score" />
                                        </Form.Item>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div style={styles.paginationContainer}>
                <Link to="/mother/reporttwo">
                    <Button type="primary" style={styles.button}>Previous</Button>
                </Link>
            </div>
        </div>
    </Form>
);

export default PregnancyHistory;
