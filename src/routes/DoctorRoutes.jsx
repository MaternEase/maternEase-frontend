import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Doctor/Dashboard';
import Mothers from '../pages/Doctor/Mothers';
import Babies from '../pages/Doctor/Babies';
import Reports from '../pages/Doctor/Reports';
import Shedules from '../pages/Doctor/ClinicShedules';
import Clinics from '../pages/Doctor/Clinics';
import MaternalHealth from '../pages/Doctor/MaternalHealthStats';
import PregnacyDelivery from '../pages/Doctor/PregnancyDeliveryStats';
import NewbornHealth from '../pages/Doctor/NewbornHealthStats';
import ImmunizationScreening from '../pages/Doctor/ImmunizationScreeningStatics';
import Crud1 from '../pages/Doctor/Crud1';



const DoctorRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/mothers" element={<Mothers />} />
      <Route path="/clinics" element={<Clinics />} />
      <Route path="/babies" element={<Babies />} />
      <Route path="/shedules" element={<Shedules />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/maternalhealthstats" element={<MaternalHealth />} />
      <Route path="/pregnancydeliverystats" element={<PregnacyDelivery />} />
      <Route path="/newbornhealthstats" element={<NewbornHealth />} />
      <Route path="/immunizationscreeningstats" element={<ImmunizationScreening />} />
      <Route path="/crud1" element={<Crud1 />} />




    </Routes>
  );
};

export default DoctorRoutes;