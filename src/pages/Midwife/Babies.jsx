import React, { useState } from 'react';
import ChildTable from '../../components/Shared/ChildTable';
import { AddChildPopup } from '../../components/Shared/Popup/AddChildPopup';


const TABS = [
  { label: "Clinic 1", value: "clinic1" },
  { label: "Clinic 2", value: "clinic2" },
  { label: "Clinic 3", value: "clinic3" },
];

const TABLE_HEAD = ["ID", "Name", "Age",  "Guardian Name", "Contact Number","Condition", "Refer to Doctor"," "];

const TABLE_ROWS = [
  { id: 1, img: "", name: "Kavindu Perera", age: 1, guardianName: "Saman Perera", contactNumber: "0712345678", condition: "Non Risky", referToDoctor: false },
  { id: 2, img: "", name: "Tharindu Silva", age: 2, guardianName: "Nimal Silva", contactNumber: "0712345679", condition: "Risky", referToDoctor: true },
  { id: 3, img: "", name: "Sanduni Fernando", age: 1, guardianName: "Kamal Fernando", contactNumber: "0712345680", condition: "Non Risky", referToDoctor: false },
  { id: 4, img: "", name: "Hiruni Jayasinghe", age: 3, guardianName: "Nuwan Jayasinghe", contactNumber: "0712345681", condition: "Risky", referToDoctor: true },
  { id: 5, img: "", name: "Naveen Rathnayake", age: 2, guardianName: "Lal Rathnayake", contactNumber: "0712345682", condition: "Non Risky", referToDoctor: true},
];



const Babies = () => {

  const [isPopupOpen, setIsPopupOpen] =useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false); // State for success modal
  const [mothersData , setMothersData] = useState([]);  // State to hold the backend data
  
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


  return (
    <>
    <ChildTable
      title="Babies"
      subheader="See information about all Babies"
      tabs={TABS}
      tableHead={TABLE_HEAD}
      tableRows={TABLE_ROWS}
      onAddMemberClick={handleOpenPopup} // Pass the handler to open the popup
      showActions={true} // Show action buttons
      
    />
<AddChildPopup
        open={isPopupOpen}
        onClose={handleClosePopup}
        // onSubmit={handleFormSubmit} // Pass the form submit handler to the popup
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

export default Babies;
