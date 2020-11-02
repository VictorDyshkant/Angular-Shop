import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneratorService } from 'src/app/core/services/generator';
import { FirstComponent } from './first-component/first.component';

function generatorFactory() {
  return new GeneratorService();
}


@NgModule({
  declarations: [FirstComponent],
  imports: [
    CommonModule
  ],
  exports: [FirstComponent]
})
export class FirstModule {

}
