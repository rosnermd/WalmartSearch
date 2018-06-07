import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/compiler/src/core';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MainRoutingModule } from './routing/routing.module';
import { MainLandingComponent } from './components/main-landing/main-landing.component';
import { SearchLandingComponent } from './components/search-landing/search-landing.component';
import { ProductLandingComponent } from './components/product-landing/product-landing.component';
import { routes } from './routing/routes';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from 'src/app/app.material.module';
describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(routes, { useHash: true }),
        FormsModule,
        HttpClientTestingModule,
        NoopAnimationsModule,
        AppMaterialModule
      ],
      declarations: [
        MainLandingComponent,
        SearchLandingComponent,
        ProductLandingComponent,
        ProductListComponent,
        AppComponent,
        NavbarComponent
      ],
      providers: [
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));
  afterEach(() => {
    if (fixture) {
      fixture.destroy();
    }
    app = null;
  });
  it('should create the app', async(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Walmart Search'`, async(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Walmart Search');
  }));
});
