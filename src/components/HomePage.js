import React from "react";
import HeroBanner from "./HeroBanner";
import OffersSlider from "./OffersSlider";
import CategoryCards from "./CategoryCards";
import PopularItems from "./PopularItems";
import Footer from "./Footer";
import "./HomePage.css"; // custom styles

export default function HomePage() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <HeroBanner />
      </section>

      {/* Offers */}
      <section className="offers-section">
        <h2 className="section-title">Special Offers for Your Journey</h2>
        <OffersSlider />
      </section>

      {/* Order Categories */}
      <section className="category-section" id="order">
        <h2 className="section-title">Order by Category</h2>
        <CategoryCards />
      </section>

      {/* Popular Items */}
      <section className="popular-section">
        <h2 className="section-title">Most Loved Dishes</h2>
        <PopularItems />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
