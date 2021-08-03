import React from "react";

import User from "../../assets/icons/icons8-user-48.png";
import Eye from "../../assets/icons/icons8-eye-48.png";

import Match1 from "../../assets/marriage/gays-tying-knot.jpg";
import Match2 from "../../assets/marriage/deux-hommes-married.jpg";
import Match3 from "../../assets/marriage/honeymoon.jpg";

import "../Page.css";
import "./Home.css";

function Home() {
  return (
    <div>
      <div
        id="home-bg"
        className="d-flex justify-content-center align-items-center"
      >
        <div
          id="home-container"
          className="d-flex justify-content-left align-items-center flex-col"
        >
          <div className="d-flex justify-content-center align-items center">
            <h2 className="my-4 white-text">Highest Match %</h2>
          </div>
          <div
            id="home-match-card"
            className="d-flex flex-col justify-content-center align-items-center"
          >
            <div
              id="home-top-text"
              className="mt-3 mb-2 d-flex justify-content-between ninety-pct-width"
            >
              <div className="d-flex justify-content-between align-items-center w-75 pr-6">
                <h3>Niraj Kumar</h3>
                <h3>27</h3>
                <h3>Kham Khara, India</h3>
                <h3>90%</h3>
                <h3>View Profile</h3>
              </div>
              <div
                className="d-flex align-items-center"
                id="home-btn-container"
              >
                <button className="home-btn-std" id="home-btn-pass">
                  Pass
                </button>
                <button className="home-btn-std" id="home-btn-like">
                  Like
                </button>
              </div>
            </div>
            <div
              id="home-match-card-imgs"
              className="d-flex justify-content-between align-items-start mb-2 ninety-pct-width"
            >
              <div className="">
                <img src={Match1} alt="candidates for marriage" />
              </div>
              <div className="">
                <img src={Match2} alt="candidates for marriage" />
              </div>
              <div className="">
                <img src={Match3} alt="candidates for marriage" />
              </div>
            </div>
            <div className="ninety-pct-width">
              <div className="d-flex justify-content-left w-100 ">
                <p className="home-footer-txt" id="home-alert-note">
                  If you like each other, we'll let you know!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="home-about-footer"
        className="d-flex justify-content-between align-items-center"
      >
        {/* left box */}
        <div className="home-foot-box" id="home-foot-left">
          <div className="pl-4 h-100 d-flex align-items-center">
            <div className="d-flex flex-col align-items-left">
              <h3 id="home-footer-title">My self summary</h3>
              <p className="home-footer-txt">
                If someone really loves you, no matter how their feelings
                change, they won't leave you -- or else it wasn't real love. A
                real lover can't be stolen.
              </p>
            </div>
          </div>
        </div>
        {/* right box  */}
        <div className="home-foot-box" id="home-foot-right">
          <div className="pr-4 h-100 d-flex flex-col justify-content-center">
            <div className="home-right-footer">
              <img src={User} alt="user icon" />
              <h3 className=" home-footer-txt">
                Gay | Single | Man | Monogamous
              </h3>
            </div>
            <div className="home-right-footer">
              <img src={Eye} alt="eye" />
              <h3 className="home-footer-txt">
                Looking for men | Short-term dating | Friends | Marriage{" "}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
