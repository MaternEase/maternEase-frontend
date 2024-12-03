import React, { useState } from "react";
import { Modal, Form, Input, Button, DatePicker, Select, notification } from "antd";
import moment from "moment";

const { Option } = Select;

const RegisterStaffPopup = ({ visible, onClose, onSubmit }) => {
  const [form] = Form.useForm();
  const [dob, setDob] = useState(null);
  const [age, setAge] = useState(null);

  // Automatically fill the age based on DOB
  const handleDobChange = (date) => {
    if (date) {
      setDob(date);
      const age = moment().diff(date, 'years');
      setAge(age);
    } else {
      setDob(null);
      setAge(null);
    }
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        // Add registered date automatically
        values.registeredDate = moment().format('YYYY-MM-DD');
        values.age = age; // Include age in form values
        form.resetFields();
        onSubmit(values);
        notification.success({
          message: 'Success',
          description: 'New Staff Member has been registered successfully.',
          placement: 'bottomRight',
        });
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
    <Modal
      title="Register New Staff Member"
      visible={visible}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose} style={{ marginRight: 8 }}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={handleOk}
          style={{ backgroundColor: "#967aa1", borderColor: "#967aa1" }}
        >
          Submit
        </Button>,
      ]}
      bodyStyle={{ padding: '16px 24px' }} // Adjust padding if needed
      footerStyle={{ textAlign: 'start' }} // Align buttons to the start
      form={form} // Bind form instance to modal
    >
      <Form
        form={form}
        layout="vertical"
        name="register_staff_form"
        initialValues={{
          registeredDate: moment().format('YYYY-MM-DD') // Set default value for registeredDate
        }}
      >
        <Form.Item
          name="fullName"
          label="Full Name"
          rules={[{ required: true, message: "Please enter the full name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="role"
          label="Role"
          rules={[{ required: true, message: "Please select a role!" }]}
        >
          <Select placeholder="Select role">
            <Option value="midwife">Midwife</Option>
            <Option value="doctor">Doctor</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: "Please enter a valid email!" }, { type: 'email', message: 'Please enter a valid email!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ required: true, message: "Please select the gender!" }]}
        >
          <Select placeholder="Select gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="dob"
          label="Date of Birth"
          rules={[{ required: true, message: "Please select date of birth!" }]}
        >
          <DatePicker onChange={handleDobChange} format="YYYY-MM-DD" />
        </Form.Item>
        <Form.Item
          name="nic"
          label="NIC"
          rules={[{ required: true, message: "Please enter the NIC!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="address"
          label="Address"
          rules={[{ required: true, message: "Please enter the address!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="telephone"
          label="Telephone"
          rules={[{ required: true, message: "Please enter the telephone number!" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default RegisterStaffPopup;
