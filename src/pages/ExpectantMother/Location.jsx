import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import SearchIcon from "@mui/icons-material/Search";
import {
  Tooltip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
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
  const [confirmedPosition, setConfirmedPosition] = useState(
    defaultProps.center
  ); // Confirmed marker position
  const [confirmedAddress, setConfirmedAddress] = useState(""); // Confirmed address
  const [address, setAddress] = useState(""); // Address for temporary marker position
  const [isLoadingAddress, setIsLoadingAddress] = useState(false); // Loading state for address

  // Dialog state
  const [openDialog, setOpenDialog] = useState(false);

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
          setAddress(
            data.results[0].formatted_address || "Address not available"
          );
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

    // Show browser notification
    if (Notification.permission === "granted") {
      new Notification("Location Set", {
        body: `Location confirmed: ${address}`,
      });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("Location Set", {
            body: `Location confirmed: ${address}`,
          });
        }
      });
    }

    // Close the dialog
    setOpenDialog(false);

    // Redirect to a new page that shows the selected location
    navigate("/mother/location", {
      state: { confirmedPosition: markerPosition, confirmedAddress: address }, // Use the correct address here
    });
  };

  const handleDialogClose = (confirm) => {
    if (confirm) {
      handleConfirm();
    } else {
      setOpenDialog(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", padding: "20px" }}>
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            backgroundColor: "#967aa1",
            borderRadius: "10px",
            padding: "6px 10px",
          }}
        >
          <input
            type="text"
            value={locationInput}
            onChange={(e) => setLocationInput(e.target.value)}
            placeholder="Enter a location"
            style={{
              width: "300px",
              padding: "10px",
              borderRadius: "10px",
              marginRight: "10px",
              backgroundColor: "#fff",
            }}
          />
          <Tooltip title="Search" placement="top">
            <SearchIcon
              onClick={handleSearch}
              style={{
                color: "#192A5",
                fontSize: "40px",
                cursor: "pointer",
                backgroundColor: "#D5C6E0",
                borderRadius: "50%",
                padding: "10px",
              }}
            />
          </Tooltip>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap", // Allow items to wrap
        }}
      >
        {/* Map Div */}
        <div
          style={{
            height: "70vh",
            width: "70%",
            marginBottom: "20px",
            borderRadius: "10px",
          }}
        >
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyCcc5SDrNKsnCoo_hUNN9r0fvv-SJws7s8",
            }}
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

        {/* Details Div */}
        <div
          style={{
            height: "70vh",
            width: "28%",
            backgroundColor: "#D5C6E0",
            borderRadius: "10px",
            padding: "20px",
            marginLeft: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            flex: "1 1", // Ensure it takes full width on small screens
          }}
        >
          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ color: "#192A51", marginBottom: "10px" }}>
              How to Select Your Location
            </h3>
            <p style={{ color: "#333", fontSize: "14px", lineHeight: "1.6" }}>
              Please search your location and click on the map to select the
              exact location. Use the zoom in/out buttons to refine your
              selection. Once you've selected the correct location, click on the
              marker and click the "Confirm Location" button to save your
              choice.
            </p>
          </div>

          {/* Temporary Location */}
          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ color: "#192A51", marginBottom: "10px" }}>
              Selected Location
            </h4>
            <p>
              {isLoadingAddress
                ? "Loading address..."
                : address || "Address not available"}
            </p>
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "50px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              onClick={() => setOpenDialog(true)}
              style={{
                padding: "10px 20px",
                borderRadius: "10px",
                backgroundColor: "#192A51",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
                transition: "background-color 0.3s ease",
              }}
            >
              Confirm Location
            </button>
          </div>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        PaperProps={{
          style: {
            backgroundColor: "#f9f9f9", // Light background for the dialog
            borderRadius: "10px", // Rounded corners
            padding: "30px", // Extra padding for the content
          },
        }}
      >
        <DialogTitle
          style={{
            backgroundColor: "#192A51",
            color: "#fff",
            textAlign: "center",
            padding: "10px 0",
            borderRadius: "10px", 
          }}
        >
          Confirm Location
        </DialogTitle>
        <DialogContent
          style={{
            padding: "20px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              marginBottom: "20px",
            }}
          >
            Are you sure you want to confirm this location?
          </p>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "500",
              marginBottom: "20px",
            }}
          >
            <strong>{address || "No address selected yet"}</strong>
          </p>
        </DialogContent>
        <DialogActions
          style={{
            justifyContent: "right",
            padding: "8px 0",
          }}
        >
          <Button
            onClick={() => handleDialogClose(false)}
            style={{
              backgroundColor: "#e30202",
              color: "#fff",
              borderRadius: "10px",
              padding: "10px 20px",
              transition: "background-color 0.3s ease",
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => handleDialogClose(true)}
            style={{
              backgroundColor: "#192A51",
              color: "#fff",
              borderRadius: "10px",
              padding: "10px 20px",
              marginLeft: "20px",
              transition: "background-color 0.3s ease",
            }}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Location;
