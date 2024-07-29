import React from "react";
import { Modal, Typography, Button } from "antd";

const ProfileDetailsPopup = ({ visible, profile, onCancel }) => {
  if (!profile) return null;

  return (
    <Modal visible={visible} onCancel={onCancel} footer={null}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <Typography variant="h6" style={{ marginBottom: "30px", fontWeight: "bold", fontSize: "20px", alignSelf: "flex-start" }}>
          {profile.type === "doctor" ? "Doctor's Details" : "Midwife Details"}
        </Typography>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start" }}>
          <img src="/mnt/data/image.png" alt="Profile" style={{ width: "150px", height: "150px", marginRight: "20px" }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="body1" style={{ fontSize: "14px" }}><b>Full name:</b> {profile.name}</Typography>
            <Typography variant="body1" style={{ fontSize: "14px" }}><b>Age:</b> {profile.age}</Typography>
            <Typography variant="body1" style={{ fontSize: "14px" }}><b>DOB:</b> {profile.dob}</Typography>
            <Typography variant="body1" style={{ fontSize: "14px" }}><b>Telephone:</b> {profile.telephone}</Typography>
            <Typography variant="body1" style={{ fontSize: "14px" }}><b>Address:</b> {profile.address}</Typography>
            <Typography variant="body1" style={{ fontSize: "14px" }}><b>Assigned Clinics:</b> {profile.clinics}</Typography>
            <Typography variant="body1" style={{ fontSize: "14px" }}><b>Registered Date:</b> {profile.registeredDate}</Typography>
            <Typography variant="body1" style={{ fontSize: "14px" }}><b>Experience:</b> {profile.experience}</Typography>
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
