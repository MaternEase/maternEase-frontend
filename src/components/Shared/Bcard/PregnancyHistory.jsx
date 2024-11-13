import React from "react";
import { useState } from "react";

const PregnancyHistory = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isFormVisible1, setIsFormVisible1] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const toggleFormVisibility1 = () => {
    setIsFormVisible1(!isFormVisible1);
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
      <h1 className="mb-4 text-2xl font-bold text-black">Pregnancy History</h1>

      <div id="accordion-collapse" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full gap-3 p-5 font-medium text-gray-500 border border-gray-200 rtl:text-right rounded-t-xl focus:ring-4 focus:ring-gray-400 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={toggleFormVisibility}
            aria-expanded={isFormVisible}
            aria-controls="accordion-collapse-body-1"
            style={{ backgroundColor: "transparent" }} // Keep the background transparent
          >
            <span
              className="text-black"
              style={{ backgroundColor: "transparent" }}
            >
              Present Obstetric History Part1
            </span>
            <svg
              data-accordion-icon
              className={`w-3 h-3 transform ${
                isFormVisible ? "rotate-180" : ""
              } shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5L5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        {isFormVisible && (
            <div
                id="accordion-collapse-body-1"
                className="p-5 border border-b-0 border-gray-200 dark:border-gray-700"
                aria-labelledby="accordion-collapse-heading-1"
                style={{backgroundColor: "transparent"}} // Remove background color
            >
              <form style={{backgroundColor: "transparent"}}>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  {/* Gravidity G and P want to add*/}
                  <div>
                    <label className="block mb-2 text-sm font-medium text-black">
                      Gravidity
                    </label>
                    <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Enter gravidity"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-black">
                      Number of Children Alive
                    </label>
                    <select
                        className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                      <option value="" disabled selected>
                        Select Number
                      </option>
                      {Array.from({length: 16}, (_, i) => (
                          <option key={i} value={i}>
                            {i}
                          </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-black">
                      Age of Youngest Child
                    </label>
                    <select
                        className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                      <option value="" disabled selected>
                        Select Age
                      </option>
                      {Array.from({length: 26}, (_, i) => (
                          <option key={i} value={i}>
                            {i}
                          </option>
                      ))}
                    </select>
                  </div>

                  {/* New Fields */}

                  <div>
                    <label className="block mb-2 text-sm font-medium text-black">
                      Last Menstrual Date
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <select
                          className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                        {days.map((day) => (
                            <option key={day} value={day}>
                              {day}
                            </option>
                        ))}
                      </select>
                      <select
                          className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                        {months.map((month, index) => (
                            <option key={index} value={month}>
                              {month}
                            </option>
                        ))}
                      </select>
                      <select
                          className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                        {years.map((year) => (
                            <option key={year} value={year}>
                              {year}
                            </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-black">
                      Registration Date in Eligible Family Register
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <select
                          className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                        {days.map((day) => (
                            <option key={day} value={day}>
                              {day}
                            </option>
                        ))}
                      </select>
                      <select
                          className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                        {months.map((month, index) => (
                            <option key={index} value={month}>
                              {month}
                            </option>
                        ))}
                      </select>
                      <select
                          className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                        {years.map((year) => (
                            <option key={year} value={year}>
                              {year}
                            </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-black">
                      US Corrected Expected Delivery Date
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <select
                          className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                        {days.map((day) => (
                            <option key={day} value={day}>
                              {day}
                            </option>
                        ))}
                      </select>
                      <select
                          className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                        {months.map((month, index) => (
                            <option key={index} value={month}>
                              {month}
                            </option>
                        ))}
                      </select>
                      <select
                          className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                        {years.map((year) => (
                            <option key={year} value={year}>
                              {year}
                            </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-black">
                      Expected Period
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <select
                          className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                        {days.map((day) => (
                            <option key={day} value={day}>
                              {day}
                            </option>
                        ))}
                      </select>
                      <select
                          className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                        {months.map((month, index) => (
                            <option key={index} value={month}>
                              {month}
                            </option>
                        ))}
                      </select>
                      <select
                          className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                        {years.map((year) => (
                            <option key={year} value={year}>
                              {year}
                            </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-black">
                      Date of Quickening
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <select
                          className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                        {days.map((day) => (
                            <option key={day} value={day}>
                              {day}
                            </option>
                        ))}
                      </select>
                      <select
                          className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                        {months.map((month, index) => (
                            <option key={index} value={month}>
                              {month}
                            </option>
                        ))}
                      </select>
                      <select
                          className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                        {years.map((year) => (
                            <option key={year} value={year}>
                              {year}
                            </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-black">
                      POA at Registration
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <select
                          className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                        {days.map((day) => (
                            <option key={day} value={day}>
                              {day}
                            </option>
                        ))}
                      </select>
                      <select
                          className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                        {months.map((month, index) => (
                            <option key={index} value={month}>
                              {month}
                            </option>
                        ))}
                      </select>
                      <select
                          className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                        {years.map((year) => (
                            <option key={year} value={year}>
                              {year}
                            </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>


                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left text-black-600">
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
                      <td className="px-6 py-4 ">
                        Was a Family Planning Method Used Before Pregnancy? If
                        so, Method
                      </td>
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

                <div><br/></div>
              </form>
              <div>
                <form>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-black">
                      Identified Antenatal Risk Conditions & Morbidity
                    </label>
                    <textarea
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Enter gravidity"
                    />
                  </div>
                  <br/>

                  <div className="grid grid-cols-2 gap-6 mb-6">

                    <div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-black">
                          Number of Pregnancies
                        </label>
                        <select
                            id="countries"
                            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>More than 5</option>
                        </select>
                      </div>

                    </div>

                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                      <label className="block mb-2 text-sm font-medium text-black">
                        Family Medical History
                      </label>
                      <table className="w-full text-sm text-left text-black-600">
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
                          <td className="px-6 py-4 ">
                            Hypertension
                          </td>
                          <td className="px-6 py-4">
                            <input type="checkbox"/>
                          </td>
                          <td className="px-6 py-4">
                            <input type="checkbox"/>
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 ">
                            Diabetes
                          </td>
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

                </form>


              </div>
            </div>
        )}
      </div>

    </div>
  );
};

export default PregnancyHistory;
