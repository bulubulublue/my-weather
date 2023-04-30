import { useState, useEffect } from 'react';
import { getGeoInfo, getWeatherInfo } from '../apis';
import { useAsync } from '../hooks/useAsync';
import { useDispatch } from 'react-redux';
import { updateCurrentWeather } from '../store/weather';

export const useWeather = (country: string, city: string) => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const { isLoading: isGeoLoading, run: runGetGeoInfo } = useAsync(getGeoInfo);
  const { isLoading: isWeatherLoading, run: runGetWeatherInfo } = useAsync(getWeatherInfo);

  useEffect(() => {
    setLoading(isGeoLoading || isWeatherLoading);
  }, [isGeoLoading, isWeatherLoading]);

  const getWeatherData = async (time: number) => {
    if (!country.trim() || !city.trim()) {
      return Promise.reject('Please input valid country and city');
    }

    const geoData = (await runGetGeoInfo({ q: `${city},${country}` })) || [];
    if (!geoData || !geoData.length) {
      return Promise.reject('Location not found');
    }

    const { lat, lon } = geoData[0];
    const weatherData = await runGetWeatherInfo({ lat, lon });

    const transformedWeatherData = {
      country,
      city,
      time,
      currentTemp: weatherData?.current.temp,
      minTemp: weatherData?.daily[0].temp.min,
      maxTemp: weatherData?.daily[0].temp.max,
      humidity: weatherData?.current.humidity,
      weather: weatherData?.current.weather[0].main,
    };

    dispatch(updateCurrentWeather(transformedWeatherData));
  };

  return {
    loading,
    getWeatherData,
  };
};
