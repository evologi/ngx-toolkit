import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'fileName',
})
export class FileNamePipe implements PipeTransform {
  transform(value: string): string {
    const pointIndex = value.lastIndexOf('.')
    return value.slice(0, pointIndex)
  }
}
