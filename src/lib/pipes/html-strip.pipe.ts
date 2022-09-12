import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'htmlStrip',
})
export class HtmlStripPipe implements PipeTransform {
  transform(value: string): any {
    return value.replace(/<.*?>/g, '')
  }
}
