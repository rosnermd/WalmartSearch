import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  /**
   * Gets reference to mainMenu
   */
  @ViewChild('mainMenu') mainMenu;

  /**
   * Used to determine if the window shifts to a mobile size screen
   */
  public isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private _router: Router) { }

  /**
   * Navigates to given url
   * @param {string} url
   */
  public navigate(url: string): void {
    this.mainMenu.close();
    this._router.navigateByUrl(url);
  }
  /**
   * Closes the nav menu
   */
  public closeMenu(): void {
    this.mainMenu.close();
  }
  /**
   * Opens the nav menu
   */
  public openMenu(): void {
    this.mainMenu.open();
  }
}

