import React, { useState } from "react";

import Base from "./Base";

function FamilyValues() {
  const [values, setValues] = useState([]);

  const addValue = (value) => {
    const currentValues = [...values];
    const newValues = currentValues.push(value);
    setValues(newValues);
    console.log(values);
  };

  const GenerateFamilyValues = () => {
    return (
      <div className="d-flex flex-wrap justify-content-between">
        <div
          onClick={() => {
            addValue("Generosity");
          }}
          className="family-value-btn signup-input-height mb-2"
        >
          <input type="radio" />
          <label>Generosity</label>
        </div>
        <div
          onClick={() => {
            addValue("Honesty");
          }}
          className="family-value-btn signup-input-height mb-2"
        >
          <input type="radio" />
          <label>Honesty</label>
        </div>
        <div
          onClick={() => {
            addValue("Ambition");
          }}
          className="family-value-btn signup-input-height mb-2"
        >
          <input type="radio" />
          <label>Ambition</label>
        </div>
        <div
          onClick={() => {
            addValue("Modesty");
          }}
          className="family-value-btn signup-input-height"
        >
          <input type="radio" />
          <label>Modesty</label>
        </div>
        <div
          onClick={() => {
            addValue("Teamwork");
          }}
          className="family-value-btn signup-input-height"
        >
          <input type="radio" />
          <label>Teamwork</label>
        </div>
        <div
          onClick={() => {
            addValue("Saving");
          }}
          className="family-value-btn signup-input-height"
        >
          <input type="radio" />
          <label>Saving</label>
        </div>
      </div>
    );
  };

  const title = "IDEAL PERSON";
  const question = "WHAT ARE YOUR IDEAL FAMILY VALUES?";
  const menu = GenerateFamilyValues();
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
