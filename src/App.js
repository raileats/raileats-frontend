import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 🏠 Home Page Components
import HomePage from './components/HomePage';
import Footer from './components/Footer';

// 👤 Customer Pages
import CustomerLogin from './components/CustomerLogin';
import CustomerDashboard from './components/CustomerDashboard';

// 🛠 Admin Panel Components
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
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<><HomePage /><Footer /></>} />
        <Route path="/customer-login" element={<CustomerLogin />} />
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />

        {/* Admin Routes with Sidebar */}
        <Route
          path="/dashboard"
          element={
            <div className="admin-layout">
              <AdminSidebar />
              <div className="main-content">
                <Dashboard />
              </div>
            </div>
          }
        />
        <Route
          path="/orders"
          element={
            <div className="admin-layout">
              <AdminSidebar />
              <div className="main-content">
                <Orders />
              </div>
            </div>
          }
        />
        <Route
          path="/outlets"
          element={
            <div className="admin-layout">
              <AdminSidebar />
              <div className="main-content">
                <Outlets />
              </div>
            </div>
          }
        />
        <Route
          path="/menu"
          element={
            <div className="admin-layout">
              <AdminSidebar />
              <div className="main-content">
                <Menu />
              </div>
            </div>
          }
        />
        <Route
          path="/master"
          element={
            <div className="admin-layout">
              <AdminSidebar />
              <div className="main-content">
                <Master />
              </div>
            </div>
          }
        />
        <Route
          path="/train"
          element={
            <div className="admin-layout">
              <AdminSidebar />
              <div className="main-content">
                <Train />
              </div>
            </div>
          }
        />
        <Route
          path="/logout"
          element={
            <div className="admin-layout">
              <AdminSidebar />
              <div className="main-content">
                <Logout />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
