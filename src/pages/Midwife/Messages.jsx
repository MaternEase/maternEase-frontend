import React, { useState } from 'react';

const PregnancyRecord = () => {
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
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];

const years = generateYears(18, new Date().getFullYear());
const days = generateDays();

return (
  <div className="container p-6 mx-auto">
    <h1 className="mb-4 text-2xl font-bold text-black">Pregnancy Record - Part B</h1>

    <div id="accordion-collapse" data-accordion="collapse" >
      <h2 id="accordion-collapse-heading-1">
      <button
        type="button"
        className="flex items-center justify-between w-full gap-3 p-5 font-medium text-gray-500 border border-gray-200 rtl:text-right rounded-t-xl focus:ring-4 focus:ring-gray-400 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
        onClick={toggleFormVisibility}
        aria-expanded={isFormVisible}
        aria-controls="accordion-collapse-body-1"
        style={{ backgroundColor: 'transparent' }} // Keep the background transparent
      > 
          <span className="text-black" style={{ backgroundColor: 'transparent' }} >Antenatal Risk Assessment Form</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 transform ${isFormVisible ? 'rotate-180' : ''} shrink-0`}
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
        style={{ backgroundColor: 'transparent' }} // Remove background color
      >
          <form style={{ backgroundColor: 'transparent' }}>
            <div className="mb-6">
              <label className="block mb-2 text-lg font-medium text-black">
                Identified Antenatal Risk Conditions & Morbidity
              </label>
              <textarea
                rows="4"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter details"
              ></textarea>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              {/* Existing Fields */}
              <div>
                <label className="block mb-2 text-sm font-medium text-black">Name of the Mother</label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter name"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-black">Age</label>
                <select className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-black">Husband’s Name</label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter name"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-black">Age</label>
                <select className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              {/* New Fields */}
              <div>
                <label className="block mb-2 text-sm font-medium text-black">Registration Number</label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="AS256"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-black">Registration Date</label>
                <div className="grid grid-cols-3 gap-2">
                  <select className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                    {days.map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                  <select className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                    {months.map((month, index) => (
                      <option key={index} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                  <select className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-black">Registration Location</label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Clinic A"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-black">Registration Date in Eligible Family Register</label>
                <div className="grid grid-cols-3 gap-2">
                  <select className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                    {days.map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                  <select className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                    {months.map((month, index) => (
                      <option key={index} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                  <select className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-black">Address</label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="No 5, Temple Road, Moratuwa."
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-black">Telephone Number</label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="071-56889964"
                />
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  </div>
);
};

export default PregnancyRecord;
