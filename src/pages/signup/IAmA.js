import React from "react";

import Base from "./Base";

function IAmAInput() {
  return (
    <div>
      <input placeholder="MAN" />
      <input placeholder="WOMAN" />
      <p>Note to reviewers: This is a placeholder as it is a site for gays.</p>
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
