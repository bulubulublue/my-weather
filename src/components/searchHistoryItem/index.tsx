import React from 'react';
import styles from './searchHistoryItem.module.scss';
import { formatLocalTime } from '../../utils/tools';
import IconButton from '../iconButton';
import { SearchOutlined, DeleteOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { deleteSearchHistory } from '../../store/weather';

interface ISearchHistoryItemProps {
  country: string;
  city: string;
  time: number;
}

const SearchHistoryItem = (props: ISearchHistoryItemProps) => {
  const dispatch = useDispatch();

  const { city, country, time } = props;
  const formattedDate = formatLocalTime(time);

  const handleSearch = () => {
    console.log('search');
  };

  const handleDelete = () => {
    dispatch(deleteSearchHistory(props));
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
