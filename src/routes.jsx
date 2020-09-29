import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { App, Whoops404 } from './components';
import Pokemon from './components/containers/Pokemon';

const renderPokemon = (props) => {
  const name = props.location.pathname.replace('/pokemon/', '');
  return <Pokemon name={name} />;
};

const routes = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/pokemon/:id" render={renderPokemon} />
      <Route path="*" component={Whoops404} />
    </Switch>
  </Router>
);

export default routes;
