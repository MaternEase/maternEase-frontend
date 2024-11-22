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
import PreFieldNote from "../components/Shared/Bcard/PreFieldNote.jsx";
import PostFieldNote from "../components/Shared/Bcard/PostFieldNote.jsx";
import HomeVisit from "../components/Shared/Bcard/HomeVisit.jsx";


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
        <Route path="/prefieldnote" element={<PreFieldNote />} />
        <Route path="/postfieldnote" element={<PostFieldNote />} />
        <Route path="/homevisit" element={<HomeVisit />} />
        



    </Routes>
  );
};

export default MidwifeRoutes;
