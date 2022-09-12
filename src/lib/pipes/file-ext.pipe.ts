import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'fileExt',
})
export class FileExtPipe implements PipeTransform {
  transform(value: string): string {
    const pointIndex = value.lastIndexOf('.')
    return value.slice(pointIndex)
  }
}
