import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Games from './components/Games';
import GameForm from './components/GameForm';

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route exact path='/games' component={Games} />
    <Route exact path='/games/new' component={GameForm} />
  </Layout>
);
