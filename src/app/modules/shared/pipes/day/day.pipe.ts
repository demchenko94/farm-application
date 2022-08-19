import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'day'
})
export class DayPipe implements PipeTransform {
  dateFormat = 'ddd | DD MMM';
  transform(value: number, ...args: unknown[]): unknown {
    return moment(value).format(this.dateFormat).toString();
  }

}
