import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/ExpectantMother/Dashboard.jsx';
import Card2 from '../pages/ExpectantMother/Card2';
// import card2 from '../pages/Midwife/Card2';
// import Mothers from '../pages/Midwife/Mothers';
// import Babies from '../pages/Midwife/Babies';
// import Reports from '../pages/Midwife/Reports';
// import Messages from '../pages/Midwife/Messages';

const ExpectantMotherRoutes = () => {
    console.log(' ExpectantMotherRoutes rendered'); // Debug log to verify MidwifeRoutes render
    return (
        <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="card2" element={<Card2 />} />
            {/*<Route path="mothers" element={<Mothers />} />*/}
            {/*<Route path="babies" element={<Babies />} />*/}
            {/*<Route path="reports" element={<Reports />} />*/}
            {/*<Route path="messages" element={<Messages />} />*/}
        </Routes>
    );
};

export default ExpectantMotherRoutes;
