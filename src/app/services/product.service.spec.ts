import { TestBed, inject } from '@angular/core/testing';
import { ProductService } from './product.service';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ISearchResponse } from '../interfaces/iSearchResponse';
import * as mockReponse from '../../assets/test/mockResults.response.json';
import * as mockItem from '../../assets/test/mockItem.response.json';
import * as mockRecommendationReponse from '../../assets/test/mockRecommendation.response.json';
describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;
  let subscription: Subscription;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        NoopAnimationsModule
      ],
      providers: [ProductService,
        ToastrService
      ]
    });
    service = TestBed.get(ProductService);
    httpMock = TestBed.get(HttpTestingController);
  });
  afterEach(() => {
    service = null;
    if (subscription) {
      subscription.unsubscribe();
    }
  });

  describe('searchProducts', () => {
    it('should return empty items when null term', (done) => {
      const url = environment.searchProductUrl;
      subscription = service.searchProducts(null).subscribe(res => {
        expect(res).toBeDefined();
        expect(res.items).toBeDefined();
        expect(res.items.length).toBe(0);
        done();
      });
      httpMock.expectNone(url);
    });
    it('should return empty items when empty term', (done) => {
      const url = environment.searchProductUrl;
      subscription = service.searchProducts('').subscribe(res => {
        expect(res).toBeDefined();
        expect(res.items).toBeDefined();
        expect(res.items.length).toBe(0);
        done();
      });
      httpMock.expectNone(url);
    });
    it('should return empty items when null returned from service', (done) => {
      const term = 'test';
      const url = `${environment.searchProductUrl}${term}`;
      subscription = service.searchProducts(term).subscribe(res => {
        expect(res).toBeDefined();
        expect(res.items).toBeDefined();
        expect(res.items.length).toBe(0);
        done();
      });
      const method = 'GET';
      const req = httpMock.expectOne({ url, method });
      req.flush(null);
      httpMock.verify();
    });
    it('should return items when service returns valid data', (done) => {
      const term = 'test';
      const url = `${environment.searchProductUrl}${term}`;
      subscription = service.searchProducts(term).subscribe(res => {
        expect(res).toBeDefined();
        expect(res.items).toBeDefined();
        expect(res.items.length).toBe(10);
        done();
      });
      const method = 'GET';
      const req = httpMock.expectOne({ url, method });
      req.flush({
        body:JSON.stringify(mockReponse),
        statusCode: 200
      });
      httpMock.verify();
    });
    it('should return empty items when errors returned from service', (done) => {
      const term = 'test';
      const url = `${environment.searchProductUrl}${term}`;
      subscription = service.searchProducts(term).subscribe(res => {
        expect(res).toBeDefined();
        expect(res.items).toBeDefined();
        expect(res.items.length).toBe(0);
        done();
      });
      const method = 'GET';
      const req = httpMock.expectOne({ url, method });
      const body = '{error:{}}';
      req.flush({ statusCode: 500, body: body });
      httpMock.verify();
    });
    it('should return empty items when sevice errors',(done)=> {
      const term = 'test';
      const url = `${environment.searchProductUrl}${term}`;
      subscription = service.searchProducts(term).subscribe(res => {
        expect(res).toBeDefined();
        expect(res.items).toBeDefined();
        expect(res.items.length).toBe(0);
        done();
      });
      let req = httpMock.expectOne(url);
      let err = new ErrorEvent('ERROR', {
          error: new Error('AAAHHHH'),
          message: 'service is down'
      });
      req.error(err, {status: 505, statusText: err.message});
      httpMock.verify();
    });
  });
  describe('getProductById', () => {
    it('should return empty item when null id', (done) => {
      const url = environment.getProductUrl;
      subscription = service.getProductById(null).subscribe(res => {
        expect(res).toBeDefined();
        expect(res.itemId).toBeUndefined();
        done();
      });
      httpMock.expectNone(url);
    });
    it('should return empty item when null returned from service', (done) => {
      const id = 1;
      const url = `${environment.getProductUrl}${id}`;
      subscription = service.getProductById(id).subscribe(res => {
        expect(res).toBeDefined();
        expect(res.itemId).toBeUndefined();
        done();
      });
      const method = 'GET';
      const req = httpMock.expectOne({ url, method });
      req.flush(null);
      httpMock.verify();
    });
    it('should return item when item is found', (done) => {
      const id = 1;
      const url = `${environment.getProductUrl}${id}`;
      subscription = service.getProductById(id).subscribe(res => {
        expect(res).toBeDefined();
        expect(res.itemId).toBeDefined();
        done();
      });
      const method = 'GET';
      const req = httpMock.expectOne({ url, method });
      req.flush({
        body:JSON.stringify(mockItem),
        statusCode: 200
      });
      httpMock.verify();
    });
    it('should return empty item when errors returned from service', (done) => {
      const id = 1;
      const url = `${environment.getProductUrl}${id}`;
      subscription = service.getProductById(id).subscribe(res => {
        expect(res).toBeDefined();
        expect(res.itemId).toBeUndefined();
        done();
      });
      const method = 'GET';
      const req = httpMock.expectOne({ url, method });
      const body = '{error:{}}';
      req.flush({ statusCode: 500, body: body });
      httpMock.verify();
    });
    it('should return empty item when sevice errors',(done)=> {
      const id = 1;
      const url = `${environment.getProductUrl}${id}`;
      subscription = service.getProductById(id).subscribe(res => {
        expect(res).toBeDefined();
        expect(res.itemId).toBeUndefined();
        done();
      });
      let req = httpMock.expectOne(url);
      let err = new ErrorEvent('ERROR', {
          error: new Error('AAAHHHH'),
          message: 'service is down'
      });
      req.error(err, {status: 505, statusText: err.message});
      httpMock.verify();
    });
  });
  describe('getProductRecommendationsById', () => {
    it('should return empty list when null id', (done) => {
      const url = environment.productRecommendationUrl;
      subscription = service.getProductRecommendationsById(null).subscribe(res => {
        expect(res).toBeDefined();
        expect(res.length).toBe(0);
        done();
      });
      httpMock.expectNone(url);
    });
    it('should return empty list when null returned from service', (done) => {
      const id = 1;
      const url = `${environment.productRecommendationUrl}${id}`;
      subscription = service.getProductRecommendationsById(id).subscribe(res => {
        expect(res).toBeDefined();
        expect(res.length).toBe(0);
        done();
      });
      const method = 'GET';
      const req = httpMock.expectOne({ url, method });
      req.flush(null);
      httpMock.verify();
    });
    it('should return list when item is found', (done) => {
      const id = 1;
      const url = `${environment.productRecommendationUrl}${id}`;
      subscription = service.getProductRecommendationsById(id).subscribe(res => {
        expect(res).toBeDefined();
        expect(res.length).toBe(25);
        done();
      });
      const method = 'GET';
      const req = httpMock.expectOne({ url, method });
      req.flush(mockRecommendationReponse);
      httpMock.verify();
    });
    it('should return empty list when errors returned from service', (done) => {
      const id = 1;
      const url = `${environment.productRecommendationUrl}${id}`;
      subscription = service.getProductRecommendationsById(id).subscribe(res => {
        expect(res).toBeDefined();
        expect(res.length).toBe(0);
        done();
      });
      const method = 'GET';
      const req = httpMock.expectOne({ url, method });
      const body = '{error:{}}';
      req.flush({ statusCode: 500, body: body });
      httpMock.verify();
    });
    it('should return empty list when sevice errors',(done)=> {
      const id = 1;
      const url = `${environment.productRecommendationUrl}${id}`;
      subscription = service.getProductRecommendationsById(id).subscribe(res => {
        expect(res).toBeDefined();
        expect(res.length).toBe(0);
        done();
      });
      let req = httpMock.expectOne(url);
      let err = new ErrorEvent('ERROR', {
          error: new Error('AAAHHHH'),
          message: 'service is down'
      });
      req.error(err, {status: 505, statusText: err.message});
      httpMock.verify();
    });
  });
});
