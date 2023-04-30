import React, { useState } from 'react';
import IconButton from '../iconButton/index';
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { addSearchHistory } from '../../store/weather';
import styles from './search.module.scss';
import { message } from 'antd';
import { useWeather } from '../../hooks/useWeather';

const Search = () => {
  const dispatch = useDispatch();

  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');

  const [messageApi, contextHolder] = message.useMessage();
  const { loading, getWeatherData } = useWeather(country, city);

  const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleSearch = async () => {
    const time = Date.now();

    try {
      await getWeatherData(time);
      dispatch(addSearchHistory({ city, country, time }));
    } catch (error) {
      messageApi.open({
        type: 'error',
        content: error as string,
      });
    }

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
