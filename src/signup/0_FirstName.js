import React from "react";

import Base from "./Base";

function Firstname() {
  const title = "ABOUT YOU";
  const question = "WHAT'S YOUR FIRST NAME?";
  const menu = "";
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
