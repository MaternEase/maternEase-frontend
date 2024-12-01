import React, { useState, useEffect } from 'react';
import ChildTable from '../../components/Shared/ChildTable';
import { AddChildPopup } from '../../components/Shared/Popup/AddChildPopup';
import { registerChild, getChildDetails, getAllChildren } from '../../services/midwifeService';

const TABS = [
  { label: "Clinic 1", value: "clinic1" },
  { label: "Clinic 2", value: "clinic2" },
  { label: "Clinic 3", value: "clinic3" },
];

const TABLE_HEAD = [
  "ID",
  "Name",
  "Age",
  "Guardian Name",
  "Contact Number",
  "Condition",
  "Refer to Doctor",
  "Actions",
];

const Babies = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [childrenData, setChildrenData] = useState([]); // State for backend data

  // Fetch data from the backend
  const fetchChildrenData = async () => {
    try {
      const response = await getAllChildren(); // * Here, you are using getChildDetails() from midwifeService.js
      setChildrenData(response);
    } catch (error) {
      setErrorMessage("Error fetching data from the backend");
    }
  };

  useEffect(() => {
    fetchChildrenData(); // Fetch data when component mounts
  }, []);

  // Map backend data into table rows
  const TABLE_ROWS = childrenData.map(child => ({
    id: child.id,
    name: child.name,
    age: child.age,
    guardianName: child.guardianName,
    contactNumber: child.contactNumber,
    condition: child.condition,
    referToDoctor: child.referToDoctor,
  }));

  // Handlers
  const handleOpenPopup = () => setIsPopupOpen(true);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setErrorMessage('');
    setSuccessMessage('');
  };

  const handleFormSubmit = async (formData) => {
    try {
      const responseMessage = await registerChild(formData);
      setSuccessMessage(responseMessage || "Child registered successfully!");
      setIsSuccessModalOpen(true);
      handleClosePopup();
      setTimeout(() => setIsSuccessModalOpen(false), 5000);
      fetchChildrenData(); // Refresh data after submission
    } catch (error) {
      setErrorMessage("Failed to register child. Please try again.");
    }
  };

  return (
    <>
      <ChildTable
        title="Babies"
        subheader="See information about all Babies"
        tabs={TABS}
        tableHead={TABLE_HEAD}
        tableRows={TABLE_ROWS}
        onAddMemberClick={handleOpenPopup}
        showActions={true}
      />
      <AddChildPopup
        open={isPopupOpen}
        onClose={handleClosePopup}
        onSubmit={handleFormSubmit}
      />
      {errorMessage && <div style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</div>}
      {successMessage && <div style={{ color: 'green', textAlign: 'center' }}>{successMessage}</div>}
      {isSuccessModalOpen && (
        <div style={{
          position: 'fixed',
          top: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'rgba(34, 139, 34, 0.9)',
          color: 'black',
          fontWeight: 'bold',
          padding: '20px 40px',
          borderRadius: '10px',
          zIndex: 1000,
          width: '80%',
          maxWidth: '600px',
          textAlign: 'center',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          fontSize: '18px',
        }}>
          {successMessage}
        </div>
      )}
    </>
  );
};

export default Babies;
