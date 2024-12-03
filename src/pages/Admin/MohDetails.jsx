// import React, { useState, useEffect } from 'react';

// const MohDetails = ({ mohId }) => {
//   const [mohData, setMohData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Simulate fetching data from an API
//   useEffect(() => {
//     const fetchMohData = async () => {
//       try {
//         // Example API call - replace with your actual endpoint
//         const response = await fetch(`http://localhost:8080/api/moh/${mohId}`);
//         const data = await response.json();
//         setMohData(data);
//       } catch (error) {
//         console.error("Error fetching MOH data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMohData();
//   }, [mohId]);

//   if (loading) return <p>Loading MOH details...</p>;

//   if (!mohData) return <p>Unable to load MOH details. Please try again later.</p>;

//   return (
//     <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '600px', margin: 'auto' }}>
//       <h2>{mohData.name}</h2>
//       <ul>
//         <li><strong>Number of Clinics:</strong> {mohData.clinicCount}</li>
//         <li><strong>Number of Midwives:</strong> {mohData.midwifeCount}</li>
//         <li><strong>Number of Doctors:</strong> {mohData.doctorCount}</li>
//         <li><strong>Total Birth Count:</strong> {mohData.birthCount}</li>
//       </ul>
//     </div>
//   );
// };

// export default MohDetails;

import React from 'react';

const MohDetails = () => {
  // Hardcoded MOH details
  const mohData = {
    name: 'Central MOH Division',
    clinicCount: 8,
    midwifeCount: 24,
    doctorCount: 2,
    birthCount: 320,
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '600px', margin: 'auto' }}>
      <h2>{mohData.name}</h2>
      <ul>
        <li><strong>Number of Clinics:</strong> {mohData.clinicCount}</li>
        <li><strong>Number of Midwives:</strong> {mohData.midwifeCount}</li>
        <li><strong>Number of Doctors:</strong> {mohData.doctorCount}</li>
        <li><strong>Total Birth Count:</strong> {mohData.birthCount}</li>
      </ul>
    </div>
  );
};

export default MohDetails;
