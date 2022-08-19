import { TestBed } from '@angular/core/testing';

import { SearchLocationService } from './search-location.service';

describe('SearchLocationService', () => {
  let service: SearchLocationService;
  const fakeSearchLocationService = jasmine.createSpyObj('fakeSearchLocationService', [
    'searchLocation',
    'getLocationDetails',
  ]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: SearchLocationService, useValue: fakeSearchLocationService }],
    });
    service = TestBed.inject(SearchLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
