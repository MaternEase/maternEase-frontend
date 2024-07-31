import React from "react";
import { Modal, Typography, Button } from "antd";

const ProfileDetailsPopup = ({ visible, profile, onCancel }) => {
  // Dummy data for demonstration purposes
  const dummyProfile = {
    type: "doctor", // or "midwife"
    name: "Dr. Jane Doe",
    age: 45,
    dob: "1979-05-15",
    telephone: "+1234567890",
    address: "123 Health St, Wellness City, Country",
    clinics: "MaternEase Clinic, Healthy Start Clinic",
    registeredDate: "2020-01-01",
    experience: "20 years",
  };

  // Use the profile data if available, otherwise use the dummy data
  const displayProfile = dummyProfile;

  return (
    <Modal visible={visible} onCancel={onCancel} footer={null}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <Typography variant="h6" style={{ marginBottom: "30px", fontWeight: "bold", fontSize: "20px", alignSelf: "flex-start" }}>
          {displayProfile.type === "doctor" ? "Doctor's Details" : "Midwife Details"}
        </Typography>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start" }}>
          <img src="/mnt/data/image.png" alt="Profile" style={{ width: "150px", height: "150px", marginRight: "20px" }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="body1" style={{ fontSize: "14px" }}><b>Full name:</b> {displayProfile.name}</Typography>
            <Typography variant="body1" style={{ fontSize: "14px" }}><b>Age:</b> {displayProfile.age}</Typography>
            <Typography variant="body1" style={{ fontSize: "14px" }}><b>DOB:</b> {displayProfile.dob}</Typography>
            <Typography variant="body1" style={{ fontSize: "14px" }}><b>Telephone:</b> {displayProfile.telephone}</Typography>
            <Typography variant="body1" style={{ fontSize: "14px" }}><b>Address:</b> {displayProfile.address}</Typography>
            <Typography variant="body1" style={{ fontSize: "14px" }}><b>Assigned Clinics:</b> {displayProfile.clinics}</Typography>
            <Typography variant="body1" style={{ fontSize: "14px" }}><b>Registered Date:</b> {displayProfile.registeredDate}</Typography>
            <Typography variant="body1" style={{ fontSize: "14px" }}><b>Experience:</b> {displayProfile.experience}</Typography>
          </div>
        </div>
        <Button style={{ backgroundColor: "#967aa1", color: "#fff", marginTop: "10px", alignSelf: "flex-start" }}>
          Edit
        </Button>
      </div>
    </Modal>
  );
};

export default ProfileDetailsPopup;
