import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { Button } from "antd";
import axios from "axios";
import AuthService from "../../services/authService"; // Ensure AuthService is imported

// Marker Component for Google Map
const Marker = ({ lat, lng }) => (
  <PersonPinCircleIcon
    style={{
      color: "blue",
      fontSize: "40px",
      transform: "translate(-50%, -100%)",
    }}
  />
);

const LocationConfirmed = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { confirmedPosition, confirmedAddress, userId } = location.state || {};

  useEffect(() => {
    if (userId) {
      const storedUserData = JSON.parse(localStorage.getItem("user"));
      if (storedUserData && storedUserData.token) {
        setLoading(true);
        axios
          .get(`http://localhost:8082/api/v1/mother/get-location/${userId}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${AuthService.getToken()}`, // Correct template literal usage
            },
          })
          .then((response) => {
            const { latitude, longitude, address, userId, role } = response.data;
            if (latitude && longitude && address && userId && role) {
              setLocationData({ latitude, longitude, address, userId, role });
            } else {
              console.error("Incomplete location data received.");
              setLocationData(null);
              setError("Incomplete location data received.");
            }
          })
          .catch((error) => {
            console.error("Error fetching location data:", error);
            setError("Failed to load location data.");
          })
          .finally(() => setLoading(false));
      } else {
        console.error("No token found in stored user data.");
        setError("No token found. Please log in again.");
        setLoading(false);
        navigate("/signin");
      }
    } else {
      setError("User ID not found.");
      setLoading(false);
    }
  }, [userId, navigate]);

  // If there's an error or still loading
  if (loading) {
    return <div>Loading location data...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!locationData) {
    return <div>No location data available.</div>;
  }

  const { latitude, longitude, address } = locationData;

  const handleBackButtonClick = () => {
    navigate("/mother/dashboard");
  };

  const handleEditLocation = () => {
    navigate("/mother/edit-location");
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

      <h2 style={{ textAlign: "center", color: "#192A51", fontSize: "28px" }}>
        Your Location
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "30px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            height: "70vh",
            width: "73%",
            borderRadius: "10px",
            marginBottom: "20px",
            flexBasis: "65%",
            minWidth: "300px",
          }}
        >
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyCcc5SDrNKsnCoo_hUNN9r0fvv-SJws7s8",
            }}
            center={{ lat: latitude, lng: longitude }}
            zoom={14}
            draggable={false}
            scrollwheel={false}
          >
            <Marker lat={latitude} lng={longitude} />
          </GoogleMapReact>
        </div>

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
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <div>
            <h3 style={{ color: "#333", marginBottom: "10px" }}>
              <strong>Confirmed Location</strong>
            </h3>
            <p
              style={{
                whiteSpace: "pre-line",
                lineHeight: "1.6",
                paddingBottom: "20px",
                // borderBottom: "1px solid #bbb",
              }}
            >
              {address
                ? address.split(",").map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))
                : "No address available"}
            </p>
          </div>

          {/* <button
            onClick={handleEditLocation}
            style={{
              padding: "10px 20px",
              backgroundColor: "#192A51",
              color: "white",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
              position: "absolute",
              bottom: "30px",
              right: "30px",
            }}
          >
            Edit Location
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default LocationConfirmed;
