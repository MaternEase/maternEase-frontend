import React from 'react';
import CustomTable from '../../components/Shared/CustomTable';

const TABS = [
  { label: "Clinic 1", value: "clinic1" },
  { label: "Clinic 2", value: "clinic2" },
  { label: "Clinic 3", value: "clinic3" },
];

const TABLE_HEAD = ["ID", "Name", "Age", "Condition", "Refer to Doctor","",  "Guardian Name",""];

const TABLE_ROWS = [
  { id: 1, img: "", name: "Kavindu Perera", age: 1, condition: "Non Risky", referToDoctor: false, guardianName: "Saman Perera" },
  { id: 2, img: "", name: "Tharindu Silva", age: 2, condition: "Risky", referToDoctor: true, guardianName: "Nimal Silva" },
  { id: 3, img: "", name: "Sanduni Fernando", age: 1, condition: "Non Risky", referToDoctor: false, guardianName: "Kamal Fernando" },
  { id: 4, img: "", name: "Hiruni Jayasinghe", age: 3, condition: "Risky", referToDoctor: true, guardianName: "Nuwan Jayasinghe" },
  { id: 5, img: "", name: "Naveen Rathnayake", age: 2, condition: "Non Risky", referToDoctor: false, guardianName: "Lal Rathnayake" },
];


const Babies = () => {
  return (
    <CustomTable
      title="Babies"
      subheader="See information about all Babies"
      tabs={TABS}
      tableHead={TABLE_HEAD}
      tableRows={TABLE_ROWS}
    />
  );
};

export default Babies;
