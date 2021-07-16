// import logo from "./logo.svg";
import "./App.css";

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
          <div id="thePartWithThePicture">
            <div></div>
          </div>
          <div id="threeButtonsSideBySide">
            <div>Best Dating Site</div>
            <div>Get your partner in just 15 min</div>
            <div>High Quality Dating Pool</div>
          </div>
        </div>
        <div style={{ height: "70vh" }}>
          {/* for ze background: use an image, and scale it. */}
          {/* when on mobile, just use plain white, or a .. gradient maybe... */}
          <div>
            <h1>Best dating site ever!</h1>
            <p>Words words words, lots of text</p>
          </div>
        </div>
        <div style={{ "background-color": "#999", height: "300px" }}>
          <div>
            <div>over 2 million found love!</div>
            <div>2.3 million messages sent weekly</div>
            <div>sites most likely to lead to happy relationships</div>
            <div>100% men invested in finding a life partner</div>
          </div>
        </div>
        <div style={{ height: "110vh" }}>
          <div>
            <h1>Compatibility counts!</h1>
            <p>lorem ipsum doloret si</p>
            <button>join now!</button>
          </div>
        </div>
        <div style={{ "background-color": "#999", height: "70vh" }}>
          <div>
            <div>photos</div>
            <div>
              <h2>quality signles</h2>
              <p>lorem ipsum doloret si</p>
              <button>Join now!</button>
            </div>
          </div>
        </div>
        <div style={{ height: "60vh", "background-color": "#eeee" }}>
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
        <div style={{ height: "70vh", "background-color": "#333" }}>
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
