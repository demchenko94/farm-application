import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserExistGuard } from '@modules/core/guards';

const routes: Routes = [
  {
    path: 'init-page',
    loadChildren: () => import('@modules/init-page/init-page.module').then((m) => m.InitPageModule),
  },
  {
    path: '',
    canActivate: [UserExistGuard],
    loadChildren: () => import('@modules/main-page/main-page.module').then((m) => m.MainPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
