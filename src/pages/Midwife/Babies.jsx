import React, { useState, useEffect } from 'react';
import ChildTable from '../../components/Shared/ChildTable';
import { AddChildPopup } from '../../components/Shared/Popup/AddChildPopup';
import axios from 'axios';

const TABS = [
  { label: "Clinic 1", value: "clinic1" },
  { label: "Clinic 2", value: "clinic2" },
  { label: "Clinic 3", value: "clinic3" },
];

const TABLE_HEAD = ["ID", "Name", "Age", "Guardian Name", "Contact Number", "Condition", "Refer to Doctor", " "];

const Babies = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [children, setChildren] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  // Fetch child data from the backend when the component mounts
  useEffect(() => {
    const fetchChildren = async () => {
      try {
        const response = await axios.get('http://localhost:8082/api/child');
        setChildren(response.data); // Set the state with the fetched children data
      } catch (error) {
        setErrorMessage('Error fetching children data');
      }
    };
    fetchChildren();
  }, []);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setErrorMessage('');
  };

  return (
    <>
      <ChildTable
        title="Babies"
        subheader="See information about all Babies"
        tabs={TABS}
        tableHead={TABLE_HEAD}
        tableRows={children} // Pass the fetched children data to the table
        onAddMemberClick={handleOpenPopup}
        showActions={true}
      />
      <AddChildPopup
        open={isPopupOpen}
        onClose={handleClosePopup}
      />
      {errorMessage && <div style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</div>}
    </>
  );
};

export default Babies;
