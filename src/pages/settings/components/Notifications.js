import React from "react";

import "./Checkboxes.css";

function Notifications() {
	{
		/* TODO: needs a different id maybe, see what the css does */
	}
	return (
		<div id="settings-pane-right">
			<div>
				<h5>Show received likes</h5>
				<input type="checkbox" className="input-formatting" />
			</div>
			<div>
				<h5>Show when a good match joins the site</h5>
				<input type="checkbox" className="input-formatting" />
			</div>
			<div>
				<h5>Show weekly profile suggestions</h5>
				<input type="checkbox" className="input-formatting" />
			</div>
		</div>
	);
}

export default Notifications;
