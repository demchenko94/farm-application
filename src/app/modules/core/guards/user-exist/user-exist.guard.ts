import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { User } from '@modules/core/models';
import { isUserExist } from '@app/store/user';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserExistGuard implements CanActivate {
  constructor(private store: Store<{ user: User }>, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.pipe(
      select(isUserExist),
      tap((isExist) => {
        if (!isExist) {
          this.router.navigateByUrl('/init-page');
        }
      }),
    );
  }
}
