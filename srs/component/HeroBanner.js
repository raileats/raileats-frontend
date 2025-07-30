import React from "react";

const HeroBanner = () => {
  return (
    <div style={{
      backgroundImage: "url('https://example.com/hero-banner.jpg')",
      height: "300px",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: "2.5rem",
      fontWeight: "bold",
      textShadow: "2px 2px 4px #000"
    }}>
      RailEats - Train Food Delivered Fresh!
    </div>
  );
};

export default HeroBanner;
