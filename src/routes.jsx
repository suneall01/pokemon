import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { App, Whoops404 } from './components';
import Pokemon from './components/containers/Pokemon';
import Filters from './components/ui/Filters';

const renderPokemon = (props) => {
  const name = props.location.pathname.replace('/pokemon/', '');
  return <Pokemon name={name} />;
};

const routes = (
  <Router basename={process.env.PUBLIC_URL}>
      <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/pokemon/:name" render={renderPokemon} />
      <Route path="*" component={Whoops404} />
    </Switch>
  </Router>
);

export default routes;
