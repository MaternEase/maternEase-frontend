// import React from 'react';

// const Dashboard = () => (
//   <div className="container p-8 mx-auto my-8 bg-white rounded-lg shadow-lg">
//     <h1 className="mb-4 text-2xl font-bold">Dashboard </h1>
//   </div>
// );

// export default Dashboard;



import React from 'react';
import { Row, Col, Input, Select, Checkbox, DatePicker, Card } from 'antd';
import { PageHeader } from '@ant-design/pro-layout';
import '../../styles/ExpectantMother/Dashboard.css';  // Ensure to create this CSS file

const { Option } = Select;

const Dashboard = () => (
    <div className="container">
        <PageHeader
            className="site-page-header"
            onBack={() => window.history.back()}
            title="Pregnancy Record"
        />
        <div className="content">
            <Row gutter={16}>
                <Col span={8}>
                    <Card title="Basic Information">
                        <Input placeholder="Name of the Mother" />
                        <Input placeholder="Age" type="number" />
                        <Input placeholder="MOH Area" />
                        <Input placeholder="PHM Area" />
                        <Input placeholder="Name of Field Clinic" />
                        <Input placeholder="Grama Niladhari Division" />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Registration Details">
                        <Input placeholder="Registration No." />
                        <DatePicker placeholder="Registration Date" />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Medical Information">
                        <Select placeholder="Blood Group">
                            <Option value="A+">A+</Option>
                            <Option value="B+">B+</Option>
                            <Option value="O+">O+</Option>
                            <Option value="AB+">AB+</Option>
                            {/* Add more options as needed */}
                        </Select>
                        <Checkbox>Firstborn</Checkbox>
                        <Checkbox>Risky</Checkbox>
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
                        <Input.TextArea placeholder="Identified Antenatal Risk Conditions & Morbidity" rows={4} />
                    </Card>
                </Col>
            </Row>
        </div>
    </div>
);

export default Dashboard;
  