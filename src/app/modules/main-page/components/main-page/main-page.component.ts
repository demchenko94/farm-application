import { Component, OnInit } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { User } from '@modules/core/models';
import { loadUser } from '@app/store/user';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  constructor(private store: Store<{ user: User }>) {}

  ngOnInit(): void {
    this.store.dispatch(loadUser());
  }
}
