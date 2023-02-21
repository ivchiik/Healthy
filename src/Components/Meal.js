import React from "react";
import "../App.css";


const Meal = (props) => {
  const { title, options, id } = props;

  const generateImg = () => {
    if (id === "bf") {
      return (
        <img
          src={require("../Assets/breakfast.jpg")}
          alt=""
          style={{
            width: "90px",
            borderRadius: "50%",
          }}
        />
      );
    } else if (id === "ld") {
      return (
        <img
          src={require("../Assets/lDinner.jpg")}
          alt=""
          style={{ width: "90px" }}
        />
      );
    } else if (id === "sup") {
      return (
        <img
          src={require("../Assets/supper.webp")}
          alt=""
          style={{
            width: "100px",
            borderRadius: "50%",
          }}
        />
      );
    }
  };

  return (
    <div className="meal">
      <h2 className="mealTitle">{title}</h2>
      <div className="wrapperMeal">
        <a href="" className="opt">
          {options}
        </a>
        {generateImg()}
      </div>
    </div>
  );
};

export default Meal;
