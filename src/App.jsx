import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'antd/dist/reset.css';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import AppLayout from './components/layout/AppLayout';
import MidwifeRoutes from './routes/MidwifeRoutes';
import DoctorRoutes from './routes/DoctorRoutes';
// import PatientRoutes from './routes/PatientRoutes';

const userType = 'Doctor'; // Hardcoded user type

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<AppLayout userType={userType} />}>
          <Route path="midwife/*" element={<MidwifeRoutes />} />
          <Route path="doctor/*" element={<DoctorRoutes />} />
          {/* Add other user type routes here */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
