import React, { useState } from 'react';
import CustomTable from '../../components/Shared/CustomTable';
import { AddExpectantMotherPopup } from '../../components/Shared/Popup/AddExpectantMotherPopup';
const TABS = [
  { label: "Clinic 1", value: "clinic1" },
  { label: "Clinic 2", value: "clinic2" },
  { label: "Clinic 3", value: "clinic3" },
];

const TABLE_HEAD = ["ID", "Name", "Age", "Condition", "Refer to Doctor", "Delivered Date", ""];

const TABLE_ROWS = [
  { id: 1, img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg", name: "John Michael", age: 30, condition: "Non Risky", referToDoctor: false, deliveredDate: "2024-07-01" },
  { id: 2, img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg", name: "Alexa Liras", age: 25, condition: "Risky", referToDoctor: true, deliveredDate: "2024-06-15" },
  { id: 3, img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg", name: "Laurent Perrier", age: 28, condition: "Non Risky", referToDoctor: false, deliveredDate: "2024-07-10" },
  { id: 4, img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg", name: "Michael Levi", age: 35, condition: "Risky", referToDoctor: true, deliveredDate: "2024-06-20" },
  { id: 5, img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg", name: "Richard Gran", age: 40, condition: "Non Risky", referToDoctor: false, deliveredDate: "2024-07-05" },
];

const ExpectedMothers = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <CustomTable
        title="Expected Mothers"
        subheader="See information about all Expected mothers"
        tabs={TABS}
        tableHead={TABLE_HEAD}
        tableRows={TABLE_ROWS}
        onAddMemberClick={handleOpenPopup} // Pass the handler to open the popup
        showActions={true} // Show action buttons
      />
      <AddExpectantMotherPopup open={isPopupOpen} onClose={handleClosePopup} />
    </>
  );
};

export default ExpectedMothers;