import React from 'react';

import Map from '../Map/Map';
import DataCards from '../../containers/dataCards.js';
import './App.css';

const App = () => {
  console.log('App');

  return (
    <div className="App">
      <h2>Covid-19 Tracker</h2>
      <Map />
      <DataCards />
    </div>
  );
};

export default App;
