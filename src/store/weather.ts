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
      console.log(state.searchHistory);
    },
  },
});

export const { addSearchHistory } = weatherSlice.actions;
export const { reducer: weatherReducer } = weatherSlice;
