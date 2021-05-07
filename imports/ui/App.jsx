//modules
import React, { useState, Component } from 'react';
import {BrowserRouter as Router, Route, Navlink, Switch, useParams} from 'react-router-dom';
import {Helmet} from "react-helmet";
import PropTypes from 'prop-types';
import moment from 'moment';
//dbs
import { TimesCollectionAccess } from './../../lib/times.js';
//pages
import Clock from './pages/clock.jsx';
import TimeList from './pages/TimeList.jsx';
import EditTime from './pages/EditTime.jsx';
import Settings from './pages/Settings.jsx';
import CreateTime from './pages/CreateTime.jsx';

const allCategories = [
    'Work',
    'Class',
    'Meeting',
    'Break'
];

function EditRouter() {
  let { id } = useParams();
  return(
    <EditTime passedID={id} categories={allCategories} />
  )
}

export default class App extends React.Component{
  render(){
    return(
        <Router>
          <Switch>
            <Route
              key="Clock"
              path="/"
              exact >
              <Clock categories={allCategories} />
            </Route>

            <Route
              key="TimeList"
              path="/TimeList"
              exact >
              <TimeList categories={allCategories} />
            </Route>

            <Route
              key="Settings"
              path="/Settings"
              exact >
              <Settings />
            </Route>

            <Route
              key="CreateTime"
              path="/CreateTime"
              exact >
              <CreateTime categories={allCategories} />
            </Route>

            <Route
              key="EditTime"
              path="/:id"
              exact >
              <EditRouter />
            </Route>

          </Switch>
        </Router>
    );
  }
}
