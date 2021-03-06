import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home'
import MovieDetails from './components/MovieDetails'

export default (
    <Switch>
        <Route component={Home} exact path='/' />
        <Route component={MovieDetails} exact path='/movie-details/:movieID' />
    </Switch>
);


