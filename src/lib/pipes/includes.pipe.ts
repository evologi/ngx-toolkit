import { Pipe, PipeTransform } from '@angular/core'
import { isArray, intersection } from 'lodash'

@Pipe({
  name: 'includes',
})
export class IncludesPipe implements PipeTransform {
  transform(
    values: any[] | undefined,
    arg: string | string[],
    option?: 'ALL' | 'ONE'
  ): boolean {
    if (!values) {
      return false
    }

    if (isArray(arg)) {
      return option === 'ONE'
        ? values.some((el) => arg.includes(el))
        : intersection(values, arg).length === arg.length
    }

    return values.includes(arg)
  }
}
