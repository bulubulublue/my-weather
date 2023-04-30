import { request } from '../utils/http';
import { GET_GEO_INFO, API_KEY, GET_COUNTRY_CODE, GET_WEATHER_INFO } from '../config/apis';
import { IQueryParams, IGeoInfo, IWeatherQueryParams, IWeatherResponse } from '../interfaces/weather';

export const getGeoInfo = (params: Omit<IQueryParams, 'appid'>) => {
  const mergedParams = { ...params, appid: API_KEY };
  return request<IGeoInfo[]>({
    url: GET_GEO_INFO,
    method: 'get',
    params: mergedParams,
  });
};

export const getWeatherInfo = (params: IWeatherQueryParams) => {
  const mergedParams = { appid: API_KEY, exclude: 'minutely,hourly,alerts', units: 'metric', ...params };
  return request<IWeatherResponse>({
    url: GET_WEATHER_INFO,
    method: 'get',
    params: mergedParams,
  });
};

export const getCountryCode = (params: IQueryParams) => {
  return request<IGeoInfo>({
    url: GET_COUNTRY_CODE,
    method: 'get',
    params,
  });
};
