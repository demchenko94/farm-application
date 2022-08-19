import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitPageComponent } from '@modules/init-page/components';

const routes: Routes = [
  {
    path: '',
    component: InitPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InitPageRouterModule {}
