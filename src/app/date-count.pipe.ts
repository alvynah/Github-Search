import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): unknown {
    const today: Date = new Date();
    const todayDateOnly: any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const dateDifference = Math.abs(todayDateOnly - value);
    const secondsInDay = 86400;
    const dateDifferenceSeconds = dateDifference * 0.001;
    const dayCounter = dateDifferenceSeconds / secondsInDay;

    if (dayCounter <= 0) {
      return 'today';
    }
    if (dayCounter >= 1 && todayDateOnly > value) {
      return dayCounter;
    } else {
      return 0;
    }
  }

}
