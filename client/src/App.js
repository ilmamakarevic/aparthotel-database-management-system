import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import Sidebar from './components/Sidebar';
import LoginForm from './pages/LoginForm';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/login';
  const hideSidebar = location.pathname === '/login';

  return (
    <div className="app">
      {!hideNavbar && <Navbar />}
      
      <div className="main-content-wrapper">
        {!hideSidebar && <Sidebar />}
        
        <main className={`content-area ${!hideSidebar ? 'with-sidebar' : ''}`}>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}