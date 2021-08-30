import React from 'react';
import AdminHomePage from './pages/AdminHomePage';
import HomePage from './pages/HomePage';
import ListTripsPage from './pages/ListTripsPage';
import ApplicationFormPage from './pages/ApplicationFormPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import CreateTripPage from './pages/CreateTripPage';
import LoginPage from './pages/LoginPage';
import axios from 'axios';
import TripDetailsPage from './pages/TripDetailsPage';







const App = () => {






  return (
    <BrowserRouter>
      <Switch>

        <Route exact path={"/"}>
        <HomePage />
        </Route>

        <Route exact path={"/listtrip"}>
        <ListTripsPage />
        </Route>

        <Route exact path={"/applicationform"}>
        <ApplicationFormPage />
        </Route>

        <Route exact path={"/adminpage"}>
        <AdminHomePage/>
        </Route>

        <Route exact path={"/createtripage"}>
        <CreateTripPage/>
        </Route>

        <Route exact path={"/loginpage"}>
        <LoginPage/>
        </Route>

        <Route exact path={"/trippage"}>
        <TripDetailsPage/>
        </Route>

      </Switch>
    </BrowserRouter>
  );

}

export default App;
