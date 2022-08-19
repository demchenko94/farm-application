import { TestBed } from '@angular/core/testing';

import { UserExistGuard } from './user-exist.guard';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Router } from '@angular/router';

describe('UserExistGuard', () => {
  let guard: UserExistGuard;
  let store: MockStore;
  const initialState = { user: {}, place: {}, weather: {} };
  const router = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState }), { provide: Router, useValue: router }],
    });
    guard = TestBed.inject(UserExistGuard);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
