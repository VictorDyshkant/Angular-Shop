
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import * as RouterActions from 'src/app/ng.rx/router/router.actions';
import { Store } from '@ngrx/store';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService,
                private store: Store) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        if (!this.authService.isAdmin) {
            this.store.dispatch(RouterActions.go({ path: ['/productList'] }));
        }

        return this.authService.isAdmin;
    }
}
