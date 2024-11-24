import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import StepOne from '../../components/Shared/Bcard/Stepone';
import PregnancyHistory from '../../components/Shared/Bcard/PregnancyHistory';
import PrePregnancyDataTable from '../../components/Shared/Bcard/PrePregnancyDataTable';
import { addClinicRecord } from '../../services/midwifeService'; // Import the API function

const Bcard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [formData, setFormData] = useState({
    weeksFromPregnancy: '',
    fundalHeight: '',
    fetalHeartRate: '',
    anemia: '',
    fetalMovement: '',
    sugarInUrine: '',
    albuminInUrine: '',
    ironFolate: '',
    vitaminC: '',
    calcium: '',
    thriposha: '',
    tetanusVaccine: '',
  }); // Form data state
  const { id } = useParams(); // Extract `id` from URL

  console.log("Mother ID:", id);

  // Toggle modal open/close
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addClinicRecord(id, formData); // Call backend API
      alert('Clinic record added successfully.');
      console.log('Response:', response);
      toggleModal(); // Close modal on success
    } catch (error) {
      console.error('Error adding clinic record:', error.message);
      alert('Failed to add clinic record.');
    }
  };

  return (
    <div className="relative">
      {/* Button to open modal */}
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-10/12 max-h-[36rem] overflow-y-auto">
            <h2 className="text-2xl mb-4">Clinic Data Form</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-2 gap-6 mb-6">
                {/* Input fields */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Number of Weeks from Pregnancy
                  </label>
                  <input
                    type="number"
                    name="weeksFromPregnancy"
                    value={formData.weeksFromPregnancy}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Fundal Height (cm)
                  </label>
                  <input
                    type="number"
                    name="fundalHeight"
                    value={formData.fundalHeight}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Fetal Heart Rate (bpm)
                  </label>
                  <input
                    type="number"
                    name="fetalHeartRate"
                    value={formData.fetalHeartRate}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Anemia
                  </label>
                  <select
                    name="anemia"
                    value={formData.anemia}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option value="">Select an option</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Fetal Movement
                  </label>
                  <select
                    name="fetalMovement"
                    value={formData.fetalMovement}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option value="">Select an option</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Sugar in Urine
                  </label>
                  <select
                    name="sugarInUrine"
                    value={formData.sugarInUrine}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option value="">Select an option</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Albumin in Urine
                  </label>
                  <select
                    name="albuminInUrine"
                    value={formData.albuminInUrine}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option value="">Select an option</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Iron-Folate
                  </label>
                  <select
                    name="ironFolate"
                    value={formData.ironFolate}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option value="">Select an option</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Vitamin C
                  </label>
                  <select
                    name="vitaminC"
                    value={formData.vitaminC}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option value="">Select an option</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Calcium
                  </label>
                  <select
                    name="calcium"
                    value={formData.calcium}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option value="">Select an option</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Thriposha
                  </label>
                  <select
                    name="thriposha"
                    value={formData.thriposha}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option value="">Select an option</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Tetanus Vaccine
                  </label>
                  <select
                    name="tetanusVaccine"
                    value={formData.tetanusVaccine}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option value="">Select an option</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
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
      <StepOne motherId={id} />
      <PregnancyHistory />
      <PrePregnancyDataTable motherId={id} />
    </div>
  );
};

export default Bcard;
