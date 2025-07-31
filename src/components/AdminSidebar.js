// src/components/AdminSidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AdminSidebar.css';

function AdminSidebar() {
  return (
    <div className="sidebar">
      <h2>RailEats Admin</h2>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/orders">Orders</Link></li>
        <li><Link to="/outlets">Outlets</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/master">Master</Link></li>
        <li><Link to="/train">Train</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
      <footer>v.21</footer>
    </div>
  );
}

export default AdminSidebar;
