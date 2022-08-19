import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { utcOffset } from '@app/store/place';
import { Store } from '@ngrx/store';
import { Place } from '@modules/core/models';

@Component({
  selector: 'app-current-date',
  templateUrl: './current-date.component.html',
  styleUrls: ['./current-date.component.scss'],
})
export class CurrentDateComponent implements OnInit {
  utsOffset = 0;
  dateFormat = 'ddd DD MMM HH:mm A';
  currentDate = moment().utcOffset(this.utsOffset).format(this.dateFormat).toString();

  constructor(private store: Store<{ place: Place }>) {}

  ngOnInit(): void {
    this.store.select(utcOffset).subscribe((value) => {
      this.utsOffset = value;
      this.updateCurrentDate();
    });
  }

  private updateCurrentDate() {
    this.currentDate = moment().utcOffset(this.utsOffset).format(this.dateFormat).toString();
  }
}
