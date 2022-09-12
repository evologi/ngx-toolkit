import { Pipe, PipeTransform } from '@angular/core'
import { get } from 'lodash'

@Pipe({
  name: 'sum',
})
export class SumPipe implements PipeTransform {
  transform(items: any[], attr: string): any {
    return items ? items.reduce((a, b) => a + get(b, attr), 0) : 0
  }
}
