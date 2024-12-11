import React from "react";
import DollieBlairVideos from "../components/DollieBlairVideos";
import Recommended from "../components/Recommended";
import FoodAndDrink from "../components/Food-Drink";

const HomePage = () => {
  return (
    <div>
      <DollieBlairVideos />
      <Recommended />
      <FoodAndDrink />
    </div>
  );
};

export default HomePage;
