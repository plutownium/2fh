import React from "react";

function Footer() {
  const {
    match: { url },
  } = this.props;

  if (url.startWith("/signup")) {
    return null;
  } else {
    return (
      <footer style={{ height: "50vh" }} className="f-wholesome">
        <div
          id="f-container"
          className="d-flex flex-col justify-content-center align-items-center h-100 wholesome-overlay-dark"
        >
          <div
            id="f-top"
            className="d-flex flex-row justify-content-around align-items-start f-internal-width"
          >
            <div id="f-logo" className="f-box text-align-left a500px-f-hider">
              <div className="f-spacer"></div>
              <h3>web logo</h3>
              <p id="petit-text">
                some text yo. we are in fact sitting on a couch in a house that
                the residents have owned for over 31 years. the couch is located
                on Planet Earth in the star system of Sol.
              </p>
              <p id="petit-text-sml">
                some text yo. we are in fact sitting on a couch in a house.
              </p>
            </div>
            <div
              id="f-quick-links"
              className="f-box text-align-left a500px-f-hider"
            >
              <div className="f-spacer "></div>
              <h3>QUICK LINKS</h3>
              <p>Home</p>
              <p>Profile</p>
              <p>Setting</p>
              <p>Matches</p>
            </div>
            <div id="f-pages" className="f-box text-align-left ">
              <div className="f-spacer"></div>
              <h3>PAGES</h3>
              <p>Privacy Policy</p>
              <p>Terms and Conditions</p>
              <p>Short Film</p>
              <p>See All</p>
            </div>
            <div id="f-newsletter" className="">
              <div id="newsletter-div">
                <h3>Newsletter</h3>
                <input placeholder="write your email!" />
                {/* <button>Get The Newsletter</button> */}
                {/* // will anyone notice there is no sign up button?
                  the lack of a sign up button would cost the company $ -- if the page has a valid criticism, its this. */}
                <p>Subscribe for updates</p>
              </div>
              <div id="socials-div">
                <button type="submit">
                  <img src={Twitter} alt="twtr" />
                </button>
                <button type="submit">
                  <img src={Insta} alt="ig" />
                </button>
                <button type="submit">
                  <img src={Facebook} alt="fb" />
                </button>
              </div>
            </div>
          </div>
          <div className="d-flex flex-col justify-content-center align-items-center h-25 f-internal-width">
            <hr id="f-hr" />
            <div
              className="d-flex justify-content-between w-75"
              id="footer-bottom"
            >
              <div
                id="f-copyright-sml"
                className="d-flex flex-col justify-content-center align-items-center"
              >
                <p className="f-grey-text">Copyright 2021 TwoFatherHome</p>
              </div>
              <div
                className="d-flex flex-row justify-content-between w-25 "
                id="terms"
              >
                <div>
                  <span className="white-text-off">Terms of Use</span>
                </div>
                <div>
                  <span className="white-text-off">Privacy Policy</span>
                </div>
                <div id="a500px-sry-icons8">
                  <span className="white-text-off">Icons by Icons8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
