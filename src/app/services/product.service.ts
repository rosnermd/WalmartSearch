import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { IProduct } from '../interfaces/iProduct';
import { ISearchResponse } from '../interfaces/iSearchResponse';
import { map, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { IRecommendation } from '../interfaces/iRecommendation';
import { isNullOrUndefined } from 'util';

@Injectable()
export class ProductService {

  /**
   * Creates the product data service
   * @param {HttpClient} _http
   */
  constructor(private _http: HttpClient,
    private _toastr: ToastrService) {
  }

  /**
   * Searches for products based on search term
   * @param {string} term
   * @returns {Observable<ISearchResponse>}
   */
  public searchProducts(term: string): Observable<ISearchResponse> {
    if (isNullOrUndefined(term) || term === '') {
      return of(<ISearchResponse>{ items: [] });
    }
    const url: string = environment.searchProductUrl + term.toString();
    return this._http.get<any>(url).pipe(map((res) => {
      if (this._isSuccessResponse(res)) {
        return JSON.parse(res.body);
      } else {
        this._toastr.error('An error occurred.  Please try again');
        return <ISearchResponse>{ items: [] };
      }
    }),
      catchError((err, caught) => {
        this._toastr.error('An error occurred.  Please try again');
        return of(<ISearchResponse>{ items: [] });
      }));
  }
  /**
   * Returns product details based on an Id
   * @param {number} id
   * @returns {Observable<IProduct>}
   */
  public getProductById(id: number): Observable<IProduct> {
    if (isNullOrUndefined(id)) {
      return of(<IProduct>{});
    }
    const url: string = environment.getProductUrl + id.toString();
    return this._http.get<any>(url).pipe(map((res) => {
      if (this._isSuccessResponse(res)) {
        return JSON.parse(res.body);
      } else {
        this._toastr.error('An error occurred.  Please try again');
        return <IProduct>{};
      }
    }),
      catchError((err, caught) => {
        this._toastr.error('An error occurred.  Please try again');
        return of(<IProduct>{});
      }));
  }
  /**
   * Returns Recommendations based on a Product Id
   * @param {number} id
   * @returns {Observable<IRecommendation>}
   */
  public getProductRecommendationsById(id: number): Observable<IRecommendation[]> {
    if (isNullOrUndefined(id)) {
      return of([]);
    }
    const url: string = environment.productRecommendationUrl + id.toString();
    return this._http.get<any>(url).pipe(map((res) => {
      if (this._isSuccessResponse(res)) {
        return JSON.parse(res.body);
      } else {
        this._toastr.error('An error occurred.  Please try again');
        return [];
      }
    }),
      catchError((err, caught) => {
        this._toastr.error('An error occurred.  Please try again');
        return of([]);
      }));
  }

  /**
   * Checks to see if response was successful
   * @param res
   * @returns {boolean}
   */
  private _isSuccessResponse(res: any): boolean {
    if (isNullOrUndefined(res)) {
      return false;
    }
    if (res.statusCode === 200) {
      return true;
    } else {
      let bodyObj;
      if (res.body instanceof String) {
        bodyObj = JSON.parse(bodyObj);
      } else {
        bodyObj = res.body;
      }
      if (!isNullOrUndefined(bodyObj.error) || !isNullOrUndefined(bodyObj.errors)) {
        return false;
      }
    }
    return false;
  }
}


