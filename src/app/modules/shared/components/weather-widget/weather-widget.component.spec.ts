import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherWidgetComponent } from './weather-widget.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { WeatherService } from '@modules/core/services';
import { TempPipe } from '@modules/shared/pipes';

describe('WeatherWidgetComponent', () => {
  let component: WeatherWidgetComponent;
  let fixture: ComponentFixture<WeatherWidgetComponent>;
  let store: MockStore;
  const initialState = { user: {}, place: {}, weather: {} };
  const fakeWeatherService = jasmine.createSpyObj('fakeWeatherService', [
    'getWeather',
    'getCurrentWeather',
  ]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherWidgetComponent, TempPipe],
      providers: [
        provideMockStore({ initialState }),
        { provide: WeatherService, useValue: fakeWeatherService },
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
