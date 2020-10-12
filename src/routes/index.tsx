import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import NormalGame from '../pages/NormalGame';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/normal-game" component={NormalGame} />
  </Switch>
);

export default Routes;
