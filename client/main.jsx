import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from './../imports/ui/App.jsx';
import '../lib/times.js'

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('react-target'));
});
