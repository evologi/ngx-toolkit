import { Pipe, PipeTransform } from '@angular/core'
import { get } from 'lodash'

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(values: any[], arg: string): any {
    return this.sortByKey(values, arg)
  }

  private sortByKey(array: any[], key: string) {
    return [
      ...array.slice().sort((a, b) => {
        const x = get(a, key)
        const y = get(b, key)
        return x < y ? -1 : x > y ? 1 : 0
      }),
    ]
  }
}
