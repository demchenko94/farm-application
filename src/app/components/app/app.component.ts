import { Component, OnInit } from '@angular/core';
import { loadUser } from '@app/store/user';
import { Store } from '@ngrx/store';
import { User } from '@modules/core/models';
import { loadSavedPlace } from '@app/store/place';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'farm-application';

  constructor(private store: Store<{ user: User }>) {}

  ngOnInit(): void {
    this.store.dispatch(loadUser());
    this.store.dispatch(loadSavedPlace());
  }
}
