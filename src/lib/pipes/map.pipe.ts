import { Pipe, PipeTransform } from '@angular/core'
import { get } from 'lodash'

@Pipe({
  name: 'map',
})
export class MapPipe implements PipeTransform {
  transform(values: any[] | undefined, arg: string): any {
    return values?.map((item) => get(item, arg))
  }
}
