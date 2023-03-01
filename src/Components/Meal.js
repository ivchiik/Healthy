import React from "react";
import "../App.css";
import { Link } from "react-scroll";

const Meal = (props) => {
  const { title, options, id, getDescription } = props;

  const generateImg = () => {
    if (id === "bf") {
      return (
        <img
          src={require("../Assets/breakfast.jpg")}
          alt=""
          style={{
            width: "80px",
            borderRadius: "50%",
          }}
        />
      );
    } else if (id === "ld") {
      return (
        <img
          src={require("../Assets/lDinner.jpg")}
          alt=""
          style={{
            width: "90px",
            borderRadius: "20%"
          }}
        />
      );
    } else if (id === "sup") {
      return (
        <img
          src={require("../Assets/supper.webp")}
          alt=""
          style={{
            width: "100px",
            borderRadius: "40%",
          }}
        />
      );
    }
  };

  return (
    <div className="meal">
      <h1 className="mealTitle">{title}</h1>
      <div className="wrapperMeal">
        <a className="opt">
          <Link
            activeClass="active"
            to="mealDes"
            spy={true}
            smooth={true}
            onClick={() => {
              getDescription(id);
            }}
          >
            {options}
          </Link>
        </a>
        {generateImg()}
      </div>
    </div>
  );
};

export default Meal;
