import { Injectable } from '@angular/core';
import { ConfigModel } from 'src/app/models/config.model';

@Injectable()
export class ConfigOptionsService {
    private config: ConfigModel;

    setConfig(config: ConfigModel): void {
        this.config = config;
    }

    getConfig(): ConfigModel {
        return this.config;
    }

}
