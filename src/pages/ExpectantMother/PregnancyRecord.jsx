import React from 'react';
import DynamicAccordion from '../../components/ExpectantMother/DynamicAccordion.jsx';

const sections = [
    {
        title: (
            <span style={{ fontWeight: 'bold', fontSize: '20px', color: '#333' }}>
                Registration Details
            </span>
        ),
        content: (
            <div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <span style={{ fontWeight: '600', fontSize: '16px', color: '#555' }}>
                        Eligible Family Register
                    </span>
                    <div style={{ display: 'flex' }}>
                        <strong style={{ minWidth: '150px', fontSize: '14px', color: '#777' }}>
                            Registration No.
                        </strong>
                        <span style={{ fontSize: '14px', color: '#777' }}>C/35</span>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <strong style={{ minWidth: '150px', fontSize: '14px', color: '#777' }}>
                            Registration Date
                        </strong>
                        <span style={{ fontSize: '14px', color: '#777' }}>2024-08-11</span>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <span style={{ fontWeight: '600', fontSize: '16px', color: '#555' }}>
                        Pregnant Mother’s Register
                    </span>
                    <div style={{ display: 'flex' }}>
                        <strong style={{ minWidth: '150px', fontSize: '14px', color: '#777' }}>
                            Registration No.
                        </strong>
                        <span style={{ fontSize: '14px', color: '#777' }}>c/35/04</span>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <strong style={{ minWidth: '150px', fontSize: '14px', color: '#777' }}>
                            Registration Date
                        </strong>
                        <span style={{ fontSize: '14px', color: '#777' }}>2024-08-11</span>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: (
            <span style={{ fontWeight: 'bold', fontSize: '20px', color: '#333' }}>
                Pre-Conception and Early Pregnancy Details
            </span>
        ),
        content: (
            <div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex' }}>
                        <strong style={{ minWidth: '150px', fontSize: '14px', color: '#777' }}>
                            Registration No.
                        </strong>
                        <span style={{ fontSize: '14px', color: '#777' }}>C/35</span>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <strong style={{ minWidth: '150px', fontSize: '14px', color: '#777' }}>
                            Registration Date
                        </strong>
                        <span style={{ fontSize: '14px', color: '#777' }}>2024-08-11</span>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex' }}>
                        <strong style={{ minWidth: '150px', fontSize: '14px', color: '#777' }}>
                            Registration No.
                        </strong>
                        <span style={{ fontSize: '14px', color: '#777' }}>c/35/04</span>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <strong style={{ minWidth: '150px', fontSize: '14px', color: '#777' }}>
                            Registration Date
                        </strong>
                        <span style={{ fontSize: '14px', color: '#777' }}>2024-08-11</span>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: (
            <span style={{ fontWeight: 'bold', fontSize: '20px', color: '#333' }}>
                Current Pregnancy
            </span>
        ),
        content: (
            <div style={{ fontSize: '14px', color: '#777' }}>
                Information about the current pregnancy, including any complications.
            </div>
        ),
    },
    // Add more sections with custom titles as needed
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
