import React, { useState } from "react";
import DatePicker from "../DatePicker.jsx";

const HomeVisit = () => {
    const [activeTab, setActiveTab] = useState("mother"); // State to manage active tab
    const [selectedDate, setSelectedDate] = useState({ day: "", month: "", year: "" });

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

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

    return (
        <div className="container p-6 mx-auto">
            <h1 className="mb-4 text-2xl font-bold text-black">
                Home Visit Note Form
            </h1>

            {/* Tabs */}
            <div className="flex mb-4 border-b border-gray-300">
                <button
                    className={`p-2 text-sm font-medium ${activeTab === "mother" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-500"}`}
                    onClick={() => setActiveTab("mother")}
                >
                    Mother
                </button>
                <button
                    className={`p-2 text-sm font-medium ${activeTab === "child" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-500"}`}
                    onClick={() => setActiveTab("child")}
                >
                    Child
                </button>
            </div>

            {/* Forms */}
            <div className="p-5 border border-gray-200" style={{ backgroundColor: "transparent" }}>
                <form style={{ backgroundColor: "transparent" }}>
                    {activeTab === "mother" && (
                        <MotherForm selectedDate={selectedDate} onDateChange={handleDateChange} />
                    )}
                    {activeTab === "child" && (
                        <ChildForm selectedDate={selectedDate} onDateChange={handleDateChange} />
                    )}
                    {/*<div className="flex justify-center gap-4 mt-6">*/}
                    {/*    <button*/}
                    {/*        type="submit"*/}
                    {/*        className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800"*/}
                    {/*    >*/}
                    {/*        Submit*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                </form>
            </div>
        </div>
    );
};

//Mother
const MotherForm = ({ selectedDate, onDateChange }) => (
    <div
        className="p-5 border border-b-0 border-gray-200 dark:border-gray-700"
        style={{backgroundColor: ""}} // Add desired form background color here if needed
    >

        <form style={{backgroundColor: "transparent"}}>
            <div className="grid mb-6">
                {/* Existing Fields */}

                <div>
                    <div className="grid grid-cols-2 gap-6 mb-6">
                        <div className="flex justify-between items-center">
                            <label className="block mb-2 text-sm font-medium text-black ml-8">
                                Temperature
                            </label>
                            <div className="flex">
                                <input
                                    type="number"
                                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Enter fetal heart rate"
                                />
                                <span
                                    className="flex items-center px-3 bg-gray-200 border border-l-0 border-gray-300 text-sm text-black rounded-r-lg">
                                            cm
                                        </span>
                            </div>

                        </div>

                    </div>

                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th className="px-6 py-3">Condition</th>
                            <th className="px-6 py-3">Yes</th>
                            <th className="px-6 py-3">No</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="bg-gray-50 border-b">
                            <td className="px-6 py-4">Anemia</td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td className="px-6 py-4">Breast Cracks</td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                        </tr>
                        <tr className="bg-gray-50 border-b">
                            <td className="px-6 py-4">Surgical Site Infection</td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td className="px-6 py-4">Mental Changes</td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                        </tr>
                        <tr className="bg-gray-50 border-b">
                            <td className="px-6 py-4">Upper Abdominal Pain</td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td className="px-6 py-4">Diarrhea</td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                        </tr>
                        <tr className="bg-gray-50 border-b">
                            <td className="px-6 py-4">Vomiting</td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td className="px-6 py-4">Difficulty Breathing</td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td className="px-6 py-4">Poor Vision</td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                        </tr>
                        <tr className="bg-gray-50 border-b">
                            <td className="px-6 py-4">Migraine</td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td className="px-6 py-4">Muscle Cramp</td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                        </tr>
                        <tr className="bg-gray-50 border-b">
                            <td className="px-6 py-4">Taking Micronutrients</td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add Data and Submit buttons */}
            <div className="flex justify-center gap-4 mt-6">
                <button
                    type="submit"
                    className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800"
                >
                    Submit
                </button>
            </div>
        </form>
    </div>
);

const ChildForm = ({selectedDate, onDateChange}) => (
    <div
        className="p-5 border border-b-0 border-gray-200 dark:border-gray-700"
        style={{backgroundColor: ""}} // Add desired form background color here if needed
    >

        <form style={{backgroundColor: "transparent"}}>
            <div className="grid mb-6">
                {/* Existing Fields */}

                <div>
                    <div className="grid grid-cols-2 gap-6 mb-6">
                        <div className="flex justify-between items-center">
                            <label className="block mb-2 text-sm font-medium text-black ml-8">
                                Temperature
                            </label>
                            <div className="flex">
                                <input
                                    type="number"
                                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Enter fetal heart rate"
                                />
                                <span
                                    className="flex items-center px-3 bg-gray-200 border border-l-0 border-gray-300 text-sm text-black rounded-r-lg">
                                            cm
                                        </span>
                            </div>

                        </div>

                    </div>

                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th className="px-6 py-3">Condition</th>
                            <th className="px-6 py-3">Yes</th>
                            <th className="px-6 py-3">No</th>
                        </tr>
                        </thead>
                        <tbody>

                        <tr className="bg-gray-50 border-b">
                            <td className="px-6 py-4">Abnormalities</td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td className="px-6 py-4">Umbilicus Infections</td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                        </tr>
                        <tr className="bg-gray-50 border-b">
                            <td className="px-6 py-4">Taking Breastmilk</td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td className="px-6 py-4">Taking Micronutrients</td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                        </tr>
                        <tr className="bg-gray-50 border-b">
                            <td className="px-6 py-4">Mental Changes</td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td className="px-6 py-4">Upper Abdominal Pain</td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                        </tr>
                        <tr className="bg-gray-50 border-b">
                            <td className="px-6 py-4">Diarrhea</td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td className="px-6 py-4">Vomiting</td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                        </tr>
                        <tr className="bg-gray-50 border-b">
                            <td className="px-6 py-4">Difficulty Breathing</td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td className="px-6 py-4">Poor Vision</td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                        </tr>
                        <tr className="bg-gray-50 border-b">
                            <td className="px-6 py-4">Migraine</td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                        </tr>
                        <tr className="bg-white border-b">
                            <td className="px-6 py-4">Muscle Cramp</td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                            <td className="px-6 py-4"><input type="checkbox"/></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add Data and Submit buttons */}
            <div className="flex justify-center gap-4 mt-6">
                <button
                    type="submit"
                    className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800"
                >
                    Submit
                </button>
            </div>
        </form>
    </div>
);

export default HomeVisit;
