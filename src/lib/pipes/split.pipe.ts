import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'split',
})
export class SplitPipe implements PipeTransform {
  transform(value: string, separator: string, position?: number): any {
    return position !== undefined
      ? value.split(separator)[position]
      : value.split(separator)
  }
}
