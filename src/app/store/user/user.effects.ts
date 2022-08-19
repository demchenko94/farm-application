import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, act } from '@ngrx/effects';

import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { loadUser, sessionStorageLoadSavedUser } from './user.actions';
import { SessionStorageService } from '@modules/core/services';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private sessionStorageService: SessionStorageService) {}

  loadSavedUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUser),
      mergeMap(() =>
        this.sessionStorageService.getData('savedUser').pipe(
          map((user) => sessionStorageLoadSavedUser({ user })),
          catchError(() => of({ type: '[SessionStorage] Selected Movies Loaded Error' })),
        ),
      ),
    ),
  );
}
