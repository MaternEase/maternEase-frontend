import React, { useEffect, useState } from 'react';
import CustomTable from '../../components/Shared/CustomTable';
import { AddExpectantMotherPopup } from '../../components/Shared/Popup/AddExpectantMotherPopup';
import { getDeliveredMother } from '../../services/midwifeService';
const TABS = [
  { label: "Clinic 1", value: "clinic1" },
  { label: "Clinic 2", value: "clinic2" },
  { label: "Clinic 3", value: "clinic3" },
];

const TABLE_HEAD = ["ID", "Name", "Age", "Condition", "Refer to Doctor", "Delivered Date", ""];


const DeliveredMothers = () => {
  const [mothersData , setMothersData] = useState([]);
  //Fetch data from the backend when the component mounts
  
  const fetchDMothersData = async () =>{
    try {
      const response = await getDeliveredMother();
      console.log(response);
      setMothersData(response);
    } catch (error){
      setErrorMessage('Error fetching data from the backend');
    }
  };

  
  
  
  // Run the fetch function on component mount
  useEffect(()=>{
    fetchDMothersData();
  },[]);



  return (
    <CustomTable
      title="Delivered Mothers"
      subheader="See information about all Delivered mothers"
      tabs={TABS}
      tableHead={TABLE_HEAD}
      tableRows={mothersData}
      showActions={false} // show action buttons
    />
  );
};

export default DeliveredMothers;
