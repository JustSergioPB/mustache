import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarItem } from '@mustache/basic-ui';
import { NAVBAR_CONFIG } from './navbar.config';

@Component({
  selector: 'block-house-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  /** NAVBAR */
  activeRoute: string = NAVBAR_CONFIG[0].route;
  items: NavbarItem[] = NAVBAR_CONFIG;

  constructor(private router: Router) {
    this.activeRoute = this.router.url.substring(1);
  }

  /** NAVBAR */
  public onItemClick(routes: string[]): void {
    this.activeRoute = routes[0];
    this.router.navigate([this.activeRoute]);
  }

  public onSignupClicked(): void {}

  public onLoginClicked(): void {}
}
