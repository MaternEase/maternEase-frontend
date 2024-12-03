import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getChildDetails } from "../../services/midwifeService"; // Ensure this is the correct import path

const ChildDetails = () => {
  const { childId } = useParams(); // Extract childId from the URL
  const [childData, setChildData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchChildData = async () => {
    try {
      if (!childId) {
        throw new Error("Child ID is missing from the URL.");
      }

      const response = await getChildDetails(childId); // Call the API function
      setChildData(response); // Save the child details in state
    } catch (error) {
      setErrorMessage(error.message || "Failed to fetch child details.");
    }
  };

  // Fetch child details when the component mounts or childId changes
  useEffect(() => {
    fetchChildData();
  }, [childId]);

  return (
    <div>
      <h2>Child Details</h2>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {childData ? (
        <div>
          <p><strong>Child ID:</strong> {childData.id}</p>
          <p><strong>Name:</strong> {childData.name}</p>
          <p><strong>Age:</strong> {childData.age}</p>
          <p><strong>Gender:</strong> {childData.gender}</p>
          {/* Add more fields as per your child table */}
        </div>
      ) : (
        !errorMessage && <p>Loading child details...</p>
      )}
    </div>
  );
};

export default ChildDetails;
