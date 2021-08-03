import React from "react";

import "./Match.css";

function Match({ name, gender, mutuals, views, nudges, pfp }) {
  return (
    <div id="match-card" className="generic-box-shadow">
      <div className="d-flex px-3">
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
      <div className="d-flex justify-content-between match-card-bottom px-4 mb-0">
        <button className="btn-match-blue-text btn-general btn-match">
          View Profile
        </button>
        <div className="v-line"></div>
        <button className="btn-match-blue-text btn-general btn-match">
          Send Like
        </button>
        <div className="v-line"></div>
        <button className="btn-match-blue-bg btn-general btn-match btn-contact">
          Contact Now
        </button>
      </div>
    </div>
  );
}

export default Match;
