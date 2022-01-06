import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../views/home';
import Contact from '../views/Contact';
import singUp from '../views/singUp';
import singIn from '../views/signIn';
import Dashboard from '../views/Dash';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/contact" exact component={Contact} />
        <Route path="/signin" exact component={singIn} />
        <Route path="/signup" exact component={singUp} />
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
