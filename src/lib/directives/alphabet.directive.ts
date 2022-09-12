import { Directive, HostListener, Output, EventEmitter } from '@angular/core'

@Directive({
  selector: '[tkAlphabet]',
})
export class AlphabetDirective {
  @Output() readonly tkAlphabet = new EventEmitter<string>()

  @HostListener('input', ['$event']) onInputChange($event: any): void {
    const newValue = this.alphabetOnly($event.target.value)
    $event.target.value = newValue
    this.tkAlphabet.emit(newValue)
  }

  // Useful
  private alphabetOnly(txt: string): string {
    return txt.toUpperCase().replace(/[^A-Z]/g, '')
  }
}
