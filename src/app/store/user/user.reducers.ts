import { Action, createReducer, on } from '@ngrx/store';
import { saveUser, sessionStorageLoadSavedUser } from './user.actions';
import { UserState } from './user.state';

const initialState: UserState = {
  firstName: '',
  lastName: '',
  selectedPlaceId: null,
};

const reducer = createReducer(
  initialState,
  on(saveUser, (state, { user }) => {
    console.log('saveUser', state);
    const savedUser = {
      firstName: user.firstName,
      lastName: user.lastName,
      selectedPlaceId: user.selectedPlaceId,
    };

    sessionStorage.setItem('savedUser', JSON.stringify(savedUser));

    return {
      ...state,
      ...savedUser,
    };
  }),
  on(sessionStorageLoadSavedUser, (state, { user }) => ({
    ...state,
    ...user,
  })),
);

export function userReducer(state: UserState | undefined, action: Action) {
  return reducer(state, action);
}
