export interface IQueryParams {
  q: string;
}

export interface IGeoInfo {
  name: string;
  lat: number;
  lon: number;
}

export interface IWeatherQueryParams {
  lat: number;
  lon: number;
  exclude?: string;
}

// export interface IWeatherInfo {
//   day:number;
//   min:number;
//   max:number;
//   humidity:number;
//   weather:{main:string}[]
// }

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
