import React from "react";

import Base from "./Base";

function HowOldShouldTheyBe() {
  const title = "IDEAL PERSON";
  const question = "HOW OLD SHOULD THEY BE?";
  const menu = "";
  const nextPage = 5;
  const buttonText = "Finish";
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

export default HowOldShouldTheyBe;
