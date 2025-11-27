import React from "react";
import Hero from "./Hero";
import Steps from "./Steps";
import Quote from "./Quote";

const HomePage = () => {
  return (
    <div className="home-container">
      <Hero />
      <Steps />
      <Quote />
    </div>
  );
};

export default HomePage;
