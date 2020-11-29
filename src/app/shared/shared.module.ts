import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { ClickDirective } from './directives/click.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [
    HighlightDirective,
    ClickDirective,
    OrderByPipe
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
