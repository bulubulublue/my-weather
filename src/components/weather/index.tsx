import React from 'react';
import styles from './weather.module.scss';
import { formatLocalTime } from '../../utils/tools';

interface IWeatherProps {
  country: string;
  city: string;
  time: number;
  currentTemp: number;
  minTemp: number;
  maxTemp: number;
  humidity: number;
  weather: string;
}
const Weather = (props: IWeatherProps) => {
  const { country, city, time, currentTemp, minTemp, maxTemp, humidity, weather } = props;

  const formatedTime = formatLocalTime(time);

  return (
    <div className={styles.weather_container}>
      <div className={styles.title}>Today&apos;s Weather</div>
      <div className={styles.today_temp}>{currentTemp}°</div>
      <div className={styles.high_low_temp}>
        <span>H: {minTemp}°</span>
        <span>L: {maxTemp}°</span>
      </div>
      <div className={styles.other_info}>
        <span>
          {city},{country}
        </span>
        <span>{formatedTime}</span>
        <span>Humidity: {humidity}%</span>
        <span>{weather}</span>
      </div>
    </div>
  );
};

export default Weather;
