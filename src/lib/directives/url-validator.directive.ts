import { Directive, forwardRef } from '@angular/core'
import {
  Validator,
  ValidationErrors,
  AbstractControl,
  NG_VALIDATORS,
} from '@angular/forms'

@Directive({
  selector: '[tkValidateUrl]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => UrlValidator),
      multi: true,
    },
  ],
})
export class UrlValidator implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const regex =
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi
    const value = control.value

    if (!value || value === '' || value.match(regex) !== null) {
      return null
    }

    return { isNotUrl: true }
  }
}
