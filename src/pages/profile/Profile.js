import React from "react";

import Card from "./Card";

import Avatar from "../../assets/avatar.png";

function Profile() {
  return (
    <div>
      <div id="profile-header-bg">
        {/* image at top  */}
        <div>
          <img src={Avatar} alt="pfp" />
        </div>
      </div>
      <div id="profile-matches-screen">
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
