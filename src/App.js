import React from "react";

// import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import {
  Route,
  Switch,
  BrowserRouter as Router,
  useHistory,
  useLocation,
} from "react-router-dom";

import Header from "./pages/_wrapping/Header";
import Footer from "./pages/_wrapping/Footer";

import Landing from "./pages/public/Landing";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Matches from "./pages/matches/Matches";
import Settings from "./pages/settings/Settings";

import FirstName from "./pages/signup/FirstName";
import IAmA from "./pages/signup/IAmA";
import Birthdate from "./pages/signup/Birthdate";
import FamilyValues from "./pages/signup/FamilyValues";
import AgeRange from "./pages/signup/AgeRange";

function App() {
  // const [onMainPages, setOnMainPages] = useState(true);

  return (
    <main>
      <Router>
        <Header />
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
        <Footer />
      </Router>
    </main>
  );
}

export default App;
