import React from "react";
import { Modal, Form, Select, Typography, Button, message } from "antd";

const { Option } = Select;

const AssignStaffPopup = ({
  visible,
  onCancel,
  clinic,
  unassignedDoctors,
  unassignedMidwives,
  onAssign,
}) => {
  const [form] = Form.useForm();

  const handleOk = (values) => {
    console.log("Assigned Staff:", values);
    // Logic to assign staff to clinic goes here
    message.success("Staff Assigned Successfully!");
    form.resetFields();
    onAssign();
  };

  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      footer={[
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <Button
            key="back"
            onClick={onCancel}
            style={{ color: "#967aa1", border: "none" }}
          >
            Cancel
          </Button>
          <Button
            key="submit"
            type="primary"
            onClick={() => form.submit()}
            style={{
              backgroundColor: "#967aa1",
              borderColor: "#967aa1",
              color: "#fff",
            }}
          >
            Assign
          </Button>
        </div>,
      ]}
      centered
      title={
        <Typography.Title level={4} style={{ color: "#967aa1" }}>
          Assign Staff to {clinic.name}
        </Typography.Title>
      }
    >
      <Form form={form} layout="vertical" onFinish={handleOk}>
        <Typography.Paragraph strong>
          Already Assigned Staff
        </Typography.Paragraph>
        <Typography.Paragraph>
          <b>Doctor:</b> {clinic.doctors.length > 0 ? clinic.doctors[0].name : "None"}
        </Typography.Paragraph>
        <Typography.Paragraph>
          <b>Midwives:</b>{" "}
          {clinic.midwives.length > 0
            ? clinic.midwives.map(midwife => midwife.name).join(", ")
            : "None"}
        </Typography.Paragraph>

        <Form.Item
          label={<span style={{ fontWeight: "bold" }}>Select Doctor</span>}
          name="doctor"
          rules={[{ required: true, message: "Please select a doctor" }]}
        >
          <Select placeholder="Select a doctor">
            {unassignedDoctors.map((doctor) => (
              <Option value={doctor.name} key={doctor.name}>
                {doctor.name}
                {doctor.clinics.length > 0 && ` (Assigned to ${doctor.clinics.join(", ")})`}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label={<span style={{ fontWeight: "bold" }}>Select Midwives</span>}
          name="midwives"
          rules={[{ required: true, message: "Please select at least one midwife" }]}
        >
          <Select mode="multiple" placeholder="Select midwives">
            {unassignedMidwives.map((midwife) => (
              <Option value={midwife.name} key={midwife.name}>
                {midwife.name}
                {midwife.clinics.length > 0 && ` (Assigned to ${midwife.clinics.join(", ")})`}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AssignStaffPopup;
