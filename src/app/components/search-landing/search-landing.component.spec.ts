import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { SearchLandingComponent } from './search-landing.component';
import { AppMaterialModule } from '../../app.material.module';
import { ProductStubComponent } from '../product/product.component.stub';
import { ProductListStubComponent } from '../product-list/product-list.component.stub';
import { ProductService } from 'src/app/services/product.service';
import { MockProductService } from 'src/assets/test/mocks/mock-product.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Observable, throwError, of } from 'rxjs';
import { IProduct } from 'src/app/interfaces/iProduct';
import { ProductListComponent } from '../product-list/product-list.component';

describe('SearchLandingComponent', () => {
  let component: SearchLandingComponent;
  let fixture: ComponentFixture<SearchLandingComponent>;
  let serivce: ProductService;
  let toaster: ToastrService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        AppMaterialModule,
        ToastrModule.forRoot({
          timeOut: 5000,
          positionClass: 'toast-bottom-right',
          preventDuplicates: true,
        })],
      declarations: [
        SearchLandingComponent,
        ProductStubComponent,
        ProductListStubComponent
      ],
      providers: [
        { provide: ProductService, useClass: MockProductService }
      ]
    })
      .compileComponents();
  }));

  afterEach(() => {
    if (fixture) {
      fixture.destroy();
    }
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLandingComponent);
    component = fixture.componentInstance;
    serivce = TestBed.get(ProductService);
    toaster = TestBed.get(ToastrService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Searching', () => {
    it('should not call service when term is null', () => {
      const spy = spyOn(serivce, 'searchProducts');
      component.search(null);
      expect(spy).toHaveBeenCalledTimes(0);
    });
    it('should not call service when term is empty', () => {
      const spy = spyOn(serivce, 'searchProducts');
      component.search('');
      expect(spy).toHaveBeenCalledTimes(0);
    });
    it('should show toaster on error', () => {
      const spyService = spyOn(serivce, 'searchProducts').and.returnValue(throwError('error'));
      const spyToaster = spyOn(toaster, 'error').and.stub();
      component.search('test');
      expect(spyService).toHaveBeenCalledTimes(1);
      expect(spyToaster).toHaveBeenCalledWith('error');
    });
    it('should display \'No results found\' when none are returned', fakeAsync(() => {
      const spyService = spyOn(serivce, 'searchProducts').and.returnValue(of({ items: [] }));
      component.search('test');
      tick();
      expect(component.statusMessage).toBe('No results found');
    }));
    it('should call getProductId 1 times', fakeAsync(() => {
      // const spyComponent = spyOn(TestBed.get(ProductListComponent), 'ngOnChanges').and.stub();
      const spyProductId = spyOn(serivce, 'getProductById').and.returnValue(of(<IProduct>{}));
      const spyService = spyOn(serivce, 'searchProducts').and.returnValue(of(
        {
          items: [
            { itemId: 1 }
          ]
        }));
      component.search('test');
      tick();
      expect(spyProductId).toHaveBeenCalledTimes(1);
      expect(component.products.length).toBe(1);
    }));
  });
});
