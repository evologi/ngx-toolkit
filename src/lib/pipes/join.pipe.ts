import { Pipe, PipeTransform } from '@angular/core'
import { get } from 'lodash'

@Pipe({
  name: 'join',
})
export class JoinPipe implements PipeTransform {
  transform(values: any[], arg1: any, arg2?: any): any {
    return arg2
      ? values.map((item) => get(item, arg1)).join(arg2)
      : values.join(arg1)
  }
}
