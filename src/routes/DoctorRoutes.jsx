import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Doctor/Dashboard';
import Mothers from '../pages/Doctor/Mothers';
import Babies from '../pages/Doctor/Babies';
import Reports from '../pages/Doctor/Reports';
import Shedules from '../pages/Doctor/ClinicShedules';
import Clinics from '../pages/Doctor/Clinics';


const DoctorRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/mothers" element={<Mothers />} />
      <Route path="/clinics" element={<Clinics />} />
      <Route path="/babies" element={<Babies />} />
      <Route path="/shedules" element={<Shedules />} />
      <Route path="/reports" element={<Reports />} />
    </Routes>
  );
};

export default DoctorRoutes;