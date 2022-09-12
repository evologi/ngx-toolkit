import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'timestamp',
})
export class TimestampPipe implements PipeTransform {
  transform(value: Date | string): any {
    const date = typeof value === 'string' ? Date.parse(value) : value.valueOf()
    return date
  }
}
