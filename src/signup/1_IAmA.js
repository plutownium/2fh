import React from "react";

import Base from "./Base";

function IAmA() {
  const title = "ABOUT YOU";
  const question = "I AM A...";
  const menu = "";
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
