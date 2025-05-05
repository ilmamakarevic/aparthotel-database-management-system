import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import LoginForm from './pages/LoginForm';
import Dashboard from './pages/Dashboard';

function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/login'; // Skriva navbar na /login

  return (
    <div className="app">
      {!hideNavbar && <Navbar />} {/* Navbar se ne prikazuje na /login */}
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

// Glavni wrapper zbog useLocation
export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}