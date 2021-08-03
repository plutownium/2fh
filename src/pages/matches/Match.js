import React from "react";

import "./Match.css";

function Match({ name, gender, mutuals, views, nudges, pfp }) {
  return (
    <div id="match-card">
      <div className="d-flex">
        <div className="match-card-pfp match-card-top-margin">
          <img src={pfp} />
        </div>
        <div className="match-card-top-margin">
          <h3>{name}</h3>
          <h4>
            Gender: <span>{gender}</span>
          </h4>
          <h4>
            Mutual Matches: <span>{mutuals}</span>
          </h4>
          <h4>
            Who viewed: <span>{views}</span>
          </h4>
          <h4>
            Nudges: <span>{nudges}</span>
          </h4>
        </div>
      </div>
      <div className="d-flex match-card-bottom">
        <button className="btn-match-blue-text btn-general btn-match">
          View Profile
        </button>
        <div className="v-line"></div>
        <button className="btn-match-blue-text btn-general btn-match">
          Send Like
        </button>
        <div className="v-line"></div>
        <button className="btn-match-blue-bg btn-general btn-match">
          Contact Now
        </button>
      </div>
    </div>
  );
}

export default Match;
