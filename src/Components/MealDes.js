import React, { useState, useEffect } from "react";

const MealDes = (props) => {
  const { title, description } = props;
  const [result, setResult] = useState("");
   useEffect(() => {
     handleClick();
   });
  const handleClick = () => {
    setResult(description);
  }

  return (
    <div className="mealDes">
      <h1>Description</h1>
      <p className="res">{result}</p>
    </div>
  );
};

export default MealDes;
