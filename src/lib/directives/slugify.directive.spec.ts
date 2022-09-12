import { Component, DebugElement } from '@angular/core'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { By } from '@angular/platform-browser'
import { slugify } from '../libs'
import { SlugifyDirective } from './slugify.directive'

// Test component
@Component({
  template: '<input type="text" [(ngModel)]="mockText" tkSlugify>',
})
class TestSlugifyComponent {
  public mockText = ''
}

describe('SlugifyDirective', () => {
  let fixture: ComponentFixture<TestSlugifyComponent>
  let inputEl: DebugElement

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestSlugifyComponent, SlugifyDirective],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSlugifyComponent)
    fixture.detectChanges()
    inputEl = fixture.debugElement.query(By.css('input'))
  })

  it('should slugify input text', async () => {
    await fixture.whenStable().then(() => {
      const el = inputEl.nativeElement

      el.value = 'new mocked text'
      el.dispatchEvent(new Event('input'))

      expect(fixture.componentInstance.mockText).toBe(
        slugify('new mocked text', false, '')
      )
    })
  })
})
