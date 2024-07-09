import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import SignIn from '../components/Auth/SignIn';
import  Dashboard  from '../pages/Midwife/Dashboard';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/midwife/dashboard" element={<Dashboard />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRouter;
