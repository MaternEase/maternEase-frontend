import React from 'react';
import DynamicAccordion from '../../components/ExpectantMother/DynamicAccordion.jsx';
import WeightChart from "./MotherReports5.jsx";
import FundalHeightChart from "./MotherReports4.jsx";
import { Col } from "antd";
import { useNavigate } from 'react-router-dom';

const sections = [
    {
        title: (
            <span style={{ fontWeight: 'bold', fontSize: '20px', color: '#333' }}>
            Pregnancy Details
        </span>
        ),
        content: (
            <div>
                {/* Last Menstrual Date and Expected Delivery Date */}
                <div style={{
                    display: 'flex',
                    gap: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#f7f7f7',
                    borderRadius: '8px',
                    marginBottom: '20px'
                }}>

                    <div style={{
                        flex: 1,
                        display: 'grid',
                        gridTemplateColumns: '1fr 0.5fr',
                        gap: '10px',
                        flexDirection: 'column',
                        alignItems: 'start'
                    }}>
                        <strong style={{color: '#555', fontSize: '16px'}}>Last Menstrual Date : <span
                            style={{color: '#333', fontSize: '14px'}}>2024-07-15</span></strong>
                        {/* Replace with actual date */}
                    </div>

                    <div style={{
                        flex: 1,
                        display: 'grid',
                        gridTemplateColumns: '1fr 0.5fr',
                        gap: '10px',
                        flexDirection: 'column',
                        alignItems: 'start'
                    }}>
                        <strong style={{color: '#555', fontSize: '16px'}}>Expected Delivery Date : <span
                            style={{color: '#333', fontSize: '14px'}}>2025-04-22</span></strong>
                        {/* Replace with actual date */}
                    </div>
                </div>

                {/* Condition-Status Table */}
                <div style={{
                    display: 'flex',
                    gap: '20px',
                    padding: '20px',
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                }}>
                    {/* Left Section */}
                    <div style={{
                        flex: 1,
                        display: 'grid',
                        gridTemplateColumns: '1fr 0.5fr',
                        gap: '10px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        padding: '10px',
                        width: '100%',
                    }}>
                        <strong style={{ fontSize: '16px', color: '#555' }}>Condition</strong>
                        <strong style={{ fontSize: '16px', color: '#555' }}>Status</strong>

                        {[
                            { condition: 'Consanguinity', status: 'No' },
                            { condition: 'Rubella Immunization', status: 'Yes' },
                            { condition: 'Pre-pregnancy screening done', status: 'No' },
                            { condition: 'Pre-conceptional folic acid', status: 'No' },

                        ].map((item, index) => (
                            <React.Fragment key={index}>
                        <span style={{
                            fontSize: '14px',
                            color: item.status === 'Yes' ? '#555' : '#b9b9b9',
                            padding: '8px 0',
                            borderBottom: '1px solid #e0e0e0',
                        }}>
                            {item.condition}
                        </span>
                                <span style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontWeight: 'bold',
                                    color: item.status === 'Yes' ? '#0a0a0a' : '#b9b9b9',
                                    gap: '5px',
                                    padding: '8px 0',
                                    borderBottom: '1px solid #e0e0e0',
                                }}>
                            {item.status}
                        </span>
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Right Section */}
                    <div style={{
                        flex: 1,
                        display: 'grid',
                        gridTemplateColumns: '1fr 0.5fr',
                        gap: '10px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        padding: '10px',
                        width: '100%',
                    }}>
                        <strong style={{ fontSize: '16px', color: '#555' }}>Condition</strong>
                        <strong style={{ fontSize: '16px', color: '#555' }}>Status</strong>

                        {[
                            // { condition: 'Family Planning Method Used', status: 'No' },
                            { condition: 'History of subfertility', status: 'Yes' },
                            { condition: 'Planned pregnancy or not', status: 'No' },
                            {condition: 'Diabetes', status: 'No'},
                            {condition: 'Hypertension', status: 'Yes'}

                        ].map((item, index) => (
                            <React.Fragment key={index}>
                        <span style={{
                            fontSize: '14px',
                            color: item.status === 'Yes' ? '#555' : '#b9b9b9',
                            padding: '8px 0',
                            borderBottom: '1px solid #e0e0e0',
                        }}>
                            {item.condition}
                        </span>
                                <span style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontWeight: 'bold',
                                    color: item.status === 'Yes' ? '#0a0a0a' : '#b9b9b9',
                                    gap: '5px',
                                    padding: '8px 0',
                                    borderBottom: '1px solid #e0e0e0',
                                }}>
                                    {item.status}
                        </span>
                            </React.Fragment>
                        ))}
                    </div>

                </div>
            </div>
        ),
    },
    

    {
        title: (
            <span style={{ fontWeight: 'bold', fontSize: '20px', color: '#333' }}>
            BMI Variation
        </span>
        ),
        content: (
            <div style={{ height: '100vh', padding: '16px', overflowY: 'auto' }}>
                <div style={{ height: '90vh', width: '60vw' ,marginBottom: '24px' }}>
                    <WeightChart />
                </div>
            </div>
        ),
    }
    ,
    {
        title: (
            <span style={{fontWeight: 'bold', fontSize: '20px', color: '#333'}}>
                Fundal Height Variation
            </span>
        ),
        content: (
            <div style={{height: '100vh', padding: '16px', overflowY: 'auto'}}>
                <div style={{marginBottom: '24px'}}>
                    <FundalHeightChart/>
                </div>
            </div>
        ),
    },

    {
        title: (
            <span style={{fontWeight: 'bold', fontSize: '20px', color: '#333' }}>
                Antenatal Risk Conditions
            </span>
        ),
        content: (
            <div style={{ fontSize: '14px', color: '#777' }}>
                High Blood Pressure
            </div>
        ),
    },

    // Add more sections with custom titles as needed
];


const PregnancyRecord = () => {
    const navigate = useNavigate(); 
    return (
        <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <span style={{ fontWeight: 'normal', fontSize: '24px' }}>Pregnancy Record</span>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <span style={{ backgroundColor: '#9DBFE6', padding: '5px 10px', borderRadius: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                        Firstborn
                    </span>
                    <span style={{ backgroundColor: '#E4B1B1', padding: '5px 10px', borderRadius: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                        Risky
                    </span>
                    <div
                        style={{ backgroundColor: '#D3D3D3', padding: '5px 10px', borderRadius: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                        Blood Group: B+
                    </div>
                </div>
            </div>

            <DynamicAccordion sections={sections} />

            {/* Button added at the bottom */}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button
                    onClick={() => navigate('/doctor/recommandations')} // Navigate to the target page
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#007BFF',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '16px',
                    }}
                >
                    Recommondations
                </button>
            </div>
        </div>
    );
};

export default PregnancyRecord;
