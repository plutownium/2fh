// import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-main-spacing">
          <div className="header-container">
            <div>
              <h1>Logo Here</h1>
            </div>
          </div>
          <div id="header-buttons" className="header-container">
            <div className="header-options">
              <div>
                <h3>Home</h3>
              </div>
              <div>
                <h3>Profile</h3>
              </div>
              <div>
                <h3>Setting</h3>
              </div>
              <div>
                <h3>Matches</h3>
              </div>
              <div className="generic-div-centering">
                <button className="brand-yellow-bg" id="App-header-button">
                  LOGIN
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div id="word_missing_00">
          {/* aaaaaaaaaaaaaaaaaaaa */}
          {/* start today now */}
          {/* aaaaaaaaaaaaaaaaaaaa */}
          <div id="thePartWithThePicture" className="big-container-00">
            <div className="sign-up-screen">
              <div className="screen-splitter"></div>
              <div className="screen-splitter">
                <div
                  id="start-today-now"
                  className="d-flex flex-col justify-content-center align-items-center"
                >
                  <h2 id="start-today-now-text" className="stn-width">
                    Start Today Now!
                  </h2>
                  <hr id="hr-special" className="stn-width" />
                  {/* FIXME: why did this hr disappear? */}
                  <div>
                    <div className="my-4">
                      <h4 className="white-text">
                        The ideal family size is...
                      </h4>
                      <div className="my-3 d-flex justify-content-center align-items-center">
                        <select id="family-size-input" className="mx-2">
                          <option className="option-centering">1</option>
                          <option className="option-centering">2</option>
                          <option className="option-centering">3</option>
                          <option className="option-centering">4</option>
                          <option className="option-centering">5</option>
                          <option className="option-centering">6</option>
                          <option className="option-centering">7+</option>
                        </select>
                        <span className="white-text mx-2">children</span>
                        {/* 1-6, 7+ */}
                      </div>
                    </div>
                    <div>
                      <button
                        id="start-today-now-button"
                        className="brand-yellow-bg"
                      >
                        Join now!
                      </button>
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
            <div className="flex-row space-between">
              <div className="ad-box brand-dark-blue">
                <div className="img-placeholder"></div>
                <h3 className="ad-box-text white-text">
                  <span className="brand-yellow-text">Best</span> Dating Site
                </h3>
                <p className="ad-box-subtitle  white-text">
                  Best way to meet your partner now!
                </p>
              </div>
              <div className="ad-box brand-teal">
                <div className="img-placeholder"></div>
                <h3 className="ad-box-text  white-text">
                  Get your partner in just{" "}
                  <span className="brand-yellow-text">15 min</span>
                </h3>
                <p className="ad-box-subtitle  white-text">
                  Best way to meet your partner now!
                </p>
              </div>
              <div className="ad-box brand-soft-blue">
                <div className="img-placeholder"></div>
                <h3 className="ad-box-text  white-text">
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
          style={{ height: "70vh" }}
          className="d-flex justify-content-center align-items-center"
        >
          {/* for ze background: use an image, and scale it. */}
          {/* when on mobile, just use plain white, or a .. gradient maybe... */}

          {/* TODO: to reiterate, just clip out an img, set it as bg-img, and scale it for desktop/ipad */}
          <div id="welcome-div-container">
            <h1 id="welcome-div-headline">
              Welcome to{" "}
              <span className="designer-blue-text">TwoFatherHome</span>!
            </h1>
            <p id="welcome-div-content" className="content-text">
              we are the number one destination for online dating with more
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
        <div style={{ backgroundColor: "#999", height: "300px" }}>
          <div className="promo-boxes-container">
            <div className="promo-box">
              <div className="pretend-img"></div>
              <h3>over 2 million found love!</h3>
              <p>could you be next?</p>
            </div>
            <div className="promo-box">
              <div className="pretend-img"></div>
              <h3>2.3 million messages sent weekly</h3>
              <p>could you be next?</p>
            </div>
            <div className="promo-box">
              <div className="pretend-img"></div>
              <h3>site most likely to lead to happy relationships</h3>
              <p>could you be next?</p>
            </div>
            <div className="promo-box">
              <div className="pretend-img"></div>
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
              <h1>Compatibility counts!</h1>
              <p className="content-text">
                lorem ipsum doloret si si massive wall of text asdfadsnfad nf
                asdf a hey si massive wall of text asdfadsnfad nf asdf a hey
                m83388838383 si massive wall of text asdfadsnfad nf asdf a hey
                jffjfjfjfjfjf si massive wall of text asdfadsnfad nf asdf a hey
              </p>
              <button className="typical-blue-button">join now</button>
            </div>
          </div>
          <div id="compatibility-right" className=""></div>
        </section>
        <section style={{ backgroundColor: "#999", height: "70vh" }}>
          <div className="d-flex h-100">
            <div
              id="quality-singles-left-spacer"
              className="h-100 d-flex justify-content-center align-items-center"
            >
              photos
            </div>
            <div className="p-5">
              <div
                id="quality-singles-right"
                className="ml-5 h-100 d-flex flex-col justify-content-center align-items-center"
              >
                <h2>quality singles</h2>
                <p className="content-text">
                  lorem ipsum doloret Looking For A Meaningful Loving World
                  where he can be a Family Man, and you can too.
                </p>
                <button className="typical-blue-button">Join now</button>
              </div>
            </div>
          </div>
        </section>
        <section
          style={{ height: "70vh", backgroundColor: "#bbb" }}
          className="d-flex align-items-center justify-content-center"
        >
          <div
            id="we-here-for-you"
            className="b-debug d-flex flex-col justify-content-center align-items-center"
          >
            <div className="my-3">
              <h2 className="fat-text">
                We're <span className="designer-blue-text">here for you</span>
              </h2>
            </div>
            <div className="d-flex flex-col align-items-center justify-content-center">
              <p id="whfy-width-control" className="b-debug content-text">
                adfadsf asdfadsfads asdfadsf wow look at all this text lorem
                ipsum doloret si parler charmant charmante une chemise une jupe
                vivre la france j'aime le travailler parce que je suis une homme
                de bureau.
              </p>
              <h4 className="brand-yellow-text mb-5">
                24/7 support, 365 days a year
              </h4>
            </div>
            <div>
              <button className="typical-blue-button typical-btn-sml-txt">
                contact us
              </button>
            </div>
          </div>
        </section>
        {/* **** ***** ****** *****  */}
        {/* the real deal */}
        {/* **** ***** ****** *****  */}
        <section style={{ height: "80vh" }}>
          <div className="d-flex h-100">
            <div id="real-deal-left" className="b-debug h-100">
              image
            </div>
            <div
              id="real-deal-right"
              className="b-debug h-100 d-flex flex-col justify-content-center"
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
        {/* **** */}
        {/* foot */}
        {/* foot */}
        <section style={{ height: "70vh", backgroundColor: "#333" }}>
          <div id="f-container" className="b-debug h-100">
            <div
              id="f-top"
              className="d-flex flex-row justify-content-around m-6 b-debug"
            >
              <div id="f-logo" className="text-align-left">
                <h3>web logo</h3>
                <p id="petit-text">some text yo</p>
              </div>
              <div id="f-quick-links" className="text-align-left">
                <h3>QUICK LINKS</h3>
                <p>Home</p>
                <p>Profile</p>
                <p>Setting</p>
                <p>Matches</p>
              </div>
              <div id="f-pages" className="text-align-left">
                <h3>PAGES</h3>
                <p>Privacy Policy</p>
                <p>Terms and Conditions</p>
                <p>Short Film</p>
                <p>See All</p>
              </div>
              <div>
                <div>
                  <h3>Newsletter</h3>
                  <input />
                  <p>Subscribe for updates</p>
                </div>
                <div>
                  <button>Face</button>
                  <button>twtr</button>
                  <button>insta</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
