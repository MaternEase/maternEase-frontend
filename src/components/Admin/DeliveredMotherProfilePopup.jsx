import React from "react";
import { Modal, Typography, Button } from "antd";

const DeliveredMotherProfilePopup = ({ visible, profile, onCancel }) => {
  const dummyProfile = {
    name: "Anna Smith",
    registrationNumber: "DM654321",
    age: 34,
    address: "456 Family Lane, Wellness City, Country",
    telephone: "+1234567890",
    condition: "Risky",
    husbandName: "James Smith",
    deliveryDate: "2023-01-15",
  };

  const displayProfile = dummyProfile;

  return (
    <Modal visible={visible} onCancel={onCancel} footer={null}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <Typography variant="h6" style={{ marginBottom: "30px", fontWeight: "bold", fontSize: "20px", alignSelf: "flex-start" }}>
          Delivered Mother's Details
        </Typography>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="body1" style={{ fontSize: "14px" }}><b>Full name:</b> {displayProfile.name}</Typography>
          <Typography variant="body1" style={{ fontSize: "14px" }}><b>Registration Number:</b> {displayProfile.registrationNumber}</Typography>
          <Typography variant="body1" style={{ fontSize: "14px" }}><b>Age:</b> {displayProfile.age}</Typography>
          <Typography variant="body1" style={{ fontSize: "14px" }}><b>Address:</b> {displayProfile.address}</Typography>
          <Typography variant="body1" style={{ fontSize: "14px" }}><b>Telephone:</b> {displayProfile.telephone}</Typography>
          <Typography variant="body1" style={{ fontSize: "14px" }}><b>Condition:</b> {displayProfile.condition}</Typography>
          <Typography variant="body1" style={{ fontSize: "14px" }}><b>Husband's Name:</b> {displayProfile.husbandName}</Typography>
          <Typography variant="body1" style={{ fontSize: "14px" }}><b>Delivered Date:</b> {displayProfile.deliveryDate}</Typography>
        </div>
        <Button style={{ backgroundColor: "#967aa1", color: "#fff", marginTop: "10px", alignSelf: "flex-start" }}>
          Edit
        </Button>
      </div>
    </Modal>
  );
};

export default DeliveredMotherProfilePopup;
