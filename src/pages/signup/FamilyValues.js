import React, { useState } from "react";

import Base from "./Base";

function FamilyValues() {
  const [values, setValues] = useState([]);

  const addValueFunction = (value, currentVals) => {
    const currentValues = [...currentVals];
    const newValues = currentValues.push(value);
    console.log(12, newValues, currentValues, currentVals);
    setValues(newValues);
  };

  const valueInput = (value, currentVals, addValueFunction, index) => {
    // console.log(16, value, currentVals, addValueFunction);
    const distributedValues = [...currentVals];
    // console.log(currentVals, distributedValues);
    return (
      <div
        key={index}
        onClick={() => {
          addValueFunction(value, distributedValues);
        }}
        // className={
        //   distributedValues.includes(value)
        //     ? "family-value-btn signup-input-height mb-2 selected-div"
        //     : "family-value-btn signup-input-height mb-2"
        // }
      >
        <input type="radio" />
        <label>{value}</label>
      </div>
    );
  };

  const familyValues = (values, currentValues, addValueFunction) => {
    console.log(values, currentValues, addValueFunction);
    return (
      <div className="d-flex flex-wrap justify-content-between">
        {values.map(function (element, index) {
          console.log(element);
          return valueInput(element, currentValues, addValueFunction, index);
        })}
      </div>
    );
  };

  const title = "IDEAL PERSON";
  const question = "WHAT ARE YOUR IDEAL FAMILY VALUES?";
  const menu = familyValues(
    ["Generosity", "Honesty", "Ambition", "Modesty", "Teamwork", "Saving"],
    values,
    addValueFunction
  );
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
