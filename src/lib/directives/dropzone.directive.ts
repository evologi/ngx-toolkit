import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Output,
} from '@angular/core'

@Directive({
  selector: '[tkDropzone]',
})
export class DropzoneDirective {
  @HostBinding('class') dropzoneClass = 'dropzone'
  @HostBinding('class.file-over') fileOver = false
  @Output() readonly filesDrop = new EventEmitter<File[]>()

  @HostListener('dragenter', ['$event']) onDragEnter(event: any): void {
    event.preventDefault()
    event.stopPropagation()
    this.fileOver = true
  }

  @HostListener('dragleave', ['$event']) onDragLeave(event: any): void {
    event.preventDefault()
    event.stopPropagation()
    this.fileOver = false
  }

  @HostListener('dragover', ['$event']) onDragOver(event: any): void {
    event.preventDefault()
    event.stopPropagation()
  }

  @HostListener('drop', ['$event'])
  ondrop(event: any): void {
    event.preventDefault()
    event.stopPropagation()
    this.fileOver = false

    const files = event.dataTransfer.files
    if (files.length > 0) {
      this.filesDrop.emit(files)
    }
  }
}
