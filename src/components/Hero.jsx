import React from "react";
import HeroImg from "../assets/hero-boy-food.jpg"; // apni image ka path yaha sahi karo

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero-text">
        <h1>Rail Journey ka Swad</h1>
        <p>Fresh food delivered to your seat.</p>
        <button className="btn">Order Now</button>
      </div>
      <div className="hero-image">
        <img src={HeroImg} alt="Delivery Boy" />
      </div>
    </section>
  );
};

export default Hero;
