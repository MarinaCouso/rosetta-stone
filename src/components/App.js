import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../stylesheets/App.scss';
import Card from './Card';
import Landing from './Landing';

function App() {
  return (
    <Switch>
      <Route path='/Card' component={Card} />
      <Route path='/' component={Landing} />
    </Switch>
  );
}

export default App;
