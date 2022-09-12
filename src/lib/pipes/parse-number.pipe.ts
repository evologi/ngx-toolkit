import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'parseNumber',
})
export class ParseNumberPipe implements PipeTransform {
  transform(
    value: number | undefined | null,
    maxFractionDigits?: number
  ): number {
    let number = 0

    if (value === null || value === undefined) {
      return number
    }

    if (maxFractionDigits !== undefined) {
      number = +value.toFixed(maxFractionDigits)
    }

    return number
  }
}
