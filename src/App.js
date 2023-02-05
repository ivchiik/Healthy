import React, { useState } from "react";
import "./App.css";
import Meal from "./Components/Meal";
import { breakfastOpt, lunDinOpt, supperOpt } from "./Data/Data";
import MealDes from "./Components/MealDes";

function App() {
  return (
    <div className="wrapper">
      <div className="header">
        <img
          src={require("./Assets/background-header.jpg")}
          alt=""
          className="back-header"
        />
        <h1 className="quote-head">
          “He who has health has hope and he who has hope has everything.”
        </h1>
        <button className="btn-header">Get Started</button>
      </div>

      <div className="main">
        <Meal title="Breakfast" id="bf" options={breakfastOpt} />
        <Meal title="Lunch/Dinner" id="ld" options={lunDinOpt} />
        <Meal title="Supper" id="sup" options={supperOpt} />
      </div>
      <MealDes />
      <div className="footer"></div>
    </div>
  );
}

export default App;
