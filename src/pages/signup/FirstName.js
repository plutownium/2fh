import React from "react";

import Base from "./Base";

function FirstNameInput() {
  return (
    <div className="signup-menu-width">
      <input
        placeholder="FIRST NAME"
        className="w-100 signup-input-height menu-styling"
      />
      <p className="menu-encouragement">Josh has a nice ring to it...</p>
    </div>
  );
}

function Firstname() {
  const title = "ABOUT YOU";
  const question = "WHAT'S YOUR FIRST NAME?";
  const menu = FirstNameInput();
  const nextPage = 1; // 0 indexed, so next pg  is 1
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

export default Firstname;
