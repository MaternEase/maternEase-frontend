import React, { useEffect, useState } from "react";
import CustomTable from "../../components/Shared/CustomTable";
import { AddExpectantMotherPopup } from "../../components/Shared/Popup/AddExpectantMotherPopup";
import {
  registerMother,
  getExpectedMothers,
} from "../../services/midwifeService"; // Import the registration service
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

const TABS = [
  { label: "Clinic 1", value: "clinic1" },
  { label: "Clinic 2", value: "clinic2" },
  { label: "Clinic 3", value: "clinic3" },
];

const TABLE_HEAD = [
  "ID",
  "Name",
  "Age",
  "Contact Number",
  "Condition",
  "Refer to Doctor",
  "",
];

const ExpectedMothers = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false); // State for success modal
  const [mothersData, setMothersData] = useState([]); // State to hold the backend data

  // Fetch data from the backend when the component mounts
  const fetchMothersData = async () => {
    try {
      const response = await getExpectedMothers();
      // console.log(response);
      setMothersData(response);
    } catch (error) {
      setErrorMessage("Error fetching data from the backend");
    }
  };

  // Run the fetch function on component mount
  useEffect(() => {
    fetchMothersData();
  }, []);

  // Function to open the popup
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  // Function to close the popup
  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setErrorMessage(""); // Reset error message when the popup closes
    setSuccessMessage(""); // Reset success message when the popup closes
  };

  // Function to close the success modal
  const handleCloseSuccessModal = () => {
    setIsSuccessModalOpen(false);
  };

  // Function to handle the form submission from the popup
  const handleFormSubmit = async (formData) => {
    try {
      const responseMessage = await registerMother(formData); // Call the service to register the mother and get the actual message
      setSuccessMessage(responseMessage || "Mother registered successfully!"); // Use the message from the backend or fallback to a default one
      setIsSuccessModalOpen(true); // Open the success modal
      console.log("Mother registered:", responseMessage);
      handleClosePopup(); // Close the popup on success

      // Automatically hide the success message after 5 seconds
      setTimeout(() => {
        setIsSuccessModalOpen(false);
      }, 5000);
    } catch (error) {
      setErrorMessage("Failed to register mother. Please try again."); // Display error message
      console.error("Error registering mother:", error);
    }
  };

  // console.log("Mothers Data being passed to table:", mothersData);
  return (
    <>
      <CustomTable
        title="Expected Mothers"
        subheader="See information about all expected mothers"
        tabs={TABS}
        tableHead={TABLE_HEAD}
        tableRows={mothersData} // Pass the fetched data to the table
        onAddMemberClick={handleOpenPopup} // Pass the handler to open the popup
        showActions={true} // Show action buttons
      />
      <AddExpectantMotherPopup
        open={isPopupOpen}
        onClose={handleClosePopup}
        onSubmit={(data) => {
          console.log("Form submitted with data:", data);
          handleFormSubmit(data);
        }}
      />
      {errorMessage && (
        <div style={{ color: "red", textAlign: "center" }}>{errorMessage}</div>
      )}
      {successMessage && (
        <div style={{ color: "green", textAlign: "center" }}>
          {successMessage}
        </div>
      )}

      {/* Success Message Box */}
      {isSuccessModalOpen && (
        <div
          style={{
            position: "fixed", // Fixed to ensure it stays at the top
            top: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "rgba(34, 139, 34, 0.9)", // Deep green with transparency
            color: "black", // Text color set to black for better visibility
            fontWeight: "bold", // Make the text bold
            padding: "20px 40px", // Padding for better appearance
            borderRadius: "10px", // Smoother rounded corners
            zIndex: 1000,
            width: "80%", // Increased width to make the popup wider
            maxWidth: "600px", // Set a maximum width to prevent it from growing too large
            textAlign: "center", // Center text
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add a shadow for a 3D effect
            fontSize: "18px", // Increased text size for better readability
          }}
        >
          {successMessage}
        </div>
      )}
    </>
  );
};

export default ExpectedMothers;
