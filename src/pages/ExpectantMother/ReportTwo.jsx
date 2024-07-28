import React from 'react';
import { Form, Input, Col, Row, DatePicker, Radio, Card, InputNumber } from 'antd';

const styles = {
    container: {
        padding: '24px',
        backgroundColor: '#ffffff',
    },
    card: {
        marginBottom: '16px',
    },
    inputField: {
        width: '100%',
    },
};

const ReportTwo = () => {
    return (
        <div style={styles.container}>
            <Card title="Clinic Care" style={styles.card}>
                <Form layout="vertical">
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item label="Date of Visit">
                                <DatePicker style={styles.inputField} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <Col span={2.4} key={`date-visit-${index}`}>
                                <Form.Item label={`Visit ${index + 1}`}>
                                    <DatePicker style={styles.inputField} />
                                </Form.Item>
                            </Col>
                        ))}
                    </Row>
                    <Row gutter={16}>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <Col span={2.4} key={`gravidity-${index}`}>
                                <Form.Item label={`Gravidity ${index + 1}`}>
                                    <InputNumber style={styles.inputField} />
                                </Form.Item>
                            </Col>
                        ))}
                    </Row>
                    <Row gutter={16}>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <Col span={2.4} key={`poa-${index}`}>
                                <Form.Item label={`POA ${index + 1}`}>
                                    <InputNumber style={styles.inputField} />
                                </Form.Item>
                            </Col>
                        ))}
                    </Row>
                    <Row gutter={16}>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <Col span={2.4} key={`weight-${index}`}>
                                <Form.Item label={`Weight ${index + 1}`}>
                                    <InputNumber style={styles.inputField} />
                                </Form.Item>
                            </Col>
                        ))}
                    </Row>
                    <Row gutter={16}>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <Col span={2.4} key={`bp-${index}`}>
                                <Form.Item label={`BP ${index + 1}`}>
                                    <Input placeholder="Systolic / Diastolic" style={styles.inputField} />
                                </Form.Item>
                            </Col>
                        ))}
                    </Row>
                    <Row gutter={16}>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <Col span={2.4} key={`fundal-height-${index}`}>
                                <Form.Item label={`Fundal Height ${index + 1}`}>
                                    <InputNumber style={styles.inputField} />
                                </Form.Item>
                            </Col>
                        ))}
                    </Row>
                    <Row gutter={16}>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <Col span={2.4} key={`foetal-lie-${index}`}>
                                <Form.Item label={`Foetal Lie ${index + 1}`}>
                                    <Input style={styles.inputField} />
                                </Form.Item>
                            </Col>
                        ))}
                    </Row>
                    <Row gutter={16}>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <Col span={2.4} key={`fhr-${index}`}>
                                <Form.Item label={`FHR ${index + 1}`}>
                                    <InputNumber style={styles.inputField} />
                                </Form.Item>
                            </Col>
                        ))}
                    </Row>
                    <Row gutter={16}>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <Col span={2.4} key={`presentation-${index}`}>
                                <Form.Item label={`Presentation ${index + 1}`}>
                                    <Input style={styles.inputField} />
                                </Form.Item>
                            </Col>
                        ))}
                    </Row>
                    <Row gutter={16}>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <Col span={2.4} key={`fm-${index}`}>
                                <Form.Item label={`FM ${index + 1}`}>
                                    <Radio.Group>
                                        <Radio value="positive">Positive</Radio>
                                        <Radio value="negative">Negative</Radio>
                                    </Radio.Group>
                                </Form.Item>
                            </Col>
                        ))}
                    </Row>
                    <Row gutter={16}>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <Col span={2.4} key={`engagement-${index}`}>
                                <Form.Item label={`Engagement ${index + 1}`}>
                                    <Input style={styles.inputField} />
                                </Form.Item>
                            </Col>
                        ))}
                    </Row>
                    <Row gutter={16}>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <Col span={2.4} key={`proteinuria-${index}`}>
                                <Form.Item label={`Proteinuria ${index + 1}`}>
                                    <Radio.Group>
                                        <Radio value="present">Present</Radio>
                                        <Radio value="absent">Absent</Radio>
                                    </Radio.Group>
                                </Form.Item>
                            </Col>
                        ))}
                    </Row>
                    <Row gutter={16}>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <Col span={2.4} key={`oedema-${index}`}>
                                <Form.Item label={`Oedema ${index + 1}`}>
                                    <Radio.Group>
                                        <Radio value="present">Present</Radio>
                                        <Radio value="absent">Absent</Radio>
                                    </Radio.Group>
                                </Form.Item>
                            </Col>
                        ))}
                    </Row>
                    <Row gutter={16}>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <Col span={2.4} key={`haemoglobin-${index}`}>
                                <Form.Item label={`Haemoglobin ${index + 1}`}>
                                    <InputNumber style={styles.inputField} />
                                </Form.Item>
                            </Col>
                        ))}
                    </Row>
                    <Row gutter={16}>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <Col span={2.4} key={`folate-${index}`}>
                                <Form.Item label={`Folate ${index + 1}`}>
                                    <Radio.Group>
                                        <Radio value="supplemented">Supplemented</Radio>
                                        <Radio value="notSupplemented">Not Supplemented</Radio>
                                    </Radio.Group>
                                </Form.Item>
                            </Col>
                        ))}
                    </Row>
                    <Row gutter={16}>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <Col span={2.4} key={`iron-${index}`}>
                                <Form.Item label={`Iron ${index + 1}`}>
                                    <Radio.Group>
                                        <Radio value="supplemented">Supplemented</Radio>
                                        <Radio value="notSupplemented">Not Supplemented</Radio>
                                    </Radio.Group>
                                </Form.Item>
                            </Col>
                        ))}
                    </Row>
                    <Row gutter={16}>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <Col span={2.4} key={`calcium-${index}`}>
                                <Form.Item label={`Calcium ${index + 1}`}>
                                    <Radio.Group>
                                        <Radio value="supplemented">Supplemented</Radio>
                                        <Radio value="notSupplemented">Not Supplemented</Radio>
                                    </Radio.Group>
                                </Form.Item>
                            </Col>
                        ))}
                    </Row>
                    <Row gutter={16}>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <Col span={2.4} key={`vitaminC-${index}`}>
                                <Form.Item label={`Vitamin C ${index + 1}`}>
                                    <Radio.Group>
                                        <Radio value="supplemented">Supplemented</Radio>
                                        <Radio value="notSupplemented">Not Supplemented</Radio>
                                    </Radio.Group>
                                </Form.Item>
                            </Col>
                        ))}
                    </Row>
                </Form>
            </Card>
        </div>
    );
};

export default ReportTwo;
