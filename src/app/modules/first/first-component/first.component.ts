import { Component, InjectionToken, Optional } from '@angular/core';

import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ConstantsService } from 'src/app/core/services/constant.service';
import { GeneratorService } from 'src/app/core/services/generator';
import { ConfigOptionsService } from 'src/app/core/services/config-options.service';

export function generatorFactory(n: number) {
  return (generatorService: GeneratorService ) => {
    // должны возвращать не сервис, а результат работы сервиса
    return generatorService.generate(n);
  };
}

const genToken = new InjectionToken<string>('token');

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.less'],
  providers: [
    { provide: LocalStorageService, useClass: LocalStorageService },
    { provide: ConfigOptionsService, useClass: ConfigOptionsService },
    { provide: ConstantsService, useValue: { App: 'TaskManager', Ver: '1.0', API_URL: 'http://...' } },
    { provide: genToken, useFactory: generatorFactory(5), deps: [GeneratorService] },
  ]
})
export class FirstComponent {

  constructor(
    @Optional() private localStorageService?: LocalStorageService,
    @Optional() private constantsService?: ConstantsService,
    @Optional() private generatorService?: GeneratorService,
    @Optional() private configOptionsService?: ConfigOptionsService,
  ) {
  }
}
