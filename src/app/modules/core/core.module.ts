import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SearchLocationService,
  SessionStorageService,
  WeatherService,
} from '@modules/core/services';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [SearchLocationService, SessionStorageService, WeatherService],
})
export class CoreModule {}
