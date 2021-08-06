import React, { useState } from "react";

import Base from "./Base";

function FamilyValues() {
  const [values, setValues] = useState([]);

  const addValue = (value, currentVals) => {
    console.log("9:", value, currentVals);
    const currentValues = [...currentVals];
    console.log(10, currentValues, value);
    const newValues = currentValues.push(value);
    console.log(12, newValues);
    setValues(newValues);
    console.log(values);
  };

  const valueInput = (value, currentVals) => {
    console.log(currentVals);
    return (
      <div
        onClick={() => {
          addValue(value, currentVals);
        }}
        className={
          currentVals.includes(value)
            ? "family-value-btn signup-input-height mb-2 selected-div"
            : "family-value-btn signup-input-height mb-2"
        }
      >
        <input type="radio" />
        <label>{value}</label>
      </div>
    );
  };

  const familyValues = (
    <div className="d-flex flex-wrap justify-content-between">
      {valueInput("Generosity", values)}
      {valueInput("Honesty", values)}
      {valueInput("Ambition", values)}
      {valueInput("Modesty", values)}
      {valueInput("Teamwork", values)}
      {valueInput("Saving", values)}
    </div>
  );

  const title = "IDEAL PERSON";
  const question = "WHAT ARE YOUR IDEAL FAMILY VALUES?";
  const menu = familyValues;
  const nextPage = 4;
  const buttonText = "NEXT";
  return (
    <Base
      title={title}
      question={question}
      menu={menu}
      nextPage={nextPage}
      buttonText={buttonText}
    />
  );
}

export default FamilyValues;
