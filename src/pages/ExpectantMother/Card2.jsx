import React from 'react';
import { Layout, Menu, Card, Input, Checkbox, DatePicker, Row, Col } from 'antd';
import {
    UserOutlined,
    ClockCircleOutlined,
    FormOutlined,
    HistoryOutlined,
    LeftOutlined,
    RightOutlined
} from '@ant-design/icons';
import { PageHeader } from '@ant-design/pro-layout';
import '../../styles/ExpectantMother/Dashboard.css';

const { Header, Sider, Content } = Layout;

const Card2 = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider trigger={null} collapsible>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<FormOutlined />}>
                        Pregnancy Record
                    </Menu.Item>
                    <Menu.Item key="2" icon={<UserOutlined />}>
                        Personal Info
                    </Menu.Item>
                    <Menu.Item key="3" icon={<ClockCircleOutlined />}>
                        Appointments
                    </Menu.Item>
                    <Menu.Item key="4" icon={<HistoryOutlined />}>
                        History
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    <div className="header-content">
                        <span>Jun 10, 2024</span>
                        <span>9:41 AM</span>
                        <UserOutlined className="user-icon" />
                    </div>
                </Header>
                <Content className="site-layout-background">
                    <PageHeader
                        className="site-page-header"
                        title="Pregnancy Record"
                    />
                    <div className="record-container">
                        <Row gutter={16}>
                            <Col span={16}>
                                <Card title="Pregnancy History" className="pregnancy-history-card">
                                    <table className="pregnancy-history-table">
                                        <tbody>
                                        <tr>
                                            <td>Gravidity</td>
                                            <td>G <Input size="small" style={{ width: 60 }} /> P <Input size="small" style={{ width: 60 }} /> C <Input size="small" style={{ width: 60 }} /></td>
                                        </tr>
                                        <tr>
                                            <td>Number of Children Alive</td>
                                            <td><Input size="small" style={{ width: '100%' }} /></td>
                                        </tr>
                                        <tr>
                                            <td>Age of Youngest Child</td>
                                            <td><Input size="small" style={{ width: '100%' }} /></td>
                                        </tr>
                                        <tr>
                                            <td>Last Menstrual Date</td>
                                            <td><DatePicker size="small" style={{ width: '100%' }} /></td>
                                        </tr>
                                        <tr>
                                            <td>Expected Delivery Date</td>
                                            <td><DatePicker size="small" style={{ width: '100%' }} /></td>
                                        </tr>
                                        <tr>
                                            <td>US Corrected Expected Delivery Date (by VGO/MO)</td>
                                            <td><DatePicker size="small" style={{ width: '100%' }} /></td>
                                        </tr>
                                        <tr>
                                            <td>Expected Period</td>
                                            <td><Input size="small" style={{ width: '100%' }} /></td>
                                        </tr>
                                        <tr>
                                            <td>Date of Quickening</td>
                                            <td><DatePicker size="small" style={{ width: '100%' }} /></td>
                                        </tr>
                                        <tr>
                                            <td>POA at Registration</td>
                                            <td><Input size="small" style={{ width: '100%' }} /></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Present Obstetric History" className="obstetric-history-card">
                                    <table className="obstetric-history-table">
                                        <tbody>
                                        <tr>
                                            <td>Diabetes Mellitus</td>
                                            <td><Checkbox /> Yes <Checkbox /> No</td>
                                        </tr>
                                        <tr>
                                            <td>Hypertension</td>
                                            <td><Checkbox /> Yes <Checkbox /> No</td>
                                        </tr>
                                        <tr>
                                            <td>Haematological Diseases</td>
                                            <td><Checkbox /> Yes <Checkbox /> No</td>
                                        </tr>
                                        <tr>
                                            <td>Twin / multiple pregnancies</td>
                                            <td><Checkbox /> Yes <Checkbox /> No</td>
                                        </tr>
                                        <tr>
                                            <td>Others (Specify)</td>
                                            <td><Checkbox /> Yes <Checkbox /> No <Input size="small" style={{ width: '100%' }} /></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </Card>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Card title="Surgical History" className="surgical-history-card">
                                    <table className="surgical-history-table">
                                        <tbody>
                                        <tr>
                                            <td>Diabetes</td>
                                            <td><Checkbox /> Yes <Checkbox /> No</td>
                                        </tr>
                                        <tr>
                                            <td>Hypertension</td>
                                            <td><Checkbox /> Yes <Checkbox /> No</td>
                                        </tr>
                                        <tr>
                                            <td>Cardiac diseases</td>
                                            <td><Checkbox /> Yes <Checkbox /> No</td>
                                        </tr>
                                        <tr>
                                            <td>Renal diseases</td>
                                            <td><Checkbox /> Yes <Checkbox /> No</td>
                                        </tr>
                                        <tr>
                                            <td>Hepatic diseases</td>
                                            <td><Checkbox /> Yes <Checkbox /> No</td>
                                        </tr>
                                        <tr>
                                            <td>Psychiatric diseases</td>
                                            <td><Checkbox /> Yes <Checkbox /> No</td>
                                        </tr>
                                        <tr>
                                            <td>Epilepsy</td>
                                            <td><Checkbox /> Yes <Checkbox /> No</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                    <div className="pagination-container">
                        <span><LeftOutlined /></span>
                        <span>Page 2 of 10</span>
                        <span><RightOutlined /></span>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Card2;
