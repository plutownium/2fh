import React from "react";

import { useHistory } from "react-router-dom";

function Base(props) {
  const history = useHistory();

  const changePage = (next) => {
    // relocate to next pg

    // todo: push state up to app.js and send back down into post-signup panel
    if (next === 1) {
      history.push("/signup/iAmA");
    } else if (next === 2) {
      history.push("/signup/birthdate");
    } else if (next === 3) {
      history.push("/signup/idealPerson");
    } else if (next === 4) {
      history.push("/signup/ageRange");
    } else if (next === 5) {
      history.push("/auth/home");
    }
  };

  return (
    <section id="signup-section">
      <div id="signup-bg">
        <div id="signup-info-card">
          <div>
            <button>
              {" "}
              <img />{" "}
            </button>
          </div>
          <div>
            <div id="signup-title-cont">
              <h2>{props.title}</h2>
            </div>
            <div id="question-box-cont">
              <h3>{props.question}</h3>
            </div>
            <div id="menu-container">{props.menu}</div>
            <div id="visibility-warn-container">
              <img alt="an eye" />
              <p>THIS INFO WILL BE VISIBLE TO OTHERS</p>
            </div>
            <div>
              <button onClick={changePage(props.nextPage)}>
                {props.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Base;
