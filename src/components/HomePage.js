import React from "react";
import HeroBanner from "./HeroBanner";
import OffersSlider from "./OffersSlider";
import CategoryCards from "./CategoryCards";
import PopularItems from "./PopularItems";

export default function HomePage() {
  return (
    <div>
      <HeroBanner />
      <OffersSlider />
      <CategoryCards />
      <PopularItems />
    </div>
  );
}
