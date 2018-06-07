import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../../interfaces/iProduct';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  /**
   * Used to determine how to display a product
   */
  @Input() listMode: boolean = false;
  /**
   * Product to display
   */
  @Input() product: IProduct = <IProduct>{};
  constructor(private _router: Router) { }

  ngOnInit() {
  }

  /**
   * Navigates to the product detail page
   */
  public loadDetails(): void {
    if (this.listMode && !isNullOrUndefined(this.product)) {
      this._router.navigateByUrl(`/search/${this.product.itemId}`);
    }
  }

}
