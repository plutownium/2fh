import React from "react";

function Privacy() {
  {
    /* TODO: needs a different id maybe, see what the css does */
  }
  return (
    <div id="settings-pane-right">
      <div>
        <h5>Show location within...</h5>
        <input className="checkbox" />
        <p>+/- 40 km</p>
        <input className="checkbox" />
        <p>+/- 20 km</p>
      </div>
      <div>
        <h5>Allow photos in messages</h5>
        <input className="checkbox" />
      </div>
    </div>
  );
}

export default Privacy;
