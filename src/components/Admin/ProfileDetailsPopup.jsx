import React from "react";
import { Modal, Typography, Row, Col, Button } from "antd";

const ProfileDetailsPopup = ({ visible, profile, onCancel }) => {
  // Dummy data for demonstration purposes
  const dummyProfile = {
    type: "midwife", // or "midwife"
    name: "Wasanthi Perera",
    age: 45,
    dob: "1979-05-15",
    telephone: "+1234567890",
    address: "123 Temple St, Bamunugama, Mathara",
    clinics: "Athapaththukanda, Bamunugama",
    registeredDate: "2020-01-01",
    experience: "12 years",
  };

  // Use the profile data if available, otherwise use the dummy data
  const displayProfile = dummyProfile;

  return (
    <Modal visible={visible} onCancel={onCancel} footer={null} centered>
      <div style={{ padding: "20px" }}>
        <Typography.Title level={4} style={{ marginBottom: "30px", color: "#967aa1" }}>
          {displayProfile.type === "doctor" ? "Doctor's Details" : "Midwife Details"}
        </Typography.Title>
        <Row gutter={[32]}>
          <Col span={24}>
            <Typography.Text strong>Full Name:</Typography.Text>
            <Typography.Paragraph>{displayProfile.name}</Typography.Paragraph>
          </Col>
          <Col span={24}>
            <Typography.Text strong>Age:</Typography.Text>
            <Typography.Paragraph>{displayProfile.age}</Typography.Paragraph>
          </Col>
          <Col span={24}>
            <Typography.Text strong>DOB:</Typography.Text>
            <Typography.Paragraph>{displayProfile.dob}</Typography.Paragraph>
          </Col>
          <Col span={24}>
            <Typography.Text strong>Telephone:</Typography.Text>
            <Typography.Paragraph>{displayProfile.telephone}</Typography.Paragraph>
          </Col>
          <Col span={24}>
            <Typography.Text strong>Address:</Typography.Text>
            <Typography.Paragraph>{displayProfile.address}</Typography.Paragraph>
          </Col>
          <Col span={24}>
            <Typography.Text strong>Assigned Clinics:</Typography.Text>
            <Typography.Paragraph>{displayProfile.clinics}</Typography.Paragraph>
          </Col>
          <Col span={24}>
            <Typography.Text strong>Registered Date:</Typography.Text>
            <Typography.Paragraph>{displayProfile.registeredDate}</Typography.Paragraph>
          </Col>
          <Col span={24}>
            <Typography.Text strong>Experience:</Typography.Text>
            <Typography.Paragraph>{displayProfile.experience}</Typography.Paragraph>
          </Col>
        </Row>
        <Button 
          style={{ 
            backgroundColor: "#967aa1", 
            color: "#fff", 
            marginTop: "20px" 
          }}
          onClick={() => {
            // Handle the edit button click
          }}
        >
          Edit
        </Button>
      </div>
    </Modal>
  );
};

export default ProfileDetailsPopup;
