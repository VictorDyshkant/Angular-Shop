import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgRxProductModule } from './products/ng.rx.products.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { ProductEffects } from './products/products.effects';
import { RouterEffects } from './router/router.effects';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    StoreModule.forRoot({}, {
      // All checks will automatically be disabled in production builds
      runtimeChecks: {
        strictStateImmutability: true,      // default value is true
        strictActionImmutability: true,     // default value is true
        strictStateSerializability: true,   // default value is false
        strictActionSerializability: true,  // default value is false
        strictActionWithinNgZone: true,     // default value is false
        strictActionTypeUniqueness: true    // default value is false
      }
    }),
    EffectsModule.forRoot([ProductEffects, RouterEffects]),
    NgRxProductModule,

    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  exports: [],
  providers: []
})
export class NgRxModule { }
