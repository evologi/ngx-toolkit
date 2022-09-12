import { Pipe, PipeTransform } from '@angular/core'
import { isEqual } from 'lodash'

@Pipe({
  name: 'findIndex',
})
export class FindIndexPipe implements PipeTransform {
  transform(items: any[], item: any): any {
    if (!items) {
      return ''
    }

    return items.findIndex((_item) => isEqual(_item, item))
  }
}
