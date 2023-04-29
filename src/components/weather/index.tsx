import React from 'react';
import styles from './weather.module.scss';

interface IWeatherProps {
  country: string;
  city: string;
  time: string;
  temp: number;
  highTemp: number;
  lowTemp: number;
  humidity: number;
  weather: string;
}
const Weather = (props: IWeatherProps) => {
  const { country, city, time, temp, highTemp, lowTemp, humidity, weather } = props;
  return (
    <div className={styles.weather_container}>
      <div className={styles.title}>Today&apos;s Weather</div>
      <div className={styles.today_temp}>{temp}°</div>
      <div className={styles.high_low_temp}>
        <span>H: {highTemp}°</span>
        <span>L: {lowTemp}°</span>
      </div>
      <div className={styles.other_info}>
        <span>
          {country},{city}
        </span>
        <span>{time}</span>
        <span>Humidity: {humidity}%</span>
        <span>{weather}</span>
      </div>
    </div>
  );
};

export default Weather;
