import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from '@modules/main-page/components';
import { MainPageRouterModule } from '@modules/main-page/main-page-routing.module';
import { NgZorroAntdModule } from '@modules/ng-zorro-antd.module';
import { SharedModule } from '@modules/shared/shared.module';

@NgModule({
  declarations: [MainPageComponent],
  imports: [CommonModule, MainPageRouterModule, NgZorroAntdModule, SharedModule],
})
export class MainPageModule {}
