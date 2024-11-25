import React from "react";
import GoogleMapReact from "google-map-react";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import { useNavigate, useLocation } from "react-router-dom"; // Added useLocation import
import { ArrowBack } from "@mui/icons-material";
import {Button} from "antd";

// Marker Component
const Marker = ({ lat, lng }) => (
  <PersonPinCircleIcon
    style={{
      color: "blue",
      fontSize: "40px",
      transform: "translate(-50%, -100%)", // Center the marker over the pointer
    }}
  />
);

const LocationConfirmed = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  const location = useLocation(); // Get location from useLocation hook

  // Get the confirmed location and address from location state
  const { confirmedPosition, confirmedAddress } = location.state || {};

  // Hardcoded address
  const hardcodedAddress = "123 Main St, Springfield, USA";

  if (!confirmedPosition) {
    return <div>Location data not available</div>;
  }

  // Navigate back to the previous page or any other route
  const handleEditLocation = () => {
    navigate("/mother/edit-location");
  };

  // Navigate back to the dashboard
  const handleBackButtonClick = () => {
    navigate("/mother/dashboard");
  };

  return (
    <div style={{ minHeight: "100vh", padding: "20px" }}>
      <Button
        icon={<ArrowBack style={{ fontSize: 16 }} />}
        onClick={handleBackButtonClick}
        style={{
          marginBottom: 16,
          backgroundColor: "#f0f0f0",
          borderColor: "#f0f0f0",
          color: "#D5C6E0",
          borderRadius: "30px",
        }}
      ></Button>
      <h2 style={{ textAlign: "center", color: "#192A51" }}>Your Location</h2>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      >
        <div
          style={{
            height: "70vh",
            width: "80%",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        >
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyCcc5SDrNKsnCoo_hUNN9r0fvv-SJws7s8", // Hardcoded API key (replace with your actual key)
            }}
            center={confirmedPosition} // Use confirmed location
            zoom={14} // Fixed zoom for confirmation view
            draggable={false} // Disable dragging
            scrollwheel={false} // Disable zooming
          >
            <Marker
              lat={confirmedPosition.lat} // Marker position
              lng={confirmedPosition.lng}
            />
          </GoogleMapReact>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h3>Confirmed Address</h3>
        <p>{confirmedAddress || "No address available"}</p>
        <h4 style={{ marginTop: "10px", color: "#555" }}>Hardcoded Address</h4>
        <p>{hardcodedAddress}</p>
      </div>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={handleEditLocation}
          style={{
            padding: "10px 20px",
            backgroundColor: "#192A51",
            color: "white",
            borderRadius: "5px",
            marginRight: "10px",
          }}
        >
          Edit Location
        </button>
      </div>
    </div>
  );
};

export default LocationConfirmed;
