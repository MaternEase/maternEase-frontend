import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Admin/Dashboard';
import Clinics from '../pages/Admin/Clinics';
import Reports from '../pages/Admin/Reports';
// import Babies from '../pages/Doctor/Babies';
// import Reports from '../pages/Doctor/Reports';
// import Shedules from '../pages/Doctor/ClinicShedules';


const DoctorRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/clinics" element={<Clinics />} />
      <Route path="/reports" element={<Reports />} />
      {/* <Route path="/mothers" element={<Mothers />} />
      <Route path="/babies" element={<Babies />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/shedules" element={<Shedules />} /> */}
    </Routes>
  );
};

export default DoctorRoutes;