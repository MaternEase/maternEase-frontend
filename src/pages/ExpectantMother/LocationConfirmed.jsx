import React from "react";
import GoogleMapReact from "google-map-react";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { Button } from "antd";

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
  const navigate = useNavigate();
  const location = useLocation();

  // Get the confirmed location and address from location state
  const { confirmedPosition, confirmedAddress } = location.state || {};

  // Hardcoded address
  const hardcodedAddress = "123 Temple St\nAhangama\nSri Lanka";

  if (!confirmedPosition) {
    return <div>Location data not available</div>;
  }

  const handleBackButtonClick = () => {
    navigate("/mother/dashboard");
  };

  const handleEditLocation = () => {
    navigate("/mother/edit-location");
  };

  return (
    <div style={{ minHeight: "100vh", padding: "20px" }}>
      {/* Back Button */}
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

      {/* Title */}
      <h2 style={{ textAlign: "center", color: "#192A51", fontSize: "28px" }}>
        Your Location
      </h2>

      {/* Content Layout */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "30px",
          flexWrap: "wrap", // Enable wrapping for smaller screens
        }}
      >
        {/* Map Container */}
        <div
          style={{
            height: "70vh",
            width: "73%",
            borderRadius: "10px",
            marginBottom: "20px",
            flexBasis: "65%", // Adjust width for responsiveness
            minWidth: "300px", // Prevent shrinking too much
          }}
        >
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyCcc5SDrNKsnCoo_hUNN9r0fvv-SJws7s8", // Replace with your actual key
            }}
            center={confirmedPosition}
            zoom={14}
            draggable={false}
            scrollwheel={false}
          >
            <Marker lat={confirmedPosition.lat} lng={confirmedPosition.lng} />
          </GoogleMapReact>
        </div>

        {/* Address Container */}
        <div
          style={{
            height: "70vh",
            width: "25%",
            backgroundColor: "#D5C6E0",
            borderRadius: "10px",
            padding: "20px",
            marginLeft: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            flexBasis: "30%",
            minWidth: "300px",
            // textAlign: "center",
            display: "flex", // Use flex layout
            flexDirection: "column", // Arrange children vertically
            position: "relative", // Allow absolute positioning inside this container
          }}
        >
          <div>
            <h3 style={{ color: "#333", marginBottom: "10px" }}>
              <strong>Confirmed Address</strong>
            </h3>
            <p
              style={{
                whiteSpace: "pre-line",
                lineHeight: "1.6",
                paddingBottom: "20px",
                borderBottom: "1px solid #bbb",
              }}
            >
              {confirmedAddress
                ? confirmedAddress.split(",").map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))
                : "No address available"}
            </p>
          </div>

          <div>
            <h3
              style={{ marginTop: "1git 0px", color: "#333", marginBottom: "10px" }}
            >
              <strong>Address</strong>
            </h3>
            <p style={{ whiteSpace: "pre-line", lineHeight: "1.6" }}>
              {hardcodedAddress.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>

          <button
            onClick={handleEditLocation}
            style={{
              padding: "10px 20px",
              backgroundColor: "#192A51",
              color: "white",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
              position: "absolute", // Position the button absolutely
              bottom: "30px", // Align to the bottom with padding
              right: "30px", // Align to the right with padding
            }}
          >
            Edit Location
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationConfirmed;
