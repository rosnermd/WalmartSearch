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
export class NavbarStubComponent {
  @ViewChild('mainMenu') mainMenu;

  isHandset$: Observable<boolean>;

  constructor() { }

  public navigate(url: string): void {
  }
  public closeMenu(): void {
  }
  public openMenu(): void {
  }
}

