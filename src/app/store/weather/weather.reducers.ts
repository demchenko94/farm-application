import { Action, createReducer, on } from '@ngrx/store';
import { WeatherState } from './weather.state';
import { apiLoadCurrentWeather, apiLoadWeather } from '@app/store/weather/weather.actions';

const initialState: WeatherState = {
  list: [],
  current: {
    weather: [],
    main: {
      temp_min: 0,
      temp_max: 0,
    },
    rain: {
      '1h': 0,
    },
    dt: 0,
  },
};

const reducer = createReducer(
  initialState,
  on(apiLoadWeather, (state, { list }) => {
    return {
      ...state,
      list: [...list],
    };
  }),
  on(apiLoadCurrentWeather, (state, { current }) => {
    return {
      ...state,
      current: Object.assign({}, current),
    };
  }),
);

export function weatherReducer(state: WeatherState | undefined, action: Action) {
  return reducer(state, action);
}
