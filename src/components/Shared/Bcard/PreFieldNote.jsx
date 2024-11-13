import React from "react";
import { useState } from "react";
import DatePicker from "../DatePicker.jsx";

const PreFieldNote = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);

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
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const years = generateYears(1950, new Date().getFullYear());
    const days = generateDays();

    return (
        <div className="container p-6 mx-auto">
            <h1 className="mb-4 text-2xl font-bold text-black">
                Pre-Pregnancy Field Note Form
            </h1>
                    <div
                        className="p-5 border border-b-0 border-gray-200 dark:border-gray-700"
                        aria-labelledby="accordion-collapse-heading-1"
                        style={{ backgroundColor: "transparent" }} //form background color
                    >
                        <form style={{backgroundColor: "transparent"}}>

                            <div className="grid grid-cols-2 gap-6 mb-6">
                                {/* Existing Fields */}
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-black">
                                        Date
                                    </label>
                                    <DatePicker onDateChange={handleDateChange}/>
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-medium text-black">
                                        Number of weeks from pregnancy
                                    </label>
                                    <input
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-medium text-black">
                                        Anemia
                                    </label>
                                    <select
                                        className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" defaultValue="">
                                        <option value="" disabled>
                                            Select an option
                                        </option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                            </div>

                                <div>
                                    <label className="block mb-2 text-sm font-medium text-black">
                                        Fundal Height
                                    </label>
                                    <div className="flex">
                                    <input
                                        type="number"
                                        className="bg-gray-50 border border-gray-300 text-black text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="Enter height"
                                    />
                                    <span
                                        className="flex items-center px-3 bg-gray-200 border border-l-0 border-gray-300 text-sm text-black rounded-r-lg">
                                            cm
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-medium text-black">
                                        Fetal Movement
                                    </label>
                                    <select
                                        className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        defaultValue="">
                                        <option value="" disabled>
                                            Select an option
                                        </option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-medium text-black">
                                        Fetal Fetal Heart Rate
                                    </label>
                                    <div className="flex">
                                        <input
                                            type="number"
                                            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            placeholder="Enter fetal heart rate"
                                        />
                                        <span
                                            className="flex items-center px-3 bg-gray-200 border border-l-0 border-gray-300 text-sm text-black rounded-r-lg">
                                            bpm
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-medium text-black">
                                        Urine
                                    </label>
                                    <table className="w-full text-sm text-left text-gray-500">
                                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                Condition
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Yes
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                No
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr className="bg-white border-b">
                                            <td className="px-6 py-4">Sugar</td>
                                            <td className="px-6 py-4">
                                                <input type="checkbox"/>
                                            </td>
                                            <td className="px-6 py-4">
                                                <input type="checkbox"/>
                                            </td>
                                        </tr>
                                        <tr className="border-b bg-gray-50">
                                            <td className="px-6 py-4">Albumin</td>
                                            <td className="px-6 py-4">
                                                <input type="checkbox"/>
                                            </td>
                                            <td className="px-6 py-4">
                                                <input type="checkbox"/>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-medium text-black">
                                        Supplements
                                    </label>
                                    <table className="w-full text-sm text-left text-gray-500">
                                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">

                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Yes
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                No
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr className="bg-white border-b">
                                            <td className="px-6 py-4">Iron-folate</td>
                                            <td className="px-6 py-4">
                                                <input type="checkbox"/>
                                            </td>
                                            <td className="px-6 py-4">
                                                <input type="checkbox"/>
                                            </td>
                                        </tr>
                                        <tr className="border-b bg-gray-50">
                                            <td className="px-6 py-4">Vitamin C</td>
                                            <td className="px-6 py-4">
                                                <input type="checkbox"/>
                                            </td>
                                            <td className="px-6 py-4">
                                                <input type="checkbox"/>
                                            </td>
                                        </tr>
                                        <tr className="border-b bg-gray-50">
                                            <td className="px-6 py-4">Calcium</td>
                                            <td className="px-6 py-4">
                                                <input type="checkbox"/>
                                            </td>
                                            <td className="px-6 py-4">
                                                <input type="checkbox"/>
                                            </td>
                                        </tr>
                                        <tr className="border-b bg-gray-50">
                                            <td className="px-6 py-4">Thriposha</td>
                                            <td className="px-6 py-4">
                                                <input type="checkbox"/>
                                            </td>
                                            <td className="px-6 py-4">
                                                <input type="checkbox"/>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* New Fields */}
                                <div>
                                    <div>
                                        <table className="w-full text-sm text-left text-gray-500">
                                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                            <tr>
                                                <th scope="col" className="px-6 py-3">

                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Yes
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    No
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr className="bg-white border-b">
                                                <td className="px-6 py-4">Tetanus Vaccine</td>
                                                <td className="px-6 py-4">
                                                    <input type="checkbox"/>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <input type="checkbox"/>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
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
        </div>
    );
};

export default PreFieldNote;
