import { Pipe, PipeTransform } from '@angular/core'
@Pipe({
  name: 'wrap',
})
export class WrapPipe implements PipeTransform {
  transform(values: string[], wrapper: string): any {
    return values.map((item) => `${wrapper}${item}${wrapper}`)
  }
}
