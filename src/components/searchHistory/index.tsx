import React from 'react';
import styles from './searchHistory.module.scss';
import SearchHistoryItem from '../searchHistoryItem';

const SearchHistory = () => {
  const histories = [
    {
      country: 'Japan',
      city: 'Johor',
      date: '988775544',
    },
  ];

  return (
    <div className={styles.history_wrapper}>
      <div className={styles.title}>Search History</div>
      {histories.map(record => (
        <SearchHistoryItem key={record.country + record.city} {...record} />
      ))}
    </div>
  );
};

export default SearchHistory;
