import React from 'react';
import styles from './searchHistory.module.scss';
import SearchHistoryItem from '../searchHistoryItem';
import { useSelector } from 'react-redux';
import { ISearchHistory } from '../../interfaces/weather';
import { Empty } from 'antd';

const SearchHistory = () => {
  const { searchHistory } = useSelector((state: any) => state.weather);
  const maxCount = 10; // max histroy records displayed

  return (
    <div className={styles.history_wrapper}>
      <div className={styles.title}>Search History</div>
      {searchHistory.length ? (
        searchHistory
          .slice(0, maxCount)
          .map((record: ISearchHistory) => <SearchHistoryItem key={record.country + record.city + record.time} {...record} />)
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default SearchHistory;
