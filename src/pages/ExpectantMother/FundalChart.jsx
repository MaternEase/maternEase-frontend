
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
import { ArrowBack } from "@mui/icons-material";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import "../../styles/ExpectantMother/Components.css";
import FundalHeightChart from "../../components/ExpectantMother/FundalHeightChart.jsx";

const { Option } = Select;

const EventBadge = ({ type, content }) => {
    return (
        <div className={`event-badge ${type}`}>
            <span className="dot"></span>
            <span className="content">{content}</span>
        </div>
    );
};

const TimeSlots = ({ backPath }) => {
    const navigate = useNavigate();

    const [isEventModalVisible, setIsEventModalVisible] = useState(false);
    const [isAddEventModalVisible, setIsAddEventModalVisible] = useState(false);
    const [isReservationModalVisible, setIsReservationModalVisible] = useState(false);
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
    const [userBookedTimeslots, setUserBookedTimeslots] = useState({
        "2024-07-08": [
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

    const handleReserveClick = (slot) => {
        // Handle reservation logic here
        setIsEventModalVisible(false);
        setIsReservationModalVisible(true); // Show the Reservation Successful modal
    };

    const renderTimeSlots = () => {
        const timeSlots = [
            { time: "7:30 AM - 7:45 AM", booked: "others" },
            { time: "7:45 AM - 8:00 AM", booked: null },
            { time: "8:00 AM - 8:15 AM", booked: null },
            { time: "8:15 AM - 8:30 AM", booked: "user" },
            { time: "1:00 PM - 1:15 PM", booked: "user" },
        ];

        return timeSlots.map((slot, index) => (
            <Button
                key={index}
                type="primary"
                disabled={slot.booked === "others"}
                onClick={() => slot.booked !== "user" && handleReserveClick(slot)}
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
        <div><FundalHeightChart/></div>
    );
};

export default TimeSlots;
