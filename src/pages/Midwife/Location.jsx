import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import { useNavigate } from "react-router-dom";
import { Button, List } from "antd";
import { ArrowBack } from "@mui/icons-material";
import axios from "axios";
import AuthService from "../../services/authService";

// Marker Component for Google Map
const Marker = ({ lat, lng, label, color }) => (
  <PersonPinCircleIcon
    style={{
      color: color || "blue", // Default to blue if no color is passed
      fontSize: "40px",
      transform: "translate(-50%, -100%)",
    }}
  />
);

const Location = () => {
    const navigate = useNavigate();
    const [mothers, setMothers] = useState([]);
    const [selectedMother, setSelectedMother] = useState(null);
    const [locationData, setLocationData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [userLocation, setUserLocation] = useState(null); // State for user's live location
  
    // Fetch the list of mothers
    useEffect(() => {
      setLoading(true);
      axios
        .get("http://localhost:8082/api/v1/midwife/get-all-mothers", {
          headers: {
            Authorization: `Bearer ${AuthService.getToken()}`,
          },
        })
        .then((response) => {
          setMothers(response.data);
        })
        .catch((error) => {
          console.error("Error fetching mothers list:", error);
          setError("Failed to load mothers list.");
        })
        .finally(() => setLoading(false));
  
      // Get the user's live location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation({ latitude, longitude });
          },
          (error) => {
            console.error("Error getting live location:", error);
            alert("Failed to get live location.");
          }
        );
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    }, []);
  
    // Fetch selected mother's location
    const fetchMotherLocation = (motherId) => {
      setLoading(true);
      axios
        .get(`http://localhost:8082/api/v1/mother/get-location/${motherId}`, {
          headers: {
            Authorization: `Bearer ${AuthService.getToken()}`,
          },
        })
        .then((response) => {
          const { latitude, longitude, address } = response.data;
  
          if (!latitude || !longitude) {
            alert("Location data not found for the selected mother.");
            setLocationData(null);
          } else {
            setLocationData({ latitude, longitude, address });
            setSelectedMother(motherId); // Set the selected mother to trigger map re-render
          }
        })
        .catch((error) => {
          console.error("Error fetching location data:", error);
          alert("Failed to load location data.");
        })
        .finally(() => setLoading(false));
    };
  
    const handleBackButtonClick = () => {
      navigate("/midwife/dashboard");
    };
  
    // Compute the center of the map based on available locations
    const getMapCenter = () => {
      if (locationData && userLocation) {
        // Use average position for better map centering when both locations exist
        return {
          lat: (locationData.latitude + userLocation.latitude) / 2,
          lng: (locationData.longitude + userLocation.longitude) / 2,
        };
      }
      if (locationData) return { lat: locationData.latitude, lng: locationData.longitude };
      if (userLocation) return { lat: userLocation.latitude, lng: userLocation.longitude };
      return { lat: 0, lng: 0 }; // Default center if no location is available
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
        />
  
        <h2 style={{ textAlign: "center", color: "#192A51", fontSize: "24px" }}>
          Mother's Location
        </h2>
  
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
  
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
          <div
            style={{
              width: "30%",
              borderRadius: "10px",
              padding: "20px",
              background: "#f5f5f5",
            }}
          >
            <h3 style={{ color: "#333", marginBottom: "20px" }}>Select a Mother:</h3>
            <List
              dataSource={mothers}
              renderItem={(mother) => (
                <List.Item
                  onClick={() => {
                    fetchMotherLocation(mother.id); // Fetch and set the mother's location
                    alert(
                      `Mother: ${mother.fullName}\nContact: ${mother.contactNo}\nAddress: ${
                        mother.address || "No address available"
                      }`
                    );
                  }}
                  style={{
                    cursor: "pointer",
                    padding: "15px 20px",
                    marginBottom: "10px",
                    background: mother.id === selectedMother ? "#D5C6E0" : "#f9f9f9",
                    borderRadius: "8px",
                    transition: "background-color 0.3s",
                    color: "#333",
                    fontWeight: "bold",
                    border: "1px solid #ccc",
                  }}
                >
                  <div style={{ fontSize: "16px" }}>{mother.fullName || "Unnamed Mother"}</div>
                  <div style={{ fontSize: "14px", color: "#666" }}>{mother.contactNo || "No contact available"}</div>
                </List.Item>
              )}
            />
          </div>
  
          <div
            style={{
              width: "65%",
              height: "70vh",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            {userLocation ? (
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyCcc5SDrNKsnCoo_hUNN9r0fvv-SJws7s8",
                }}
                center={getMapCenter()}
                zoom={14}
                draggable={false}
                scrollwheel={false}
              >
                {/* Marker for selected mother's location (Red) */}
                {locationData && (
                  <Marker
                    lat={locationData.latitude}
                    lng={locationData.longitude}
                    label="Mother's location"
                    color="red" // Red for the mother's location
                  />
                )}
                {/* Marker for user's live location (Blue) */}
                {userLocation && (
                  <Marker
                    lat={userLocation.latitude}
                    lng={userLocation.longitude}
                    label="Your location"
                    color="blue" // Blue for the user's location
                  />
                )}
              </GoogleMapReact>
            ) : (
              <div style={{ textAlign: "center", padding: "20px", color: "#888" }}>
                Select a mother or allow location access to view your live location.
              </div>
            )}
          </div>
        </div>
  
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            background: "#f0f0f0",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          {locationData ? (
            <p style={{ fontSize: "18px", color: "#000" }}>
              <strong>Address:</strong> {locationData.address}
            </p>
          ) : (
            <p style={{ fontSize: "18px", color: "#888" }}>No address available</p>
          )}
        </div>
      </div>
    );
  };
  

export default Location;
