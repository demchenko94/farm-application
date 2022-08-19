import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WeatherState } from './weather.state';

const selectWeather = createFeatureSelector<WeatherState>('weather');

export const currentWeather = createSelector(selectWeather, (s) => {
  return s.current;
});

export const weatherList = createSelector(selectWeather, (s) => {

  return s.list.filter((item, index) => {
    return index % 8 === 0
  });
});
