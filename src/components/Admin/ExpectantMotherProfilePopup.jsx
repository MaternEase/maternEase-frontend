import React from "react";
import { Modal, Typography, Button, Row, Col } from "antd";

const ExpectantMotherProfilePopup = ({ visible, profile, onCancel }) => {
  const dummyProfile = {
    name: "Wasanthi Niramala",
    registrationNumber: "EM12",
    age: 29,
    address: "123 Temple St, Athapaththukanda, Mathara",
    telephone: "+1234567890",
    condition: "Non-risky",
    husbandName: "Wasantha Kumara",
  };

  const displayProfile = dummyProfile;

  return (
    <Modal 
      visible={visible} 
      onCancel={onCancel} 
      footer={null}
      centered
    >
      <div style={{ padding: "20px" }}>
        <Typography.Title level={4} style={{ marginBottom: "30px", color: "#967aa1" }}>
        {displayProfile.name} - Details
        </Typography.Title>
        <Row gutter={[32]}>
          <Col span={24}>
            <Typography.Text strong>Full name:</Typography.Text>
            <Typography.Paragraph>{displayProfile.name}</Typography.Paragraph>
          </Col>
          <Col span={24}>
            <Typography.Text strong>Registration Number:</Typography.Text>
            <Typography.Paragraph>{displayProfile.registrationNumber}</Typography.Paragraph>
          </Col>
          <Col span={24}>
            <Typography.Text strong>Age:</Typography.Text>
            <Typography.Paragraph>{displayProfile.age}</Typography.Paragraph>
          </Col>
          <Col span={24}>
            <Typography.Text strong>Address:</Typography.Text>
            <Typography.Paragraph>{displayProfile.address}</Typography.Paragraph>
          </Col>
          <Col span={24}>
            <Typography.Text strong>Telephone:</Typography.Text>
            <Typography.Paragraph>{displayProfile.telephone}</Typography.Paragraph>
          </Col>
          <Col span={24}>
            <Typography.Text strong>Condition:</Typography.Text>
            <Typography.Paragraph>{displayProfile.condition}</Typography.Paragraph>
          </Col>
          <Col span={24}>
            <Typography.Text strong>Husband's Name:</Typography.Text>
            <Typography.Paragraph>{displayProfile.husbandName}</Typography.Paragraph>
          </Col>
        </Row>
        {/* <Button 
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
        </Button> */}
      </div>
    </Modal>
  );
};

export default ExpectantMotherProfilePopup;
