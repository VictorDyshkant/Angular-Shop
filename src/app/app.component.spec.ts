import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AuthService } from './core/services/auth.service';

describe('AppComponent', () => {
 
    let authService: AuthService;
    let appComponent: AppComponent;

    beforeEach(() => {
        authService = TestBed.inject(AuthService);
        appComponent = new AppComponent(authService);
    });

    it('should populate correct status of user admin', () => {
        // Arrange
        authService.isAdmin = true;

        // Act
        appComponent.ngOnInit();

        // Assert
        expect(appComponent.isAdmin).toBeTrue();
    });
});
