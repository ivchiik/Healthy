import React, { useState } from "react";
import "./App.css";
import Meal from "./Components/Meal";
import { breakfastOpt, lunDinOpt, supperOpt } from "./Data/Data";
import MealDes from "./Components/MealDes";
import { Link } from "react-scroll";
import {breakfastDes, lunDinDes, supperDes} from "./Data/Data"
import SocialIcons from "./Components/SocialIcons";

function App() {
  const bfTitle = "Breakfast";
  const ldTitle = "Lunch/Dinner";
  const supTitle = "Supper";
  const [dTitle, setDTitle] = useState("");
  const [description, setDescription] = useState([]);

  const getDescription = (type) => {
    if (type === "bf") {
      setDTitle(bfTitle);
      setDescription(breakfastDes);
    } else if (type === "ld") {
      setDTitle(ldTitle);
      setDescription(lunDinDes);
    } else if (type === "sup") {
      setDTitle(supTitle);
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
        <h1 className="quote-head wrap">
          “He who has health has hope and he who has hope has everything.”
        </h1>
        <button className="btn-header wrap">
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

      <MealDes description={description} title={dTitle} />

      <div className="footer">
        <h1 className="footTitle">Healthy</h1>
        <div className="footerWrap">
          <ul>
            <li>
              For more information please contact me with info given here!!!
            </li>
            <li>+995 599 44 66 55</li>
            <li>ivasaata@gmail.com</li>
          </ul>

          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <SocialIcons />
        </div>
        <p classname="copyright">&copy; 2021 Huddle. All rights reserved</p>
      </div>
    </div>
  );
}

export default App;
