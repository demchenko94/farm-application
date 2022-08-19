import { Component, OnInit } from '@angular/core';
import { currentWeather, loadCurrentWeather, loadWeather, weatherList } from '@app/store/weather';
import { Store } from '@ngrx/store';
import { place } from '@app/store/place';
import { AppState } from '@app/store';
import { DayWeather } from '@modules/core/models';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
})
export class WeatherWidgetComponent implements OnInit {
  weatherList!: DayWeather[];
  weatherIconSrc!: string;
  weatherTemp!: number;
  weatherHumidity!: string;
  weatherRain!: string;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(place).subscribe((placeData) => {
      this.store.dispatch(loadWeather({ location: placeData.location }));
      this.store.dispatch(loadCurrentWeather({ location: placeData.location }));
    });

    this.store.select(currentWeather).subscribe((weatherData) => {
      this.initWeatherData(weatherData);
    });
    this.store.select(weatherList).subscribe((weatherData) => {
      this.weatherList = weatherData;
    });
  }

  private initWeatherData(data: any) {
    if (data.main) {
      this.weatherTemp = data.main.temp;
      this.weatherHumidity = `${data.main.humidity}%`;
    }

    if (data.weather[0]) {
      this.weatherIconSrc = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    }

    if (data.rain) {
      this.weatherRain = `${data.rain['1h']} mm`;
    }
  }
}
