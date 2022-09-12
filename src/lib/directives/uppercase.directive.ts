import { Directive, HostListener } from '@angular/core'
import { NgControl } from '@angular/forms'

@Directive({
  selector: '[tkUppercase]',
})
export class UppercaseDirective {
  constructor(private ngControl: NgControl) {}

  @HostListener('input', ['$event']) onInputChange($event: any) {
    const newValue = (this.ngControl.value as string).toUpperCase()
    this.ngControl.control?.setValue(newValue)
  }
}
