import React from "react";

import Avatar from "../../assets/avatar.png";

import { useLocation, useHistory } from "react-router-dom";

import "./Settings.css";

function Settings() {
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
          <h1>Settings</h1>
          <h1 className="settings-bg-hack">hidden msg!</h1>
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
              <div className="setting-option">
                <h3>My Account</h3>
              </div>
              <div className="setting-option">
                <h3>Notifications</h3>
              </div>
              <div className="setting-option">
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
          <div id="settings-pane-right">
            <div>
              <h5>First name</h5>
              <input className="input" placeholder="Your name here" />
              <div>
                <button className="btn-save btn-general">Save</button>
                <button className="btn-cancel btn-general">Cancel</button>
              </div>
            </div>
            <div>
              <h5>Email</h5>
              <input className="input" placeholder="cousinafaq@gmail.com" />
              <div>
                <button className="btn-save btn-general">Save</button>
                <button className="btn-cancel btn-general">Cancel</button>
              </div>
            </div>
            <div>
              <h5>Birthday</h5>
              <p>July 21, 2021</p>
              <p className="generic-blk-txt">
                Problem with your birthday?
                <br id="set-br" /> <span>Contact support</span>
              </p>
            </div>
            <div>
              <h5>Location</h5>
              <input className="input" placeholder="Lahore" />
              <input className="input" placeholder="Pakistan" />
              <div>
                <button className="btn-save btn-general">Save</button>
                <button className="btn-cancel btn-general">Cancel</button>
              </div>
            </div>
            <div>
              <h5>Unit preference</h5>
              <input id="tickbox" type="checkbox" />
              <p className="generic-grey-txt">
                I prefer to use the metric system
              </p>
            </div>
            <div>
              <h5>Security</h5>
              <p className="generic-grey-txt">Phone Number</p>
              <p className="generic-blk-txt">984-912-4232-13</p>
              <button className="btn-save btn-general">Edit</button>
            </div>
            <div>
              <h5>Change your password</h5>
              <input className="input" placeholder="new password" />
              <p className="generic-blk-txt">
                Forgot your password? <span>Reset it</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
