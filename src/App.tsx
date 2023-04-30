import React from 'react';
import Search from './components/search';
import Weather from './components/weather';
import SearchHistory from './components/searchHistory';
import './App.scss';
import { useSelector } from 'react-redux';

function App() {
  const { currentWeather } = useSelector((state: any) => state.weather);

  return (
    <div className="content-wrapper">
      <Search />
      <main className="weather-wrapper">
        <div className="image-wrapper">
          <img src="./assets/images/cloud.png" alt="" />
        </div>
        <Weather {...currentWeather} />
        <SearchHistory />
      </main>
    </div>
  );
}

export default App;
