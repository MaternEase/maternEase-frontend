import React, { useState } from 'react';
import { Row, Col, Input, Select, Checkbox, DatePicker, Card, Button, Form, message, AutoComplete, Radio } from 'antd';
import { PageHeader } from '@ant-design/pro-layout';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import moment from 'moment';
import '../../styles/ExpectantMother/Dashboard.css';
import WeightChart from "../../components/ExpectantMother/WeightChart.jsx";

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
        <div>
            <WeightChart />
        </div>
        // <Form
        //     layout="vertical"
        //     initialValues={{
        //         motherName: 'Jane Doe',
        //         age: 30,
        //         district: 'Colombo',
        //         mohArea: 'Area 1',
        //         phmArea: 'PHM Area 1',
        //         fieldClinic: 'Clinic 1',
        //         gramaNiladhari: 'Division 1',
        //         familyRegNo: '12345',
        //         familyRegDate: moment(),
        //         motherRegNo: '67890',
        //         motherRegDate: moment(),
        //         riskConditions: 'None'
        //     }}
        // >
        //     <PageHeader
        //         className="site-page-header"
        //         onBack={() => window.history.back()}
        //         title={
        //             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        //                 <span style={{ marginRight: '600px' }}>Pregnancy Record</span>
        //                 <div style={{ display: 'flex', gap: '10px' }}>
        //                     <Checkbox
        //                         defaultChecked
        //                         style={{ backgroundColor: '#9DBFE6', padding: '5px 10px', borderRadius: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }}>
        //                         Firstborn
        //                     </Checkbox>
        //                     <Checkbox
        //                         defaultChecked
        //                         style={{ backgroundColor: '#E4B1B1', padding: '5px 10px', borderRadius: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }}>
        //                         Risky
        //                     </Checkbox>
        //                     <div
        //                         style={{ backgroundColor: '#D3D3D3', padding: '5px 10px', borderRadius: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }}>
        //                         Blood Group
        //                         <Select
        //                             defaultValue="B+"
        //                             style={{ marginLeft: '10px', minWidth: '60px', fontSize: '14px' }}>
        //                             <Option value="A+">A+</Option>
        //                             <Option value="B+">B+</Option>
        //                             <Option value="O+">O+</Option>
        //                             <Option value="AB+">AB+</Option>
        //                             {/* Add more options as needed */}
        //                         </Select>
        //                     </div>
        //                 </div>
        //             </div>
        //         }
        //         style={{ marginBottom: '20px' }}
        //     />
        //     <div className="container">
        //         <Row gutter={16}>
        //             <Col span={24}>
        //                 <Card title="Basic Information" style={{marginBottom: '16px'}}>
        //                     <Row gutter={16}>
        //                         <Col span={12}>
        //                             <Form.Item
        //                                 label="Name of the Mother"
        //                                 name="motherName"
        //                                 rules={[{required: true, message: 'Please input the name of the mother!'}]}
        //                             >
        //                                 <Input placeholder="Name of the Mother"/>
        //                             </Form.Item>
        //                         </Col>
        //                         <Col span={12}>
        //                             <Form.Item
        //                                 label="Age"
        //                                 name="age"
        //                                 rules={[{validator: validateAge}]}
        //                             >
        //                                 <Input placeholder="Age" type="number"/>
        //                             </Form.Item>
        //                         </Col>
        //                     </Row>
        //                     <Row gutter={16}>
        //                         <Col span={12}>
        //                             <Form.Item
        //                                 label="District"
        //                                 name="district"
        //                             >
        //                                 <AutoComplete
        //                                     options={districts.map(district => ({value: district}))}
        //                                     onChange={handleDistrictChange}
        //                                     placeholder="Type to search District"
        //                                     filterOption={(inputValue, option) =>
        //                                         option.value.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
        //                                     }
        //                                 />
        //                             </Form.Item>
        //                         </Col>
        //                         <Col span={12}>
        //                             <Form.Item
        //                                 label="MOH Area"
        //                                 name="mohArea"
        //                             >
        //                                 <AutoComplete
        //                                     options={mohAreas.map(area => ({value: area}))}
        //                                     placeholder="Select MOH Area"
        //                                     filterOption={(inputValue, option) =>
        //                                         option.value.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
        //                                     }
        //                                 />
        //                             </Form.Item>
        //                         </Col>
        //                     </Row>
        //                     <Form.Item
        //                         label="PHM Area"
        //                         name="phmArea"
        //                     >
        //                         <Input placeholder="PHM Area"/>
        //                     </Form.Item>
        //                     <Form.Item
        //                         label="Name of Field Clinic"
        //                         name="fieldClinic"
        //                     >
        //                         <Input placeholder="Name of Field Clinic"/>
        //                     </Form.Item>
        //                     <Form.Item
        //                         label="Grama Niladhari Division"
        //                         name="gramaNiladhari"
        //                     >
        //                         <Input placeholder="Grama Niladhari Division"/>
        //                     </Form.Item>
        //                 </Card>
        //             </Col>
        //         </Row>
        //
        //         <Row gutter={16}>
        //             <Col span={12}>
        //                 <Card title="Eligible Family Register" style={{marginBottom: '16px'}}>
        //                     <Form.Item
        //                         label="Registration No."
        //                         name="familyRegNo"
        //                     >
        //                         <Input placeholder="Registration No."/>
        //                     </Form.Item>
        //                     <Form.Item
        //                         label="Registration Date"
        //                         name="familyRegDate"
        //                         rules={[{validator: validateDate}]}
        //                     >
        //                         <DatePicker style={{width: '100%'}} placeholder="Registration Date"/>
        //                     </Form.Item>
        //                 </Card>
        //             </Col>
        //             <Col span={12}>
        //                 <Card title="Pregnant Mother’s Register" style={{marginBottom: '16px'}}>
        //                     <Form.Item
        //                         label="Registration No."
        //                         name="motherRegNo"
        //                     >
        //                         <Input placeholder="Registration No."/>
        //                     </Form.Item>
        //                     <Form.Item
        //                         label="Registration Date"
        //                         name="motherRegDate"
        //                         rules={[{validator: validateDate}]}
        //                     >
        //                         <DatePicker style={{width: '100%'}} placeholder="Registration Date"/>
        //                     </Form.Item>
        //                 </Card>
        //             </Col>
        //         </Row>
        //
        //         <Card>
        //             <Row gutter={16}>
        //                 <Col span={12}>
        //                     <Form.Item label="Consanguinity">
        //                         <Radio.Group defaultValue="yes">
        //                             <Radio value="yes">Yes</Radio>
        //                             <Radio value="no">No</Radio>
        //                         </Radio.Group>
        //                     </Form.Item>
        //                     <Form.Item label="Rubella Immunization">
        //                         <Radio.Group defaultValue="no">
        //                             <Radio value="yes">Yes</Radio>
        //                             <Radio value="no">No</Radio>
        //                         </Radio.Group>
        //                     </Form.Item>
        //                     <Form.Item label="Pre-pregnancy screening done">
        //                         <Radio.Group defaultValue="yes">
        //                             <Radio value="yes">Yes</Radio>
        //                             <Radio value="no">No</Radio>
        //                         </Radio.Group>
        //                     </Form.Item>
        //                     <Form.Item label="Pre-conceptional folic acid">
        //                         <Radio.Group defaultValue="no">
        //                             <Radio value="yes">Yes</Radio>
        //                             <Radio value="no">No</Radio>
        //                         </Radio.Group>
        //                     </Form.Item>
        //                 </Col>
        //                 <Col span={12}>
        //                     <Form.Item label="History of subfertility">
        //                         <Radio.Group defaultValue="yes">
        //                             <Radio value="yes">Yes</Radio>
        //                             <Radio value="no">No</Radio>
        //                         </Radio.Group>
        //                     </Form.Item>
        //                     <Form.Item label="Planned pregnancy or not">
        //                         <Radio.Group defaultValue="no">
        //                             <Radio value="yes">Yes</Radio>
        //                             <Radio value="no">No</Radio>
        //                         </Radio.Group>
        //                     </Form.Item>
        //                     <Form.Item label="Family Planning Method Used">
        //                         <Radio.Group defaultValue="no" onChange={handleFamilyPlanningMethodChange}>
        //                             <Radio value="yes">Yes</Radio>
        //                             <Radio value="no">No</Radio>
        //                         </Radio.Group>
        //                     </Form.Item>
        //                     {isFamilyPlanningMethodUsed && (
        //                         <Form.Item label="Specify Family Planning Method">
        //                             <Input placeholder="Specify Family Planning Method"/>
        //                         </Form.Item>
        //                     )}
        //                 </Col>
        //             </Row>
        //             <Form.Item
        //                 label="Identified Antenatal Risk Conditions & Morbidity"
        //                 name="riskConditions"
        //             >
        //                 <Input.TextArea placeholder="Identified Antenatal Risk Conditions & Morbidity" rows={4}/>
        //             </Form.Item>
        //         </Card>
        //
        //         <div className="pagination-container" style={{marginTop: '20px', textAlign: 'right'}}>
        //             <Link to="/mother/pregnancy-history">
        //                 <Button type="primary" style={{backgroundColor: '#967AA1', borderColor: '#967AA1'}}>
        //                     Next
        //                 </Button>
        //             </Link>
        //         </div>
        //     </div>
        // </Form>
    );
};

export default ReportOne;
