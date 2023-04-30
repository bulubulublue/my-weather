import React, { useEffect, useState } from 'react';
import IconButton from '../iconButton/index';
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { addSearchHistory, updateCurrentWeather } from '../../store/weather';
import styles from './search.module.scss';
import { message } from 'antd';
import { getGeoInfo, getWeatherInfo } from '../../apis';
import { useAsync } from '../../hooks/useAsync';

const Search = () => {
  const dispatch = useDispatch();

  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();

  const { isLoading: isGeoLoading, run: runGetGeoInfo } = useAsync(getGeoInfo);
  const { isLoading: isWeatherLoading, run: runGetWeatherInfo } = useAsync(getWeatherInfo);

  useEffect(() => {
    setLoading(isGeoLoading || isWeatherLoading);
  }, [isGeoLoading, isWeatherLoading]);

  const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleSearch = async () => {
    if (!country || !city) {
      messageApi.open({
        type: 'error',
        content: 'Please input country and city',
      });

      return;
    }

    const geoData = await runGetGeoInfo({ q: `${city},${country}` });
    if (!geoData || !geoData.length) {
      messageApi.open({
        type: 'error',
        content: 'Get Geo info error',
      });

      return;
    }

    const { lat, lon } = geoData[0];
    const weatherData = await runGetWeatherInfo({ lat, lon });

    const time = Date.now();
    const transformedWeatherData = {
      country,
      city,
      time,
      currentTemp: weatherData?.current.temp,
      minTemp: weatherData?.daily[0].temp.min,
      maxTemp: weatherData?.daily[0].temp.max,
      humidity: weatherData?.current.humidity,
      weather: weatherData?.current.weather[0].main,
    };

    dispatch(updateCurrentWeather(transformedWeatherData));
    dispatch(addSearchHistory({ city, country, time }));

    setCountry('');
    setCity('');
  };

  return (
    <>
      {contextHolder}
      <div className={styles.container}>
        <div className={styles.input_container}>
          <label className={styles.label}>Country</label>
          <input className={styles.input_field} type="text" value={country} onChange={handleCountryChange}></input>
        </div>
        <div className={styles.input_container}>
          <label className={styles.label}>City</label>
          <input className={styles.input_field} type="text" value={city} onChange={handleCityChange}></input>
        </div>
        <IconButton onClick={handleSearch} loading={loading}>
          <SearchOutlined />
        </IconButton>
      </div>
    </>
  );
};

export default Search;
