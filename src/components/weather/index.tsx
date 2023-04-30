import React from 'react';
import styles from './weather.module.scss';
import { formatLocalTime } from '../../utils/tools';
import { IWeatherInfo } from '../../interfaces/weather';

const Weather = (props: IWeatherInfo) => {
  const { country, city, time, currentTemp, minTemp, maxTemp, humidity, weather } = props;

  const formatedTime = formatLocalTime(time);

  return (
    <div className={styles.weather_container}>
      <div className={styles.title}>Today&apos;s Weather</div>
      {Object.keys(props).length ? (
        <>
          <div className={styles.today_temp}>{currentTemp}°</div>
          <div className={styles.high_low_temp}>
            <span>H: {minTemp}°</span>
            <span>L: {maxTemp}°</span>
          </div>
          <div className={styles.other_info}>
            <div className={styles.other_info_left}>
              <span>
                {city},{country}
              </span>
            </div>
            <div className={styles.other_info_right}>
              <span>{formatedTime}</span>
              <span>Humidity: {humidity}%</span>
              <span>{weather}</span>
            </div>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default Weather;
