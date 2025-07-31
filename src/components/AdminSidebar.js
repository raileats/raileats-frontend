// src/components/AdminSidebar.js
import React from "react";

const sidebarItems = [
  "Dashboard",
  "Orders",
  "Outlets",
  "Menu",
  "Master",
  "Train",
  "Logout",
];

function AdminSidebar() {
  return (
    <div className="w-60 h-screen bg-gray-800 text-white flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold p-4 border-b border-gray-600">RailEats Admin</h2>
        <ul className="p-2">
          {sidebarItems.map((item, index) => (
            <li
              key={index}
              className="p-3 hover:bg-gray-700 cursor-pointer border-b border-gray-700"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 text-sm text-gray-400 border-t border-gray-700">v.21</div>
    </div>
  );
}

export default AdminSidebar;
