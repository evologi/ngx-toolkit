import { Pipe, PipeTransform } from '@angular/core'
import { get } from 'lodash'

@Pipe({
  name: 'find',
})
export class FindPipe implements PipeTransform {
  transform(
    items: any[] | undefined,
    keyField: string | undefined,
    key: string | undefined,
    fields?: string,
    join?: string
  ): any {
    if (!items || !keyField || !key) {
      return ''
    }

    const item = items.find((_item) => get(_item, keyField) === key)

    if (!item) {
      return ''
    }

    return fields
      ? fields
          .split('|')
          .reduce<any[]>((acc, field) => {
            acc.push(get(item, field))
            return acc
          }, [])
          .join(join)
      : item
  }
}
