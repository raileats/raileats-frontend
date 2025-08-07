// src/components/HomePage.js
import React from "react";
import HeroBanner from "./HeroBanner";
import OffersSlider from "./OffersSlider";
import CategoryCards from "./CategoryCards";
import PopularItems from "./PopularItems";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <div>
      <HeroBanner />
      <OffersSlider />
      <div id="order"></div> {/* anchor for Order Now */}
      <CategoryCards />
      <PopularItems />
      <Footer />
    </div>
  );
}
