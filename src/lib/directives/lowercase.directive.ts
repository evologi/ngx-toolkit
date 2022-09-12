import { Directive, HostListener } from '@angular/core'
import { NgControl } from '@angular/forms'

@Directive({
  selector: '[tkLowercase]',
})
export class LowercaseDirective {
  constructor(private ngControl: NgControl) {}

  @HostListener('input', ['$event']) onInputChange($event: any) {
    const newValue = (this.ngControl.value as string).toLowerCase()
    this.ngControl.control?.setValue(newValue)
  }
}
