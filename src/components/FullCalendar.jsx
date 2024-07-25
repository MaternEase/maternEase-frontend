import React, { useState } from "react";
import {
  Calendar,
  Modal,
  Button,
  Form,
  Input,
  DatePicker,
  TimePicker,
  Select,
} from "antd";
import { LeftOutlined } from "@ant-design/icons";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import "../styles/components.css";

const { Option } = Select;

const EventBadge = ({ type, content }) => {
  return (
    <div className={`event-badge ${type}`}>
      <span className="dot"></span>
      <span className="content">{content}</span>
    </div>
  );
};

const NoticeCalendar = ({ backPath }) => {
  const navigate = useNavigate();

  const [isEventModalVisible, setIsEventModalVisible] = useState(false);
  const [isAddEventModalVisible, setIsAddEventModalVisible] = useState(false);
  const [events, setEvents] = useState({
    "2024-07-08": [
      { type: "child-clinic", content: "Child Clinic Appointment - Dr. Smith" },
      { type: "vaccination", content: "Vaccination - Polio" },
    ],
    "2024-07-10": [
      {
        type: "expectant-mother-clinic",
        content: "Expectant Mother Clinic - Dr. Johnson",
      },
      { type: "awareness-program", content: "Breastfeeding Awareness Program" },
    ],
    "2024-07-15": [
      { type: "home-visit", content: "Home Visit - Mrs. Brown" },
      { type: "child-clinic", content: "Child Clinic Appointment - Dr. White" },
      { type: "vaccination", content: "Vaccination - MMR" },
    ],
    "2024-07-20": [
      {
        type: "expectant-mother-clinic",
        content: "Expectant Mother Clinic - Dr. Lee",
      },
      { type: "home-visit", content: "Home Visit - Mr. Green" },
    ],
    "2024-07-25": [
      { type: "awareness-program", content: "Parenting Tips Workshop" },
    ],
  });
  const [currentDate, setCurrentDate] = useState(null); // Track the currently clicked date
  const [form] = Form.useForm(); // Create a form reference

  const getListData = (value) => {
    const dateKey = value.format("YYYY-MM-DD");
    return events[dateKey] || [];
  };

  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item, index) => (
          <li key={index} onClick={() => handleDateClick(value)}>
            <EventBadge type={item.type} content={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  const handleDateClick = (value) => {
    setCurrentDate(value); // Set the current date for the modal
    setIsEventModalVisible(true); // Show the Event Details modal
  };

  const handleAddEvent = (values) => {
    const dateKey = values.date.format("YYYY-MM-DD");
    const newEvent = {
      type: values.type,
      content: values.title,
    };

    setEvents((prevEvents) => {
      const updatedEvents = { ...prevEvents };
      if (!updatedEvents[dateKey]) {
        updatedEvents[dateKey] = [];
      }
      updatedEvents[dateKey].push(newEvent);
      return updatedEvents;
    });

    setIsAddEventModalVisible(false);
    form.resetFields(); // Reset the form fields after saving
  };

  const handleCancelAddEvent = () => {
    setIsAddEventModalVisible(false);
    form.resetFields(); // Reset the form fields when the modal is canceled
  };

  const handleBackButtonClick = () => {
    navigate(backPath); // Navigate to the dynamic back path
  };

  return (
    <div>
      <Button
        icon={<LeftOutlined />}
        onClick={handleBackButtonClick}
        style={{ marginBottom: 16, backgroundColor: "#f0f0f0", borderColor: "#f0f0f0", color: "#D5C6E0", borderRadius: "30px" }}
      >
      </Button>
      <h1 className="calendar-title">Calendar</h1>
      <div style={{ marginBottom: 16, marginTop: 16 }}>
        <Button
          type="primary"
          onClick={() => setIsAddEventModalVisible(true)}
          style={{ backgroundColor: "#967aa1", borderColor: "#967aa1" }}
        >
          Add Event
        </Button>
      </div>
      <Calendar dateCellRender={dateCellRender} onSelect={handleDateClick} />

      {/* Event Details Modal */}
      <Modal
        title={`Events on ${
          currentDate ? currentDate.format("YYYY-MM-DD") : ""
        }`}
        visible={isEventModalVisible}
        onCancel={() => setIsEventModalVisible(false)}
        footer={[
          <Button
            key="add"
            type="primary"
            onClick={() => {
              setIsEventModalVisible(false);
              setIsAddEventModalVisible(true);
            }}
            style={{ backgroundColor: "#967aa1", borderColor: "#967aa1" }}
          >
            Add Event
          </Button>,
          <Button key="close" onClick={() => setIsEventModalVisible(false)}>
            Close
          </Button>,
        ]}
        className="event-details-modal"
      >
        {currentDate && (
          <div className="event-details-content">
            {getListData(currentDate).length > 0 ? (
              getListData(currentDate).map((event, index) => (
                <div key={index} className={`event-item ${event.type}`}>
                  <span className="event-dot"></span>
                  <p className="event-text">{event.content}</p>
                </div>
              ))
            ) : (
              <p>No events for this date. <a onClick={() => setIsAddEventModalVisible(true)}> <b>Add a new event</b></a></p>
            )}
          </div>
        )}
      </Modal>

      {/* Add Event Modal */}
      <Modal
        title="New Event"
        visible={isAddEventModalVisible}
        onCancel={handleCancelAddEvent}
        footer={null}
        className="add-event-modal"
      >
        <Form form={form} onFinish={handleAddEvent} layout="vertical">
          <Form.Item
            name="title"
            label="Event Title"
            rules={[
              { required: true, message: "Please enter the event title" },
            ]}
          >
            <Input placeholder="Enter event title" />
          </Form.Item>
          <Form.Item
            name="date"
            label="Date"
            rules={[{ required: true, message: "Please select a date" }]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            name="type"
            label="Event Type"
            rules={[{ required: true, message: "Please select an event type" }]}
          >
            <Select placeholder="Select event type" style={{ width: "100%" }}>
              <Option value="child-clinic">Child Clinic</Option>
              <Option value="vaccination">Vaccination</Option>
              <Option value="expectant-mother-clinic">Expectant Mother Clinic</Option>
              <Option value="awareness-program">Awareness Program</Option>
              <Option value="home-visit">Home Visit</Option>
            </Select>
          </Form.Item>
          <Form.Item name="time" label="Time">
            <TimePicker style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea rows={4} placeholder="Enter event description" />
          </Form.Item>
          <Form.Item name="location" label="Location">
            <Input placeholder="Enter event location" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ backgroundColor: "#967aa1", borderColor: "#967aa1" }}
            >
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default NoticeCalendar;
