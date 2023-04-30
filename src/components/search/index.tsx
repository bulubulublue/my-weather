import React, { useState } from 'react';
import IconButton from '../iconButton/index';
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { addSearchHistory } from '../../store/weather';
import styles from './search.module.scss';
import { message } from 'antd';

interface IProps {
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
}

const Search = ({ onClick }: IProps) => {
  const dispatch = useDispatch();

  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');

  const [messageApi, contextHolder] = message.useMessage();

  const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    if (!country || !city) {
      messageApi.open({
        type: 'error',
        content: 'Please input country and city',
      });

      return;
    }

    dispatch(addSearchHistory({ city, country, time: Date.now() }));
    // const res = useSelector((state:any) => state.weather);
    // console.log(res);
    (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e);

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
        <IconButton onClick={handleSearch}>
          <SearchOutlined />
        </IconButton>
      </div>
    </>
  );
};

export default Search;
