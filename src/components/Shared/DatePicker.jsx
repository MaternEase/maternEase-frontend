import React, { useState, useEffect } from "react";

const DatePicker = ({ onDateChange }) => {
    const [selectedDay, setSelectedDay] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("");
    const [selectedYear, setSelectedYear] = useState("");

    const generateYears = (startYear, endYear) => {
        const years = [];
        for (let i = startYear; i <= endYear; i++) {
            years.push(i);
        }
        return years;
    };

    const generateDays = () => {
        const days = [];
        for (let i = 1; i <= 31; i++) {
            days.push(i);
        }
        return days;
    };

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",
    ];

    const years = generateYears(1950, new Date().getFullYear());
    const days = generateDays();

    useEffect(() => {
        const today = new Date();
        setSelectedDay(today.getDate());
        setSelectedMonth(today.getMonth() + 1); // getMonth is zero-indexed
        setSelectedYear(today.getFullYear());
    }, []);

    useEffect(() => {
        if (onDateChange) {
            onDateChange({ day: selectedDay, month: selectedMonth, year: selectedYear });
        }
    }, [selectedDay, selectedMonth, selectedYear, onDateChange]);

    return (
        <div className="grid grid-cols-3 gap-2">
            <select
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            >
                {days.map((day) => (
                    <option key={day} value={day}>{day}</option>
                ))}
            </select>
            <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            >
                {months.map((month, index) => (
                    <option key={index} value={index + 1}>{month}</option>
                ))}
            </select>
            <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            >
                {years.map((year) => (
                    <option key={year} value={year}>{year}</option>
                ))}
            </select>
        </div>
    );
};

export default DatePicker;
