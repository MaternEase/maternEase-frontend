import React, { useState, useEffect } from "react";
import { Modal, Form, Select, Typography, Button, message } from "antd";

const { Option } = Select;

const AssignStaffPopup = ({
  visible,
  onCancel,
  clinic,
  unassignedMidwives,
  onAssign,
}) => {
  const [form] = Form.useForm();
  const [maxSelectableMidwives, setMaxSelectableMidwives] = useState(3);

  useEffect(() => {
    // Calculate the number of midwives that can be selected
    const alreadyAssignedCount = clinic.midwives.length;
    const remainingSlots = 3 - alreadyAssignedCount;
    setMaxSelectableMidwives(remainingSlots);
  }, [clinic]);

  const handleOk = (values) => {
    const { midwives } = values;

    // Check if selected midwives are within allowed limits
    const totalMidwives = clinic.midwives.length + midwives.length;
    if (totalMidwives < 2 || totalMidwives > 3) {
      message.error("The total number of midwives must be 2 or 3.");
      return;
    }

    console.log("Assigned Midwives:", values);
    // Logic to assign midwives to clinic goes here
    message.success("Midwives Assigned Successfully!");
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
          Assign Midwives to {clinic.name}
        </Typography.Title>
      }
    >
      <Form form={form} layout="vertical" onFinish={handleOk}>
        <Typography.Paragraph strong>
          Already Assigned Midwives
        </Typography.Paragraph>
        <Typography.Paragraph>
          {clinic.midwives.length > 0
            ? clinic.midwives.join(", ")
            : "None"}
        </Typography.Paragraph>

        <Form.Item
          label={<span style={{ fontWeight: "bold" }}>Select Midwives</span>}
          name="midwives"
          rules={[
            { 
              required: true, 
              message: `Please select ${maxSelectableMidwives === 1 ? 'one midwife' : 'midwives'}` 
            }
          ]}
        >
          <Select
            mode="multiple"
            placeholder={`Select ${maxSelectableMidwives === 1 ? 'one midwife' : 'midwives'}`}
            maxTagCount={maxSelectableMidwives}
            filterOption={(input, option) =>
              option.children.toLowerCase().includes(input.toLowerCase())
            }
          >
            {unassignedMidwives.map((midwife) => (
              <Option 
                value={midwife.name} 
                key={midwife.name}
                disabled={midwife.clinics.length >= 3} // Disable if already assigned to 3 clinics
              >
                {midwife.name}
                {midwife.clinics.length > 0 && ` (Assigned to ${midwife.clinics.join(", ")})`}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Typography.Paragraph>
          {maxSelectableMidwives > 0 
            ? `You can select up to ${maxSelectableMidwives} more midwife${maxSelectableMidwives > 1 ? 's' : ''}.`
            : "This clinic already has the maximum number of midwives assigned."}
        </Typography.Paragraph>
      </Form>
    </Modal>
  );
};

export default AssignStaffPopup;