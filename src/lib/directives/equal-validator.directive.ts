import { Directive, forwardRef, Input } from '@angular/core'
import {
  Validator,
  ValidationErrors,
  AbstractControl,
  NG_VALIDATORS,
} from '@angular/forms'

@Directive({
  selector: '[tkValidateEqual]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => EqualValidator),
      multi: true,
    },
  ],
})
export class EqualValidator implements Validator {
  @Input('tkValidateEqual') validateEqual!: string
  // eslint-disable-next-line
  @Input('validationType') validationType: 'field' | 'value' = 'field'

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value

    if (value === null || value === '') {
      return null
    }

    const equal =
      this.validationType === 'field' && control.root.get(this.validateEqual)
        ? control.root.get(this.validateEqual)?.value
        : this.validateEqual

    if (value !== equal) {
      return { isEqual: true }
    }

    return null
  }
}
