import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgZorroAntdModule } from '../ng-zorro-antd.module';

import { InitPageRouterModule } from '@modules/init-page/init-page-routing.module';
import { SharedModule } from '@modules/shared/shared.module';

import { InitPageComponent } from '@modules/init-page/components';
import { UserFormComponent } from './components/user-form/user-form.component';

@NgModule({
  declarations: [InitPageComponent, UserFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    InitPageRouterModule,
    SharedModule,
  ],
})
export class InitPageModule {}
