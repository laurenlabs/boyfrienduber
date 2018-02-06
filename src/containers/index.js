import React, { PureComponent } from "react";

import { Switch, Route } from "react-router-dom";

import Review from './Review';
import Dashboard from './Dashboard';
import Login from './Login';
import History from './History';


export default class BoyfriendUber extends PureComponent {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/review" component={Review} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/history" component={History} />
        </Switch>
      </div>
    )
  }
}
