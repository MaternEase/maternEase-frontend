import React, { useState } from 'react';
import DynamicAccordion from '../../components/ExpectantMother/DynamicAccordion.jsx';
import WeightChart from "./MotherReports5.jsx";
import FundalHeightChart from "./MotherReports4.jsx";
import { Col } from "antd";
import { useNavigate } from 'react-router-dom';

const PregnancyRecord = () => {
    const navigate = useNavigate();

    // State for updating pregnancy details
    const [pregnancyDetails, setPregnancyDetails] = useState({
        lastMenstrualDate: '2024-07-15',
        expectedDeliveryDate: '2025-04-22',
    });
    const [conditionsLeft, setConditionsLeft] = useState([
        { condition: 'Consanguinity', status: 'No' },
        { condition: 'Rubella Immunization', status: 'Yes' },
        { condition: 'Pre-pregnancy screening done', status: 'No' },
        { condition: 'Pre-conceptional folic acid', status: 'No' },
    ]);
    const [conditionsRight, setConditionsRight] = useState([
        { condition: 'History of subfertility', status: 'Yes' },
        { condition: 'Planned pregnancy or not', status: 'No' },
        { condition: 'Diabetes', status: 'No' },
        { condition: 'Hypertension', status: 'Yes' },
    ]);
    const [antenatalRiskConditions, setAntenatalRiskConditions] = useState('High Blood Pressure');
    const [saveStatus, setSaveStatus] = useState('Save');

    // Update state handlers
    const handlePregnancyDetailChange = (key, value) => {
        setPregnancyDetails((prev) => ({ ...prev, [key]: value }));
    };

    const handleConditionChange = (index, key, value, isLeft) => {
        const target = isLeft ? conditionsLeft : conditionsRight;
        const setTarget = isLeft ? setConditionsLeft : setConditionsRight;

        const updatedConditions = [...target];
        updatedConditions[index][key] = value;
        setTarget(updatedConditions);
    };

    const handleSave = () => {
        setSaveStatus('Saved');
        // Here, you can send the updated state to the server or handle persistence.
    };

    const sections = [
        {
            title: (
                <span style={{ fontWeight: 'bold', fontSize: '20px', color: '#333' }}>
                    Pregnancy Details
                </span>
            ),
            content: (
                <div>
                    <div style={{
                        display: 'flex',
                        gap: '20px',
                        padding: '10px 20px',
                        backgroundColor: '#f7f7f7',
                        borderRadius: '8px',
                        marginBottom: '20px'
                    }}>
                        <div style={{ flex: 1 }}>
                            <label style={{ color: '#555', fontSize: '16px' }}>Last Menstrual Date:</label>
                            <input
                                type="date"
                                value={pregnancyDetails.lastMenstrualDate}
                                onChange={(e) => handlePregnancyDetailChange('lastMenstrualDate', e.target.value)}
                                style={{ padding: '8px', width: '100%', marginTop: '8px' }}
                            />
                        </div>
                        <div style={{ flex: 1 }}>
                            <label style={{ color: '#555', fontSize: '16px' }}>Expected Delivery Date:</label>
                            <input
                                type="date"
                                value={pregnancyDetails.expectedDeliveryDate}
                                onChange={(e) => handlePregnancyDetailChange('expectedDeliveryDate', e.target.value)}
                                style={{ padding: '8px', width: '100%', marginTop: '8px' }}
                            />
                        </div>
                    </div>

                    <div style={{
                        display: 'flex',
                        gap: '20px',
                        padding: '20px',
                        backgroundColor: '#ffffff',
                        borderRadius: '8px',
                    }}>
                        {[
                            { data: conditionsLeft, setData: setConditionsLeft },
                            { data: conditionsRight, setData: setConditionsRight }
                        ].map((column, isLeft) => (
                            <div key={isLeft} style={{
                                flex: 1,
                                display: 'grid',
                                gridTemplateColumns: '1fr 0.5fr',
                                gap: '10px',
                                border: '1px solid #e0e0e0',
                                borderRadius: '8px',
                                padding: '10px',
                            }}>
                                <strong style={{ fontSize: '16px', color: '#555' }}>Condition</strong>
                                <strong style={{ fontSize: '16px', color: '#555' }}>Status</strong>
                                {column.data.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <input
                                            type="text"
                                            value={item.condition}
                                            onChange={(e) =>
                                                handleConditionChange(index, 'condition', e.target.value, isLeft === 0)
                                            }
                                            style={{ padding: '8px', marginBottom: '10px' }}
                                        />
                                        <select
                                            value={item.status}
                                            onChange={(e) =>
                                                handleConditionChange(index, 'status', e.target.value, isLeft === 0)
                                            }
                                            style={{ padding: '8px', marginBottom: '10px' }}
                                        >
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </React.Fragment>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        <button
                            onClick={handleSave}
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
                            {saveStatus}
                        </button>
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
                    <div style={{ height: '90vh', width: '60vw', marginBottom: '24px' }}>
                        <WeightChart />
                    </div>
                </div>
            ),
        },
        {
            title: (
                <span style={{ fontWeight: 'bold', fontSize: '20px', color: '#333' }}>
                    Fundal Height Variation
                </span>
            ),
            content: (
                <div style={{ height: '100vh', padding: '16px', overflowY: 'auto' }}>
                    <div style={{ marginBottom: '24px' }}>
                        <FundalHeightChart />
                    </div>
                </div>
            ),
        },
        {
            title: (
                <span style={{ fontWeight: 'bold', fontSize: '20px', color: '#333' }}>
                    Antenatal Risk Conditions
                </span>
            ),
            content: (
                <div style={{ fontSize: '14px', color: '#777' }}>
                    <textarea
                        value={antenatalRiskConditions}
                        onChange={(e) => setAntenatalRiskConditions(e.target.value)}
                        style={{ width: '100%', height: '100px', padding: '8px' }}
                    />
                    <div style={{ textAlign: 'center', marginTop: '10px' }}>
                        <button
                            onClick={handleSave}
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
                            {saveStatus}
                        </button>
                    </div>
                </div>
            ),
        },
    ];

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
            <div>
                <DynamicAccordion sections={sections} />
            </div>
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
                    Recommendations
                </button>
            </div>
        </div>
    );
};

export default PregnancyRecord;
