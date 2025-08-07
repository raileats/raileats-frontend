// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Admin components
import AdminSidebar from "./components/AdminSidebar";
import Dashboard from "./components/Dashboard";
import Orders from "./components/Orders";
import Outlets from "./components/Outlets";
import Menu from "./components/Menu";
import Master from "./components/Master";
import Train from "./components/Train";
import Logout from "./components/Logout";

// Customer components
import CustomerLogin from "./components/CustomerLogin";
import CustomerDashboard from "./components/CustomerDashboard";
import HeroBanner from "./components/HeroBanner";
import CategoryCards from "./components/CategoryCards";
import PopularItems from "./components/PopularItems";
import SearchByPNR from "./components/SearchByPNR";
import SearchByTrain from "./components/SearchByTrain";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        {/* ===== Customer Routes ===== */}
        <Route
          path="/"
          element={
            <>
              <HeroBanner />
              <CategoryCards />
              <PopularItems />
              <SearchByPNR />
              <SearchByTrain />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<CustomerLogin />} />
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />

        {/* ===== Admin Panel Routes ===== */}
        <Route
          path="/admin/*"
          element={
            <div className="admin-layout">
              <AdminSidebar />
              <div className="main-content">
                <Routes>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="orders" element={<Orders />} />
                  <Route path="outlets" element={<Outlets />} />
                  <Route path="menu" element={<Menu />} />
                  <Route path="master" element={<Master />} />
                  <Route path="train" element={<Train />} />
                  <Route path="logout" element={<Logout />} />
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
