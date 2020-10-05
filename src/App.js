import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import FavouritesPage from './pages/FavouritesPage/FavouritesPage';
import PageHeader from './components/PageHeader/pageHearder.component';


const App = () => {

  return (
      <div className='page-container'>
        <PageHeader />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/favourites" component={FavouritesPage} />
        </Switch>
      </div>
  );
}

export default App;
