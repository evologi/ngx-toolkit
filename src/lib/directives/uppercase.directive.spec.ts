import { Component, DebugElement } from '@angular/core'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { By } from '@angular/platform-browser'
import { UppercaseDirective } from './uppercase.directive'

// Test component
@Component({
  template: '<input type="text" [(ngModel)]="mockText" tkUppercase>',
})
class TestUppercaseComponent {
  public mockText = 'mocked text'
}

describe('UppercaseDirective', () => {
  let fixture: ComponentFixture<TestUppercaseComponent>
  let inputEl: DebugElement

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestUppercaseComponent, UppercaseDirective],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TestUppercaseComponent)
    fixture.detectChanges()
    inputEl = fixture.debugElement.query(By.css('input'))
  })

  it('should uppercase input text', async () => {
    await fixture.whenStable().then(() => {
      const el = inputEl.nativeElement

      el.value = 'new mocked text'
      el.dispatchEvent(new Event('input'))

      expect(fixture.componentInstance.mockText).toBe('NEW MOCKED TEXT')
    })
  })
})
