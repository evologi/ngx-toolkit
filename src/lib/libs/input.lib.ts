import { NgZone, Renderer2 } from '@angular/core'

export function setFocus(
  ngZone: NgZone,
  renderer: Renderer2,
  inputSelector: string,
  timeout = 0
): void {
  ngZone.runOutsideAngular(() => {
    setTimeout(() => {
      try {
        renderer.selectRootElement(inputSelector).focus()
        renderer.selectRootElement(inputSelector).select()
      } catch (err) {
        // Element not found
      }
    }, timeout)
  })
}
