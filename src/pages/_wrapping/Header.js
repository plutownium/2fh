import React from "react";

import { Redirect, useLocation, useHistory } from "react-router-dom";

function Header() {
  const location = useLocation();
  const history = useHistory();

  const url = location.pathname;

  const pushLocation = (loc, url) => {
    history.push(loc, {
      from: url,
    });
  };

  if (String(url).startsWith("/signup")) {
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
                <h3
                  onClick={() => {
                    pushLocation("/auth/home", url);
                  }}
                >
                  Home
                </h3>
              </div>
              <div>
                <h3
                  onClick={() => {
                    pushLocation("/auth/profile", url);
                  }}
                >
                  Profile
                </h3>
              </div>
              <div>
                <h3
                  onClick={() => {
                    pushLocation("/auth/matches", url);
                  }}
                >
                  Matches
                </h3>
              </div>
              <div>
                <h3
                  onClick={() => {
                    pushLocation("/auth/settings", url);
                  }}
                >
                  Setting
                </h3>
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
