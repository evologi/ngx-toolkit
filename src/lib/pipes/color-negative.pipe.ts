import { Pipe, PipeTransform } from '@angular/core'

import { isLightColor } from '../libs'

@Pipe({
  name: 'colorNegative',
})
export class ColorNegativePipe implements PipeTransform {
  transform(herColor: string | undefined): string {
    return herColor ? (isLightColor(herColor) ? '#000' : '#fff') : '#fff'
  }
}
