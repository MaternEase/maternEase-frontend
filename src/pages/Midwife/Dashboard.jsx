import React, { useState } from 'react';
import MainLayout from '../../components/layout/MainLayout';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { DatePicker } from 'antd';
import '../CSS/Midwife/Dashboard.css';

const data = {
  labels: ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
  datasets: [
    {
      label: 'Statistics',
      data: [20, 25, 30, 28, 35, 40, 45, 50, 55, 60, 65, 70],
      fill: false,
      backgroundColor: '#967AA1',
      borderColor: '#967AA1',
    },
    {
      label: 'This Month',
      data: [18, 23, 29, 27, 33, 38, 43, 48, 53, 58, 63, 68],
      fill: false,
      backgroundColor: '#AAA1C8',
      borderColor: '#AAA1C8',
    },
  ],
};

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <MainLayout>
      <div className="container">
        <div className="header">
          <div className="user-info">
            <h1>Hi, ABC</h1>
            <p>You're in</p>
            <div className="clinic">Clinic 1</div>
          </div>
          <button onClick={handleModal} className="add-attendee-button">
            + Add New Clinic Attendee
          </button>
        </div>
        <div className="content">
          <div className="statistics">
            <h2>Statistics</h2>
            <Line data={data} />
          </div>
          <div className="calendar-section">
            <h2>Full Calendar</h2>
            <DatePicker className="custom-datepicker" />
          </div>
        </div>
        <div className="lists">
          <div className="children">
            <h2>Children</h2>
            <ul>
              <li>
                <span role="img" aria-label="eye">👁️</span> A.B.C. Silvaaaaaaaaaa
              </li>
              <li>
                <span role="img" aria-label="eye">👁️</span> A.B.C. Silva
              </li>
              <li>
                <span role="img" aria-label="eye">👁️</span> A.B.C. Silvasssss
              </li>
              <li>
                <span role="img" aria-label="eye">👁️</span> A.B.C. Silvaaaaaaaaaa
              </li>
              <li>
                <span role="img" aria-label="eye">👁️</span> A.B.C. Silva
              </li>
              <li>
                <span role="img" aria-label="eye">👁️</span> A.B.C. Silvasssss
              </li>
            </ul>
          </div>
          <div className="expectant-mothers">
            <h2>Expectant Mothers</h2>
            <ul>
              <li>
                <span role="img" aria-label="eye">👁️</span> A.B.C. Silvaaaaaaaaaa
              </li>
              <li>
                <span role="img" aria-label="eye">👁️</span> A.B.C. Silva
              </li>
              <li>
                <span role="img" aria-label="eye">👁️</span> A.B.C. Silvasssss
              </li>
              <li>
                <span role="img" aria-label="eye">👁️</span> A.B.C. Silvaaaaaaaaaa
              </li>
              <li>
                <span role="img" aria-label="eye">👁️</span> A.B.C. Silva
              </li>
              <li>
                <span role="img" aria-label="eye">👁️</span> A.B.C. Silvasssss
              </li>
            </ul>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>REGISTER A NEW CLINIC ATTENDEE</h2>
            <div className="modal-buttons">
              <button className="add-button">+ Add New Expectant Mother</button>
              <button className="add-button">+ Add New Child</button>
            </div>
            <button onClick={handleModal} className="close-button">
              Close
            </button>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default Home;
