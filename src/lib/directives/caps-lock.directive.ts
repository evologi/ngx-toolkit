import { Directive, Output, HostListener, EventEmitter } from '@angular/core'

@Directive({
  selector: '[tkCapsLock]',
})
export class CapsLockDirective {
  @Output('tkCapsLock') capsLock = new EventEmitter<boolean>()

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    const capsOn = event.getModifierState && event.getModifierState('CapsLock')
    this.capsLock.emit(capsOn)
  }
  @HostListener('window:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent): void {
    const capsOn = event.getModifierState && event.getModifierState('CapsLock')
    this.capsLock.emit(capsOn)
  }
}
