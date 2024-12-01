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
import PrePregnancyDataTable from "../components/Shared/Bcard/PrePregnancyDataTable.jsx";
import MotherHomeVisitdata from "../components/Shared/Bcard/MotherHomeVisitdata.jsx";
import ChildProfile from '../pages/ClinicAttendee/ChildProfile';
import HealthChart from '../pages/ClinicAttendee/Health_charts';
import Immunization from '../pages/ClinicAttendee/Immunization';
import Weight from '../pages/ClinicAttendee/Weight';
import Height from '../pages/ClinicAttendee/Height';
import Growth from '../pages/ClinicAttendee/Growth';

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
      <Route path="babies/clinicattendee/childprofile/:id" element={<ChildProfile />} />
      <Route path="health_charts" element={<HealthChart/>} />
      <Route path="immunization" element={<Immunization/>} />
      <Route path="weight" element={<Weight/>} />
      <Route path="height" element={<Height/>} />
      <Route path="growth" element={<Growth />} />
      <Route path="reports" element={<Reports />} />
      <Route path="messages" element={<Messages />} />
      <Route path="/profile/:id" element={<Bcard />} />
      <Route path="/full-calendar" element={<FullCalendarAdmin />} />
        <Route path="/prefieldnote" element={<PreFieldNote />} />
        <Route path="/postfieldnote" element={<PostFieldNote />} />
        <Route path="/homevisit" element={<HomeVisit />} />

        

        <Route path="/pretable" element={<PrePregnancyDataTable />} />

        <Route path="/motherhomevisits" element={<MotherHomeVisitdata />} />



    </Routes>
  );
};

export default MidwifeRoutes;
