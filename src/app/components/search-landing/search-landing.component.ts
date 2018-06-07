import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ISearchResponse } from '../../interfaces/iSearchResponse';
import { IProduct } from '../../interfaces/iProduct';
import { ToastrService } from 'ngx-toastr';
import { isNullOrUndefined } from 'util';
import { ProductListComponent } from '../product-list/product-list.component';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-search-landing',
  templateUrl: './search-landing.component.html',
  styleUrls: ['./search-landing.component.scss']
})
export class SearchLandingComponent implements OnInit, OnDestroy {

  @ViewChild('searchResults') searchResults: ProductListComponent;

  /**
   * Search term entered by user
   */
  public searchTerm: string;
  /**
   * Products returned by search
   */
  public products: IProduct[];
  /**
   * Message displayed to user
   */
  public statusMessage: string = '';
  /**
   * Holds subscriptions to be unsubscribed from
   */
  private prodSubscriptions: Subscription[] = [];
  /**
   * Holds to timers that are used to space out calls
   */
  private timers = [];
  constructor(private _productService: ProductService,
    private _toastr: ToastrService) { }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    if (this.prodSubscriptions) {
      this.prodSubscriptions.forEach(sub => sub.unsubscribe());
    }
    this._clearTimers();
  }

  /**
   * Searches for products based on user input
   * @param {string} term
   */
  public search(term: string): void {
    if (isNullOrUndefined(term) || term === '') {
      return;
    }
    this.products = [];
    this.statusMessage = 'Searching...';
    const sub = this._productService.searchProducts(term).subscribe(result => {
      if (sub) {
        sub.unsubscribe();
      }
      let products = result.items;

      if (products.length >= 10) {
        products = products.slice(0, 10);
      }
      if (products.length === 0) {
        this.statusMessage = 'No results found';
      } else {
        this.statusMessage = '';
      }
      this._clearTimers();
      products.forEach((rec, index) => {
        // only using the set-timeout since the service is throttling the calls
        const timer = setTimeout(() => {
          const serviceCall$ = this._productService.getProductById(rec.itemId)
            .subscribe(prod => {
              this.products.push(prod);
              this.searchResults.ngOnChanges(null);
            });
          this.prodSubscriptions.push(serviceCall$);
        }, 1000 * index);
        this.timers.push(timer);
      });
    }, (error) => {
      this._toastr.error(error);
      this.statusMessage = '';
    });
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
