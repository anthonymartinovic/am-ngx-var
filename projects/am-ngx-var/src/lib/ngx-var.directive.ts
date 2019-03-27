import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

export class NgxVarContext {
  public $implicit: any = null;
  public ngxVar: any = null;
}

@Directive({
  selector: '[ngxVar]'
})
export class NgxVar {
  private context: NgxVarContext = new NgxVarContext();
  private varTemplateRef: TemplateRef<NgxVarContext | null> = null;

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<NgxVarContext>,
  ) {
    this.varTemplateRef = templateRef;
  }

  @Input()
  set ngxVar(context: any) {
    this.context.$implicit = this.context.ngxVar = context;
    this.updateView();
  }

  private updateView() {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.varTemplateRef, this.context);
  }
}
