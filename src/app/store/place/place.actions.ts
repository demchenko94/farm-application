import { Place, User } from '@app/modules/core/models';
import { createAction, props } from '@ngrx/store';

export const selectPlaceId = createAction(
  '[Search Location] Select Place Id',
  props<{ placeId: string }>(),
);
export const apiLoadPlaceDetails = createAction(
  '[Search Location API] Place Details Loaded Success',
  props<{ place: Place }>(),
);

export const loadSavedPlace = createAction('[App ] Saved Place Loaded Success');

export const sessionStorageLoadSavedPlace = createAction(
  '[SessionStorage] Saved Place Loaded Success',
  props<{ place: Place }>(),
);
