import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../interfaces/iProduct';


/**
 * A resolver class for retrieving a given product during navigation
 */
@Injectable()
export class ProductResolverService implements Resolve<any> {

    /**
     * Creates the customer resolver service, used to get a customer based on the customer number in the route
     * and add the customer to the currently logged in user
     */
    constructor(private _productService: ProductService) {
    }

    /**
     * Fetches a customer by the specified customer number and adds this customer to the current user
     * @param {ActivatedRouteSnapshot} route: The current activated route.
     * @param {RouterStateSnapshot} state: The router state.
     * @returns {Observable<IProduct>}: An observable that's accessed via {@link Router} data object.
     */
    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct> {
        const productNumber = parseInt(route.params.productNumber);
        return this._productService.getProductById(productNumber);
    }
}
