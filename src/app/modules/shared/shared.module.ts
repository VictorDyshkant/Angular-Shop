import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { ClickDirective } from './click.directive';



@NgModule({
  declarations: [HighlightDirective, ClickDirective],
  imports: [
    CommonModule,
  ],
  exports: [HighlightDirective, ClickDirective]
})
export class SharedModule { }
