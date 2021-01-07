import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { ClickDirective } from './directives/click.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { EmailMatchDirective } from './directives/email.directive';

@NgModule({
  declarations: [
    HighlightDirective,
    ClickDirective,
    OrderByPipe,
    EmailMatchDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    ClickDirective,
    OrderByPipe,
    CommonModule
  ],
  providers: []
})
export class SharedModule { }
