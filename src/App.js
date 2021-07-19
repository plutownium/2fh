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
                <button>LOGIN</button>
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
                <div id="start-today-now">
                  <h2 id="start-today-now-text">Start Today Now!</h2>
                  <hr />
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
                        <span className="white-text mx-2">child</span>
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
        <div style={{ height: "70vh" }}>
          {/* for ze background: use an image, and scale it. */}
          {/* when on mobile, just use plain white, or a .. gradient maybe... */}
          <div>
            <h1>Best dating site ever!</h1>
            <p>
              we are the number one destination for online dating with more
              sites, more relationships, and more marriages than any other
              dating or personals site. We can help you find your perfect
              partner. We offer a bespoke, highly personalized service and one
              of the largest databases of professional singles.
            </p>
          </div>
        </div>
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
              <h3>sites most likely to lead to happy relationships</h3>
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
        <div id="compatibility-promo" className="">
          <div id="compatibility-left" className="flex-col">
            <div>
              <h1>Compatibility counts!</h1>
              <p>
                lorem ipsum doloret si si massive wall of text asdfadsnfad nf
                asdf a hey si massive wall of text asdfadsnfad nf asdf a hey
                m83388838383 si massive wall of text asdfadsnfad nf asdf a hey
                jffjfjfjfjfjf si massive wall of text asdfadsnfad nf asdf a hey
              </p>
              <button>join now!</button>
            </div>
          </div>
          <div id="compatibility-right" className=""></div>
        </div>
        <div style={{ backgroundColor: "#999", height: "70vh" }}>
          <div>
            <div>photos</div>
            <div>
              <h2>quality signles</h2>
              <p>lorem ipsum doloret</p>
              <button>Join now!</button>
            </div>
          </div>
        </div>
        <div style={{ height: "60vh", backgroundColor: "#eeee" }}>
          <div>
            <div>
              <h2>We're here for you</h2>
              <p>adfadsf asdfadsfads asdfadsf</p>
              <h4>24/7 support, 365</h4>
            </div>
            <div>
              <button>contact us</button>
            </div>
          </div>
        </div>
        <div style={{ height: "80vh" }}>
          <div>
            <div>image</div>
            <div>
              <h2>The real deal!</h2>
              <p>lorem placeodlssadf</p>
              <button>Join now!</button>
            </div>
          </div>
        </div>
        <div style={{ height: "70vh", backgroundColor: "#333" }}>
          <div>
            <div>
              <h3>web logo</h3>
              <p>some text yo</p>
            </div>
            <div>
              <h3>web logo</h3>
              <p>
                cats dogs bark meow kitty kitty laceholder green yellow white
                marmalade
              </p>
            </div>
            <div>
              <h3>web logo</h3>
              <p>
                keyboard black green red white yellow orange black circle square
                need moar words
              </p>
            </div>
            <div>
              <h3>web logo</h3>
              <p></p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
