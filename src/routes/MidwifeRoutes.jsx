import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Midwife/Dashboard';
import Clinics from '../pages/Midwife/Clinics';
import Mothers from '../pages/Midwife/Mothers';
import Babies from '../pages/Midwife/Babies';
import Reports from '../pages/Midwife/Reports';
import Messages from '../pages/Midwife/Messages';

const MidwifeRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/clinics" element={<Clinics />} />
      <Route path="/mothers" element={<Mothers />} />
      <Route path="/babies" element={<Babies />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/messages" element={<Messages />} />
    </Routes>
  );
};

export default MidwifeRoutes;
