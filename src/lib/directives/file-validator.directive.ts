import { Directive, forwardRef, Input } from '@angular/core'
import {
  Validator,
  ValidationErrors,
  AbstractControl,
  NG_VALIDATORS,
} from '@angular/forms'

@Directive({
  selector: '[tkValidateFile]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => FileValidator),
      multi: true,
    },
  ],
})
export class FileValidator implements Validator {
  @Input('tkValidateFile') extensions!: string

  validate(control: AbstractControl): ValidationErrors | null {
    const regex = /\.([0-9a-z]+)(?:[?#]|$)/i
    const value = control.value

    if (!value || value === '') {
      return null
    }

    const extensions =
      typeof this.extensions === 'string' ? this.extensions.split(',') : []
    const match = value.match(regex)

    // Here check if is file
    if (match === null) {
      return { isFile: true }
    } else if (match instanceof Array && extensions.indexOf(match[1]) === -1) {
      return { isFileExtension: true }
    }

    return null
  }
}
