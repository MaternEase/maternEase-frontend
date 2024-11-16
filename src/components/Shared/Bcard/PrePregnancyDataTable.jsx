import React, { useState } from "react";

const dataCollection = [
    {
        date: '2024-11-14',
        weeksFromPregnancy: 10,
        anemia: 'Normal',
        fundalHeight: 32,
        fetalMovement: 'Active',
        fetalHeartRate: 140,
        urineCondition: { sugar: true, albumin: false },
        supplements: { ironFolate: true, vitaminC: true, calcium: true, thriposha: false },
        tetanusVaccine: true,
    },
    {
        date: '2024-11-14',
        weeksFromPregnancy: 10,
        anemia: 'Normal',
        fundalHeight: 32,
        fetalMovement: 'Active',
        fetalHeartRate: 140,
        urineCondition: { sugar: true, albumin: false },
        supplements: { ironFolate: true, vitaminC: true, calcium: true, thriposha: false },
        tetanusVaccine: true,
    },
    {
        date: '2024-11-14',
        weeksFromPregnancy: 10,
        anemia: 'Normal',
        fundalHeight: 32,
        fetalMovement: 'Active',
        fetalHeartRate: 140,
        urineCondition: { sugar: true, albumin: false },
        supplements: { ironFolate: true, vitaminC: true, calcium: true, thriposha: false },
        tetanusVaccine: true,
    },
    // Add more objects here with data for each day...
];

const PrePregnancyDataTable = () => {
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
                                <h2 className="block text-lg font-medium text-black text-center">
                                    Pre-Pregnancy Data Collection
                                </h2>
                            </div>

                            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left text-black-600">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">Date</th>
                                        <th scope="col" className="px-6 py-3">Weeks from Pregnancy</th>
                                        <th scope="col" className="px-6 py-3">Anemia</th>
                                        <th scope="col" className="px-6 py-3">Fundal Height (cm)</th>
                                        <th scope="col" className="px-6 py-3">Fetal Movement</th>
                                        <th scope="col" className="px-6 py-3">Fetal Heart Rate (bpm)</th>
                                        <th scope="col" className="px-6 py-3">Urine - Sugar</th>
                                        <th scope="col" className="px-6 py-3">Urine - Albumin</th>
                                        <th scope="col" className="px-6 py-3">Iron-Folate</th>
                                        <th scope="col" className="px-6 py-3">Vitamin C</th>
                                        <th scope="col" className="px-6 py-3">Calcium</th>
                                        <th scope="col" className="px-6 py-3">Thriposha</th>
                                        <th scope="col" className="px-6 py-3">Tetanus Vaccine</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {dataCollection.map((data, index) => (
                                        <tr key={index}
                                            className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                            <td className="px-6 py-4">{data.date}</td>
                                            <td className="px-6 py-4">{data.weeksFromPregnancy}</td>
                                            <td className="px-6 py-4">{data.anemia}</td>
                                            <td className="px-6 py-4">{data.fundalHeight} cm</td>
                                            <td className="px-6 py-4">{data.fetalMovement}</td>
                                            <td className="px-6 py-4">{data.fetalHeartRate} bpm</td>
                                            <td className="px-6 py-4">{data.urineCondition.sugar ? 'Yes' : 'No'}</td>
                                            <td className="px-6 py-4">{data.urineCondition.albumin ? 'Yes' : 'No'}</td>
                                            <td className="px-6 py-4">{data.supplements.ironFolate ? 'Yes' : 'No'}</td>
                                            <td className="px-6 py-4">{data.supplements.vitaminC ? 'Yes' : 'No'}</td>
                                            <td className="px-6 py-4">{data.supplements.calcium ? 'Yes' : 'No'}</td>
                                            <td className="px-6 py-4">{data.supplements.thriposha ? 'Yes' : 'No'}</td>
                                            <td className="px-6 py-4">{data.tetanusVaccine ? 'Yes' : 'No'}</td>
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

export default PrePregnancyDataTable;
