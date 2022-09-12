import { Pipe, PipeTransform } from '@angular/core'
import { get, isArray, uniq, isEqual } from 'lodash'

@Pipe({
  name: 'duplicated',
})
export class DuplicatedPipe implements PipeTransform {
  transform(items: any[], value?: any, field?: string): boolean {
    if (!items || !isArray(items)) {
      return false
    }

    const _items = field ? items.map((i) => get(i, field)) : items
    const itemsToCheck = value
      ? _items.filter((i) => isEqual(i, value))
      : _items

    return uniq(itemsToCheck).length !== itemsToCheck.length
  }
}
