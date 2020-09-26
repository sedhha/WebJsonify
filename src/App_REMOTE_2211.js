import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import GlobalSiteConstants from "./components/ConstantFiles/GlobalSiteConstants";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import { BrowserRouter, Route } from "react-router-dom";

// Templates
import CV1 from "./templates/cv_1/CV1";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
