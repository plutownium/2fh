import React from "react";

import Base from "./Base";

function IAmAInput() {
  return (
    <div className="signup-menu-width" className="d-flex flex-col">
      <input
        placeholder="MAN"
        className="w-100 signup-input-height menu-styling "
      />
      <input
        placeholder="WOMAN"
        className="w-100 mt-2 signup-input-height menu-styling "
      />
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
