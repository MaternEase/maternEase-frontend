import React from 'react';
import DynamicAccordion from '../../components/ExpectantMother/DynamicAccordion.jsx';

const sections = [
    { title: 'Section 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Section 2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Section 3', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    // Add more sections as needed
];

const PregnancyRecord = () => {
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
        </div>
    );
};

export default PregnancyRecord;
