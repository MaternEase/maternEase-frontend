import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";

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

const Location = () => {
  const defaultProps = {
    center: {
      lat: 6.927079, // Latitude of Colombo, Sri Lanka
      lng: 79.861244, // Longitude of Colombo, Sri Lanka
    },
    zoom: 10,
  };

  const [center, setCenter] = useState(defaultProps.center); // Map center
  const [zoom, setZoom] = useState(defaultProps.zoom); // Zoom level
  const [locationInput, setLocationInput] = useState(""); // User input for location
  const [markerPosition, setMarkerPosition] = useState(defaultProps.center); // Temporary marker position
  const [confirmedPosition, setConfirmedPosition] = useState(defaultProps.center); // Confirmed marker position
  const [confirmedAddress, setConfirmedAddress] = useState(""); // Confirmed address
  const [address, setAddress] = useState(""); // Address for temporary marker position
  const [isLoadingAddress, setIsLoadingAddress] = useState(false); // Loading state for address

  // Fetch address for temporary marker position
  useEffect(() => {
    fetchAddress(markerPosition.lat, markerPosition.lng);
  }, [markerPosition]);

  const handleSearch = () => {
    if (!locationInput) {
      alert("Please enter a location");
      return;
    }

    // Fetch geolocation data using Google Geocoding API
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        locationInput
      )}&key=AIzaSyCcc5SDrNKsnCoo_hUNN9r0fvv-SJws7s8`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "OK") {
          const { lat, lng } = data.results[0].geometry.location;
          const newLocation = { lat, lng };

          setMarkerPosition(newLocation); // Update marker position
          setCenter(newLocation); // Center map on searched location
        } else {
          alert("Location not found. Please try a different address.");
        }
      })
      .catch((error) => {
        console.error("Error fetching geolocation data:", error);
        alert("An error occurred while searching for the location.");
      });
  };

  const handleMapClick = ({ lat, lng }) => {
    const newPosition = { lat, lng };
    setMarkerPosition(newPosition); // Update marker position on click
  };

  // Reverse geocoding to get the address based on coordinates
  const fetchAddress = (lat, lng) => {
    setIsLoadingAddress(true);
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyCcc5SDrNKsnCoo_hUNN9r0fvv-SJws7s8`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "OK") {
          setAddress(data.results[0].formatted_address || "Address not available");
        } else {
          setAddress("Address not found");
        }
      })
      .catch((error) => {
        console.error("Error fetching address data:", error);
        setAddress("Error fetching address");
      })
      .finally(() => setIsLoadingAddress(false));
  };

  const handleConfirm = () => {
    // Confirm the marker position and address
    setConfirmedPosition(markerPosition);
    setConfirmedAddress(address);
    alert(
      `Location confirmed:\nLatitude: ${markerPosition.lat}, Longitude: ${markerPosition.lng}\nAddress: ${address || "Address not available"}`
    );
  };

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          value={locationInput}
          onChange={(e) => setLocationInput(e.target.value)}
          placeholder="Enter a location (e.g., Colombo, Sri Lanka)"
          style={{ width: "300px", padding: "5px", marginRight: "5px" }}
        />
        <button onClick={handleSearch} style={{ padding: "5px 10px" }}>
          Search
        </button>
      </div>
      <div style={{ height: "70vh", width: "100%", marginBottom: "10px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCcc5SDrNKsnCoo_hUNN9r0fvv-SJws7s8" }}
          center={center} // Map center
          zoom={zoom} // Zoom level
          onClick={handleMapClick} // Allow marker to be updated on map click
        >
          <Marker
            lat={markerPosition.lat} // Temporary marker position
            lng={markerPosition.lng}
          />
        </GoogleMapReact>
      </div>
      <div>
        <p>
          <strong>Temporary Coordinates:</strong> Latitude: {markerPosition.lat}, Longitude: {markerPosition.lng}
        </p>
        <p>
          <strong>Temporary Address:</strong>{" "}
          {isLoadingAddress ? "Fetching address..." : address || "No address selected yet"}
        </p>
        <p>
          <strong>Confirmed Coordinates:</strong> Latitude: {confirmedPosition.lat}, Longitude: {confirmedPosition.lng}
        </p>
        <p>
          <strong>Confirmed Address:</strong> {confirmedAddress || "No address confirmed yet"}
        </p>
      </div>
      <button
        onClick={handleConfirm}
        style={{
          padding: "10px 15px",
          backgroundColor: "green",
          color: "white",
        }}
      >
        Confirm Location
      </button>
    </div>
  );
};

export default Location;
