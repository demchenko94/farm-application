import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { User } from '@app/modules/core/models';
import { saveUser } from '@app/store/user/user.actions';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  userInfoForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<{ user: User }>,
  ) {}

  ngOnInit(): void {
    this.userInfoForm = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      selectedPlaceId: [null, [Validators.required]],
    });
  }

  submitForm() {
    if (this.userInfoForm.valid) {
      console.log(this.userInfoForm);
      this.store.dispatch(saveUser({ user: this.userInfoForm.value }));
      this.router.navigate(['/']);
    }
  }

  onSelect(event: string) {
    this.userInfoForm.controls['selectedPlaceId'].setValue(event);
  }
}
