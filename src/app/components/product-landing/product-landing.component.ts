import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../interfaces/iProduct';
import { ProductService } from '../../services/product.service';
import { IRecommendation } from '../../interfaces/iRecommendation';
import { Subscription, interval } from 'rxjs';
import { isArray, isNullOrUndefined } from 'util';
import { IError } from '../../interfaces/iError';
import { debounceTime, throttleTime, delay } from 'rxjs/operators';
import { RecommendationListComponent } from '../recommendation-list/recommendation-list.component';

@Component({
  selector: 'app-product-landing',
  templateUrl: './product-landing.component.html',
  styleUrls: ['./product-landing.component.scss']
})
export class ProductLandingComponent implements OnInit, OnDestroy {

  @ViewChild('productRecommendationList') productRecommendationList: RecommendationListComponent;

  /**
   * Product to load
   */
  public product: IProduct = <IProduct>{};
  /**
   * Products returned after each recommenation call
   */
  public products: IProduct[] = [];
  /**
   * Recommendations returned based on product
   */
  public productRecommendations: IRecommendation[] = [];
  /**
   * Message to display to user
   */
  public message: string;

  /**
   * Holds subscriptions to be unsubscribed from
   */
  private prodSubscriptions: Subscription[] = [];
  /**
   * Holds to timers that are used to space out calls
   */
  private timers = [];
  constructor(private _activatedRoute: ActivatedRoute,
    private _productService: ProductService) { }

  ngOnInit() {
    this.product = this._activatedRoute.snapshot.data.product;
    this.loadData();
  }
  ngOnDestroy(): void {
    if (this.prodSubscriptions) {
      this.prodSubscriptions.forEach(sub => sub.unsubscribe());
    }
    this._clearTimers();
  }

  /**
   * Loads product and recommenation data
   */
  public loadData(): void {
    if (!isNullOrUndefined(this.product) && !isNullOrUndefined(this.product.itemId)) {
      this.message = 'Loading ...';
      const sub = this._productService.getProductRecommendationsById(this.product.itemId)
        .subscribe((response: IRecommendation[] | { errors: IError[] } | any) => {
          if (sub) {
            sub.unsubscribe();
          }
          if (!isNullOrUndefined(response)) {
            if (isNullOrUndefined(response.errors)) {
              this.productRecommendations = response;
              if (isArray(response)) {
                if (response.length >= 10) {
                  response = response.slice(0, 10);
                }
                this._clearTimers();
                response.forEach((rec, index) => {
                  // only using the set-timeout since the service is throttling the calls
                  const timer = setTimeout(() => {
                    const serviceCall$ = this._productService.getProductById(rec.itemId)
                      .subscribe(prod => {
                        this.products.push(prod);
                        this.productRecommendationList.ngOnChanges(null);
                      });
                    this.prodSubscriptions.push(serviceCall$);
                  }, 1000 * index);
                  this.timers.push(timer);
                });
                this.message = '';
              }
            } else {
              this.message = 'No recommendations found for this product';
            }
          }
        });
    }
  }

  /**
   * Clears any existing timers;
   */
  private _clearTimers(): void {
    if (this.timers) {
      this.timers.forEach(timer => clearTimeout(timer));
    }
    this.timers = [];
  }

}
