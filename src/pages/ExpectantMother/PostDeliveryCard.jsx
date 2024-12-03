import React, { useState } from 'react';
import { Carousel, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

// Mock data for post-delivery health records with dates
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
const PostDeliveryCard = ({ data }) => (
    <div style={{ padding: '20px', backgroundColor: '#f7f7f7', borderRadius: '8px' }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px', color: '#333' }}>
            {data.map((item, idx) => (
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
                    <span>{item.value}</span>
                </li>
            ))}
        </ul>
    </div>
);

// Carousel Component
const PostDeliveryCarousel = () => {
    const carouselRef = React.useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        carouselRef.current?.prev();
    };

    const handleNext = () => {
        carouselRef.current?.next();
    };

    const handleSlideChange = (index) => {
        setCurrentIndex(index);
    };

    // Sort data by date (latest first)
    const sortedData = [...postDeliveryDataByDays].sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Button
                    type="primary"
                    shape="circle"
                    icon={<LeftOutlined />}
                    onClick={handlePrev}
                    style={{ marginRight: '10px' ,backgroundColor: "#f0f0f0",
                        borderColor: "#f0f0f0",
                        color: "#D5C6E0",
                        borderRadius: "30px"}}
                />
                <h3 style={{ fontWeight: 'bold', color: '#333', margin: 0 }}>
                    {sortedData[currentIndex].date}
                </h3>
                <Button
                    type="primary"
                    shape="circle"
                    icon={<RightOutlined />}
                    onClick={handleNext}
                    style={{ marginLeft: '10px' , backgroundColor: "#f0f0f0",
                        borderColor: "#f0f0f0",
                        color: "#D5C6E0",
                        borderRadius: "30px" }}
                />
            </div>
            <Carousel
                ref={carouselRef}
                dots={true}
                style={{ width: '80%', margin: '0 auto', maxWidth: '600px' }}
                initialSlide={0} // Start with the latest date
                afterChange={handleSlideChange} // Track current slide index
            >
                {sortedData.map((entry, index) => (
                    <PostDeliveryCard key={index} data={entry.data} />
                ))}
            </Carousel>
        </div>
    );
};

export default PostDeliveryCarousel;
