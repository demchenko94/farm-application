import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable()
export class SearchLocationService {
  constructor(private http: HttpClient) {}

  searchLocation(searchText: string): Observable<any> {
    const url = `${environment.googlePlaceApiUrl}/place/textsearch/json`;

    return this.http.get(url, {
      params: {
        query: searchText,
        key: environment.googlePlaceApiKey,
      },
    });
  }

  getLocationDetails(placeId: string): Observable<any> {
    const url = `${environment.googlePlaceApiUrl}/place/details/json`;

    return this.http.get(url, {
      params: {
        place_id: placeId,
        key: environment.googlePlaceApiKey,
      },
    });
  }
}
