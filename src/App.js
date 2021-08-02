import React, { useState } from "react";

// import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import {
  Route,
  Switch,
  BrowserRouter as Router,
  useHistory,
} from "react-router-dom";

import Landing from "./pages/public";
import FirstName from "./signup/0_FirstName";
import IAmA from "./signup/1_IAmA";
import Birthdate from "./signup/2_Birthdate";
import FamilyValues from "./signup/3_FamilyValues";
import AgeRange from "./signup/4_AgeRange";

function App() {
  const history = useHistory();

  const [selection, setSelection] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup/firstName" component={FirstName} />
          <Route exact path="/signup/iAmA" component={IAmA} />
          <Route exact path="/signup/birthdate" component={Birthdate} />
          <Route exact path="/signup/familyValues" component={FamilyValues} />
          <Route exact path="/signup/ageRange" component={AgeRange} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/matches" component={Matches} />
          <Route exact path="/settings" component={Settings} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
