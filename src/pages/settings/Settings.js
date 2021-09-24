import React, { useState } from "react";

import Avatar from "../../assets/avatar.png";

import { useLocation, useHistory } from "react-router-dom";

import Account from "./components/Account";
import Notifications from "./components/Notifications";
import Privacy from "./components/Privacy";

import "./Settings.css";

function Settings() {
	const [showPane, setShowPane] = useState("account");
	const location = useLocation();
	const history = useHistory();

	const url = location.pathname;

	return (
		<div
			id="settings-bg"
			className="d-flex justify-content-center align-items-center"
		>
			<div id="settings-central-spacing">
				<div id="settings-header">
					<div id="settings-pane-left2">
						<h1>Settings</h1>
					</div>
					<div id="settings-pane-right">
						<h1 className="settings-bg-hack">hidden msg!</h1>
					</div>
				</div>
				<div id="settings-panes">
					<div id="settings-pane-left">
						<div id="blue-panel">
							<div
								className="profile-avatar d-flex"
								id="settings-avatar-imaged"
							>
								<img
									className="profile-avatar"
									id="settings-avatar-contained"
									src={Avatar}
									alt="pfp"
								/>
							</div>
						</div>
						<div id="lower-panel">
							<div
								className="setting-option"
								onClick={() => {
									setShowPane("account");
								}}
							>
								<h3>My Account</h3>
							</div>
							<div
								className="setting-option"
								onClick={() => {
									setShowPane("notifications");
								}}
							>
								<h3>Notifications</h3>
							</div>
							<div
								className="setting-option"
								onClick={() => {
									setShowPane("privacy");
								}}
							>
								<h3>Privacy</h3>
							</div>
							<div className="setting-option">
								<h3
									onClick={() => {
										history.push("/", {
											from: url,
										});
									}}
								>
									Sign out
								</h3>
							</div>
						</div>
					</div>
					{showPane === "account" ? <Account /> : null}
					{showPane === "notifications" ? <Notifications /> : null}
					{showPane === "privacy" ? <Privacy /> : null}
				</div>
			</div>
		</div>
	);
}

export default Settings;
