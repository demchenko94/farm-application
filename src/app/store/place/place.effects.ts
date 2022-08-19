import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, act } from '@ngrx/effects';

import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { SearchLocationService, SessionStorageService } from '@modules/core/services';
import {
  apiLoadPlaceDetails,
  loadSavedPlace,
  selectPlaceId,
  sessionStorageLoadSavedPlace,
} from '@app/store/place/place.actions';

@Injectable()
export class PlaceEffects {
  constructor(
    private actions$: Actions,
    private sessionStorageService: SessionStorageService,
    private searchLocationService: SearchLocationService,
  ) {}

  selectPlaceId$ = createEffect(() =>
    this.actions$.pipe(
      ofType(selectPlaceId),
      mergeMap((props) =>
        this.searchLocationService.getLocationDetails(props.placeId).pipe(
          map(({ result }) => {
            const place = {
              location: {
                lat: result.geometry.location.lat,
                lng: result.geometry.location.lng,
              },
              place_id: result.place_id,
              name: result.name,
              utc_offset: result.utc_offset,
            };
            return apiLoadPlaceDetails({ place });
          }),
          catchError(() => of({ type: '[Search Location API] Place Details Loaded Error' })),
        ),
      ),
    ),
  );

  loadSavedPlace$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSavedPlace),
      mergeMap(() =>
        this.sessionStorageService.getData('savedPlace').pipe(
          map((place) => sessionStorageLoadSavedPlace({ place })),
          catchError(() => of({ type: '[SessionStorage] Saved Place Loaded Error' })),
        ),
      ),
    ),
  );
}
