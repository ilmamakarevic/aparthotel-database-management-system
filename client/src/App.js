import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar';
import Sidebar from './components/Sidebar';
import LoginForm from './pages/LoginForm';
import Dashboard from './pages/Dashboard';
import FinancialReports from './pages/FinancialReports';
import GeneralReports from './pages/GeneralReports';
import OwnerReport from './pages/OwnerReport';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        {window.location.pathname !== '/login' && <Navbar />}
        
        <div className="main-content-wrapper">
          {window.location.pathname !== '/login' && <Sidebar />}
          
          <main className={`content-area ${window.location.pathname !== '/login' ? 'with-sidebar' : ''}`}>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/financial-reports" element={<FinancialReports />} />
              <Route path="/general-reports" element={<GeneralReports />} />
              <Route path="/owner-report" element={<OwnerReport />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;