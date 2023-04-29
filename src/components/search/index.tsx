import React, { useState } from 'react';
import IconButton from '../iconButton/index';
import { SearchOutlined } from '@ant-design/icons';
import styles from './search.module.scss';

interface IProps {
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
}

const Search = ({ onClick }: IProps) => {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');

  const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e);
  };

  return (
    <div className={styles.container}>
      <div className={styles.input_container}>
        <label className={styles.label}>Country</label>
        <input className={styles.input_field} type="text" value={country} onChange={handleCountryChange}></input>
      </div>
      <div className={styles.input_container}>
        <label className={styles.label}>City</label>
        <input className={styles.input_field} type="text" value={city} onChange={handleCityChange}></input>
      </div>
      <IconButton onClick={handleSearch}>
        <SearchOutlined />
      </IconButton>
    </div>
  );
};

export default Search;
