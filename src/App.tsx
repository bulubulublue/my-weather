import React from 'react';
import Search from './components/search';
import Weather from './components/weather';
import SearchHistory from './components/searchHistory';
import './App.scss';
import { useSelector } from 'react-redux';
import cloud from './assets/images/cloud.png';
import sun from './assets/images/sun.png';
import classNames from 'classnames';

function App() {
  const { currentWeather } = useSelector((state: any) => state.weather);
  const weather = currentWeather?.weather || '';
  const cloudWeathers = ['Clouds', 'Thunderstorm', 'Rain', 'Snow'];

  const derivedClassNames = classNames('weather-wrapper', { is_transform: weather !== '' });

  return (
    <div className="content-wrapper">
      <Search />
      <main className="content-main">
        {weather ? (
          <div className="image-wrapper">
            <img className="image" src={cloudWeathers.includes(weather) ? cloud : sun} alt="" />
          </div>
        ) : (
          ''
        )}

        <div className={derivedClassNames}>
          <Weather {...currentWeather} />
          <SearchHistory />
        </div>
      </main>
    </div>
  );
}

export default App;
