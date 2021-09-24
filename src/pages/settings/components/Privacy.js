import React from "react";

import "./Checkboxes.css";

function Privacy() {
	{
		/* TODO: needs a different id maybe, see what the css does */
	}
	return (
		<div id="settings-pane-right">
			<div>
				<h5>Show location within...</h5>
				<div className="align-single-row">
					<div>
						<input type="checkbox" className="input-formatting" />
						<p>40 km</p>
					</div>
					<div>
						<input type="checkbox" className="input-formatting" />
						<p>20 km</p>
					</div>
				</div>
			</div>
			<div>
				<h5>Allow photos in messages</h5>
				<input type="checkbox" className="input-formatting" />
			</div>
		</div>
	);
}

export default Privacy;
