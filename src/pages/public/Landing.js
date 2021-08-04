import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// import logo from "./logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";

function Landing() {
  const history = useHistory();

  const [selection, setSelection] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const makeSelection = (num) => {
    console.log("selecting...", num);
    setSelection(num);
  };

  return (
    <div className="App">
      <div
        className={showPopup ? "modal-special" : "modal-hidden"}
        onClick={() => {
          setShowPopup(false);
        }}
      >
        <div id="modal-special-container">
          <div>
            <h2>TwoFatherHome</h2>
            <p>Select the ideal family size.</p>
            <p>You can always change your mind later.</p>
          </div>
        </div>
      </div>
      <main>
        {/* https://stackoverflow.com/questions/24502898/show-or-hide-element-in-react */}
        <div id="word_missing_00">
          {/* aaaaaaaaaaaaaaaaaaaa */}
          {/* start today now */}
          {/* aaaaaaaaaaaaaaaaaaaa */}

          <div id="thePartWithThePicture" className="big-container-00">
            <div id="start-today-now-gradient" className="">
              <div className="sign-up-screen">
                <div id="s500-stn-adjust" className="screen-splitter"></div>
                <div id="s500-stn-adjust-right" className="screen-splitter">
                  <div
                    id="start-today-now"
                    className="d-flex flex-col justify-content-center align-items-center"
                  >
                    <h2 id="start-today-now-text" className="stn-width">
                      Start Today Now!
                    </h2>
                    <hr id="hr-special" className="stn-width" />
                    {/* FIXME: why did this hr disappear? */}
                    <div className="w-100">
                      <div id="margin-adjust-sml" className="my-4 w-100">
                        <h4 id="header-copy-sml" className="white-text">
                          In my ideal future <br />I am the father <br />
                          of ____ kids.
                        </h4>
                        <h4 id="ideal-fam-size" className="white-text">
                          The ideal family size is...
                        </h4>
                        <div
                          id="sml-screen-margin-adjust"
                          className="my-3 d-flex flex-col justify-content-center align-items-center w-100"
                        >
                          <div className="d-flex flex-row justify-content-between align-items-center w-100">
                            <div
                              className={
                                selection === 1
                                  ? "child-select-div selected-div"
                                  : "child-select-div"
                              }
                              onClick={() => {
                                makeSelection(1);
                              }}
                            >
                              <span className="checkmark"></span>
                              <input
                                type="radio"
                                id="ch1"
                                name="children"
                                value="1"
                              />
                              <label htmlFor="ch1">
                                1{" "}
                                <span className="sml-screen-copy-adjust">
                                  kid
                                </span>
                              </label>
                            </div>
                            {/* <br /> */}
                            <div
                              className={
                                selection === 2
                                  ? "child-select-div selected-div"
                                  : "child-select-div"
                              }
                              onClick={() => {
                                makeSelection(2);
                              }}
                            >
                              <span className="checkmark"></span>
                              <input
                                type="radio"
                                id="ch2"
                                name="children"
                                value="2"
                              />
                              <label htmlFor="ch2">
                                2{" "}
                                <span className="sml-screen-copy-adjust">
                                  kids
                                </span>
                              </label>
                              {/* <br /> */}
                            </div>
                            <div
                              className={
                                selection === 3
                                  ? "child-select-div selected-div"
                                  : "child-select-div"
                              }
                              onClick={() => {
                                makeSelection(3);
                              }}
                            >
                              <span className="checkmark"></span>
                              <input
                                type="radio"
                                id="ch3"
                                name="children"
                                value="3"
                              />
                              <label htmlFor="ch3">
                                3{" "}
                                <span className="sml-screen-copy-adjust">
                                  kids
                                </span>
                              </label>
                            </div>
                            {/* <br /> */}
                          </div>
                          <div className="d-flex flex-row justify-content-between align-items-center w-100">
                            <div
                              className={
                                selection === 4
                                  ? "child-select-div selected-div"
                                  : "child-select-div"
                              }
                              onClick={() => {
                                makeSelection(4);
                              }}
                            >
                              <span className="checkmark"></span>
                              <input
                                type="radio"
                                id="ch4"
                                name="children"
                                value="4"
                              />
                              <label htmlFor="ch4">
                                4{" "}
                                <span className="sml-screen-copy-adjust">
                                  kids
                                </span>
                              </label>
                            </div>
                            {/* <br /> */}
                            <div
                              className={
                                selection === 5
                                  ? "child-select-div selected-div"
                                  : "child-select-div"
                              }
                              onClick={() => {
                                makeSelection(5);
                              }}
                            >
                              <span className="checkmark"></span>
                              <input
                                type="radio"
                                id="ch5"
                                name="children"
                                value="5"
                              />
                              <label htmlFor="ch5">
                                5{" "}
                                <span className="sml-screen-copy-adjust">
                                  kids
                                </span>
                              </label>
                            </div>
                            {/* <br /> */}
                            <div
                              className={
                                selection === 6
                                  ? "child-select-div selected-div"
                                  : "child-select-div"
                              }
                              onClick={() => {
                                makeSelection(6);
                              }}
                            >
                              <span className="checkmark"></span>
                              <input
                                type="radio"
                                id="ch6"
                                name="children"
                                value="6+"
                              />
                              <label htmlFor="ch6">6+ </label>
                            </div>
                            {/* <br /> */}
                          </div>
                        </div>
                      </div>
                      <div>
                        <button
                          id="start-today-now-button"
                          className="brand-yellow-bg"
                          onClick={() => {
                            const selectionMade = selection !== null;
                            console.log("test:", selection);
                            if (selectionMade) {
                              console.log("going somewhere new...");
                              history.push("/signup/firstName", {
                                from: "Landing",
                              });
                            } else {
                              // todo: popup saying "tell us how many kids your family will have!"
                              console.log("adsf:", true, showPopup);
                              setShowPopup(true);
                              console.log("adsf:", true, showPopup);
                            }
                          }}
                        >
                          Join now!
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* aaaaaaaaaaaaaaaaaaaa */}
          {/* ------ fin ------ */}
          {/* aaaaaaaaaaaaaaaaaaaa */}
          <div id="threeButtonsSideBySide" className="ad-container">
            <div
              id="mid-size-media-height-adjustment"
              className="flex-row space-between"
            >
              <div className="ad-box brand-dark-blue">
                <div className="img-placeholder" id="ad-box-left"></div>
                <h3 id="ad-box-50-adjust" className="ad-box-text white-text">
                  <span className="brand-yellow-text">Best</span> Dating Site
                </h3>
                <p className="ad-box-subtitle  white-text">
                  Best way to meet your partner!
                </p>
              </div>
              <div className="ad-box brand-teal">
                <div className="img-placeholder" id="ad-box-middle"></div>
                <h3 className="ad-box-text  white-text media-query-text-hotfix">
                  Get your partner in just{" "}
                  <span className="brand-yellow-text">15 min</span>
                </h3>
                <p className="ad-box-subtitle  white-text">
                  Best way to meet your partner!
                </p>
              </div>
              <div className="ad-box brand-soft-blue">
                <div className="img-placeholder" id="ad-box-right"></div>
                <h3 className="ad-box-text  white-text media-query-text-hotfix">
                  <span className="brand-yellow-text">Highest </span>Quality
                  Dating Pool
                </h3>
                <p className="ad-box-subtitle white-text">
                  2019 survey of 1,616 US singles!
                </p>
              </div>
            </div>
          </div>
        </div>
        <section
          className="d-flex justify-content-center align-items-center"
          id="a500px-screen-adjust"
        >
          {/* for ze background: use an image, and scale it. */}
          {/* when on mobile, just use plain white, or a .. gradient maybe... */}

          {/* TODO: to reiterate, just clip out an img, set it as bg-img, and scale it for desktop/ipad */}
          <div id="welcome-div-container">
            <h1 id="welcome-div-headline">
              Welcome to{" "}
              <span className="designer-blue-text">TwoFatherHome</span>
            </h1>
            <p id="welcome-div-content" className="content-text">
              We are the number one destination for online dating with more
              sites, more relationships, and more marriages than any other
              dating or personals site. We can help you find your perfect
              partner. We offer a bespoke, highly personalized service and one
              of the largest databases of professional singles.
            </p>
          </div>
        </section>
        {/* ********** */}
        {/* promotional boxes displaying stats */}
        {/* ********** */}
        <div style={{ height: "300px" }}>
          <div id="promo-boxes-container">
            <div className="promo-box ">
              <div className="pretend-img" id="pr1"></div>
              <h3>
                over 2 million <br />
                found love!
              </h3>
              <p>could you be next?</p>
            </div>
            <div className="promo-box a500-display-none">
              <div className="pretend-img" id="pr2"></div>
              <h3>2.3 million messages sent weekly</h3>
              <p>could you be next?</p>
            </div>
            <div className="promo-box">
              <div className="pretend-img" id="pr3"></div>
              <h3>site most likely to lead to happy relationships</h3>
              <p>could you be next?</p>
            </div>
            <div className="promo-box a500-display-none">
              <div className="pretend-img" id="pr4"></div>
              <h3>100% men invested in finding a life partner</h3>
              <p>could you be next?</p>
            </div>
          </div>
        </div>
        {/* ********** */}
        {/* ********** */}
        <section id="compatibility-promo" className="">
          <div id="compatibility-left" className="flex-col">
            <div>
              <h2 id="a500px-cc-text-adjust" className="my-4 big-text">
                Compatibility Counts
              </h2>
              <p className="content-text" id="comp-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Pharetra et ultrices neque ornare. Tortor vitae purus faucibus
                ornare suspendisse sed nisi. Proin nibh nisl condimentum id
                venenatis a condimentum vitae.
              </p>
              <p className="content-text" id="comp-med-alt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Pharetra et ultrices neque ornare.
              </p>
              <button className="my-4 typical-blue-button">join now</button>
            </div>
          </div>
          <div id="compatibility-right" className=""></div>
        </section>
        <section
          id="quality-singles-sml-screen-height-adjust"
          style={{ height: "90vh" }}
          className="brand-grey d-flex align-items-center"
        >
          <div className="d-flex h-75 w-100 justify-content-center align-items-center">
            <div
              id="q-s-l-i-container"
              className="h-100 w-50 d-flex align-items-right justify-content-end"
            >
              <div id="quality-singles-left-img" className="h-100"></div>
            </div>
            <div className="w-50" id="a500px-width-override">
              <div className="w-100" id="a500px-centering">
                <div id="quality-singles-right" className="h-100">
                  <h2 id="sml-screen-copy-adjust2" className="my-4 big-text">
                    Quality Singles, Just Like You
                  </h2>
                  <p id="sml-screen-copy-adjust3" className="content-text">
                    Looking for a meaningful, loving world, where he can be a
                    family man, and you can too. You can have complete
                    confidence that everyone on this site is looking to start a
                    family, just like you are.
                  </p>
                  <button className="typical-blue-button my-4">Join now</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          style={{ height: "70vh" }}
          className="d-flex align-items-center justify-content-center wholesome-background"
        >
          <div className="w-100 h-100 d-flex flex-col justify-content-center align-items-center wholesome-overlay">
            <div
              id="we-here-for-you"
              className="d-flex flex-col justify-content-center align-items-center"
            >
              <div className="my-3">
                <h2 className="fat-text white-text">
                  <span className="designer-blue-text">We're</span>{" "}
                  <span className=" white-text">Here For You</span>
                </h2>
              </div>
              <div className="d-flex flex-col align-items-center justify-content-center">
                <p
                  id="whfy-width-control"
                  className="content-text white-text a500px-margin-adjust"
                >
                  Signing up for this website is the first step to finding the
                  husband you'll start a family with. From profile tips to
                  sharing your success story, we are here to support you the
                  whole way.
                </p>
                <h4
                  // id=""
                  className="brand-yellow-text mb-5 a500px-margin-adjust"
                >
                  24/7 support, 365 days a year
                </h4>
              </div>
              <div>
                <button className="typical-blue-button typical-btn-sml-txt a500px-margin-adjust">
                  contact us
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* **** ***** ****** *****  */}
        {/* the real deal */}
        {/* **** ***** ****** *****  */}
        <section style={{ height: "80vh" }}>
          <div id="a500px-w-adjust" className="d-flex h-100">
            <div
              id="real-deal-left"
              className="h-100 d-flex justify-content-end align-items-center"
            >
              <div id="real-deal-left-img" className="h-75"></div>
            </div>
            <div
              id="real-deal-right"
              className="h-100 d-flex flex-col justify-content-center"
            >
              <div className="my-4">
                <h2 className="fat-text">The Real Deal</h2>
              </div>
              <div className="w-75">
                <p className="content-text">
                  Over the course of our 20+ years in the relationship business,
                  millions of couples have found lasting love. Give us a try
                  when you're ready for something real.
                </p>
              </div>
              <button className="typical-blue-button my-4">Join now</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Landing;
