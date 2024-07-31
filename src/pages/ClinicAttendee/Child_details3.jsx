import React from 'react';
import { Row, Col, Radio, Card, Button, Form } from 'antd';
import { PageHeader } from '@ant-design/pro-layout';
import { Link } from 'react-router-dom';

const styles = {
    container: {
        padding: '24px',
        backgroundColor: '#ffffff',
    },
    pageHeader: {
        backgroundColor: '#f5f5f5',
        marginBottom: '24px', // Adding margin to create space
    },
    card: {
        marginBottom: '16px',
        flex: 1,
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
    flexContainer: {
        display: 'flex',
        gap: '16px', // Adding some space between the cards
    },
    leftColumn: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        flex: 1,
    },
    rightColumn: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        flex: 1,
    },
};

const Child_details3 = () => {
    const [form] = Form.useForm();

    const handleSave = () => {
        form.validateFields().then(values => {
            console.log('Form values:', values);
            alert('Form data saved!');
        }).catch(errorInfo => {
            console.log('Validation failed:', errorInfo);
        });
    };

    return (
        <Form form={form} layout="vertical">
            <div style={styles.container}>
                <PageHeader
                    className="site-page-header"
                    title="Child's Teeth Testing"
                    style={styles.pageHeader}
                />
                <div className="content" style={{ marginTop: '24px' }}>
                    <div style={styles.flexContainer}>
                        <div style={styles.leftColumn}>
                            <Card title="From the first month of birth (1 Month)" style={styles.card}>
                                <Row gutter={16}>
                                    <Col span={20}>
                                        <div style={styles.surgicalCondition}>
                                            <span style={styles.surgicalConditionText}>Does your baby look at the light?</span>
                                            <Form.Item name="eye1" noStyle>
                                                <Radio.Group>
                                                    <Radio value="yes">Yes</Radio>
                                                    <Radio value="no">No</Radio>
                                                </Radio.Group>
                                            </Form.Item>
                                        </div>
                                        <div style={styles.surgicalCondition}>
                                            <span style={styles.surgicalConditionText}>Does your baby look at your face well?</span>
                                            <Form.Item name="eye2" noStyle>
                                                <Radio.Group>
                                                    <Radio value="yes">Yes</Radio>
                                                    <Radio value="no">No</Radio>
                                                </Radio.Group>
                                            </Form.Item>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                            <Card title="By the second month(2 Month)" style={styles.card}>
                                <Row gutter={16}>
                                    <Col span={20}>
                                        <div style={styles.surgicalCondition}>
                                            <span style={styles.surgicalConditionText}>When you turn your face to the side, does the child smile responsively at yourself?</span>
                                            <Form.Item name="eye3" noStyle>
                                                <Radio.Group>
                                                    <Radio value="yes">Yes</Radio>
                                                    <Radio value="no">No</Radio>
                                                </Radio.Group>
                                            </Form.Item>
                                        </div>
                                        <div style={styles.surgicalCondition}>
                                            <span style={styles.surgicalConditionText}>Will the child's eyes move together?</span>
                                            <Form.Item name="eye4" noStyle>
                                                <Radio.Group>
                                                    <Radio value="yes">Yes</Radio>
                                                    <Radio value="no">No</Radio>
                                                </Radio.Group>
                                            </Form.Item>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                            <Card title="By the sixth month (6 Month)" style={styles.card}>
                                <Row gutter={16}>
                                    <Col span={20}>
                                        <div style={styles.surgicalCondition}>
                                            <span style={styles.surgicalConditionText}>Does the child look around cautiously?</span>
                                            <Form.Item name="eye5" noStyle>
                                                <Radio.Group>
                                                    <Radio value="yes">Yes</Radio>
                                                    <Radio value="no">No</Radio>
                                                </Radio.Group>
                                            </Form.Item>
                                        </div>
                                        <div style={styles.surgicalCondition}>
                                            <span style={styles.surgicalConditionText}>Does the child stretch out his hands and try to touch something?</span>
                                            <Form.Item name="eye6" noStyle>
                                                <Radio.Group>
                                                    <Radio value="yes">Yes</Radio>
                                                    <Radio value="no">No</Radio>
                                                </Radio.Group>
                                            </Form.Item>
                                        </div>
                                        <div style={styles.surgicalCondition}>
                                            <span style={styles.surgicalConditionText}>Do you suspect that the child has a fever?</span>
                                            <Form.Item name="eye7" noStyle>
                                                <Radio.Group>
                                                    <Radio value="yes">Yes</Radio>
                                                    <Radio value="no">No</Radio>
                                                </Radio.Group>
                                            </Form.Item>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </div>
                        <div style={styles.rightColumn}>
                            <Card title="By the tenth month (10 Month)" style={styles.card}>
                                <Row gutter={16}>
                                    <Col span={20}>
                                        <div style={styles.surgicalCondition}>
                                            <span style={styles.surgicalConditionText}>Is the child capable of capturing small materials with the help of thumb and index finger?</span>
                                            <Form.Item name="eye8" noStyle>
                                                <Radio.Group>
                                                    <Radio value="yes">Yes</Radio>
                                                    <Radio value="no">No</Radio>
                                                </Radio.Group>
                                            </Form.Item>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                            <Card title="By the twelfth month (12 Month)" style={styles.card}>
                                <Row gutter={16}>
                                    <Col span={20}>
                                        <div style={styles.surgicalCondition}>
                                            <span style={styles.surgicalConditionText}>Is the child capable of capturing small materials with the help of thumb and index finger?</span>
                                            <Form.Item name="eye9" noStyle>
                                                <Radio.Group>
                                                    <Radio value="yes">Yes</Radio>
                                                    <Radio value="no">No</Radio>
                                                </Radio.Group>
                                            </Form.Item>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </div>
                    </div>
                </div>
                <div style={styles.paginationContainer}>
                    
                    <Button type="primary" style={styles.button} onClick={handleSave}>Save</Button>
                </div>
            </div>
        </Form>
    );
};

export default Child_details3;
