import React from "react";

import { useHistory } from "react-router-dom";

import Arrow from "../../assets/icons/icons8-arrow-pointing-left-24.png";
import Eye from "../../assets/icons/icons8-eye-24.png";

import "./Base.css";

function Base(props) {
  const history = useHistory();

  const changePage = (next) => {
    // relocate to next pg

    // todo: push state up to app.js and send back down into post-signup panel
    if (next === 0) {
      history.push("/signup/firstName");
    } else if (next === 1) {
      history.push("/signup/iAmA");
    } else if (next === 2) {
      history.push("/signup/birthdate");
    } else if (next === 3) {
      history.push("/signup/familyValues");
    } else if (next === 4) {
      history.push("/signup/ageRange");
    } else if (next === 5) {
      history.push("/auth/home");
    }
  };

  return (
    <section id="signup-section">
      <div id="signup-bg">
        <div
          id="signup-info-card"
          className="d-flex flex-col justify-content-center align-items-center"
        >
          <div id="signup-info-card-cont">
            <div id="sic-back-btn-cont">
              <button
                onClick={() => {
                  changePage(props.nextPage - 2);
                }}
                id="sic-back-btn"
              >
                {" "}
                <img alt="back button" src={Arrow} />{" "}
              </button>
            </div>
            <div id="signup-main-cont">
              <div id="signup-title-cont">
                <h2>{props.title}</h2>
              </div>
              <div
                id="question-box-cont"
                className="signup-std-width menu-height-adjust"
              >
                <h3 className="signup-input-height center-text">
                  {props.question}
                </h3>
              </div>
              <div id="menu-container" className="menu-height-adjust">
                {props.menu}
              </div>
              <div id="visibility-warn-container">
                <img alt="an eye" src={Eye} />
                <p>THIS INFO WILL BE VISIBLE TO OTHERS</p>
              </div>
              <div
                id="next-btn-cont"
                className="d-flex justify-content-center align-items-center"
              >
                {props.buttonText === "Finish" ? (
                  <button
                    className="brand-yellow-bg small-mod-finished"
                    id="signup-card-btn"
                    onClick={() => {
                      changePage(props.nextPage);
                    }}
                  >
                    {props.buttonText}
                  </button>
                ) : (
                  <button
                    className="brand-yellow-bg"
                    id="signup-card-btn"
                    onClick={() => {
                      changePage(props.nextPage);
                    }}
                  >
                    {props.buttonText}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Base;
