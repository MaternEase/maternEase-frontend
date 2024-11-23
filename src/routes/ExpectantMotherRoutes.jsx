// src/routes/ExpectantMotherRoutes.jsx

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/ExpectantMother/Dashboard.jsx';
import ReportOne from "../pages/ExpectantMother/ReportOne.jsx";
import PregnancyHistory from '../pages/ExpectantMother/PregnancyHistory.jsx';
import TimeSlots from "../pages/ExpectantMother/TimeSlots.jsx";
import FullCalendar from "../pages/ExpectantMother/FullCalendar.jsx";
import ReportTwo from "../pages/ExpectantMother/ReportTwo.jsx";
import ReportThree from "../pages/ExpectantMother/ReportThree.jsx";
import FundalChart from "../pages/ExpectantMother/FundalChart.jsx";
import Child1 from "../pages/ExpectantMother/Child1.jsx";
import Child2 from "../pages/ExpectantMother/Child2.jsx";
import PregnancyRecord from "../pages/ExpectantMother/PregnancyRecord.jsx";
import Profile from "../pages/ExpectantMother/Profile.jsx";
import Allevents from "../pages/ExpectantMother/Allevents.jsx";
import ChildrenDetails from "../pages/ExpectantMother/ChildrenDetails.jsx";
// import WeightGainChart from "../pages/ExpectantMother/WeightGainChart.jsx";

const ExpectantMotherRoutes = () => {
    console.log('ExpectantMotherRoutes rendered'); // Debug log to verify MidwifeRoutes render
    return (
        <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="pregnancyrecord" element={<PregnancyRecord />} />
            <Route path="fundalchart" element={<FundalChart />} />
            <Route path="full-calendar" element={<FullCalendar />} />
            <Route path="profile/undefined" element={<Profile />} />
            <Route path="allevents" element={<Allevents />} />


            <Route path="timeslots" element={<TimeSlots />} />
            <Route path="reportone" element={<ReportOne />} />
            <Route path="pregnancy-history" element={<PregnancyHistory />} />
            <Route path="reporttwo" element={<ReportTwo />} />
            <Route path="reportthree" element={<ReportThree />} />

            <Route path="/childrendetails" element={<ChildrenDetails />} />
            <Route path="/children/child2" element={<Child2 />} />
            {/*<Route path="weightchart" element={<WeightGainChart />} />*/}
            {/*<Route path="mothers" element={<Mothers />} />*/}
            {/*<Route path="babies" element={<Babies />} />*/}
            {/*<Route path="reports" element={<Reports />} />*/}
            {/*<Route path="messages" element={<Messages />} />*/}
        </Routes>
    );
};

export default ExpectantMotherRoutes;
