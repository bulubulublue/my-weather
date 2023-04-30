import React, { useState } from 'react';
import IconButton from '../iconButton/index';
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { addSearchHistory } from '../../store/weather';
import styles from './search.module.scss';
import { message } from 'antd';
import { useWeather } from '../../hooks/useWeather';
import { findCountryCode } from '../../utils/tools';

const Search = () => {
  const dispatch = useDispatch();

  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');

  const [messageApi, contextHolder] = message.useMessage();
  const { loading, getWeatherData } = useWeather(findCountryCode(country), city);

  // input-country change callback event
  const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };

  // input-city change callback event
  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleSearch = async () => {
    const time = Date.now();

    try {
      // get weather data and save the search action to store
      await getWeatherData(time);
      dispatch(addSearchHistory({ city, country, time }));
      setCountry('');
      setCity('');
    } catch (error) {
      messageApi.open({
        type: 'error',
        content: error as string,
      });
    }
  };

  return (
    <>
      {contextHolder}
      <div className={styles.search_wrapper}>
        <div className={styles.input_wrapper}>
          <label className={styles.label}>Country</label>
          <input className={styles.input_field} type="text" value={country} onChange={handleCountryChange}></input>
        </div>
        <div className={styles.input_wrapper}>
          <label className={styles.label}>City</label>
          <input className={styles.input_field} type="text" value={city} onChange={handleCityChange}></input>
        </div>
        <IconButton className={styles.search_icon} onClick={handleSearch} loading={loading} icon={<SearchOutlined />} />
      </div>
    </>
  );
};

export default Search;
