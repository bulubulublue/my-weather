import { createSlice } from '@reduxjs/toolkit';
import { IWeatherInfo, ISearchHistory } from '../interfaces/weather';

interface IWeatherState {
  currentWeather: IWeatherInfo | null;
  searchHistory: ISearchHistory[];
}

const initialState: IWeatherState = {
  currentWeather: null,
  searchHistory: [],
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    addSearchHistory(state, action) {
      state.searchHistory = [...state.searchHistory, action.payload];
    },
    deleteSearchHistory(state, action) {
      const { city, country, time } = action.payload;
      state.searchHistory = state.searchHistory.filter(record => {
        !(record.city === city && record.country === country && record.time === time);
      });
    },
  },
});

export const { addSearchHistory, deleteSearchHistory } = weatherSlice.actions;
export const { reducer: weatherReducer } = weatherSlice;
