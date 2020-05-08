import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Tasks from '../pages/Tasks';
import User from '../pages/User';
import Users from '../pages/Users';
import UserTasks from '../pages/UserTasks';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/tasks" />} />
      <Route exact path="/tasks" component={Tasks} />
      <Route exact path="/user/:id" component={User} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/usertasks/:id" component={UserTasks} />
    </Switch>
  );
}
