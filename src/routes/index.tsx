import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import NormalGame from '../pages/NormalGame';
import AboutGame from '../pages/AboutGame';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/normal-game" component={NormalGame} />
    <Route path="/about" component={AboutGame} />
  </Switch>
);

export default Routes;
