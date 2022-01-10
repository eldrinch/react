import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoutes from '../private.routes';

import Home from '../views/home';
import Courses from '../views/Courses';
import singUp from '../views/singUp';
import singIn from '../views/signIn';
import Dashboard from '../views/Dash';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/courses" exact component={Courses} />
        <Route path="/signin" exact component={singIn} />
        <Route path="/signup" exact component={singUp} />
        <PrivateRoutes path="/dashboard" exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
