import { Component, DebugElement } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { By } from '@angular/platform-browser'
import { AlphabetDirective } from './alphabet.directive'

// Test component
@Component({
  template:
    '<input type="text" [ngModel]="mockText" (tkAlphabet)="alphabetText = $event">',
})
class TestAlphabetComponent {
  public mockText = ''
  public alphabetText = ''
}

describe('AlphabetDirective', () => {
  let fixture: ComponentFixture<TestAlphabetComponent>
  let inputEl: DebugElement

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestAlphabetComponent, AlphabetDirective],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAlphabetComponent)
    fixture.detectChanges()
    inputEl = fixture.debugElement.query(By.css('input'))
  })

  it('should emit only alphabet characters', async () => {
    await fixture.whenStable().then(() => {
      const el = inputEl.nativeElement

      el.value = 'i A4m Gr34o0ot41'
      el.dispatchEvent(new Event('input'))

      expect(fixture.componentInstance.alphabetText).toBe('IAMGROOT')
    })
  })
})
