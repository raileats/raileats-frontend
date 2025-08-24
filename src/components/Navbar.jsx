import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`navbar ${open ? "active" : ""}`}>
      <h1>🚆🍴 Raileats</h1>
      <div className="menu-toggle" onClick={() => setOpen(!open)}>
        ☰
      </div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
