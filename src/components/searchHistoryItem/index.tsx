import React from 'react';
import styles from './searchHistoryItem.module.scss';
import { formatLocalTime } from '../../utils/tools';
import IconButton from '../iconButton';
import { SearchOutlined, DeleteOutlined } from '@ant-design/icons';

interface ISearchHistoryItemProps {
  country: string;
  city: string;
  date: number;
}

const SearchHistoryItem = (props: ISearchHistoryItemProps) => {
  const { city, country, date } = props;
  const formattedDate = formatLocalTime(date);

  const handleSearch = () => {
    console.log('search');
  };

  const handleDelete = () => {
    console.log('delete');
  };

  return (
    <div className={styles.item_wrapper}>
      <div className={styles.item_left}>
        <span>
          {city},{country}
        </span>
      </div>
      <div className={styles.item_right}>
        <span className={styles.mr_10}>{formattedDate}</span>
        <IconButton onClick={handleSearch} shape="circle" size="small" type="light">
          <SearchOutlined />
        </IconButton>
        <IconButton onClick={handleDelete} shape="circle" size="small" type="light">
          <DeleteOutlined />
        </IconButton>
      </div>
    </div>
  );
};

export default SearchHistoryItem;
