import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import StepOne from '../../components/Shared/Bcard/Stepone';
import PregnancyHistory from '../../components/Shared/Bcard/PregnancyHistory';
import PrePregnancyDataTable from "../../components/Shared/Bcard/PrePregnancyDataTable.jsx";

const Bcard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { id } = useParams(); // Extract the `id` parameter from the URL

  console.log("Mother ID:", id); // Debugging log to ensure `id` is captured correctly

    // Function to open and close the modal
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="relative">
            {/* Button to trigger the modal */}
            <button
                onClick={toggleModal}
                style={{
                    backgroundColor: '#192A51',
                    borderColor: '#192A51',
                    borderRadius: '20px',
                    height: '40px',
                    fontSize: '14px',
                    color: '#FFFFFF',
                    padding: '0 16px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    cursor: 'pointer',
                }}
                className="absolute top-4 right-4"
            >
                Add Clinic Record
            </button>

            {/* Form Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 ">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-10/12 max-h-[36rem] overflow-y-auto">
                        <h2 className="text-2xl mb-4">Clinic Data Form</h2>
                        <form>
                            <div className="grid grid-cols-2 gap-6 mb-6">
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

                                <div></div>

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
                                        <tr className="border-b bg-white">
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

                            {/* Buttons */}
                            <div className="flex justify-center space-x-4">
                                <button
                                    type="button"
                                    onClick={toggleModal}
                                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Other Components */}
            <StepOne motherId={id}/>
            <PregnancyHistory/>
            <PrePregnancyDataTable/>
        </div>
    );
};

export default Bcard;
