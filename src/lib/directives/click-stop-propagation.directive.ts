import { Directive, HostListener } from '@angular/core'

@Directive({
  selector: '[tkClickStopPropagation]',
})
export class ClickStopPropagationDirective {
  @HostListener('click', ['$event']) onClick(event: any): void {
    event.stopPropagation()
  }
}
