import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {
  transform(value: string | number): string {
    const minutes = Math.floor(Number(value) / 60000)
    const seconds = Math.floor((Number(value) - minutes * 1000 * 60) / 1000)
    const cents = Math.floor(
      (Number(value) - minutes * 1000 * 60 - seconds * 1000) / 10
    )

    return (
      minutes + ':' + ('0' + seconds).slice(-2) + ',' + ('0' + cents).slice(-2)
    )
  }
}
