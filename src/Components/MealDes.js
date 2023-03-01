import React, { useState, useEffect } from "react";

const MealDes = (props) => {
  const { title, description } = props;
  const [result, setResult] = useState("");
  const [desTitle, setDesTitle] = useState("");

   useEffect(() => {
     handleClick();
   });
  const handleClick = () => {
    setDesTitle(title);
    setResult(description);
  };

  return (
    <div className="mealDes">
      <h1 className="resTitle">{desTitle}</h1>
      <p className="res">{result}</p>
    </div>
  );
};

export default MealDes;
