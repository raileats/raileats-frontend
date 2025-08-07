// src/components/HeroBanner.js
import React from "react";
import "./HeroBanner.css";

export default function HeroBanner() {
  return (
    <section className="hero-banner">
      <div className="hero-inner">
        <div className="hero-left">
          <h1 className="hero-title">RailEats</h1>
          <p className="hero-sub">
            Delicious meals delivered to your train seat — fast, fresh & warm.
          </p>

          <div className="hero-actions">
            <a href="#order" className="btn primary">Order Now</a>
            <a href="/customer-login" className="btn outline">Login</a>
          </div>

          <div className="hero-search">
            <input
              type="text"
              placeholder="Enter PNR or Train number"
              aria-label="Search PNR or Train"
            />
            <button className="btn small">Search</button>
          </div>

          <div className="hero-features">
            <div>🚆 Track by PNR</div>
            <div>🍱 Hygiene checked</div>
            <div>⏱️ On-time delivery</div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1604908176997-5c9c0b6cdd3e?auto=format&fit=crop&w=900&q=80"
              alt="Train meal"
            />
            <div className="hero-badge">Flat 20% OFF • First Order</div>
          </div>
        </div>
      </div>
    </section>
  );
}
