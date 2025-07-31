// src/App.js
import React from 'react';
import './index.css';

import HeroBanner from './components/HeroBanner';
import CategoryCards from './components/CategoryCards';
import PopularItems from './components/PopularItems';
import SearchByPNR from './components/SearchByPNR';
import SearchByTrain from './components/SearchByTrain';

function App() {
  return (
    <div className="App">
      <HeroBanner />
      <SearchByPNR />
      <SearchByTrain />
      <CategoryCards />
      <PopularItems />
    </div>
  );
}

export default App;
