import React from 'react';
import { Row, Col, Input, Select, Checkbox, DatePicker, Card, Button, Form, message } from 'antd';
import { PageHeader } from '@ant-design/pro-layout';
import { Link } from 'react-router-dom';
import '../../styles/ExpectantMother/Dashboard.css';

const { Option } = Select;

const validateAge = (rule, value) => {
    if (value < 0) {
        return Promise.reject('Age cannot be negative');
    }
    return Promise.resolve();
};

const validateDate = (rule, value) => {
    if (value && value.isAfter(new Date())) {
        return Promise.reject('Date cannot be in the future');
    }
    return Promise.resolve();
};

const Dashboard = () => (
    <Form>
        <div className="container">
            <PageHeader
                className="site-page-header"
                onBack={() => window.history.back()}
                title="Pregnancy Record"
            />
            <div className="header-section">
                <div className="checkbox-container">
                    <div className="custom-checkbox firstborn">
                        <Checkbox checked>Firstborn</Checkbox>
                    </div>
                    <div className="custom-checkbox risky">
                        <Checkbox checked>Risky</Checkbox>
                    </div>
                </div>
                <div className="blood-group-container">
                    <label>Blood Group</label>
                    <Select defaultValue="" className="blood-group-select">
                        <Option value="A+">A+</Option>
                        <Option value="B+">B+</Option>
                        <Option value="O+">O+</Option>
                        <Option value="AB+">AB+</Option>
                        {/* Add more options as needed */}
                    </Select>
                </div>
            </div>
            <div className="content">
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="Basic Information">
                            <Form.Item
                                label="Name of the Mother"
                                name="motherName"
                                rules={[{ required: true, message: 'Please input the name of the mother!' }]}
                            >
                                <Input placeholder="Name of the Mother" />
                            </Form.Item>
                            <Form.Item
                                label="Age"
                                name="age"
                                rules={[{ validator: validateAge }]}
                            >
                                <Input placeholder="Age" type="number" />
                            </Form.Item>
                            <Form.Item
                                label="MOH Area"
                                name="mohArea"
                            >
                                <Input placeholder="MOH Area" />
                            </Form.Item>
                            <Form.Item
                                label="PHM Area"
                                name="phmArea"
                            >
                                <Input placeholder="PHM Area" />
                            </Form.Item>
                            <Form.Item
                                label="Name of Field Clinic"
                                name="fieldClinic"
                            >
                                <Input placeholder="Name of Field Clinic" />
                            </Form.Item>
                            <Form.Item
                                label="Grama Niladhari Division"
                                name="gramaNiladhari"
                            >
                                <Input placeholder="Grama Niladhari Division" />
                            </Form.Item>
                        </Card>
                    </Col>
                    <Col span={16}>
                        <Card title="Registration Details">
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Card title="Eligible Family Register">
                                        <Form.Item
                                            label="Registration No."
                                            name="familyRegNo"
                                        >
                                            <Input placeholder="Registration No." />
                                        </Form.Item>
                                        <Form.Item
                                            label="Registration Date"
                                            name="familyRegDate"
                                            rules={[{ validator: validateDate }]}
                                        >
                                            <DatePicker placeholder="Registration Date" />
                                        </Form.Item>
                                    </Card>
                                </Col>
                                <Col span={12}>
                                    <Card title="Pregnant Mother’s Register">
                                        <Form.Item
                                            label="Registration No."
                                            name="motherRegNo"
                                        >
                                            <Input placeholder="Registration No." />
                                        </Form.Item>
                                        <Form.Item
                                            label="Registration Date"
                                            name="motherRegDate"
                                            rules={[{ validator: validateDate }]}
                                        >
                                            <DatePicker placeholder="Registration Date" />
                                        </Form.Item>
                                    </Card>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Card title="Additional Information">
                            <Row gutter={16}>
                                <Col span={8}>
                                    <Checkbox>Consanguinity</Checkbox>
                                    <Checkbox>Rubella Immunization</Checkbox>
                                    <Checkbox>Pre-pregnancy screening done</Checkbox>
                                    <Checkbox>Pre-conceptional folic acid</Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox>History of subfertility</Checkbox>
                                    <Checkbox>Planned pregnancy or not</Checkbox>
                                    <Checkbox>Family Planning Method Used</Checkbox>
                                </Col>
                            </Row>
                            <Form.Item
                                label="Identified Antenatal Risk Conditions & Morbidity"
                                name="riskConditions"
                            >
                                <Input.TextArea placeholder="Identified Antenatal Risk Conditions & Morbidity" rows={4} />
                            </Form.Item>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className="pagination-container">
                <Link to="/mother/pregnancy-history">
                    <Button type="primary">Next</Button>
                </Link>
            </div>
        </div>
    </Form>
);

export default Dashboard;
