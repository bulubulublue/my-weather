// common query params
export interface IQueryParams {
  q: string;
}

// reponse-geo info
export interface IGeoInfo {
  name: string;
  lat: number;
  lon: number;
}

// weather info query params
export interface IWeatherQueryParams {
  lat: number;
  lon: number;
  exclude?: string;
}

// weather info displayed on page
export interface IWeatherInfo extends ISearchHistory {
  currentTemp: number;
  minTemp: number;
  maxTemp: number;
  humidity: number;
  weather: string;
}

// response from API
export interface IWeatherResponse {
  current: {
    temp: number;
    humidity: number;
    weather: { main: string }[];
  };
  daily: {
    temp: {
      min: number;
      max: number;
    };
  }[];
}

// search history record info
export interface ISearchHistory {
  city: string;
  country: string;
  time: number;
}
