import React, { useState } from 'react';
import { Row, Col, Input, Select, Checkbox, DatePicker, Card, Button, Form, message, AutoComplete, Radio } from 'antd';
import { PageHeader } from '@ant-design/pro-layout';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
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

const Profile = () => {
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
                address: 'No. 4, Temple road, Kohuwala',
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
                        <span style={{ marginRight: '600px' }}>About Baby</span>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <Radio.Group defaultValue="girl" style={{ display: 'flex', gap: '10px' }}>
                                <Radio
                                    value="girl"
                                    style={{ backgroundColor: '#F85CB9', padding: '5px 10px', borderRadius: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }}
                                >
                                    Girl
                                </Radio>
                                <Radio
                                    value="boy"
                                    style={{ backgroundColor: '#94B3F9', padding: '5px 10px', borderRadius: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }}
                                >
                                    Boy
                                </Radio>
                            </Radio.Group>
                        </div>
                    </div>
                }
                style={{ marginBottom: '20px' }}
            />
            <div className="container">
                <Row gutter={16}>
                    <Col span={24}>
                        <Card title="Name of the baby: Thinu Perera" style={{ marginBottom: '16px' }}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item
                                        label="Name of the Mother"
                                        name="motherName"
                                       // rules={[{ required: true, message: 'Please input the name of the mother!' }]}
                                    >
                                        <Input placeholder="Name of the Mother" />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        label="Mother's age"
                                        name="age"
                                        rules={[{ validator: validateAge }]}
                                    >
                                        <Input placeholder="Age" type="number" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item
                                        label="Address"
                                        name="address"
                                    >
                                        <AutoComplete
                                            options={districts.map(district => ({ value: district }))}
                                            onChange={handleDistrictChange}
                                            placeholder="Type to search Address"
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
                                            options={mohAreas.map(area => ({ value: area }))}
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
                </Row>

                <Row gutter={16}>
                    <Col span={12}>
                        <Card title="" style={{ marginBottom: '16px' }}>
                            <Form.Item
                                label="Family Registration No."
                                name="familyRegNo"
                            >
                                <Input placeholder="Registration No." />
                            </Form.Item>
                            <Form.Item
                                label="Family Registration Date"
                                name="familyRegDate"
                                rules={[{ validator: validateDate }]}
                            >
                                <DatePicker style={{ width: '100%' }} placeholder="Registration Date" />
                            </Form.Item>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title="" style={{ marginBottom: '16px' }}>
                            <Form.Item
                                label="Mother's Registration No."
                                name="motherRegNo"
                            >
                                <Input placeholder="Registration No." />
                            </Form.Item>
                            <Form.Item
                                label="Mother's Registration Date"
                                name="motherRegDate"
                                rules={[{ validator: validateDate }]}
                            >
                                <DatePicker style={{ width: '100%' }} placeholder="Registration Date" />
                            </Form.Item>
                        </Card>
                    </Col>
                </Row>

                <Card>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item label="Did breastfeeding begin in the first hour?">
                                <Radio.Group defaultValue="yes" style={{ display: 'flex', gap: '10px' }}>
                                    <Radio value="yes">Yes</Radio>
                                    <Radio value="no">No</Radio>
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item label="Establishment">
                                <Radio.Group defaultValue="no" style={{ display: 'flex', gap: '10px' }}>
                                    <Radio value="yes">Yes</Radio>
                                    <Radio value="no">No</Radio>
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item label="Connection">
                                <Radio.Group defaultValue="yes" style={{ display: 'flex', gap: '10px' }}>
                                    <Radio value="yes">Yes</Radio>
                                    <Radio value="no">No</Radio>
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item label="Did you test for argyroid arthritis?">
                                <Radio.Group defaultValue="no" style={{ display: 'flex', gap: '10px' }}>
                                    <Radio value="yes">Yes</Radio>
                                    <Radio value="no">No</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item
                        label="Reasons to take care of in particular"
                        name="riskConditions"
                    >
                        <Input.TextArea placeholder="Identified Antenatal Risk Conditions & Morbidity" rows={4} />
                    </Form.Item>
                </Card>

              {/*<div className="pagination-container" style={{ marginTop: '20px', textAlign: 'right' }}>
                    <Link to="/child/additional_details">
                        <Button type="primary" style={{ backgroundColor: '#967AA1', borderColor: '#967AA1' }}>
                            Next
                        </Button>
                    </Link>
                </div>*/}
            </div>
        </Form>
    );
};

export default Profile;
