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
          <div
            class="d-flex justify-content-center align-items center"
            id="matches-screen-title"
          >
            <h2 class="my-4 white-text">
              Here Magic Begins. <br id="match-screen-title-br" /> Your Mutual
              Matches.
            </h2>
          </div>
          <div id="matches-panel-bg">
            <div id="matches-panel-container">
              <Match
                name={"John Doe"}
                pfp={Match1}
                gender={"Male"}
                mutuals={"1 new"}
                views={"1 new (9 invites)"}
                nudges={"1 new"}
              />
              <Match
                name={"John Doe"}
                pfp={Match2}
                gender={"Male"}
                mutuals={"1 new"}
                views={"1 new (9 invites)"}
                nudges={"1 new"}
              />
              <Match
                name={"John Doe"}
                pfp={Match3}
                gender={"Male"}
                mutuals={"1 new"}
                views={"1 new (9 invites)"}
                nudges={"1 new"}
              />
              <Match
                name={"John Doe"}
                pfp={Match1}
                gender={"Male"}
                mutuals={"1 new"}
                views={"1 new (9 invites)"}
                nudges={"1 new"}
                limit={true}
              />
              <Match
                name={"John Doe"}
                pfp={Match2}
                gender={"Male"}
                mutuals={"1 new"}
                views={"1 new (9 invites)"}
                nudges={"1 new"}
                limit={true}
              />
              <Match
                name={"John Doe"}
                pfp={Match3}
                gender={"Male"}
                mutuals={"1 new"}
                views={"1 new (9 invites)"}
                nudges={"1 new"}
                limit={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Matches;
