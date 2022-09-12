import { Component, DebugElement } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { By } from '@angular/platform-browser'
import { LowercaseDirective } from './lowercase.directive'

// Test component
@Component({
  template: '<input type="text" [(ngModel)]="mockText" tkLowercase>',
})
class TestLowercaseComponent {
  public mockText = ''
}

describe('LowercaseDirective', () => {
  let fixture: ComponentFixture<TestLowercaseComponent>
  let inputEl: DebugElement

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestLowercaseComponent, LowercaseDirective],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLowercaseComponent)
    fixture.detectChanges()
    inputEl = fixture.debugElement.query(By.css('input'))
  })

  it('should lowercase input text', async () => {
    await fixture.whenStable().then(() => {
      const el = inputEl.nativeElement

      el.value = 'NEW MOCKED TEXT'
      el.dispatchEvent(new Event('input'))

      expect(fixture.componentInstance.mockText).toBe('new mocked text')
    })
  })
})
