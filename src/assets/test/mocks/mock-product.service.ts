import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ISearchResponse } from 'src/app/interfaces/iSearchResponse';
import { IProduct } from 'src/app/interfaces/iProduct';
import { IRecommendation } from 'src/app/interfaces/iRecommendation';

@Injectable()
export class MockProductService {
    constructor() {
    }

    public searchProducts(term: string): Observable<ISearchResponse> {
        return of(<ISearchResponse>{ items: [] });
    }
    public getProductById(id: number): Observable<IProduct> {
        return of(<IProduct>{});
    }
    public getProductRecommendationsById(id: number): Observable<IRecommendation[]> {
        return of([]);
    }
}


