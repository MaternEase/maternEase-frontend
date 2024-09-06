import React, { useState } from 'react';
import CustomTable from '../../components/Shared/CustomTable';
import { AddExpectantMotherPopup } from '../../components/Shared/Popup/AddExpectantMotherPopup';
import { registerMother } from '../../services/midwifeService'; // Import the registration service
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';


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
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false); // State for success modal

  // Function to open the popup
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  // Function to close the popup
  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setErrorMessage(''); // Reset error message when the popup closes
    setSuccessMessage(responseMessage); // Reset success message when the popup closes
  };

   // Function to close the success modal
   const handleCloseSuccessModal = () => {
    setIsSuccessModalOpen(false);
  };

  // Function to handle the form submission from the popup
  const handleFormSubmit = async (formData) => {
    try {
      const responseMessage = await registerMother(formData); // Call the service to register the mother and get the actual message
      setSuccessMessage(responseMessage || 'Mother registered successfully!'); // Use the message from the backend or fallback to a default one
      setIsSuccessModalOpen(true); // Open the success modal
      console.log('Mother registered:', responseMessage);
      handleClosePopup(); // Close the popup on success
  
      // Automatically hide the success message after 5 seconds
      setTimeout(() => {
        setIsSuccessModalOpen(false);
      }, 5000);
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
     
     
    {/* Success Message Box */}
{isSuccessModalOpen && (
  <div style={{
    position: 'fixed',  // Fixed to ensure it stays at the top
    top: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'rgba(34, 139, 34, 0.9)', // Deep green with transparency
    color: 'black',  // Text color set to black for better visibility
    fontWeight: 'bold',  // Make the text bold
    padding: '20px 40px',  // Padding for better appearance
    borderRadius: '10px',  // Smoother rounded corners
    zIndex: 1000,
    width: '80%',  // Increased width to make the popup wider
    maxWidth: '600px',  // Set a maximum width to prevent it from growing too large
    textAlign: 'center',  // Center text
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',  // Add a shadow for a 3D effect
    fontSize: '18px',  // Increased text size for better readability
  }}>
    {successMessage}
  </div>
)}




    </>
  );
};

export default ExpectedMothers;
