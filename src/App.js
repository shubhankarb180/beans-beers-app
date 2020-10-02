import React, {useState, useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import FavouritesPage from './pages/FavouritesPage';

// const { Content, Header, Footer } = Layout;

const App = () => {
  const [ beerData, setbeerData] = useState([]);

  async function fetchData() {
    const apiCall = await fetch("https://api.punkapi.com/v2/beers");
    const beers = await apiCall.json();
    console.log("Function is working");
    setbeerData(beers);
  }

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/favourites" component={FavouritesPage} />
      </Switch>
    </div>
  );
}

export default App;
