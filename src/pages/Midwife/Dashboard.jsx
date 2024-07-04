import React, { useState } from 'react';
import MainLayout from '../../components/layout/MainLayout';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const data = {
  labels: ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
  datasets: [
    {
      label: 'Statistics',
      data: [20, 25, 30, 28, 35, 40, 45, 50, 55, 60, 65, 70],
      fill: false,
      backgroundColor: '#7e57c2',
      borderColor: '#7e57c2',
    },
    {
      label: 'This Month',
      data: [18, 23, 29, 27, 33, 38, 43, 48, 53, 58, 63, 68],
      fill: false,
      backgroundColor: '#b39ddb',
      borderColor: '#b39ddb',
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
      <div className="container p-8 mx-auto my-8 bg-white rounded-lg shadow-lg">
        <div className="flex items-start justify-between">
          <div className="flex flex-col items-start">
            <h1 className="mb-4 text-2xl font-bold">Hi, ABC</h1>
            <p>You're in</p>
            <div className="p-4 mb-8 bg-purple-200 rounded-lg">Clinic 1</div>
          </div>
          <button
            onClick={handleModal}
            className="p-2 text-white bg-blue-600 rounded-lg"
          >
            + Add New Clinic Attendee
          </button>
        </div>
        <div className="flex justify-between mb-8">
          <div className="w-2/3">
            <h2 className="mb-4 text-xl font-semibold">Statistics</h2>
            <Line data={data} />
          </div>
          <div className="flex flex-col items-center w-1/3">
            <h2 className="mb-4 text-xl font-semibold">Full Calendar</h2>
            <div className="mb-4">
              <input
                type="date"
                className="p-2 border rounded-lg"
                defaultValue="2023-08-17"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-1/2 p-4 bg-gray-100 rounded-lg">
            <h2 className="mb-4 text-xl font-semibold">Children</h2>
            <ul>
              <li>A.B.C. Silvaaaaaaaaaa</li>
              <li>A.B.C. Silva</li>
              <li>A.B.C. Silvasssss</li>
              <li>A.B.C. Silvaaaaaaaaaa</li>
              <li>A.B.C. Silva</li>
              <li>A.B.C. Silvasssss</li>
            </ul>
          </div>
          <div className="w-1/2 p-4 bg-gray-100 rounded-lg">
            <h2 className="mb-4 text-xl font-semibold">Expectant Mothers</h2>
            <ul>
              <li>A.B.C. Silvaaaaaaaaaa</li>
              <li>A.B.C. Silva</li>
              <li>A.B.C. Silvasssss</li>
              <li>A.B.C. Silvaaaaaaaaaa</li>
              <li>A.B.C. Silva</li>
              <li>A.B.C. Silvasssss</li>
            </ul>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-1/3 p-8 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-xl font-bold">REGISTER A NEW CLINIC ATTENDEE</h2>
            <div className="flex flex-col space-y-4">
              <button className="p-4 bg-purple-200 rounded-lg">+ Add New Expectant Mother</button>
              <button className="p-4 bg-purple-200 rounded-lg">+ Add New Child</button>
            </div>
            <button
              onClick={handleModal}
              className="p-2 mt-4 text-white bg-red-600 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default Home;
