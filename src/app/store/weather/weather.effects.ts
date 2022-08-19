import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import {apiLoadCurrentWeather, apiLoadWeather, loadCurrentWeather, loadWeather} from '@app/store/weather';
import { WeatherService } from '@modules/core/services';

@Injectable()
export class WeatherEffects {
  constructor(private actions$: Actions, private weatherService: WeatherService) {}

  loadWeather$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadWeather),
      mergeMap((props) =>
        this.weatherService.getWeather(props.location).pipe(
          map((weather) => apiLoadWeather({ list: weather.list })),
          catchError(() => of({ type: '[Weather Widget API] Weather Loaded Error' })),
        ),
      ),
    ),
  );

  loadCurrentWeather$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCurrentWeather),
      mergeMap((props) =>
        this.weatherService.getCurrentWeather(props.location).pipe(
          map((weather) => apiLoadCurrentWeather({ current: weather })),
          catchError(() => of({ type: '[Weather Widget API] Current Weather Loaded Error' })),
        ),
      ),
    ),
  );
}
