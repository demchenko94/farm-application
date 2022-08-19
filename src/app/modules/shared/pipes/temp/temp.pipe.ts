import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp'
})
export class TempPipe implements PipeTransform {
  kelvinEquivalent = 273.15;

  transform(value: number, ...args: unknown[]): unknown {
      if(value) {
        const tempCelsius = Math.floor(value - this.kelvinEquivalent);
        return `${tempCelsius}°`;
      }

      return  null;
  }

}
