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
    message,
} from "antd";
import { ArrowBack } from "@mui/icons-material";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import "../../styles/ExpectantMother/Components.css";

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
    const [isReservationModalVisible, setIsReservationModalVisible] = useState(false);
    const [events, setEvents] = useState({
        "2024-11-08": [
            { type: "child-clinic", content: "Child Clinic Appointment - Dr. Smith" },
            { type: "vaccination", content: "Vaccination - Polio" },
        ],
        "2024-11-10": [
            {
                type: "expectant-mother-clinic",
                content: "Expectant Mother Clinic - Dr. Johnson",
            },
            { type: "awareness-program", content: "Breastfeeding Awareness Program" },
        ],
        "2024-11-15": [
            { type: "home-visit", content: "Home Visit - Mrs. Brown" },
            { type: "child-clinic", content: "Child Clinic Appointment - Dr. White" },
            { type: "vaccination", content: "Vaccination - MMR" },
        ],
        "2024-11-20": [
            {
                type: "expectant-mother-clinic",
                content: "Expectant Mother Clinic - Dr. Lee",
            },
            { type: "home-visit", content: "Home Visit - Mr. Green" },
        ],
        "2024-11-25": [
            { type: "awareness-program", content: "Parenting Tips Workshop" },
        ],
    });
    const [userBookedTimeslots, setUserBookedTimeslots] = useState({
        "2024-11-08": [
            { type: "vaccination", content: "Vaccination - Polio", time: "1:00 PM - 1:15 PM" },
        ],
    });
    const [currentDate, setCurrentDate] = useState(null); // Track the currently clicked date
    const [currentEvent, setCurrentEvent] = useState(null); // Track the currently clicked event
    const [showTimeSlots, setShowTimeSlots] = useState(false); // Track if time slots should be shown
    const [form] = Form.useForm(); // Create a form reference

    const getListData = (value) => {
        const dateKey = value.format("YYYY-MM-DD");
        return events[dateKey] || [];
    };

    const getUserBookedTimeslots = (value) => {
        const dateKey = value.format("YYYY-MM-DD");
        return userBookedTimeslots[dateKey] || [];
    };

    const dateCellRender = (value) => {
        const listData = getListData(value);
        const userBookedData = getUserBookedTimeslots(value);
        return (
            <ul className="events">
                {listData.map((item, index) => (
                    <li key={index} onClick={() => handleDateClick(value)}>
                        <EventBadge type={item.type} content={item.content} />
                    </li>
                ))}
                {userBookedData.map((item, index) => (
                    <li key={index} onClick={() => handleDateClick(value)}>
                        <EventBadge type={item.type} content={`${item.content} (Booked by You)`} />
                    </li>
                ))}
            </ul>
        );
    };

    const handleDateClick = (value) => {
        setCurrentDate(value); // Set the current date for the modal
        setShowTimeSlots(false); // Reset to show events instead of time slots
        setIsEventModalVisible(true); // Show the Event Details modal
    };

    const handleEventClick = (event) => {
        setCurrentEvent(event); // Set the current event for the modal
        setShowTimeSlots(true); // Show the time slots for the clicked event
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

    const handleReserveClick = (slot, actionType) => {
        // Handle reservation logic here
        setIsEventModalVisible(false);
        if (actionType === "reserve") {
            message.success("Reservation was successful");
        } else if (actionType === "requestChange") {
            message.success("Request sent successfully");
        }
    };

    const renderTimeSlots = () => {
        const timeSlots = [
            { time: "7:30 AM - 7:45 AM", booked: "others" },
            { time: "7:45 AM - 8:00 AM", booked: null },
            { time: "8:00 AM - 8:15 AM", booked: null },
            { time: "8:15 AM - 8:30 AM", booked: "others" },
            { time: "1:00 PM - 1:15 PM", booked: "user" },
        ];

        return timeSlots.map((slot, index) => (
            <Button
                key={index}
                type="primary"
                disabled={slot.booked === "others"}
                onClick={() => {
                    const actionType = slot.booked === "user" ? "requestChange" : "reserve";
                    handleReserveClick(slot, actionType);
                }}
                style={{
                    backgroundColor: slot.booked === "user" ? "#1890ff" : (slot.booked === "others" ? "#d9d9d9" : "#967aa1"),
                    borderColor: slot.booked === "user" ? "#1890ff" : (slot.booked === "others" ? "#d9d9d9" : "#967aa1"),
                    marginBottom: "8px",
                    width: "100%",
                    color: slot.booked === "user" ? "#fff" : "",
                }}
            >
                {slot.booked === "user" ? "Request to change" : (slot.booked === "others" ? "Booked" : "Reserve")}
                <div>{slot.time}</div>
            </Button>
        ));
    };

    return (
        <div style={{ padding: "0 20px" }}>
            <Button
                icon={<ArrowBack style={{ fontSize: 16 }} />}
                onClick={handleBackButtonClick}
                style={{
                    marginBottom: 16,
                    backgroundColor: "#f0f0f0",
                    borderColor: "#f0f0f0",
                    color: "#D5C6E0",
                    borderRadius: "30px",
                }}
            ></Button>
            <h1 className="calendar-title">Book a time-slot for Events</h1>
            <div style={{ marginBottom: 16, marginTop: 16 }}>
                {/*<Button*/}
                {/*    type="primary"*/}
                {/*    onClick={() => setIsAddEventModalVisible(true)}*/}
                {/*    style={{ backgroundColor: "#967aa1", borderColor: "#967aa1" }}*/}
                {/*>*/}
                {/*    Add Event*/}
                {/*</Button>*/}
            </div>
            <Calendar dateCellRender={dateCellRender} />

            {/* Event Details Modal */}
            <Modal
                title={showTimeSlots ? "Reserve a Timeslot" : `Events on ${currentDate ? currentDate.format("YYYY-MM-DD") : ""}`}
                visible={isEventModalVisible}
                onCancel={() => setIsEventModalVisible(false)}
                footer={[
                    <Button key="close" onClick={() => setIsEventModalVisible(false)}>
                        Close
                    </Button>,
                ]}
                className="event-details-modal"
            >
                {currentDate && (
                    <div className="event-details-content">
                        {!showTimeSlots ? (
                            <>
                                {getListData(currentDate).length > 0 ? (
                                    getListData(currentDate).map((event, index) => (
                                        <div key={index} className={`event-item ${event.type}`} onClick={() => handleEventClick(event)} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                                            <span className="event-dot"></span>
                                            <p className="event-text">{event.content}</p>
                                            {getUserBookedTimeslots(currentDate).filter(e => e.type === event.type && e.content === event.content).map((slot, idx) => (
                                                <div key={idx} className="timeslot">
                                                    <p className="event-text" style={{ backgroundColor: "#1890ff", color: "#fff" }}>{slot.time}</p>
                                                </div>
                                            ))}
                                        </div>
                                    ))
                                ) : (
                                    <p>No events for this date. <a onClick={() => setIsAddEventModalVisible(true)}> <b>Add a new event</b></a></p>
                                )}
                            </>
                        ) : (
                            renderTimeSlots()
                        )}
                    </div>
                )}
            </Modal>

            {/* Reservation Successful Modal */}
            <Modal
                title="Reservation Successful"
                visible={isReservationModalVisible}
                onCancel={() => setIsReservationModalVisible(false)}
                footer={[
                    <Button key="close" onClick={() => setIsReservationModalVisible(false)}>
                        Close
                    </Button>,
                ]}
                className="reservation-modal"
            >
                <p>Your reservation was successful!</p>
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
                            <Option value="expectant-mother-clinic">
                                Expectant Mother Clinic
                            </Option>
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
                    <Form.Item
                        name="location"
                        label="Location"
                        rules={[{ required: true, message: "Please select a location" }]}
                    >
                        <Select placeholder="Select location" style={{ width: "100%" }}>
                            <Option value="Clinic A">Clinic A</Option>
                            <Option value="Clinic B">Clinic B</Option>
                            <Option value="Clinic C">Clinic C</Option>
                            <Option value="Clinic D">Clinic D</Option>
                            <Option value="Clinic E">Clinic E</Option>
                            <Option value="Clinic F">Clinic F</Option>
                            <Option value="Clinic G">Clinic G</Option>
                            <Option value="Clinic H">Clinic H</Option>
                            <Option value="Clinic I">Clinic I</Option>
                            <Option value="Clinic J">Clinic J</Option>
                        </Select>
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
