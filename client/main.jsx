import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, browserHistory } from 'react-router';

import App from '../imports/ui/App.jsx';
import New from '../imports/ui/New';
import Lost from '../imports/ui/Lost';

injectTapEventPlugin();

Meteor.startup(() => {
  render((
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
      <Route path="/new" component={New}/>
      <Route path="*" component={Lost}/>
    </Router>
  ), document.getElementById('render-target'));
});
