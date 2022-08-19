import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '@app/store/user/user.state';

const selectUser = createFeatureSelector<UserState>('user');

export const userInitials = createSelector(selectUser, (s) => {
  let userInitials = '';
  if (s.firstName && s.lastName) {
    const firstNameLater = s.firstName.charAt(0);
    const lastNameLater = s.lastName.charAt(0);
    userInitials = `${firstNameLater}${lastNameLater}`;
  }
  return userInitials || null;
});

export const isUserExist = createSelector(selectUser, (s) => {
  return !!s.firstName;
});
