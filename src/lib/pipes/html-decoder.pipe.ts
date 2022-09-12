import { Pipe, PipeTransform } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'

@Pipe({
  name: 'htmlDecoder',
})
export class HtmlDecoderPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {}
  transform(value: string) {
    const newValue = value.substring(13, value.length - 1)
    const doc = new DOMParser().parseFromString(newValue, 'text/html')
    const value123 = doc.documentElement.textContent
    return value123 ? this.sanitized.bypassSecurityTrustHtml(value123) : ''
  }
}
