import React from "react";
import "./App.css";

import Header from './components/Header/Header';
import GlobalSiteConstants from './components/ConstantFiles/GlobalSiteConstants';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import Contribute from './components/Contribute';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/PrivateRoute';
import UserPage from './components/UserPage/UserPage';


// Templates
import CV1 from "./templates/cv_1/CV1";

function App() {
  return (
    <div>
    <BrowserRouter>
    <Header HeaderNames = {GlobalSiteConstants.HeaderNames}
    HeaderHrefs = {GlobalSiteConstants.HeaderHrefs}/>
    <Switch>
    <Route exact path = "/"><HomePage / ></ Route>
    <Route exact path = "/login"><LoginPage / ></ Route>
    <Route exact path = "/contribute"><Contribute / ></ Route>
    <Route exact path = "/feedback"><Contribute / > </ Route>
    <ProtectedRoute component={UserPage} exact path="/welcome" />
    {/* Temporary: needs API protection */}
    <Route exact path="/cv1" component={CV1} />
    </ Switch>
    </ BrowserRouter>
    </ div>
  );
}

export default App;
