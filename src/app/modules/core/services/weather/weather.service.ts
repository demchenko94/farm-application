import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(payload: any): Observable<any> {
    const url = `${environment.openWeatherApiUrl}/forecast`;

    return this.http.get(url, {
      params: {
        lat: payload.lat,
        lon: payload.lng,
        appid: environment.openWeatherApiKey,
      },
    });
  }

  getCurrentWeather(payload: any): Observable<any> {
    const url = `${environment.openWeatherApiUrl}/weather`;

    return this.http.get(url, {
      params: {
        lat: payload.lat,
        lon: payload.lng,
        appid: environment.openWeatherApiKey,
      },
    });
  }
}
