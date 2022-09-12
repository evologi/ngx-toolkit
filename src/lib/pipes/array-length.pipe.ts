import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'arrayLength',
})
export class ArrayLengthPipe implements PipeTransform {
  transform(array: any[]): number {
    return array.length
  }
}
