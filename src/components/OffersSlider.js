import React from "react";
import "./OffersSlider.css";

export default function OffersSlider() {
  const offers = [
    {
      img: "https://images.unsplash.com/photo-1604908176997-5c9c0b6cdd3e",
      text: "20% OFF on your first order"
    },
    {
      img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
      text: "Free dessert with every Biryani"
    },
    {
      img: "https://images.unsplash.com/photo-1590080875783-90b38d82bd63",
      text: "Special Train Combo Meals from ₹199"
    }
  ];

  return (
    <div className="offers-slider">
      {offers.map((offer, i) => (
        <div className="offer-card" key={i}>
          <img src={offer.img} alt="offer" />
          <div className="offer-text">{offer.text}</div>
        </div>
      ))}
    </div>
  );
}
