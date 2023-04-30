import React from 'react';
import styles from './searchHistory.module.scss';
import SearchHistoryItem from '../searchHistoryItem';
import { useSelector } from 'react-redux';
import { ISearchHistory } from '../../interfaces/weather';

const SearchHistory = () => {
  const { searchHistory } = useSelector((state: any) => state.weather);

  return (
    <div className={styles.history_wrapper}>
      <div className={styles.title}>Search History</div>
      {searchHistory.map((record: ISearchHistory) => (
        <SearchHistoryItem key={record.country + record.city + record.time} {...record} />
      ))}
    </div>
  );
};

export default SearchHistory;
