import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const MedicalReportsPageContainer = styled.div`
  max-width: 500px;
  margin: auto;
  text-align: center;
`;

const Indicator = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ReportContainer = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin: 20px 0;
  background-color: #f9f9f9;
`;

const NavigationButton = styled.button`
  margin: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }
`;

const MedicalReportsPage = ({ reports }) => {
    const [currentReportIndex, setCurrentReportIndex] = useState(0);

    const totalReports = reports.length;

    const nextReport = () => {
        setCurrentReportIndex((prevIndex) =>
            prevIndex === totalReports - 1 ? 0 : prevIndex + 1
        );
    };

    const prevReport = () => {
        setCurrentReportIndex((prevIndex) =>
            prevIndex === 0 ? totalReports - 1 : prevIndex - 1
        );
    };

    return (
        <MedicalReportsPageContainer>
            {/* Indicator */}
            <Indicator>
                {currentReportIndex + 1} of {totalReports}
            </Indicator>

            {/* Medical Report */}
            <ReportContainer>
                <h2>{reports[currentReportIndex].name}</h2>
                <p>{reports[currentReportIndex].content}</p>
            </ReportContainer>

            {/* Navigation Arrows */}
            <div>
                <NavigationButton onClick={prevReport}>&lt; Previous</NavigationButton>
                <NavigationButton onClick={nextReport}>Next &gt;</NavigationButton>
            </div>
        </MedicalReportsPageContainer>
    );
};

// Example usage with sample data
const reports = [
    { name: "Child 1", content: "Medical Report for Child 1..." },
    { name: "Child 2", content: "Medical Report for Child 2..." },
    { name: "Child 3", content: "Medical Report for Child 3..." }
];

export default function App() {
    return <MedicalReportsPage reports={reports} />;
}
