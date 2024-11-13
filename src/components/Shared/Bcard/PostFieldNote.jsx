import React from "react";
import { useState } from "react";
import DatePicker from "../DatePicker.jsx";

const PostFieldNote = () => {
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
                Postpartum Field Note Form
            </h1>
            <div
                className="p-5 border border-b-0 border-gray-200 dark:border-gray-700"
                aria-labelledby="accordion-collapse-heading-1"
                style={{ backgroundColor: "" }} >
                {/*//form background color*/}

                <form style={{backgroundColor: "transparent"}}>

                    <div className="grid grid-cols-2 gap-6 mb-6">
                        {/* Existing Fields */}
                        <div>
                            <label className="block mb-2 text-sm font-medium text-black">
                                Date of Delivery
                            </label>
                            <DatePicker onDateChange={handleDateChange}/>
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-black">
                                Place of Delivery
                            </label>
                            <select
                                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                defaultValue="">
                                <option value="" disabled>
                                    Select an option
                                </option>
                                <option value="yes">Hospital</option>
                                <option value="no">Home</option>
                            </select>
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-black">
                                Date of Discharge
                            </label>
                            <DatePicker onDateChange={handleDateChange}/>
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-black">
                                Name of the Hospital
                            </label>
                            <input
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-black">
                                Name of the Surgeon
                            </label>
                            <input
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            />
                        </div>


                        <div>
                            <label className="block mb-2 text-sm font-medium text-black">
                                Result of the Pregnancy
                            </label>
                            <select
                                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                defaultValue="">
                                <option value="" disabled>
                                    Select an option
                                </option>
                                <option value="yes">Livebirth</option>
                                <option value="no">Stillbirth</option>
                            </select>
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-black">
                                Delivery Method
                            </label>
                            <select
                                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                defaultValue="">
                                <option value="" disabled>
                                    Select an option
                                </option>
                                <option value="yes">Normal</option>
                                <option value="no">Cesarean</option>
                                <option value="no">Assisted Vaginal Delivery</option>
                                <option value="no">Other</option>
                            </select>
                        </div>

                        <div>

                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-black">
                                Delivery Complications
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
                                    <td className="px-6 py-4">Postpartum Bleeding</td>
                                    <td className="px-6 py-4">
                                        <input type="checkbox"/>
                                    </td>
                                    <td className="px-6 py-4">
                                        <input type="checkbox"/>
                                    </td>
                                </tr>

                                <tr className="bg-gray-50 border-b">
                                    <td className="px-6 py-4">Prolonged Labour</td>
                                    <td className="px-6 py-4">
                                        <input type="checkbox"/>
                                    </td>
                                    <td className="px-6 py-4">
                                        <input type="checkbox"/>
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-black">
                                    Other
                                </label>
                                <input
                                    type="text"
                                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                />
                            </div>
                        </div>

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
                                    <td className="px-6 py-4">Maternal Death</td>
                                    <td className="px-6 py-4">
                                        <input type="checkbox"/>
                                    </td>
                                    <td className="px-6 py-4">
                                        <input type="checkbox"/>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div className="flex items-center justify-between">
                                <label className="block mb-2 text-sm font-medium text-gray-500">
                                    Date of Maternal Death
                                </label>
                                <DatePicker onDateChange={handleDateChange}/>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-500">
                                    Reason
                                </label>
                                <textarea
                                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    rows="4"
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    {/* Add Data and Submit buttons */}
                    <div className="flex justify-center gap-4 mt-6">
                        <button
                            type="submit"
                            className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 "
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PostFieldNote;
