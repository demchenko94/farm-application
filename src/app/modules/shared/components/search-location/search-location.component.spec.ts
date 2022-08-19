import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLocationComponent } from './search-location.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { SearchLocationService } from '@modules/core/services';

describe('SearchLocationComponent', () => {
  let component: SearchLocationComponent;
  let fixture: ComponentFixture<SearchLocationComponent>;
  let store: MockStore;
  const initialState = { user: {}, place: {}, weather: {} };
  const fakeSearchLocationService = jasmine.createSpyObj('fakeSearchLocationService', [
    'searchLocation',
    'getLocationDetails',
  ]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchLocationComponent],
      providers: [
        provideMockStore({ initialState }),
        { provide: SearchLocationService, useValue: fakeSearchLocationService },
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
