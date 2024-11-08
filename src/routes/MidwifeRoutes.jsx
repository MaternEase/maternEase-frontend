import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Midwife/Dashboard';
import Clinics from '../pages/Midwife/Clinics';
import ExpectedMothers from '../pages/Midwife/ExpectedMothers';
import DeliveredMothers from '../pages/Midwife/DeliveredMothers';
import Babies from '../pages/Midwife/Babies';
import Reports from '../pages/Midwife/Reports';
import Messages from '../pages/Midwife/Messages';
import Bcard from '../pages/Midwife/Bcard';
import FullCalendarAdmin from '../pages/Admin/FullCalendar';


const MidwifeRoutes = () => {
  console.log('MidwifeRoutes rendered'); 
  // Debug log to verify MidwifeRoutes render
  
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="clinics" element={<Clinics />} />
      <Route path="mothers/expected/" element={< ExpectedMothers />} />
      <Route path="mothers/delivered/" element={< DeliveredMothers />} />
      <Route path="babies" element={<Babies />} />
      <Route path="reports" element={<Reports />} />
      <Route path="messages" element={<Messages />} />
      <Route path="/profile/:id" element={<Bcard />} />
      <Route path="/full-calendar" element={<FullCalendarAdmin />} />
    </Routes>
  );
};

export default MidwifeRoutes;
