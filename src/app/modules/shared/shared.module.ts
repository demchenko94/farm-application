import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgZorroAntdModule } from '@modules/ng-zorro-antd.module';

import {
  NavigationBarComponent,
  LogoComponent,
  SearchLocationComponent,
  UserInfoComponent,
  CurrentDateComponent,
  WeatherWidgetComponent,
} from '@modules/shared/components';
import { TempPipe, DayPipe } from '@modules/shared/pipes';

@NgModule({
  declarations: [
    NavigationBarComponent,
    LogoComponent,
    SearchLocationComponent,
    UserInfoComponent,
    CurrentDateComponent,
    WeatherWidgetComponent,
    TempPipe,
    DayPipe,
  ],
  imports: [CommonModule, NgZorroAntdModule, ReactiveFormsModule, FormsModule],
  exports: [
    NavigationBarComponent,
    LogoComponent,
    SearchLocationComponent,
    UserInfoComponent,
    CurrentDateComponent,
    WeatherWidgetComponent,
  ],
})
export class SharedModule {}
