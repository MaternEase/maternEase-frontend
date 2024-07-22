import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Admin/Dashboard';
import Clinics from '../pages/Admin/Clinics';
import Midwives from '../pages/Admin/Midwives';
import Doctors from '../pages/Admin/Doctors';
import Reports from '../pages/Admin/Reports';
// import Shedules from '../pages/Admin/ClinicShedules';


const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/clinics" element={<Clinics />} />
      <Route path="/midwives" element={<Midwives />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/reports" element={<Reports />} />
      {/* <Route path="/shedules" element={<Shedules />} /> */}
    </Routes>
  );
};

export default AdminRoutes;