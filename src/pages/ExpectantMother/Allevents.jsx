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
    // const [isAddEventModalVisible, setIsAddEventModalVisible] = useState(false);
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

    // const handleAddEvent = (values) => {
    //     const dateKey = values.date.format("YYYY-MM-DD");
    //     const newEvent = {
    //         type: values.type,
    //         content: values.title,
    //     };
    //
    //     setEvents((prevEvents) => {
    //         const updatedEvents = { ...prevEvents };
    //         if (!updatedEvents[dateKey]) {
    //             updatedEvents[dateKey] = [];
    //         }
    //         updatedEvents[dateKey].push(newEvent);
    //         return updatedEvents;
    //     });
    //
    //     setIsAddEventModalVisible(false);
    //     form.resetFields(); // Reset the form fields after saving
    // };

    // const handleCancelAddEvent = () => {
    //     setIsAddEventModalVisible(false);
    //     form.resetFields(); // Reset the form fields when the modal is canceled
    // };

    const handleBackButtonClick = () => {
        navigate(backPath); // Navigate to the dynamic back path
    };

    const [isReservePopupVisible, setIsReservePopupVisible] = useState(false);
    const [reserveMessage, setReserveMessage] = useState(""); // To store the custom message


    // const handleReserveClick = (slot, actionType) => {
    //     // Handle reservation logic here
    //     setIsEventModalVisible(false); // Close the current modal
    //
    //     if (actionType === "reserve") {
    //         setReserveMessage("Confirm booking timeslot"); // Set your custom message
    //         setIsReservePopupVisible(true);  // Open the new reservation popup
    //     } else if (actionType === "requestChange") {
    //         message.success("Request sent successfully");
    //     }
    // };

    const [isClinicSelectionVisible, setIsClinicSelectionVisible] = useState(false);
    const [selectedClinicType, setSelectedClinicType] = useState(null);

// Handle the click for reserving a timeslot
    const handleReserveClick = (slot, actionType) => {
        setIsEventModalVisible(false); // Close the current modal

        if (actionType === "reserve") {
            setReserveMessage("Confirm booking timeslot");
            setIsClinicSelectionVisible(true); // Show the clinic selection modal
        } else if (actionType === "requestChange") {
            message.success("Request sent successfully");
        }
    };

// Handle clinic type selection
    const handleClinicTypeSelect = (type) => {
        setSelectedClinicType(type); // Store the selected clinic type
        setIsClinicSelectionVisible(false); // Close the clinic selection modal
        setIsReservePopupVisible(true); // Open the reservation status modal
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
                    marginBottom: "12px",
                    padding: "12px",
                    width: "100%",
                    color: slot.booked === "user" ? "#fff" : "#000",
                    borderRadius: "8px",
                    boxShadow: slot.booked === "others" ? "none" : "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    cursor: slot.booked === "others" ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: "16px",
                    fontWeight: "500",
                    transition: "transform 0.2s ease, background-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                    if (slot.booked !== "others") {
                        e.currentTarget.style.transform = "scale(1.02)";
                        e.currentTarget.style.backgroundColor = slot.booked === "user" ? "#1464c8" : "#7a5a8b";
                    }
                }}
                onMouseLeave={(e) => {
                    if (slot.booked !== "others") {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.backgroundColor = slot.booked === "user" ? "#1890ff" : "#967aa1";
                    }
                }}
            >
                <span>{slot.booked === "user" ? "Request to change" : (slot.booked === "others" ? "Booked" : "Reserve")}</span>
                <span style={{ fontSize: "14px", color: "#333" }}>{slot.time}</span>
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
                                    <p>No events for this date.</p>
                                )}
                            </>
                        ) : (
                            renderTimeSlots()
                        )}
                    </div>
                )}
            </Modal>

            {/* Reservation Successful Modal */}
            {/*<Modal*/}
            {/*    title="Reservation Successful"*/}
            {/*    visible={isReservationModalVisible}*/}
            {/*    onCancel={() => setIsReservationModalVisible(false)}*/}
            {/*    footer={[*/}
            {/*        <Button key="close" onClick={() => setIsReservationModalVisible(false)}>*/}
            {/*            Close*/}
            {/*        </Button>,*/}
            {/*    ]}*/}
            {/*    className="reservation-modal"*/}
            {/*>*/}
            {/*    <p>Your reservation was successful!</p>*/}
            {/*</Modal>*/}

            {/* Clinic Selection Modal */}
            <Modal
                title="Select Clinic Type"
                visible={isClinicSelectionVisible}
                onCancel={() => setIsClinicSelectionVisible(false)}
                footer={null}
            >
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <Button
                        type="primary"
                        style={{ backgroundColor: "#967aa1", borderColor: "#967aa1" }}
                        onClick={() => handleClinicTypeSelect("Expectant Mother Clinic")}
                    >
                        Expectant Mother Clinic
                    </Button>
                    <Button
                        type="primary"
                        style={{ backgroundColor: "#967aa1", borderColor: "#967aa1" }}
                        onClick={() => handleClinicTypeSelect("Child Clinic")}
                    >
                        Child Clinic
                    </Button>
                </div>
            </Modal>



            {/*Reservation status modal*/}
            <Modal
                title="Reservation Status"
                visible={isReservePopupVisible}
                onCancel={() => setIsReservePopupVisible(false) }
                footer={[
                    <button key="close" onClick={() => setIsReservePopupVisible(false)} style={{
                        backgroundColor: "#676767",
                        color: "white",
                        padding: "8px 16px",
                        border: "none",
                        borderRadius: "10px",
                        cursor: "pointer",
                        marginRight: "8px",
                    }}>
                        Close
                    </button>,
                    <button type="submit" key="confirm" onClick={() => setIsReservePopupVisible(false)} style={{
                        backgroundColor: "#967aa1",
                        color: "white",
                        padding: "8px 16px",
                        border: "none",
                        borderRadius: "10px",
                        cursor: "pointer",

                    }}>
                        Confirm
                    </button> ,
                ]}
            >
                <p>{reserveMessage}</p>
            </Modal>
        </div>
    );
};

export default NoticeCalendar;
