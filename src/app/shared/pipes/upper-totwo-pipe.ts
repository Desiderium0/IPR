import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperTotwo',
})
export class UpperTotwoPipe implements PipeTransform {
  transform(value: string): string {
    let formattedString = '';

    for (let index = 0; index < value.length; index++) {
      if (index % 2 == 0) {
        formattedString += value[index].toUpperCase();
      } else {
        formattedString += value[index];
      }
    }

    return formattedString;
  }
}
