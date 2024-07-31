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
import MotherHistory from '../pages/Doctor/MotherHistory';
import MotherReport1 from '../pages/Doctor/MotherReports1';
import MotherReport2 from '../pages/Doctor/MotherReports2';
import MotherReport3 from '../pages/Doctor/MotherReports3';
import BabyReport1 from '../pages/Doctor/BabyReport1';
import BabyReport2 from '../pages/Doctor/BabyReport2';



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
      <Route path="/motherhistory" element={<MotherHistory />} />
      <Route path="/motherreport1" element={<MotherReport1 />} />
      <Route path="/motherreport2" element={<MotherReport2/>} />
      <Route path="/motherreport3" element={<MotherReport3 />} />
      <Route path="/babyreport1" element={<BabyReport1 />} />
      <Route path="/babyreport2" element={<BabyReport2 />} />



      //Crud routes
      <Route path="/crud1" element={<Crud1 />} />
      <Route path="/crudupdate/:id" element={<Clinics />} />
    </Routes>
  );
};

export default DoctorRoutes;
