import { SecurePipe } from './secure.pipe'
import { inject, TestBed } from '@angular/core/testing'
import { BrowserModule, DomSanitizer } from '@angular/platform-browser'
import { HttpClientModule, HttpClient } from '@angular/common/http'

describe('SecurePipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule, HttpClientModule],
    })
  })

  it('create an instance', inject(
    [HttpClient, DomSanitizer],
    (httpClient: HttpClient, domSanitizer: DomSanitizer) => {
      const pipe = new SecurePipe(httpClient, domSanitizer)
      expect(pipe).toBeTruthy()
    }
  ))
})
