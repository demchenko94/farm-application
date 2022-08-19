import { User } from '@app/modules/core/models';
import { createAction, props } from '@ngrx/store';

export const saveUser = createAction('[Init Page] Save', props<{ user: User }>());

export const loadUser = createAction('[User] Load user');
export const sessionStorageLoadSavedUser = createAction(
  '[SessionStorage] Saved User Loaded Success',
  props<{ user: User }>(),
);
