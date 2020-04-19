import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../stylesheets/App.scss';
import Card from './Card';
import Landing from './Landing';

function App() {
  return (
    <Switch>
      <Route path='/Landing' component={Landing} />
      <Route path='/Card' component={Card} />
    </Switch>
  );
}

export default App;
