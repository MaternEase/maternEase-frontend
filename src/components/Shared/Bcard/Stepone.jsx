import React from "react";
import { useState } from "react";

const Stepone = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
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
        Basic Details
      </h1>

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
              Basic Details
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
            style={{ backgroundColor: "transparent" }} // Remove background color
          >
            <form style={{ backgroundColor: "transparent" }}>


              <div className="grid grid-cols-2 gap-6 mb-6">
                {/* Existing Fields */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Name of the Mother
                  </label>
                  <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Enter name"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Age of the Mother
                  </label>
                  <select
                      className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option value="" disabled selected>
                      Select age
                    </option>
                    {Array.from({length: 51}, (_, i) => (
                        <option key={i} value={i + 15}>
                          {i + 15}
                        </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Height
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

                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Weight
                  </label>
                  <div className="flex">
                    <input
                        type="number"
                        className="bg-gray-50 border border-gray-300 text-black text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Enter fetal heart rate"
                    />
                    <span
                        className="flex items-center px-3 bg-gray-200 border border-l-0 border-gray-300 text-sm text-black rounded-r-lg">
                                            kg
                                        </span>
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    BMI at Registration
                  </label>
                  <div className="flex">
                    <input
                        type="number"
                        className="bg-gray-50 border border-gray-300 text-black text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Enter fetal heart rate"
                    />
                    <span
                        className="flex items-center px-3 bg-gray-200 border border-l-0 border-gray-300 text-sm text-black rounded-r-lg">
                                            kg/m³
                                        </span>
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    POA at registration
                  </label>
                  <div className="flex">
                    <input
                        type="number"
                        className="bg-gray-50 border border-gray-300 text-black text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Weeks"
                        min="0"
                        max="44"
                    />
                    <span
                        className="flex items-center px-3 bg-gray-200 border border-l-0 border-gray-300 text-sm text-black">
            weeks
        </span>
                    <input
                        type="number"
                        className="bg-gray-50 border border-gray-300 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Days"
                        min="0"
                        max="6"
                    />
                    <span
                        className="flex items-center px-3 bg-gray-200 border border-l-0 border-gray-300 text-sm text-black rounded-r-lg">
            days
        </span>
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Education Level of the Mother
                  </label>
                  <select
                      id="countries"
                      className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option>No Formal Education</option>
                    <option>Primary Education</option>
                    <option>Senior Secondary (O/L)</option>
                    <option>Advanced Level (A/L)</option>
                    <option>Diploma</option>
                    <option>Undergraduate Degree</option>
                    <option>Postgraduate Diploma</option>
                    <option>Master's Degree</option>
                    <option>Doctorate (Ph.D.)</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Mother’s Occupation
                  </label>
                  <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Enter name"
                  />
                </div>


                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Distance for the Mother’s Office
                  </label>
                  <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Enter name"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Age of the Mother in Marriage
                  </label>
                  <select
                      className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option value="" disabled selected>
                      Select age
                    </option>
                    {Array.from({length: 51}, (_, i) => (
                        <option key={i} value={i + 15}>
                          {i + 15}
                        </option>
                    ))}
                  </select>
                </div>


                {/*for better spacing*/}
                <div></div>
                <div></div>
                <div></div>
                <div></div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Name of the Husband
                  </label>
                  <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Enter name"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Age of the Husband
                  </label>
                  <select
                      className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option value="" disabled selected>
                      Select age
                    </option>
                    {Array.from({length: 51}, (_, i) => (
                        <option key={i} value={i + 15}>
                          {i + 15}
                        </option>
                    ))}
                  </select>
                </div>


                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Education Level of the Husband
                  </label>
                  <select
                      id="countries"
                      className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option>No Formal Education</option>
                    <option>Primary Education</option>
                    <option>Senior Secondary (O/L)</option>
                    <option>Advanced Level (A/L)</option>
                    <option>Diploma</option>
                    <option>Undergraduate Degree</option>
                    <option>Postgraduate Diploma</option>
                    <option>Master's Degree</option>
                    <option>Doctorate (Ph.D.)</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Husband’s Occupation
                  </label>
                  <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Enter name"
                  />
                </div>


                {/*for better spacing*/}
                <div></div>
                <div></div>
                <div></div>
                <div></div>

                {/* New Fields */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Registration Number
                  </label>
                  <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="AS256"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Registration Date
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
                    Registration Location
                  </label>
                  <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Clinic A"
                  />
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
                    Address
                  </label>
                  <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="No 5, Temple Road, Moratuwa."
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Telephone Number
                  </label>
                  <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="071-56889964"
                  />
                </div>


                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                      <td className="px-6 py-4">Consanguinity</td>
                      <td className="px-6 py-4">
                        <input type="checkbox"/>
                      </td>
                      <td className="px-6 py-4">
                        <input type="checkbox"/>
                      </td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-6 py-4">Rubella Immunization</td>
                      <td className="px-6 py-4">
                        <input type="checkbox"/>
                      </td>
                      <td className="px-6 py-4">
                        <input type="checkbox"/>
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4">
                        Pre - Pregnancy Screening Done
                      </td>
                      <td className="px-6 py-4">
                        <input type="checkbox"/>
                      </td>
                      <td className="px-6 py-4">
                        <input type="checkbox"/>
                      </td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-6 py-4">
                        Preconceptional Folic Acid
                      </td>
                      <td className="px-6 py-4">
                        <input type="checkbox"/>
                      </td>
                      <td className="px-6 py-4">
                        <input type="checkbox"/>
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4">History of Sub-fertility</td>
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

              {/* Add Data and Submit buttons */}
              <div className="flex gap-4 mt-6">
                <button
                    type="submit"
                    className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stepone;
