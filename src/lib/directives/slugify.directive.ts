import { Directive, HostListener, Input } from '@angular/core'
import { NgControl } from '@angular/forms'

import { slugify } from '../libs'

@Directive({
  selector: '[tkSlugify]',
})
export class SlugifyDirective {
  @Input('tkSlugify') replacer = ''

  constructor(private ngControl: NgControl) {}

  @HostListener('input', ['$event'])
  onInputChange($event: any) {
    const newValue = slugify(this.ngControl.value, false, this.replacer)
    this.ngControl.control?.setValue(newValue)
  }
}
