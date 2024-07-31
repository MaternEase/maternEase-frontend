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
  { id: 1, img: "", name: "Nadeeka Senanayake", age: 19, condition: "Risky", referToDoctor: false, deliveredDate: "2024-07-01" },
  { id: 2, img: "", name: "Anusha Wijeratne", age: 35, condition: "Non Risky", referToDoctor: true, deliveredDate: "2024-06-15" },
  { id: 3, img: "", name: "Ruwanthi Edirisinghe", age: 27, condition: "Risky", referToDoctor: false, deliveredDate: "2024-07-10" },
  { id: 4, img: "", name: "Shanika Fernando", age: 25, condition: "Risky", referToDoctor: true, deliveredDate: "2024-06-20" },
  { id: 5, img: "", name: "Harshani Rajapaksha", age: 20, condition: " Risky", referToDoctor: false, deliveredDate: "2024-07-05" },
];


const DeliveredMothers = () => {
  return (
    <CustomTable
      title="Delivered Mothers"
      subheader="See information about all Delivered mothers"
      tabs={TABS}
      tableHead={TABLE_HEAD}
      tableRows={TABLE_ROWS}
      showActions={false} // Hide action buttons
    />
  );
};

export default DeliveredMothers;
