import React from "react";

import Avatar from "../../assets/avatar.png";

import "./Settings.css";

function Settings() {
  return (
    <div>
      <div id="settings-central-spacing">
        <div>
          <h1>Settings</h1>
        </div>
        <div>
          <div id="settings-pane-left">
            <div id="blue-panel">
              <img
                className="profile-avatar"
                id="profile-avatar-contained"
                src={Avatar}
                alt="pfp"
              />
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
                <h3>Sign out</h3>
              </div>
            </div>
          </div>
          <div id="settings-pane-right">
            <div>
              <h5>First name</h5>
              <input placeholder="Your name here" />
              <button className="btn-save">Save</button>
              <button className="btn-cancel btn-general">Cancel</button>
            </div>
            <div>
              <h5>Email</h5>
              <input placeholder="cousinafaq@gmail.com" />
              <button className="btn-save">Save</button>
              <button className="btn-cancel btn-general">Cancel</button>
            </div>
            <div>
              <h5>Birthday</h5>
              <p>July 21, 2021</p>
              <p className="generic-blk-txt">
                Problem with your birthday? <span>Contact support</span>
              </p>
            </div>
            <div>
              <h5>Location</h5>
              <input placeholder="Lahore" />
              <input placeholder="Pakistan" />
              <button className="btn-save">Save</button>
              <button className="btn-cancel btn-general">Cancel</button>
            </div>
            <div>
              <h5>Unit preference</h5>
              <input />
              <p className="generic-grey-txt">
                I prefer to use the metric system
              </p>
            </div>
            <div>
              <h5>Security</h5>
              <p className="generic-grey-txt">Phone Number</p>
              <p className="generic-blk-txt">984-912-4232-13</p>
              <button className="btn-save">Edit</button>
            </div>
            <div>
              <h5>Change your password</h5>
              <input placeholder="new password" />
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
