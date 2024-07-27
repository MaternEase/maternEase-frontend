import React from 'react';
import CustomTable from '../../components/Shared/CustomTable';

const TABS = [
  { label: "Clinic 1", value: "clinic1" },
  { label: "Clinic 2", value: "clinic2" },
  { label: "Clinic 3", value: "clinic3" },
];

const TABLE_HEAD = ["ID", "Name", "Age", "Condition", "Refer to Doctor","Delivered Date" ,""];

const TABLE_ROWS = [
  { id: 1, img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg", name: "John Michael", age: 30, condition: "Non Risky", referToDoctor: false },
  { id: 2, img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg", name: "Alexa Liras", age: 25, condition: "Risky", referToDoctor: true },
  { id: 3, img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg", name: "Laurent Perrier", age: 28, condition: "Non Risky", referToDoctor: false },
  { id: 4, img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg", name: "Michael Levi", age: 35, condition: "Risky", referToDoctor: true },
  { id: 5, img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg", name: "Richard Gran", age: 40, condition: "Non Risky", referToDoctor: false },
  // {id:6, img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg", name: "Laurent Perrier", age: 28, condition: "Non Risky", referToDoctor: false },
  // { id: 7, img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg", name: "Michael Levi", age: 35, condition: "Risky", referToDoctor: true },
  // { id: 8, img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg", name: "Richard Gran", age: 40, condition: "Non Risky", referToDoctor: false },
];

const DeliveredMothers = () => {
  return (
    <CustomTable
      // title="Expected Mothers"
      subheader="See information about all Expected mothers"
      tabs={TABS}
      tableHead={TABLE_HEAD}
      tableRows={TABLE_ROWS}
    />
  );
};

export default DeliveredMothers;
