import React, { useState } from "react";

import Base from "./Base";

function AgeSelect(bottomEnd, upperEnd) {
  function generateAges() {
    const arr = [];

    const startAge = 18;
    const endAge = 65;

    for (let i = startAge; i <= endAge; i++) {
      arr.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    return arr;
  }

  return (
    <div className="d-flex justify-content-between">
      <div className="age-range-input ">
        <select
          className="menu-styling bday-menu-h w-100 signup-input-height"
          onChange={(event) => bottomEnd(event)}
        >
          <option value={19}>19</option>
          {generateAges()}
        </select>
      </div>
      <div className="age-range-spacer d-flex justify-content-center align-items-center">
        <p className="m-0 p-0">to</p>
      </div>
      <div className="age-range-input">
        <select
          className="menu-styling bday-menu-h w-100 signup-input-height"
          onChange={(event) => upperEnd(event)}
        >
          <option value={19}>19</option>
          {generateAges()}
        </select>
      </div>
    </div>
  );
}

function AgeRange() {
  const [lowEnd, setLowEnd] = useState(null);
  const [highEnd, setHighEnd] = useState(null);

  function bottomEnd(input) {
    console.log(input.target.value);
    setLowEnd(input.target.value);
  }

  function upperEnd(input) {
    console.log(input.target.value);
    setHighEnd(input.target.value);
  }
  const title = "IDEAL PERSON";
  const question = "HOW OLD SHOULD THEY BE?";
  const menu = AgeSelect(bottomEnd, upperEnd);
  const nextPage = 5;
  const buttonText = "Finish";
  // const valuesToPass = lowEnd + highEnd; // fixme
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

export default AgeRange;
