import { Pipe, PipeTransform } from '@angular/core'

type unitType = 'GiB' | 'MiB' | 'Byte'

@Pipe({
  name: 'unitConversion',
})
export class UnitConversionPipe implements PipeTransform {
  transform(value: number, fromUnit: unitType, toUnit: unitType): number {
    if (fromUnit === 'GiB' && toUnit === 'MiB') {
      return value * 1024
    } else if (fromUnit === 'MiB' && toUnit === 'GiB') {
      return value / 1024
    } else if (fromUnit === 'Byte' && toUnit === 'MiB') {
      return value / (1024 * 1024)
    }

    return value
  }
}
