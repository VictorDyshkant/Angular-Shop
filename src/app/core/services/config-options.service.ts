import { Injectable } from '@angular/core';
import { ConfigModel } from 'src/app/models/config.model';

@Injectable()
export class ConfigOptionsService {
    private config: ConfigModel;

    setConfig(config: ConfigModel): void {
      // это будет полная замена, если требуется доустановка свойств, то лучше или спред оператор или Object.assign использовать
      this.config = config;
    }

    getConfig(): ConfigModel {
        return this.config;
    }

}
