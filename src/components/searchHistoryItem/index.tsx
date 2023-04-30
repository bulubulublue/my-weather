import React from 'react';
import styles from './searchHistoryItem.module.scss';
import { formatLocalTime } from '../../utils/tools';
import IconButton from '../iconButton';
import { SearchOutlined, DeleteOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { deleteSearchHistory, updateSearchHistory } from '../../store/weather';
import { useWeather } from '../../hooks/useWeather';
import { message } from 'antd';

interface ISearchHistoryItemProps {
  country: string;
  city: string;
  time: number;
}

const SearchHistoryItem = (props: ISearchHistoryItemProps) => {
  const dispatch = useDispatch();

  const { city, country, time } = props;

  const { loading, getWeatherData } = useWeather(country, city);
  const [messageApi, contextHolder] = message.useMessage();

  const formattedDate = formatLocalTime(time);

  const handleSearch = async () => {
    const newTime = Date.now();

    try {
      await getWeatherData(newTime);
      dispatch(updateSearchHistory({ city, country, oldTime: time, newTime }));
    } catch (error) {
      messageApi.open({
        type: 'error',
        content: error as string,
      });
    }
  };

  const handleDelete = () => {
    dispatch(deleteSearchHistory(props));
  };

  return (
    <>
      {contextHolder}
      <div className={styles.item_wrapper}>
        <div className={styles.item_left}>
          <span>
            {city},{country}
          </span>
        </div>
        <div className={styles.item_right}>
          <span className={styles.mr_10}>{formattedDate}</span>
          <IconButton onClick={handleSearch} shape="circle" size="small" type="light" loading={loading}>
            <SearchOutlined />
          </IconButton>
          <IconButton onClick={handleDelete} shape="circle" size="small" type="light">
            <DeleteOutlined />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default SearchHistoryItem;
