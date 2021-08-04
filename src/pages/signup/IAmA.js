import React, { useState } from "react";

import Base from "./Base";

function IAmAInput() {
  const [gender, setGender] = useState(null);

  return (
    <div
      id="signup-sml-screen-adjust"
      className="signup-menu-width d-flex flex-col"
    >
      <input
        placeholder="MAN"
        className={
          gender === "male"
            ? "w-100 mb-2 signup-input-height menu-styling gender-decider-input signup-sml-height-adjust selected-div "
            : "w-100 mb-2 signup-input-height menu-styling gender-decider-input signup-sml-height-adjust"
        }
        onClick={() => {
          setGender("male");
        }}
      />
      <input
        placeholder="WOMAN"
        className={
          gender === "female"
            ? "w-100 signup-input-height menu-styling gender-decider-input signup-sml-height-adjust selected-div"
            : "w-100 signup-input-height menu-styling gender-decider-input signup-sml-height-adjust"
        }
        onClick={() => {
          setGender("female");
        }}
      />
      <p className="menu-encouragement">
        Note to reviewers: This is a placeholder as it is a site for gays.
      </p>
    </div>
  );
}

function IAmA() {
  const title = "ABOUT YOU";
  const question = "I AM A...";
  const menu = IAmAInput();
  const nextPage = 2;
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

export default IAmA;
