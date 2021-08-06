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

  const valueInput = (value) => {
    return (
      <div
        onClick={() => {
          addValue(value);
        }}
        className={
          values.includes(value)
            ? "family-value-btn signup-input-height mb-2"
            : "family-value-btn signup-input-height mb-2 selected-div"
        }
      >
        <input type="radio" />
        <label>{value}</label>
      </div>
    );
  };

  const GenerateFamilyValues = () => {
    return (
      <div className="d-flex flex-wrap justify-content-between">
        {valueInput("Generosity")}
        <div
          onClick={() => {
            addValue("Honesty");
          }}
          className={
            values.includes("Honesty")
              ? "family-value-btn signup-input-height mb-2"
              : "family-value-btn signup-input-height mb-2 selected-div"
          }
        >
          <input type="radio" />
          <label>Honesty</label>
        </div>
        <div
          onClick={() => {
            addValue("Ambition");
          }}
          className={
            values.includes("Ambition")
              ? "family-value-btn signup-input-height mb-2 selected-div"
              : "family-value-btn signup-input-height mb-2"
          }
        >
          <input type="radio" />
          <label>Ambition</label>
        </div>
        <div
          onClick={() => {
            addValue("Modesty");
          }}
          className={
            values.includes("Modesty")
              ? "family-value-btn signup-input-height selected-div"
              : "family-value-btn signup-input-height"
          }
        >
          <input type="radio" />
          <label>Modesty</label>
        </div>
        <div
          onClick={() => {
            addValue("Teamwork");
          }}
          className={
            values.includes("Teamwork")
              ? "family-value-btn signup-input-height selected-div"
              : "family-value-btn signup-input-height"
          }
        >
          <input type="radio" />
          <label>Teamwork</label>
        </div>
        <div
          onClick={() => {
            addValue("Saving");
          }}
          className={
            values.includes("Saving")
              ? "family-value-btn signup-input-height selected-div"
              : "family-value-btn signup-input-height"
          }
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
