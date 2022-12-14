import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core'

@Directive({
  // eslint-disable-next-line
  selector: '[ngVar]',
})
export class NgVarDirective {
  context: any = {}

  constructor(
    private vcRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  @Input()
  set ngVar(context: any) {
    this.context.$implicit = this.context.ngVar = context
    this.updateView()
  }

  updateView() {
    this.vcRef.clear()
    this.vcRef.createEmbeddedView(this.templateRef, this.context)
  }
}
