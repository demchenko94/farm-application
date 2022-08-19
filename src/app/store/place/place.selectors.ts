import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PlaceState } from '@app/store/place';

const selectPlace = createFeatureSelector<PlaceState>('place');

export const utcOffset = createSelector(selectPlace, (s) => {
  return s.utc_offset;
});

export const place = createSelector(selectPlace, (s) => {
  return s;
});
