import React, { useState } from 'react';
import { Calendar, Badge, Modal, Button, Form, Input, DatePicker, TimePicker } from 'antd';
import moment from 'moment';
import '../styles/components.css';

const NoticeCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isEventModalVisible, setIsEventModalVisible] = useState(false);
  const [isAddEventModalVisible, setIsAddEventModalVisible] = useState(false);
  const [events, setEvents] = useState({
    '2024-07-08': [
      { type: 'warning', content: 'This is a warning event.' },
      { type: 'success', content: 'This is a usual event.' }
    ],
    '2024-07-10': [
      { type: 'warning', content: 'This is a warning event.' },
      { type: 'success', content: 'This is a usual event.' },
      { type: 'error', content: 'This is an error event.' }
    ],
    '2024-07-15': [
      { type: 'warning', content: 'This is a warning event' },
      { type: 'success', content: 'This is a very long usual event...' },
      { type: 'error', content: 'This is an error event 1.' },
      { type: 'error', content: 'This is an error event 2.' },
      { type: 'error', content: 'This is an error event 3.' },
      { type: 'error', content: 'This is an error event 4.' }
    ]
  });

  const getListData = (value) => {
    const dateKey = value.format('YYYY-MM-DD');
    return events[dateKey] || [];
  };

  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item, index) => (
          <li key={index}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  const handleDateSelect = (value) => {
    setSelectedDate(value);
    setIsEventModalVisible(true);
  };

  const handleAddEvent = (values) => {
    const dateKey = values.date.format('YYYY-MM-DD');
    const newEvent = {
      type: 'success',
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
  };

  const handlePanelChange = () => {
    // Open the add event modal when the panel (month or year) changes
    setIsAddEventModalVisible(true);
  };

  return (
    <div>
      <div style={{ marginBottom: 16, marginTop: 16 }}>
        <Button 
          type="primary" 
          onClick={() => setIsAddEventModalVisible(true)}
          style={{ backgroundColor: '#967aa1', borderColor: '#967aa1' }}
        >
          Add Event
        </Button>
      </div>
      <Calendar
        dateCellRender={dateCellRender}
        onSelect={handleDateSelect}
        onPanelChange={handlePanelChange}
      />
      
      {/* Event Details Modal */}
      <Modal
        title={`Events on ${selectedDate ? selectedDate.format('YYYY-MM-DD') : ''}`}
        visible={isEventModalVisible}
        onCancel={() => setIsEventModalVisible(false)}
        footer={[
          <Button key="add" type="primary" onClick={() => { setIsEventModalVisible(false); setIsAddEventModalVisible(true); }} style={{ backgroundColor: '#967aa1', borderColor: '#967aa1' }}>
            Add Event
          </Button>,
          <Button key="close" onClick={() => setIsEventModalVisible(false)}>
            Close
          </Button>,
        ]}
      >
        {selectedDate && getListData(selectedDate).map((event, index) => (
          <p key={index}>{event.content}</p>
        ))}
      </Modal>

      {/* Add Event Modal */}
      <Modal
        title="Add Event"
        visible={isAddEventModalVisible}
        onCancel={() => setIsAddEventModalVisible(false)}
        footer={null}
      >
        <Form onFinish={handleAddEvent}>
          <Form.Item name="title" label="Event Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="date" label="Date" rules={[{ required: true }]}>
            <DatePicker />
          </Form.Item>
          <Form.Item name="time" label="Time">
            <TimePicker />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="location" label="Location">
            <Input />
          </Form.Item>
          <Form.Item name="duration" label="Duration (in minutes)">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ backgroundColor: '#967aa1', borderColor: '#967aa1' }}>
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default NoticeCalendar;
