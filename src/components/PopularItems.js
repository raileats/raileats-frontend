// src/components/PopularItems.js
import React from "react";
import "./PopularItems.css";

const items = [
  { name: "Veg Thali", img: "/images/thali.jpg" },
  { name: "Non-Veg Biryani", img: "/images/biryani.jpg" },
  { name: "Masala Dosa", img: "/images/south-indian.jpg" },
  { name: "Veg Pizza", img: "/images/pizza.jpg" },
];

function PopularItems() {
  return (
    <div className="popular-section">
      <h2>Popular Dishes</h2>
      <div className="popular-items">
        {items.map((item, index) => (
          <div key={index} className="popular-card">
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularItems;
