import { NgForm } from '@angular/forms'

export function checkForm(form: NgForm): boolean {
  if (!form) {
    return true
  }

  Object.keys(form.controls).forEach((field) => {
    const control = form.controls[field]
    control.markAsTouched({ onlySelf: true })
  })

  return !form.invalid
}
