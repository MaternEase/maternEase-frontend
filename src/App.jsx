import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'antd/dist/reset.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import AppLayout from './components/layout/AppLayout';
import MidwifeRoutes from './routes/MidwifeRoutes';
import DoctorRoutes from './routes/DoctorRoutes';
import AdminRoutes from './routes/AdminRoutes';
import SignIn from './components/Auth/SignIn';
import { useAuth } from './hooks/useAuth';
import PrivateRoute from './routes/PrivateRoute';

const App = () => {
  const { user } = useAuth();

  console.log('App user:', user);  // Debug log to verify user
  console.log('App user role:', user?.role);  // Debug log to verify user role

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
        <Route element={<PrivateRoute allowedRoles={['ADMIN', 'MIDWIFE', 'DOCTOR']} />}>
          <Route path="/" element={<AppLayout />}>
            <Route path="midwife/*" element={<MidwifeRoutes />} />
            <Route path="doctor/*" element={<DoctorRoutes />} />
            <Route path="admin/*" element={<AdminRoutes />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
