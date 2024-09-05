import React, { useState } from 'react';
import CustomTable from '../../components/Shared/CustomTable';
import { AddExpectantMotherPopup } from '../../components/Shared/Popup/AddExpectantMotherPopup';
import { registerMother } from '../../services/midwifeService'; // Import the registration service

const TABS = [
  { label: "Clinic 1", value: "clinic1" },
  { label: "Clinic 2", value: "clinic2" },
  { label: "Clinic 3", value: "clinic3" },
];

const TABLE_HEAD = ["ID", "Name", "Age", "Condition", "Refer to Doctor", "Delivered Date", ""];

const TABLE_ROWS = [
  { id: 1, img: "", name: "Kumari Perera", age: 30, condition: "Non Risky", referToDoctor: false, deliveredDate: "2024-07-01" },
  { id: 2, img: "", name: "Nimali Silva", age: 25, condition: "Risky", referToDoctor: true, deliveredDate: "2024-06-15" },
  { id: 3, img: "", name: "Samanthi Fernando", age: 28, condition: "Non Risky", referToDoctor: false, deliveredDate: "2024-07-10" },
  { id: 4, img: "", name: "Malkanthi Jayasinghe", age: 35, condition: "Risky", referToDoctor: true, deliveredDate: "2024-06-20" },
  { id: 5, img: "", name: "Chandani Rathnayake", age: 40, condition: "Non Risky", referToDoctor: false, deliveredDate: "2024-07-05" },
];

const ExpectedMothers = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Function to open the popup
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  // Function to close the popup
  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setErrorMessage(''); // Reset error message when the popup closes
    setSuccessMessage(''); // Reset success message when the popup closes
  };

  // Function to handle the form submission from the popup
  const handleFormSubmit = async (formData) => {
    try {
      const response = await registerMother(formData); // Call the service to register the mother
      setSuccessMessage('Mother registered successfully!'); // Display success message
      console.log('Mother registered:', response);
      handleClosePopup(); // Close the popup on success
    } catch (error) {
      setErrorMessage('Failed to register mother. Please try again.'); // Display error message
      console.error('Error registering mother:', error);
    }
  };

  return (
    <>
      <CustomTable
        title="Expected Mothers"
        subheader="See information about all expected mothers"
        tabs={TABS}
        tableHead={TABLE_HEAD}
        tableRows={TABLE_ROWS}
        onAddMemberClick={handleOpenPopup} // Pass the handler to open the popup
        showActions={true} // Show action buttons
      />
      <AddExpectantMotherPopup
        open={isPopupOpen}
        onClose={handleClosePopup}
        onSubmit={handleFormSubmit} // Pass the form submit handler to the popup
      />
      {errorMessage && <div style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</div>}
      {successMessage && <div style={{ color: 'green', textAlign: 'center' }}>{successMessage}</div>}
    </>
  );
};

export default ExpectedMothers;
