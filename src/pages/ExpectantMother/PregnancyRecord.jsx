import React from 'react';
import DynamicAccordion from '../../components/ExpectantMother/DynamicAccordion.jsx';

import { Carousel, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import WeightChart from "../../components/ExpectantMother/WeightChart.jsx";
import FundalHeightChart from "../../components/ExpectantMother/FundalHeightChart.jsx";
import PostDeliveryCard from "./PostDeliveryCard.jsx";

const motherStatus = "delivered"; // Hardcoded status for now

// Mock data for post-delivery health records over 5 days
// const postDeliveryDataByDays = [
//     {
//         day: "Day 1",
//         data: [
//             { label: "Temperature (°C)", value: "37.5" },
//             { label: "Anemia", value: "No" },
//             { label: "Breast Cracks", value: "Yes" },
//             { label: "Surgical Site Infection", value: "No" },
//             { label: "Mental Changes", value: "No" },
//             { label: "Upper Abdominal Pain", value: "Yes" },
//             { label: "Diarrhea", value: "No" },
//             { label: "Vomiting", value: "Yes" },
//             { label: "Difficulty Breathing", value: "No" },
//             { label: "Poor Vision", value: "No" },
//             { label: "Migraine", value: "Yes" },
//             { label: "Muscle Cramp", value: "No" },
//             { label: "Taking Micronutrients", value: "Yes" },
//         ],
//     },
//     {
//         day: "Day 2",
//         data: [
//             { label: "Temperature (°C)", value: "37.2" },
//             { label: "Anemia", value: "No" },
//             { label: "Breast Cracks", value: "No" },
//             { label: "Surgical Site Infection", value: "No" },
//             { label: "Mental Changes", value: "No" },
//             { label: "Upper Abdominal Pain", value: "No" },
//             { label: "Diarrhea", value: "No" },
//             { label: "Vomiting", value: "No" },
//             { label: "Difficulty Breathing", value: "No" },
//             { label: "Poor Vision", value: "No" },
//             { label: "Migraine", value: "No" },
//             { label: "Muscle Cramp", value: "No" },
//             { label: "Taking Micronutrients", value: "Yes" },
//         ],
//     },
// ];
//
// // Ensure the latest data appears first (reverse the array)
// const sortedData = [...postDeliveryDataByDays].reverse();
//
// const PostDeliveryCarousel = () => {
//     const carouselRef = React.useRef(null);
//
//     const handlePrev = () => {
//         carouselRef.current?.prev();
//     };
//
//     const handleNext = () => {
//         carouselRef.current?.next();
//     };
//
//     return (
//         <div style={{ textAlign: 'center', padding: '20px' }}>
//             <div style={{ marginBottom: '10px' }}>
//                 <Button
//                     type="primary"
//                     shape="circle"
//                     icon={<LeftOutlined />}
//                     onClick={handlePrev}
//                     style={{ marginRight: '10px' }}
//                 />
//                 <Button
//                     type="primary"
//                     shape="circle"
//                     icon={<RightOutlined />}
//                     onClick={handleNext}
//                 />
//             </div>
//             <Carousel
//                 ref={carouselRef}
//                 dots={true}
//                 style={{ width: '80%', margin: '0 auto', maxWidth: '600px' }}
//                 initialSlide={0} // Start with the latest date
//             >
//                 {sortedData.map((entry, index) => (
//                     <div key={index} style={{ padding: '20px', backgroundColor: '#f7f7f7', borderRadius: '8px' }}>
//                         <h3 style={{ fontWeight: 'bold', marginBottom: '20px', color: '#333' }}>{entry.day}</h3>
//                         <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px', color: '#333' }}>
//                             {entry.data.map((item, idx) => (
//                                 <li
//                                     key={idx}
//                                     style={{
//                                         display: 'flex',
//                                         justifyContent: 'space-between',
//                                         padding: '8px 0',
//                                         borderBottom: '1px solid #e0e0e0',
//                                     }}
//                                 >
//                                     <span style={{ fontWeight: 'bold', color: '#555' }}>{item.label}</span>
//                                     <span>{item.value}</span>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 ))}
//             </Carousel>
//         </div>
//     );
// };

const sections = [
    ...(motherStatus === "delivered"
        ? [
            {
                title: (
                    <span style={{ fontWeight: 'bold', fontSize: '20px', color: '#333' }}>
                        Post-Delivery Health Data
                    </span>
                ),
                content: <PostDeliveryCard />,
            }
        ]
        : []),
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
    // {
    //     title: (
    //         <span style={{ fontWeight: 'bold', fontSize: '20px', color: '#333' }}>
    //     Medical Report
    // </span>
    //     ),
    //     content: (
    //         <div>
    //             <div style={{
    //                 display: 'flex',
    //                 gap: '20px', // Space between the two sections
    //                 padding: '20px',
    //                 backgroundColor: '#ffffff',
    //                 borderRadius: '8px',
    //             }}>
    //                 {/* Left Section */}
    //                 <div style={{
    //                     flex: 1, // Make each section take half the available width
    //                     display: 'grid',
    //                     gridTemplateColumns: '1fr 0.5fr', // Two columns: condition and status
    //                     gap: '10px',
    //                     border: '1px solid #e0e0e0',
    //                     borderRadius: '8px',
    //                     padding: '10px',
    //                     width: '100%',
    //                 }}>
    //                     <strong style={{fontSize: '16px', color: '#555'}}>Condition</strong>
    //                     <strong style={{fontSize: '16px', color: '#555'}}>Status</strong>
    //
    //                     {[
    //                         {condition: 'Diabetes', status: 'No'},
    //                         {condition: 'Hypertension', status: 'Yes'},
    //                         {condition: 'Cardiac diseases', status: 'No'},
    //                         {condition: 'Renal diseases', status: 'No'},
    //                         {condition: 'Hepatic diseases', status: 'Yes'},
    //                         {condition: 'Psychiatric illnesses', status: 'No'},
    //                     ].map((item, index) => (
    //                         <React.Fragment key={index}>
    //                     <span style={{
    //                         fontSize: '14px',
    //                         color: item.status === 'No' ? '#b9b9b9' : '#555', // Grey for 'No', default color otherwise
    //                         padding: '8px 0',
    //                         borderBottom: '1px solid #e0e0e0', // Border between rows
    //                     }}>
    //                         {item.condition}
    //                     </span>
    //                             <span style={{
    //                                 display: 'flex',
    //                                 alignItems: 'center',
    //                                 fontWeight: 'bold',
    //                                 color: item.status === 'Yes' ? '#0a0a0a' : '#b9b9b9', // Grey for 'No' status
    //                                 gap: '5px',
    //                                 padding: '8px 0',
    //                                 borderBottom: '1px solid #e0e0e0', // Border between rows
    //                             }}>
    //                         {item.status}
    //                     </span>
    //                         </React.Fragment>
    //                     ))}
    //                 </div>
    //
    //                 {/* Right Section */}
    //                 <div style={{
    //                     flex: 1, // Make each section take half the available width
    //                     display: 'grid',
    //                     gridTemplateColumns: '1fr 0.5fr', // Two columns: condition and status
    //                     gap: '10px',
    //                     border: '1px solid #e0e0e0',
    //                     borderRadius: '8px',
    //                     padding: '10px',
    //                     width: '100%',
    //                 }}>
    //                     <strong style={{fontSize: '16px', color: '#555'}}>Condition</strong>
    //                     <strong style={{fontSize: '16px', color: '#555'}}>Status</strong>
    //
    //                     {[
    //                         {condition: 'Epilepsy', status: 'No'},
    //                         {condition: 'Malignancies', status: 'No'},
    //                         {condition: 'Haematological diseases', status: 'No'},
    //                         {condition: 'Tuberculosis', status: 'Yes'},
    //                         {condition: 'Thyroid diseases', status: 'No'},
    //                         {condition: 'Bronchial asthma', status: 'Yes'},
    //                         {condition: 'Previous DVT', status: 'No'},
    //                     ].map((item, index) => (
    //                         <React.Fragment key={index}>
    //                     <span style={{
    //                         fontSize: '14px',
    //                         color: item.status === 'No' ? '#b9b9b9' : '#555', // Grey for 'No', default color otherwise
    //                         padding: '8px 0',
    //                         borderBottom: '1px solid #e0e0e0', // Border between rows
    //                     }}>
    //                         {item.condition}
    //                     </span>
    //                             <span style={{
    //                                 display: 'flex',
    //                                 alignItems: 'center',
    //                                 fontWeight: 'bold',
    //                                 color: item.status === 'Yes' ? '#0a0a0a' : '#b9b9b9', // Grey for 'No' status
    //                                 gap: '5px',
    //                                 padding: '8px 0',
    //                                 borderBottom: '1px solid #e0e0e0', // Border between rows
    //                             }}>
    //                         {item.status}
    //                     </span>
    //                         </React.Fragment>
    //                     ))}
    //                 </div>
    //
    //             </div>
    //             <div>Surgeries other than LCSC</div>
    //         </div>
    //     ),
    // },

    // ////////////


    // ////////////////

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
    return (
        <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <span style={{ fontWeight: 'normal', fontSize: '24px' }}>Pregnancy Record</span>
                {/*<div style={{ display: 'flex', gap: '10px' }}>*/}
                {/*    <span style={{ backgroundColor: '#9DBFE6', padding: '5px 10px', borderRadius: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }}>*/}
                {/*        Firstborn*/}
                {/*    </span>*/}
                {/*    <span style={{ backgroundColor: '#E4B1B1', padding: '5px 10px', borderRadius: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }}>*/}
                {/*        Risky*/}
                {/*    </span>*/}
                {/*    <div*/}
                {/*        style={{ backgroundColor: '#D3D3D3', padding: '5px 10px', borderRadius: '5px', display: 'flex', alignItems: 'center', fontSize: '14px' }}>*/}
                {/*        Blood Group: B+*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
            <DynamicAccordion sections={sections} />
        </div>
    );
};

export default PregnancyRecord;
