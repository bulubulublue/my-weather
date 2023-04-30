import { createSlice } from '@reduxjs/toolkit';
import { IWeatherInfo, ISearchHistory } from '../interfaces/weather';

interface IWeatherState {
  currentWeather: IWeatherInfo | null;
  searchHistory: ISearchHistory[];
}

const initialState: IWeatherState = {
  currentWeather: null,
  // searchHistory: Array.from({length:12}).map(() => ({ city: 'sg',
  // country: 'sg',
  // time: 1234567}))
  searchHistory: [],
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    addSearchHistory(state, action) {
      state.searchHistory = [action.payload, ...state.searchHistory];
      console.log(state.searchHistory);
    },
    deleteSearchHistory(state, action) {
      const { city, country, time } = action.payload;
      state.searchHistory = state.searchHistory.filter(record => !(record.city === city && record.country === country && record.time === time));
    },
    updateSearchHistory(state, action) {
      const { city, country, oldTime, newTime } = action.payload;

      state.searchHistory = state.searchHistory.filter(record => !(record.city === city && record.country === country && record.time === oldTime));
      state.searchHistory = [{ city, country, time: newTime }, ...state.searchHistory];
    },
    updateCurrentWeather(state, action) {
      state.currentWeather = action.payload;
    },
  },
});

export const { addSearchHistory, deleteSearchHistory, updateCurrentWeather, updateSearchHistory } = weatherSlice.actions;
export const { reducer: weatherReducer } = weatherSlice;
