import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import GlobalSiteConstants from "./components/ConstantFiles/GlobalSiteConstants";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import { BrowserRouter, Route } from "react-router-dom";

<<<<<<< HEAD
import Header from './components/Header/Header';
import GlobalSiteConstants from './components/ConstantFiles/GlobalSiteConstants';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import Contribute from './components/Contribute';
import {BrowserRouter, Route} from 'react-router-dom';
=======
// Templates
import CV1 from "./templates/cv_1/CV1";
>>>>>>> 3a4414006d5e10315a603f7d4c3ba1f11aa69291

function App() {
  return (
    <div>
<<<<<<< HEAD
    <BrowserRouter>
    <Header HeaderNames = {GlobalSiteConstants.HeaderNames}
    HeaderHrefs = {GlobalSiteConstants.HeaderHrefs}/>
    <Route exact path = "/"><HomePage / ></Route>
    <Route exact path = "/login"><LoginPage / ></Route>
    <Route exact path = "/contribute"><Contribute / ></Route>
    <Route exact path = "/feedback"><Contribute / ></Route>
    </BrowserRouter>
=======
      <BrowserRouter>
        <Header
          HeaderNames={GlobalSiteConstants.HeaderNames}
          HeaderHrefs={GlobalSiteConstants.HeaderHrefs}
        />

        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>

        {/* Temporary: needs API protection */}
        <Route exact path="/cv1" component={CV1} />
      </BrowserRouter>
>>>>>>> 3a4414006d5e10315a603f7d4c3ba1f11aa69291
    </div>
  );
}

export default App;
