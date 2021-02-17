import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/task';

@Pipe({
  name: 'sortName',
  pure: false
})
export class SortNamePipe implements PipeTransform {

  transform(value: Array<Task>, args?: any[]): Array<Task> {
    return value.sort();
  }

}
