
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { AppMaterialModule } from 'src/app/app.material.module';
import { Router, RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  const routes: Routes = [];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        AppMaterialModule,
        RouterTestingModule,
        RouterModule.forRoot(routes, { useHash: true })
      ],
      declarations: [NavbarComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    component.closeMenu();
    fixture.detectChanges();
    if (fixture) {
      fixture.destroy();
    }
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
