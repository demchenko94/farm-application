import { DayWeather } from '@modules/core/models';

export interface Weather {
  list: DayWeather[];
  current: DayWeather;
}
