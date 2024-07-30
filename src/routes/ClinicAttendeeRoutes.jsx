import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/ClinicAttendee/Dashboard';
import Profile from '../pages/ClinicAttendee/Profile';
import Immunization from '../pages/ClinicAttendee/Immunization';
import Health_charts from '../pages/ClinicAttendee/Health_charts';
import Progress_charts from '../pages/ClinicAttendee/Progress_charts';
import Growth from '../pages/ClinicAttendee/Growth';
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
            {/*<Route path="/shedules" element={<Shedules />} />*/}
            {/*<Route path="/reports" element={<Reports />} />*/}
        </Routes>
    );
};

export default ClinicAttendeeRoutes;