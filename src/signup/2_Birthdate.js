import React from "react";

import Base from "./Base";

function Birthdate() {
  const title = "ABOUT YOU";
  const question = "WHEN WERE YOU BORN?";
  const menu = "";
  const nextPage = 3;
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

export default Birthdate;
