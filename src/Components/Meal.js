import React from "react";

const Meal = (props) => {
  const { title, options, id } = props;

  const Mstyle = {
    backgroundColor: "#cccccc",
    backgroundImage: "linear-gradient(greenyellow, yellow)",
  };

  const generateStyle = () => {
    if (id === "bf") {
        return 
    }
    };
    

  return (
    <div className="meal" style={Mstyle}>
      <h2 className="mealTitle">{title}</h2>
      <a href="" className="opt">
        {options}
      </a>
    </div>
  );
};

export default Meal;
