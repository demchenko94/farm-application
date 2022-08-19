import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchLocationService } from '@modules/core/services';
import { BehaviorSubject, debounceTime, switchMap } from 'rxjs';
import { Store } from '@ngrx/store';
import { Place } from '@modules/core/models';
import { place, selectPlaceId } from '@app/store/place';

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.scss'],
})
export class SearchLocationComponent implements OnInit {
  selectedLocation!: string;
  @Output() selectLocationEvent = new EventEmitter<string>();
  searchChange$ = new BehaviorSubject('');
  optionList: any[] = [];
  isLoading = false;

  constructor(
    private searchLocationService: SearchLocationService,
    private store: Store<{ place: Place }>,
  ) {}

  ngOnInit(): void {
    this.searchChange$
      .asObservable()
      .pipe(debounceTime(500))
      .pipe(switchMap((text) => this.searchLocationService.searchLocation(text)))
      .subscribe((response) => {
        this.optionList = response.results;
        this.isLoading = false;
      });

    this.initSavePlace();
  }

  onSearch(value: string): void {
    this.isLoading = true;
    this.searchChange$.next(value);
  }

  selectLocation() {
    this.selectLocationEvent.emit(this.selectedLocation);
    this.store.dispatch(selectPlaceId({ placeId: this.selectedLocation }));
  }

  private initSavePlace() {
    this.store.select(place).subscribe((data) => {
      this.optionList = [data];
      this.selectedLocation = data.place_id;
    });
  }
}
