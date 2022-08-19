import { Action, createReducer, on } from '@ngrx/store';
import { PlaceState } from './place.state';
import {apiLoadPlaceDetails, selectPlaceId, sessionStorageLoadSavedPlace} from '@app/store/place';
import {sessionStorageLoadSavedUser} from "@app/store/user";

const initialState: PlaceState = {
  name: '',
  location: {
    lat: 0,
    lng: 0,
  },
  place_id: '',
  utc_offset: 0,
};

const reducer = createReducer(
  initialState,
  on(selectPlaceId, (state, { placeId }) => {
    return {
      ...state,
      place_id: placeId,
    };
  }),
  on(apiLoadPlaceDetails, (state, { place }) => {
    sessionStorage.setItem('savedPlace', JSON.stringify(place));

    return {
      ...state,
      ...place,
    };
  }),
  on(sessionStorageLoadSavedPlace, (state, { place }) => ({
    ...state,
    ...place,
  })),
);

export function placeReducer(state: PlaceState | undefined, action: Action) {
  return reducer(state, action);
}
