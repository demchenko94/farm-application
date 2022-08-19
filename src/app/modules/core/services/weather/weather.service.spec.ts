import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let service: WeatherService;
  const fakeWeatherService = jasmine.createSpyObj('fakeWeatherService', [
    'getWeather',
    'getCurrentWeather',
  ]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: WeatherService, useValue: fakeWeatherService }],
    });
    service = TestBed.inject(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
