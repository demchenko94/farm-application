import { TestBed } from '@angular/core/testing';

import { SessionStorageService } from './session-storage.service';

describe('SessionStorageService', () => {
  let service: SessionStorageService;
  const fakeSessionStorageService = jasmine.createSpyObj('fakeSessionStorageService', ['getData']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: SessionStorageService, useValue: fakeSessionStorageService }],
    });
    service = TestBed.inject(SessionStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
