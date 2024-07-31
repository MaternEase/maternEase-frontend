import React, { useState, useEffect } from "react";
import { Modal, Form, Input, Select, Button, notification } from "antd";

const { Option } = Select;

const AssignMidwifePopup = ({ visible, onClose, midwifeDetails, onAssign }) => {
  const [selectedClinics, setSelectedClinics] = useState([]);

  useEffect(() => {
    if (midwifeDetails) {
      setSelectedClinics(midwifeDetails.assignedClinics || []);
    }
  }, [midwifeDetails]);

  const handleAssign = () => {
    if (midwifeDetails) {
      onAssign(midwifeDetails.key, selectedClinics);
      notification.success({
        message: 'Success',
        description: `Midwife ${midwifeDetails.name} has been assigned to selected clinics.`,
        placement: 'bottomRight',
      });
      onClose();
    }
  };

  // Ensure midwifeDetails is available before accessing its properties
  if (!midwifeDetails) {
    return null;
  }

  return (
    <Modal
      visible={visible}
      title={`Edit Midwife - ${midwifeDetails.name || 'N/A'}`}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose} style={{ marginLeft: 8 }}>
          Cancel
        </Button>,
        <Button
          key="assign"
          type="primary"
          style={{ backgroundColor: "#967aa1", borderColor: "#967aa1" }}
          onClick={handleAssign}
        >
          Assign
        </Button>,
      ]}
    >
      <Form layout="vertical">
        <Form.Item label="Registration Number">
          <Input value={midwifeDetails.id || 'N/A'} readOnly />
        </Form.Item>
        <Form.Item label="Name">
          <Input value={midwifeDetails.name || 'N/A'} readOnly />
        </Form.Item>
        <Form.Item label="Age">
          <Input value={midwifeDetails.age || 'N/A'} readOnly />
        </Form.Item>
        <Form.Item label="Registered Date">
          <Input value={midwifeDetails.date || 'N/A'} readOnly />
        </Form.Item>
        
        <Form.Item label="No of Assigned Clinics">
          <Input value={selectedClinics.length} readOnly />
        </Form.Item>
        
        <Form.Item label="Assigned Clinics">
          <Input value={selectedClinics.join(', ')} readOnly />
        </Form.Item>
        
        <Form.Item label="Available Clinics">
          <Select
            mode="multiple"
            value={selectedClinics}
            onChange={setSelectedClinics}
            style={{ width: "100%" }}
            placeholder="Select clinics to assign"
          >
            {midwifeDetails.availableClinics.map((clinic) => (
              <Option key={clinic} value={clinic}>
                {clinic}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AssignMidwifePopup;
