import React from "react";
import { Modal, Typography, Button } from "antd";

const ChildProfilePopup = ({ visible, profile, onCancel }) => {
  const dummyProfile = {
    name: "Tommy Brown",
    registrationNumber: "CH789012",
    age: 5,
    address: "789 Kids Ave, Wellness City, Country",
    telephone: "+1234567890",
    condition: "Non-risky",
    guardianName: "Sarah Brown",
  };

  const displayProfile = dummyProfile;

  return (
    <Modal visible={visible} onCancel={onCancel} footer={null}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <Typography variant="h6" style={{ marginBottom: "30px", fontWeight: "bold", fontSize: "20px", alignSelf: "flex-start" }}>
          Child's Details
        </Typography>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="body1" style={{ fontSize: "14px" }}><b>Full name:</b> {displayProfile.name}</Typography>
          <Typography variant="body1" style={{ fontSize: "14px" }}><b>Registration Number:</b> {displayProfile.registrationNumber}</Typography>
          <Typography variant="body1" style={{ fontSize: "14px" }}><b>Age:</b> {displayProfile.age}</Typography>
          <Typography variant="body1" style={{ fontSize: "14px" }}><b>Address:</b> {displayProfile.address}</Typography>
          <Typography variant="body1" style={{ fontSize: "14px" }}><b>Telephone:</b> {displayProfile.telephone}</Typography>
          <Typography variant="body1" style={{ fontSize: "14px" }}><b>Condition:</b> {displayProfile.condition}</Typography>
          <Typography variant="body1" style={{ fontSize: "14px" }}><b>Guardian's Name:</b> {displayProfile.guardianName}</Typography>
        </div>
        <Button style={{ backgroundColor: "#967aa1", color: "#fff", marginTop: "10px", alignSelf: "flex-start" }}>
          Edit
        </Button>
      </div>
    </Modal>
  );
};

export default ChildProfilePopup;