import React, { useState } from "react";

const dataCollection = [
    {
        date: '2024-11-14',
        temperature: 37,
        breastCracks: true,
        surgicalSiteInfection: true,
        mentalChanges: false,
        upperAbdominalPain: false,
        diarrhea: true,
        vomiting: false,
        difficultyBreathing: true,
        poorVision : false,
        migraine : false,
        muscleCramp : true,
        micronutrients : true
    },
    {
        date: '2024-11-14',
        temperature: 37,
        breastCracks: true,
        surgicalSiteInfection: true,
        mentalChanges: false,
        upperAbdominalPain: false,
        diarrhea: true,
        vomiting: false,
        difficultyBreathing: true,
        poorVision : false,
        migraine : false,
        muscleCramp : true,
        micronutrients : true
    },
    {
        date: '2024-11-14',
        temperature: 37,
        breastCracks: true,
        surgicalSiteInfection: true,
        mentalChanges: false,
        upperAbdominalPain: false,
        diarrhea: true,
        vomiting: false,
        difficultyBreathing: true,
        poorVision : false,
        migraine : false,
        muscleCramp : true,
        micronutrients : true
    },
    // Add more objects here with data for each day...
];

const MotherHomeVisitdata = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    return (
        <div className="container p-6 mx-auto">
            <h1 className="mb-4 text-2xl font-bold text-black">
                {/*Details of Expectant Mother*/}
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
                            Clinical Records
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
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <div className="mb-4">
                                {/*<h2 className="block text-lg font-medium text-black text-center">*/}
                                {/*    Pre-Pregnancy Data Collection*/}
                                {/*</h2>*/}
                            </div>

                            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left text-black-600">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">Date</th>
                                        <th scope="col" className="px-6 py-3">Temperature (°C)</th>
                                        <th scope="col" className="px-6 py-3">Breast Cracks	</th>
                                        <th scope="col" className="px-6 py-3">Surgical Site Infection</th>
                                        <th scope="col" className="px-6 py-3">Mental Changes</th>
                                        <th scope="col" className="px-6 py-3">Upper Abdominal Pain</th>
                                        <th scope="col" className="px-6 py-3">Diarrhea</th>
                                        <th scope="col" className="px-6 py-3">Vomiting</th>
                                        <th scope="col" className="px-6 py-3">Difficulty Breathing</th>
                                        <th scope="col" className="px-6 py-3">Poor Vision</th>
                                        <th scope="col" className="px-6 py-3">Migraine</th>
                                        <th scope="col" className="px-6 py-3">Muscle Cramp	</th>
                                        <th scope="col" className="px-6 py-3">Taking Micronutrients</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {dataCollection.map((data, index) => (
                                        <tr key={index}
                                            className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                            <td className="px-6 py-4">{data.date}</td>
                                            <td className="px-6 py-4">{data.temperature}</td>
                                            <td className="px-6 py-4">{data.breastCracks? 'Yes' : 'No'}</td>
                                            <td className="px-6 py-4">{data.surgicalSiteInfection? 'Yes' : 'No'}</td>
                                            <td className="px-6 py-4">{data.mentalChanges? 'Yes' : 'No'}</td>
                                            <td className="px-6 py-4">{data.upperAbdominalPain? 'Yes' : 'No'}</td>
                                            <td className="px-6 py-4">{data.diarrhea ? 'Yes' : 'No'}</td>
                                            <td className="px-6 py-4">{data.vomiting ? 'Yes' : 'No'}</td>
                                            <td className="px-6 py-4">{data.difficultyBreathing ? 'Yes' : 'No'}</td>
                                            <td className="px-6 py-4">{data.poorVision ? 'Yes' : 'No'}</td>
                                            <td className="px-6 py-4">{data.migraine ? 'Yes' : 'No'}</td>
                                            <td className="px-6 py-4">{data.muscleCramp ? 'Yes' : 'No'}</td>
                                            <td className="px-6 py-4">{data.micronutrients ? 'Yes' : 'No'}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MotherHomeVisitdata;
