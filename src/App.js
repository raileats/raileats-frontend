// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminSidebar from './components/AdminSidebar';
import Dashboard from './components/Dashboard';
import Orders from './components/Orders';
import Outlets from './components/Outlets';
import Menu from './components/Menu';
import Master from './components/Master';
import Train from './components/Train';
import Logout from './components/Logout';

function App() {
  return (
    <Router>
      <div className="admin-layout">
        <AdminSidebar />
        <div className="main-content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/outlets" element={<Outlets />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/master" element={<Master />} />
            <Route path="/train" element={<Train />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
