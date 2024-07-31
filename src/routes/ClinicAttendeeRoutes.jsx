import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/ClinicAttendee/Dashboard';
import Profile from '../pages/ClinicAttendee/Profile';
import Immunization from '../pages/ClinicAttendee/Immunization';
import Health_charts from '../pages/ClinicAttendee/Health_charts';
import Progress_charts from '../pages/ClinicAttendee/Progress_charts';
import Growth from '../pages/ClinicAttendee/Growth';
import Child_details1 from '../pages/ClinicAttendee/Child_details1';
import Child_details2 from '../pages/ClinicAttendee/Child_details2';
import Child_details3 from '../pages/ClinicAttendee/Child_details3';
import Child_details4 from '../pages/ClinicAttendee/Child_details4';
import Child_details5 from '../pages/ClinicAttendee/Child_details5';
import Child_details6 from '../pages/ClinicAttendee/Child_details6';
import Weight from '../pages/ClinicAttendee/Weight';
import Additional_details from '../pages/ClinicAttendee/Additional_details';
import ChildGrowthChart from '../pages/ClinicAttendee/ChildGrowthChart';
// import Reports from '../pages/Doctor/Reports';
// import Shedules from '../pages/Doctor/ClinicShedules';
// import Clinics from '../pages/Doctor/Clinics';


const ClinicAttendeeRoutes = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile1" element={<Profile />} />
            <Route path="/immunization" element={<Immunization />} />
            <Route path="/health_charts" element={<Health_charts />} />
            <Route path="/progress_charts" element={<Progress_charts />} />
            <Route path="/growth" element={<Growth/>} />
            <Route path="/child_details1" element={<Child_details1/>} />
            <Route path="/child_details2" element={<Child_details2/>} />
            <Route path="/child_details3" element={<Child_details3/>} />
            <Route path="/child_details4" element={<Child_details4/>} />
            <Route path="/child_details5" element={<Child_details5/>} />
            <Route path="/child_details6" element={<Child_details6/>} />
            <Route path="/weight" element={<Weight/>} />
            <Route path="/additional_details" element={<Additional_details/>} />
            <Route path="/ChildGrowthChart" element={<ChildGrowthChart />} />
            {/*<Route path="/reports" element={<Reports />} />*/}
        </Routes>
    );
};

export default ClinicAttendeeRoutes;