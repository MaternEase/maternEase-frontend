import React, { useState } from 'react';
import { Row, Col, Input, Select, Checkbox, DatePicker, Card, Button, Form, AutoComplete, Radio } from 'antd';
import { PageHeader } from '@ant-design/pro-layout';
import moment from 'moment';
import '../../styles/ExpectantMother/Dashboard.css';

const { Option } = Select;

const districts = [
    "Ampara", "Anuradhapura", "Badulla", "Batticalo", "Colombo", "Galle", "Gampaha", "Hambantota", "Jaffna", "Kalmunai Area", "Kandy",
    "Kalutara", "Kegalle", "Kilinochchi", "Kurunegala", "Matale", "Monaragala", "Mannar", "Mullaitivu", "Nuwara-Eliya", "Polonnaruwa",
    "Puttalam", "Ratnapura", "Trincomalee", "Vavuniya"
];

const mohAreasByDistrict = {
    Ampara: ["Ampara", "Damana", "Lahugala", "Mahaoya", "Padiyathalawa", "Uhana"],
    Anuradhapura: ["Galinbidinuwewa", "Galnewa", "Horowpothana", "Ipalogama", "Kahatagasdigililiya", "Kebithigollewa", "Kekirawa", "Madawachchiya", "Mihintale", "Nochchiyagama", "Nuwaragam Palatha - Central", "Nuwaragam Palatha - East", "Padaviya", "Palagala", "Rajanganaya", "Rambewa", "Thabuththegama", "Thalawa", "Thirappane"],
    Badulla: ["Badulla", "Bandarawela", "Ella", "Girandurukotte", "Hali Ela", "Haputale", "Kandaketiya", "Mahiyangana", "Paranagama", "Passara", "Welimada"],
    Batticalo: ["Arayampathy", "Batticalo", "Chenkalady", "Eravur", "Kaluwanchikudy", "Kattankudy", "Odamavadi", "Paddippalai", "Vakarai", "Valaichchenai", "Vavunathevu", "Vellavely"],
    // Add more districts and their MOH areas here
};

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

const ReportOne = () => {
    const [selectedDistrict, setSelectedDistrict] = useState('Colombo');
    const [mohAreas, setMohAreas] = useState(mohAreasByDistrict['Colombo'] || []);
    const [isFamilyPlanningMethodUsed, setIsFamilyPlanningMethodUsed] = useState(false);

    const handleDistrictChange = (value) => {
        setSelectedDistrict(value);
        setMohAreas(mohAreasByDistrict[value] || []);
    };

    const handleFamilyPlanningMethodChange = (e) => {
        setIsFamilyPlanningMethodUsed(e.target.value === 'yes');
    };

    return (
        <Form
            layout="vertical"
            initialValues={{
                motherName: 'Arachchige Renuka de Silva',
                age: 30,
                district: 'Colombo',
                mohArea: 'Dehiwala',
                phmArea: 'Dehiwala',
                fieldClinic: 'Kohuwala - 001',
                gramaNiladhari: 'Kohuwala',
                familyRegNo: 'C/35',
                familyRegDate: moment(),
                motherRegNo: 'c/35/04',
                motherRegDate: moment(),
                riskConditions: 'None'
            }}
        >
            <PageHeader
                className="site-page-header"
                onBack={() => window.history.back()}
                title={
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        <span style={{ marginRight: '600px' }}>Pregnancy Record</span>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <Checkbox
                                defaultChecked
                                style={{ backgroundColor: '', padding: '5px 10px', borderRadius: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                                Firstborn
                            </Checkbox>
                            <Checkbox
                                defaultChecked
                                style={{ backgroundColor: '#ff9999', padding: '5px 10px', borderRadius: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                                Risky
                            </Checkbox>
                            <div
                                style={{ backgroundColor: '', padding: '5px 10px', borderRadius: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                                Blood Group
                                <Select
                                    defaultValue="B+"
                                    style={{ marginLeft: '10px', minWidth: '60px', fontSize: '14px' }}>
                                    <Option value="A+">A+</Option>
                                    <Option value="B+">B+</Option>
                                    <Option value="O+">O+</Option>
                                    <Option value="AB+">AB+</Option>
                                </Select>
                            </div>
                        </div>
                    </div>
                }
                style={{ marginBottom: '20px' }}
            />
            <div className="container" style={{ backgroundColor: '#ffe6e6', padding: '20px' }}>
                <Row gutter={16}>
                    <Col span={24}>
                        <Card title="Basic Information" style={{ marginBottom: '16px', backgroundColor: '' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item
                                        label="Name of the Mother"
                                        name="motherName"
                                        rules={[{required: true, message: 'Please input the name of the mother!'}]}
                                    >
                                        <Input placeholder="Name of the Mother"/>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        label="Age"
                                        name="age"
                                        rules={[{validator: validateAge}]}
                                    >
                                        <Input placeholder="Age" type="number"/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item
                                        label="District"
                                        name="district"
                                    >
                                        <AutoComplete
                                            options={districts.map(district => ({value: district}))}
                                            onChange={handleDistrictChange}
                                            placeholder="Type to search District"
                                            filterOption={(inputValue, option) =>
                                                option.value.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
                                            }
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        label="MOH Area"
                                        name="mohArea"
                                    >
                                        <AutoComplete
                                            options={mohAreas.map(area => ({value: area}))}
                                            placeholder="Select MOH Area"
                                            filterOption={(inputValue, option) =>
                                                option.value.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
                                            }
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Form.Item
                                label="PHM Area"
                                name="phmArea"
                            >
                                <Input placeholder="PHM Area"/>
                            </Form.Item>
                            <Form.Item
                                label="Name of Field Clinic"
                                name="fieldClinic"
                            >
                                <Input placeholder="Name of Field Clinic"/>
                            </Form.Item>
                            <Form.Item
                                label="Grama Niladhari Division"
                                name="gramaNiladhari"
                            >
                                <Input placeholder="Grama Niladhari Division"/>
                            </Form.Item>
                        </Card>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={12}>
                        <Card title="Eligible Family Register" style={{ marginBottom: '16px', backgroundColor: '' }}>
                            <Form.Item
                                label="Registration No."
                                name="familyRegNo"
                            >
                                <Input placeholder="Registration No."/>
                            </Form.Item>
                            <Form.Item
                                label="Registration Date"
                                name="familyRegDate"
                                rules={[{validator: validateDate}]}
                            >
                                <DatePicker style={{width: '100%'}} placeholder="Registration Date"/>
                            </Form.Item>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title="Pregnant Mother’s Register" style={{ marginBottom: '16px', backgroundColor: '' }}>
                            <Form.Item
                                label="Registration No."
                                name="motherRegNo"
                            >
                                <Input placeholder="Registration No."/>
                            </Form.Item>
                            <Form.Item
                                label="Registration Date"
                                name="motherRegDate"
                                rules={[{validator: validateDate}]}
                            >
                                <DatePicker style={{width: '100%'}} placeholder="Registration Date"/>
                            </Form.Item>
                        </Card>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={24}>
                        <Card title="Health Information" style={{ marginBottom: '16px', backgroundColor: '' }}>
                            <Form.Item
                                label="Risk Conditions"
                                name="riskConditions"
                            >
                                <Input placeholder="Risk Conditions"/>
                            </Form.Item>
                        </Card>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={24}>
                        <Card title="Family Planning Information" style={{ marginBottom: '16px', backgroundColor: '' }}>
                            <Form.Item label="Has the mother ever used a family planning method?">
                                <Radio.Group onChange={handleFamilyPlanningMethodChange}>
                                    <Radio value="yes">Yes</Radio>
                                    <Radio value="no">No</Radio>
                                </Radio.Group>
                            </Form.Item>
                            {isFamilyPlanningMethodUsed && (
                                <Form.Item label="If yes, specify the family planning method used">
                                    <Select placeholder="Select Family Planning Method">
                                        <Option value="method1">Method 1</Option>
                                        <Option value="method2">Method 2</Option>
                                        <Option value="method3">Method 3</Option>
                                    </Select>
                                </Form.Item>
                            )}
                        </Card>
                    </Col>
                </Row>

                <hr />

                <Row gutter={16}>
                    <Col span={24}>
                        <Card title="Doctor's Recommendations" style={{ marginBottom: '16px', backgroundColor: '' }}>
                            <Form.Item
                                label="Instructions and Recommendations"
                                name="doctorRecommendations"
                                rules={[{ required: true, message: 'Please provide instructions and recommendations!' }]}
                            >
                                <Input.TextArea rows={4} placeholder="Provide any instructions and recommendations for the baby here." />
                            </Form.Item>
                        </Card>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={24} style={{ textAlign: 'right' }}>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Col>
                </Row>
            </div>
        </Form>
    );
};

export default ReportOne;
