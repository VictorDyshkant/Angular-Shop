import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './core/services/auth.service';
import { AppSettingsService } from './core/services/app.settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  isAdmin: boolean;

  constructor(private authService: AuthService,
              private appSettingsService: AppSettingsService) {
      appSettingsService.getSettings();
  }

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin;
  }

  onActivate($event: any, routerOutlet: RouterOutlet) {
    console.log('Activated Component', $event, routerOutlet);
  }

  onDeactivate($event: any, routerOutlet: RouterOutlet) {
    console.log('Deactivated Component', $event, routerOutlet);
  }
}
