import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Admin/Dashboard';
import Clinics from '../pages/Admin/Clinics';
import Midwives from '../pages/Admin/Midwives';
import Doctors from '../pages/Admin/Doctors';
import Reports from '../pages/Admin/Reports';
import FullCalendarAdmin from '../pages/Admin/FullCalendar';


const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/clinics" element={<Clinics />} />
      <Route path="/midwives" element={<Midwives />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/full-calendar" element={<FullCalendarAdmin />} />
    </Routes>
  );
};

export default AdminRoutes;