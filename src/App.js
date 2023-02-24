import React, { useState } from "react";
import "./App.css";
import Meal from "./Components/Meal";
import { breakfastOpt, lunDinOpt, supperOpt } from "./Data/Data";
import MealDes from "./Components/MealDes";
import { Link } from "react-scroll";
import {breakfastDes, lunDinDes, supperDes} from "./Data/Data"

function App() {
  const [description, setDescription] = useState([]);

  const getDescription = (type) => {
    if (type === "bf") {
      setDescription(breakfastDes);
    } else if (type === "ld") {
      setDescription(lunDinDes);
    } else if (type === "sup") {
      setDescription(supperDes);
    }
  }


  return (
    <div className="wrapper">
      <div className="header">
        <img
          src={require("./Assets/background-header.png")}
          alt=""
          className="back-header"
        />
        <h1 className="quote-head">
          “He who has health has hope and he who has hope has everything.”
        </h1>
        <button className="btn-header">
          <Link activeClass="active" to="main" spy={true} smooth={true}>
            Get Started
          </Link>
        </button>
      </div>

      <div className="main">
        <Meal
          title="Breakfast"
          id="bf"
          options={breakfastOpt}
          getDescription={getDescription}
        />
        <Meal
          title="Lunch/Dinner"
          id="ld"
          options={lunDinOpt}
          getDescription={getDescription}
        />
        <Meal
          title="Supper"
          id="sup"
          options={supperOpt}
          getDescription={getDescription}
        />
      </div>

      <MealDes description={description} />

      <div className="footer"></div>
    </div>
  );
}

export default App;
