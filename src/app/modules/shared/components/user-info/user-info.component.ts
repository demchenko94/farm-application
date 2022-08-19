import { Component, OnInit } from '@angular/core';
import { NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { Store } from '@ngrx/store';
import { userInitials } from '@app/store/user/user.selectors';
import { User } from '@modules/core/models';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  sizeAvatar: NzSizeLDSType = 'large';
  styleAvatar = `color:#fff; background-color:#25507a;`;
  userInitials$!: any;

  constructor(private store: Store<{ user: User }>) {}

  ngOnInit(): void {
    this.userInitials$ = this.store.select(userInitials);
  }
}
