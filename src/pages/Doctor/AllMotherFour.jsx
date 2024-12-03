import React, { useState } from 'react';
import { Carousel, Button, Input } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const postDeliveryDataByDays = [
    {
        date: "2024-11-27",
        data: [
            { label: "Temperature (°C)", value: "37.5" },
            { label: "Anemia", value: "No" },
            { label: "Breast Cracks", value: "Yes" },
            { label: "Surgical Site Infection", value: "No" },
            { label: "Mental Changes", value: "No" },
            { label: "Upper Abdominal Pain", value: "Yes" },
            { label: "Diarrhea", value: "No" },
            { label: "Vomiting", value: "Yes" },
            { label: "Difficulty Breathing", value: "No" },
            { label: "Poor Vision", value: "No" },
            { label: "Migraine", value: "Yes" },
            { label: "Muscle Cramp", value: "No" },
            { label: "Taking Micronutrients", value: "Yes" },
        ],
    },
    {
        date: "2024-11-26",
        data: [
            { label: "Temperature (°C)", value: "37.2" },
            { label: "Anemia", value: "Yes" },
            { label: "Breast Cracks", value: "No" },
            { label: "Surgical Site Infection", value: "No" },
            { label: "Mental Changes", value: "No" },
            { label: "Upper Abdominal Pain", value: "No" },
            { label: "Diarrhea", value: "No" },
            { label: "Vomiting", value: "No" },
            { label: "Difficulty Breathing", value: "No" },
            { label: "Poor Vision", value: "No" },
            { label: "Migraine", value: "No" },
            { label: "Muscle Cramp", value: "No" },
            { label: "Taking Micronutrients", value: "Yes" },
        ],
    },
    // Add more data as needed
];

// Reusable Card Component
const PostDeliveryCard = ({ data, onSave, saved }) => {
    const [editableData, setEditableData] = useState(data);

    const handleInputChange = (value, index) => {
        const updatedData = [...editableData];
        updatedData[index].value = value;
        setEditableData(updatedData);
    };

    return (
        <div style={{ padding: '20px', backgroundColor: '#f7f7f7', borderRadius: '8px' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px', color: '#333' }}>
                {editableData.map((item, idx) => (
                    <li
                        key={idx}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '8px 0',
                            borderBottom: '1px solid #e0e0e0',
                        }}
                    >
                        <span style={{ fontWeight: 'bold', color: '#555' }}>{item.label}</span>
                        <Input
                            value={item.value}
                            onChange={(e) => handleInputChange(e.target.value, idx)}
                            style={{ width: '150px' }}
                        />
                    </li>
                ))}
            </ul>
            <Button
                type="primary"
                onClick={() => onSave(editableData)}
                style={{ marginTop: '20px', backgroundColor: saved ? '#28a745' : '#007BFF' }}
            >
                {saved ? 'Saved' : 'Save'}
            </Button>
        </div>
    );
};

// Carousel Component
const PostDeliveryCarousel = () => {
    const navigate = useNavigate();
    const carouselRef = React.useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [savedData, setSavedData] = useState([...postDeliveryDataByDays]);
    const [saveStatus, setSaveStatus] = useState(Array(postDeliveryDataByDays.length).fill(false));

    const handlePrev = () => {
        carouselRef.current?.prev();
    };

    const handleNext = () => {
        carouselRef.current?.next();
    };

    const handleSlideChange = (index) => {
        setCurrentIndex(index);
    };

    const handleSave = (updatedData) => {
        const updatedSavedData = [...savedData];
        updatedSavedData[currentIndex].data = updatedData;
        setSavedData(updatedSavedData);

        const updatedSaveStatus = [...saveStatus];
        updatedSaveStatus[currentIndex] = true;
        setSaveStatus(updatedSaveStatus);
    };

    // Sort data by date (latest first)
    const sortedData = [...savedData].sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Button
                    type="primary"
                    shape="circle"
                    icon={<LeftOutlined />}
                    onClick={handlePrev}
                    style={{
                        marginRight: '10px',
                        backgroundColor: '#f0f0f0',
                        borderColor: '#f0f0f0',
                        color: '#D5C6E0',
                        borderRadius: '30px',
                    }}
                />
                <h3 style={{ fontWeight: 'bold', color: '#333', margin: 0 }}>
                    {sortedData[currentIndex].date}
                </h3>
                <Button
                    type="primary"
                    shape="circle"
                    icon={<RightOutlined />}
                    onClick={handleNext}
                    style={{
                        marginLeft: '10px',
                        backgroundColor: '#f0f0f0',
                        borderColor: '#f0f0f0',
                        color: '#D5C6E0',
                        borderRadius: '30px',
                    }}
                />
            </div>
            <Carousel
                ref={carouselRef}
                dots={true}
                style={{ width: '80%', margin: '0 auto', maxWidth: '600px' }}
                initialSlide={0}
                afterChange={handleSlideChange}
            >
                {sortedData.map((entry, index) => (
                    <PostDeliveryCard
                        key={index}
                        data={entry.data}
                        onSave={handleSave}
                        saved={saveStatus[currentIndex]}
                    />
                ))}
            </Carousel>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button
                    onClick={() => navigate('/doctor/recommandations')}
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

export default PostDeliveryCarousel;
