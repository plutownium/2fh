import React from "react";

import Base from "./Base";

function IdealPerson() {
  const GenerateFamilyValues = () => {
    return (
      <div>
        <div>
          <input type="radio" />
          <label>Generosity</label>
        </div>
        <div>
          <input type="radio" />
          <label>Honesty</label>
        </div>
        <div>
          <input type="radio" />
          <label>Ambition</label>
        </div>
        <div>
          <input type="radio" />
          <label>Modesty</label>
        </div>
        <div>
          <input type="radio" />
          <label>Teamwork</label>
        </div>
        <div>
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

export default IdealPerson;
