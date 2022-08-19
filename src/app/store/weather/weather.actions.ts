import { DayWeather } from '@app/modules/core/models';
import { createAction, props } from '@ngrx/store';
import { Location } from '@app/modules/core/models';

export const loadCurrentWeather = createAction(
  '[Weather Widget] Current Weather Loaded Success',
  props<{ location: Location }>(),
);
export const apiLoadCurrentWeather = createAction(
  '[Weather Widget API] Current Weather Loaded Success',
  props<{ current: DayWeather }>(),
);

export const loadWeather = createAction(
  '[Weather Widget] Weather Loaded Success',
  props<{ location: Location }>(),
);
export const apiLoadWeather = createAction(
  '[Weather Widget API] Weather Loaded Success',
  props<{ list: DayWeather[] }>(),
);
