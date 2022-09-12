import { Pipe, PipeTransform } from '@angular/core'
import { sortBy, get } from 'lodash'

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(objects: any[], key: string, values: string[]): any {
    return sortBy(objects, (item) => values.indexOf(get(item, key)))
  }
}
