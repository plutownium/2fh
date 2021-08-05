import React from "react";

import { useLocation, useHistory } from "react-router-dom";

function Header() {
  const location = useLocation();
  const history = useHistory();

  const url = location.pathname;

  const pushLocation = (loc, url) => {
    history.push(loc, {
      from: url,
    });
  };

  const authNavigation = (
    <div className="header-main-spacing">
      <div id="logo-container" className="header-container">
        {/* hide logo when on mobile and /auth */}
        <div>
          <h1>Logo Here</h1>
        </div>
      </div>
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
      </div>
    </div>
  );

  const landingNavigation = (
    <div className="header-main-spacing">
      <div id="logo-container" className="header-container">
        {/* same on both /desktop and /mobile */}
        <div>
          <h1>Logo Here</h1>
        </div>
      </div>
      <div id="header-buttons-sml" className="generic-div-centering">
        <button className="brand-yellow-bg App-header-button">LOGIN</button>
      </div>
    </div>
  );

  if (String(url).startsWith("/signup")) {
    return null;
  } else {
    // your existing render login

    return (
      <header className="App-header">
        {url.startsWith("/auth") ? authNavigation : landingNavigation}
      </header>
    );
  }
}

export default Header;
