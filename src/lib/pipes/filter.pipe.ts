import { Pipe, PipeTransform } from '@angular/core'
import { get, isArray } from 'lodash'

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any, field: string, values: any | any[]): any {
    return items
      ? items.filter((item: any) => {
          const itemValue = get(item, field)

          return isArray(values)
            ? values.includes(itemValue)
            : isArray(itemValue)
            ? itemValue.includes(values)
            : itemValue === values
        })
      : []
  }
}
