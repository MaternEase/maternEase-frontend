import React, { useState } from 'react';

const PregnancyHistory = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to open and close the modal
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="relative">


            {/* Other Components */}
            {/*<StepOne/>*/}
            {/*<PregnancyHistory/>*/}
            {/*<PrePregnancyDataTable/>*/}
        </div>
    );
};

export default PregnancyHistory;
