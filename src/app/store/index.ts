import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '@env/environment';

import { UserState, userReducer } from '@app/store/user';
import { PlaceState, placeReducer } from '@app/store/place';
import { WeatherState, weatherReducer } from '@app/store/weather';

export interface AppState {
  user: UserState;
  place: PlaceState;
  weather: WeatherState;
}

export const reducers: ActionReducerMap<AppState> = {
  user: userReducer,
  place: placeReducer,
  weather: weatherReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
