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
import BabyRefer from '../pages/Doctor/BabyRefer';
import MotherRefer from '../pages/Doctor/MotherRefer';
import DoctorCalendar from '../pages/Doctor/DoctorCalendar';
import MotherAll from '../pages/Doctor/MotherAll';
import BabiesAll from '../pages/Doctor/BabiesAll';
import BabyGrowthChecker from '../pages/Doctor/BabyGrowthChecker';
import MotherPregnancy from '../pages/Doctor/MotherPregnancy';
import Recommandations from '../pages/Doctor/Recommandations';
import Mrisk1 from '../pages/Doctor/Mrisk1';
import Mrisk2 from '../pages/Doctor/Mrisk2';
import NonThree from '../pages/Doctor/NonThree';
import NonFour from '../pages/Doctor/NonFour';
import NonFive from '../pages/Doctor/NonFive';
import NonSix from '../pages/Doctor/NonSix';
import AllMothers1 from '../pages/Doctor/AllMothers1';
import AllMothers2 from '../pages/Doctor/AllMothers2';
import AllMothers3 from '../pages/Doctor/AllMothers3';
import AllMotherFour from '../pages/Doctor/AllMotherFour';
import AllMotherFive from '../pages/Doctor/AllMotherFive';
import PregnancyTracker from '../pages/Doctor/PregnancyTracker';
import BabyNewOne from '../pages/Doctor/BabyNewOne';
import BabyNewTwo from '../pages/Doctor/BabyNewTwo';
import BabyNewThree from '../pages/Doctor/BabyNewThree';
import BabyNew4 from '../pages/Doctor/BabyNew4';
import BabyNew5 from '../pages/Doctor/BabyNew5';
import BabyNewSix from '../pages/Doctor/BabyNewSix';
import BabyNewSeven from '../pages/Doctor/BabyNewSeven';









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
      <Route path="/babyrefer" element={<BabyRefer />} />
      <Route path="/motherrefer" element={<MotherRefer />} />
      <Route path="/doctorcalendar" element={<DoctorCalendar />} />
      <Route path="/motherall" element={<MotherAll />} />
      <Route path="/babiesall" element={<BabiesAll />} />
      <Route path="/babyGrowthChecker" element={<BabyGrowthChecker />} />
      <Route path="/motherPregnancy" element={<MotherPregnancy />} />
      <Route path="/recommandations" element={<Recommandations />} />
      <Route path="/expectantmother/1" element={<Mrisk1 />} />
      <Route path="/expectantmother/2" element={<Mrisk2 />} />
      <Route path="/expectantmother/3" element={<NonThree />} />
      <Route path="/expectantmother/4" element={<NonFour />} />
      <Route path="/expectantmother/5" element={<NonFive />} />
      <Route path="/expectantmother/6" element={<NonSix />} />
      <Route path="/mother/1" element={<AllMothers1 />} />
      <Route path="/mother/2" element={<AllMothers2 />} />
      <Route path="/mother/3" element={<AllMothers3 />} />
      <Route path="/mother/4" element={<AllMotherFour />} />
      <Route path="/mother/5" element={<AllMotherFive />} />
      <Route path="/pregnancyTracker" element={<PregnancyTracker />} />
      <Route path="/baby/1" element={<BabyNewOne />} />
      <Route path="/baby/2" element={<BabyNewTwo />} />
      <Route path="/baby/3" element={<BabyNewThree />} />
      <Route path="/baby/4" element={<BabyNew4 />} />
      <Route path="/baby/5" element={<BabyNew5 />} />
      <Route path="/baby/6" element={<BabyNewSix />} />
      <Route path="/baby/7" element={<BabyNewSeven />} />



      




      
      









      //Crud routes
      <Route path="/crud1" element={<Crud1 />} />
      <Route path="/crudupdate/:id" element={<Clinics />} />
    </Routes>
  );
};

export default DoctorRoutes;
