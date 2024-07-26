import React from 'react';
import { Row, Col, Input, Checkbox, DatePicker, Card, Button, Form, InputNumber } from 'antd';
import { PageHeader } from '@ant-design/pro-layout';
import { Link } from 'react-router-dom';
import '../../styles/ExpectantMother/Dashboard.css';

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

const PregnancyHistory = () => (
    <Form layout="vertical">
        <div className="container">
            <PageHeader
                className="site-page-header"
                onBack={() => window.history.back()}
                title="Pregnancy Record"
            />
            <div className="content">
                <Row gutter={16}>
                    <Col span={24}>
                        <Card title="Pregnancy History">
                            <Row gutter={16}>
                                <Col span={12}>
                                    <div className="label">Present Obstetric History</div>
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
                                    <div className="label">Conditions</div>
                                    <Form.Item>
                                        <Checkbox>Diabetes Mellitus</Checkbox>
                                    </Form.Item>
                                    <Form.Item>
                                        <Checkbox>Hypertension</Checkbox>
                                    </Form.Item>
                                    <Form.Item>
                                        <Checkbox>Haematological Diseases</Checkbox>
                                    </Form.Item>
                                    <Form.Item>
                                        <Checkbox>Twin / multiple pregnancies</Checkbox>
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
                        <Card title="Surgical History">
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item>
                                        <Checkbox>Diabetes</Checkbox>
                                    </Form.Item>
                                    <Form.Item>
                                        <Checkbox>Hypertension</Checkbox>
                                    </Form.Item>
                                    <Form.Item>
                                        <Checkbox>Cardiac diseases</Checkbox>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item>
                                        <Checkbox>Renal diseases</Checkbox>
                                    </Form.Item>
                                    <Form.Item>
                                        <Checkbox>Hepatic diseases</Checkbox>
                                    </Form.Item>
                                    <Form.Item>
                                        <Checkbox>Psychiatric diseases</Checkbox>
                                    </Form.Item>
                                    <Form.Item>
                                        <Checkbox>Epilepsy</Checkbox>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className="pagination-container">
                <Link to="/mother/dashboard">
                    <Button type="primary">Previous</Button>
                </Link>
            </div>
        </div>
    </Form>
);

export default PregnancyHistory;