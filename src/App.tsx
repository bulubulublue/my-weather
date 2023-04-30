import React, { useState } from 'react';
import Search from './components/search';
import Weather from './components/weather';
import SearchHistory from './components/searchHistory';
import './App.scss';
import { formatLocalTime } from './utils/tools';
import { getGeoInfo, getWeatherInfo } from './apis';
import { useAsync } from './hooks/useAsync';

function App() {
  const [weatherData, setWeatherData] = useState({
    country: 'JP',
    city: 'Johor',
    time: formatLocalTime(Date.now()),
    temp: 26,
    highTemp: 29,
    lowTemp: 25,
    humidity: 58,
    weather: 'Clouds',
  });

  const { run: runGetGeoInfo } = useAsync(getGeoInfo);
  const { isLoading, run: runGetWeatherInfo } = useAsync(getGeoInfo);

  const handleSearch = async () => {
    // const geoData = await runGetGeoInfo({ q: 'London' });
    // const weatherData = await getWeatherInfo({ lat: 39.31, lon: -74.5 });
    // const countryCode = await runGetCountryCode({q:'China'})
    // console.log(geoData, weatherData);
  };

  return (
    <div className="content-wrapper">
      <Search onClick={handleSearch} />
      <main className="weather-wrapper">
        <div className="image-wrapper">
          <img src="./assets/images/cloud.png" alt="" />
        </div>
        <Weather {...weatherData} />
        <SearchHistory />
      </main>
    </div>
  );
}

export default App;
