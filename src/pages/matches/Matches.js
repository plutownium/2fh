import React from "react";

import Match1 from "../../assets/marriage/gays-tying-knot.jpg";
import Match2 from "../../assets/marriage/deux-hommes-married.jpg";
import Match3 from "../../assets/marriage/honeymoon.jpg";

import Match from "./Match";

import "./Matches.css";

function Matches() {
  return (
    <div>
      <div
        id="matches-bg"
        className="d-flex justify-content-center align-items-center"
      >
        <div
          id="matches-container"
          className="d-flex justify-content-left align-items-center flex-col"
        >
          <div class="d-flex justify-content-center align-items center">
            <h2 class="my-4 white-text">
              Here Magic Begins. Your Mutual Matches.
            </h2>
          </div>
          <div id="matches-panel-bg">
            <div id="matches-panel-container">
              <Match name={"John Doe"} pfp={Match1} />
              <Match name={"John Doe"} pfp={Match2} />
              <Match name={"John Doe"} pfp={Match3} />
              <Match name={"John Doe"} pfp={Match1} />
              <Match name={"John Doe"} pfp={Match2} />
              <Match name={"John Doe"} pfp={Match3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Matches;
