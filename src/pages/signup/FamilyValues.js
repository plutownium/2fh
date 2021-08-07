import React, { useState } from "react";

import Base from "./Base";

function FamilyValues() {
  const [familyValues, setFamilyValues] = useState([]);

  const addValue = (newValue, currentVals) => {
    setFamilyValues((currentVals) => [...currentVals, newValue]);
  };

  const title = "IDEAL PERSON";
  const question = "WHAT ARE YOUR IDEAL FAMILY VALUES?";
  const menu = (
    <div className="d-flex flex-wrap justify-content-between">
      {[
        "Generosity",
        "Integrity",
        "Teamwork",
        "Saving",
        "Ambition",
        "Modesty",
      ].map(function (element, index) {
        return (
          <div
            key={index}
            onClick={() => {
              addValue(element, familyValues);
            }}
            className={
              familyValues.includes(element)
                ? "family-value-btn signup-input-height mb-2 selected-div"
                : "family-value-btn signup-input-height mb-2"
            }
          >
            <input type="radio" />
            <label>{element}</label>
          </div>
        );
      })}
    </div>
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
