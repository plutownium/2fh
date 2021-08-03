import React from "react";

import Arrow from "../../assets/icons/icons8-expand-arrow-24.png";
import Edit from "../../assets/icons/icons8-edit-24.png";

import "./Card.css";

function Card({ headline, subtitle, paragraph }) {
  return (
    <div className="profile-card gentle-black-shadow border-rounding d-flex flex-col align-items-center">
      <div className="profile-card-width">
        <h3>{headline}</h3>
      </div>
      <div className="profile-card-width d-flex justify-content-between">
        <p className="big-text-blk m-0 d-flex justify-content-center align-items-center">
          {subtitle}
        </p>{" "}
        <button className="invis-borders">
          <img alt="arrow" src={Arrow} />
        </button>
      </div>

      <div className="profile-card-width">
        <hr className="card-black-bar" />
      </div>
      <div className="profile-card-width d-flex justify-content-between">
        <p className="big-text-blk m-0 d-flex justify-content-center align-items-center">
          {paragraph}
        </p>
        <button className="invis-borders big-text-blk d-flex justify-content-center align-items-center">
          Edit
          <img className="m-2" src={Edit} alt="edit" />
        </button>
      </div>
    </div>
  );
}

export default Card;
