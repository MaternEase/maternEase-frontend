// src/components/Child/ChildList.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChildList = () => {
  const navigate = useNavigate();

  const handleChildProfileClick = (childId) => {
    navigate(`/child_profile/${childId}`);  // Navigates to child profile page
  };

  return (
    <div>
      <h2>Child List</h2>
      <ul>
        <li>
          <span>Child Name: John Doe</span>
          <button onClick={() => handleChildProfileClick(1)}>View Profile</button>
        </li>
        <li>
          <span>Child Name: Jane Smith</span>
          <button onClick={() => handleChildProfileClick(2)}>View Profile</button>
        </li>
      </ul>
    </div>
  );
};

export default ChildList;
