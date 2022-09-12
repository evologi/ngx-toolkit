import { HtmlDecoderPipe } from './html-decoder.pipe'
import { inject, TestBed } from '@angular/core/testing'
import { BrowserModule, DomSanitizer } from '@angular/platform-browser'

describe('HtmlDecoderPipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule],
    })
  })

  it('create an instance', inject(
    [DomSanitizer],
    (domSanitizer: DomSanitizer) => {
      const pipe = new HtmlDecoderPipe(domSanitizer)
      expect(pipe).toBeTruthy()
    }
  ))
})
