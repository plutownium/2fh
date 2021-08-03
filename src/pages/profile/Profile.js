import React from "react";

import Card from "./Card";

import Avatar from "../../assets/avatar.png";

import "../Page.css";

function Profile() {
  return (
    <div className="generic-grey-bg">
      <div id="profile-header-bg">
        {/* image at top  */}
        <div className="profile-avatar d-flex" id="profile-avatar-imaged">
          <img
            className="profile-avatar"
            id="profile-avatar-contained"
            src={Avatar}
            alt="pfp"
          />
          <div className="d-flex flex-col p-4">
            <h3 className="pl-6 white-text">Moueer</h3>
            <p className="pl-6 white-text">18 Lahore</p>
          </div>
        </div>
      </div>
      <div
        id="profile-matches-screen"
        className="d-flex justify-content-center flex-col align-items-center"
      >
        <div>
          <Card
            headline={"About Us"}
            subtitle={"My Self Summary"}
            paragraph={"My name is Mouneer"}
          />
        </div>
        <div>
          <Card
            headline={"ASPIRATIONS"}
            subtitle={"Current Goal"}
            paragraph={"What are you working towards right now?"}
          />
        </div>
        <div>
          <Card
            headline={"TALENT"}
            subtitle={"I could probably beat you at"}
            paragraph={"Go ahead and brag a little, champ"}
          />
        </div>
        <div>
          <Card
            headline={"MY TRAITS"}
            subtitle={"My golden rule"}
            paragraph={"Things you live by"}
          />
        </div>
        <div>
          <Card
            headline={"About Us"}
            subtitle={"My Self Summary"}
            paragraph={"My name is Mouneer"}
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
