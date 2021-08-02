import React from "react";

function Header() {
  const {
    match: { url },
  } = this.props;

  if (url.startWith("/signup")) {
    return null;
  } else {
    // your existing render login

    return (
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
              <div id="header-options-spacer"></div>
              <div className="generic-div-centering">
                <button className="brand-yellow-bg" id="App-header-button">
                  LOGIN
                </button>
              </div>
            </div>
          </div>
          <div id="header-buttons-sml" className="generic-div-centering">
            <button className="brand-yellow-bg" id="App-header-button">
              LOGIN
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
