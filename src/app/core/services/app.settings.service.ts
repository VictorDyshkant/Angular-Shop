import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AppSettingsModel } from '../models/app.settings.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({ providedIn: 'root' })
export class AppSettingsService {

    private key: string = 'AppSettingsService';
    public appSettings: AppSettingsModel;

    constructor(private localStorageService: LocalStorageService,
        private httpClient: HttpClient) {
    }

    getSettings(): void {
        if (this.appSettings == null) {
            this.appSettings = <AppSettingsModel>this.localStorageService.getItem(this.key);
            if (this.appSettings == null) {

                this.httpClient
                    .get<AppSettingsModel>('./assets/app-settings.json')
                    .pipe(
                        retry(2),
                        catchError(this.handleError)
                    )
                    .subscribe((appSettings: AppSettingsModel) => {
                        if (appSettings != null) {
                            this.appSettings = appSettings
                            this.localStorageService.setItem(this.key, appSettings);
                        }
                        else {
                            this.appSettings = new AppSettingsModel("Anhular-Shop", "Victor Dyshkant", "Epam Systems");
                            this.localStorageService.setItem(this.key, this.appSettings)
                        }
                    });
            }
        }
    }

    private handleError(err: HttpErrorResponse) {

        if (err.error instanceof Error) {
            console.error('An error occurred:', err.error.message);
        } else {
            console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
        }

        return throwError('Something bad happened; please try again later.');
    }
}