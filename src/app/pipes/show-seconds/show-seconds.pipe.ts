import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showSeconds'
})
export class ShowSecondsPipe implements PipeTransform {

  transform(seconds: number): string {
    if(seconds > 1) return `${seconds} seconds`;
    else return `${seconds} second`
  }

}
